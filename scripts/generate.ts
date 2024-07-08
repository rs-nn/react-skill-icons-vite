import * as fs from "fs";
import * as path from "path";
const { transform } = require("@svgr/core");

const svgDir = path.join(__dirname, "../node_modules", "skill-icons", "icons");
const componentsDir = path.join(__dirname, "../src", "components");

console.log("SVG Directory:", svgDir);
console.log("Components Directory:", componentsDir);

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
  // console.log(`Created components directory: ${componentsDir}`);
}

const generateComponent = async (icon: string) => {
  try {
    const componentName = path
      .basename(icon, path.extname(icon))
      .replace(/-./g, (match) => match[1].toUpperCase());

    const svgPath = path.join(svgDir, icon);
    const svgCode = fs.readFileSync(svgPath, "utf-8");

    const jsxCode = await transform(
      svgCode,
      {
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
        icon: true,
        typescript: true,
        exportType: "named",
        namedExport: componentName,
      },
      { componentName }
    );

    fs.writeFileSync(path.join(componentsDir, `${componentName}.tsx`), jsxCode);
    console.log(`Component ${componentName} generated successfully.`);
  } catch (error) {
    console.error(`Error generating component for ${icon}:`, error);
  }
};

const generateIndex = () => {
  try {
    const indexContent = fs
      .readdirSync(componentsDir)
      .map((file) => {
        const functionName = path.basename(file, path.extname(file));
        return `export { ${functionName} } from './components/${functionName}';`;
      })
      .join("\n");
    fs.writeFileSync(path.join(__dirname, "../src", "index.ts"), indexContent);
    console.log("index.ts generated successfully.");
  } catch (error) {
    console.error("Error generating index.ts:", error);
  }
};

(async () => {
  try {
    const svgFiles = fs
      .readdirSync(svgDir)
      .filter((file) => path.extname(file) === ".svg");

    console.log(`Found ${svgFiles.length} SVG files.`);

    if (svgFiles.length === 0) {
      console.error("No SVG files found in directory:", svgDir);
      return;
    }

    for (const icon of svgFiles) {
      await generateComponent(icon);
    }
    generateIndex();
  } catch (error) {
    console.error("Error reading SVG directory:", error);
  }
})();
