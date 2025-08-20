<p align="center">
<img width="280" src="https://raw.githubusercontent.com/fdorantesm/react-skill-icons/main/.github/skill-icons.svg">
</p>
<h1 align="center">React Skill Icons for Vite & Modern React</h1>

<div align="center">
<br>

<p><i>React components for skillicons.dev</i></p>

<p>This is just a modified version of <a href="https://github.com/tandpfun/skill-icons">https://github.com/tandpfun/skill-icons</a>, so it works better with Laravel React and Vite.</p>

---

<a href="https://github.com/fdorantesm/react-skill-icons/stargazers"><img src="https://img.shields.io/github/stars/fdorantesm/react-skill-icons" alt="Stars Badge"/></a>
<a href="https://github.com/fdorantesm/react-skill-icons/network/members"><img src="https://img.shields.io/github/forks/fdorantesm/react-skill-icons" alt="Forks Badge"/></a>
<a href="https://github.com/fdorantesm/react-skill-icons/pulls"><img src="https://img.shields.io/github/issues-pr/fdorantesm/react-skill-icons?color=cyan" alt="Pull Requests Badge"/></a>
<a href="https://github.com/fdorantesm/react-skill-icons/issues"><img src="https://img.shields.io/github/issues/fdorantesm/react-skill-icons?color=red" alt="Issues Badge"/></a>
<a href="https://github.com/fdorantesm/react-skill-icons/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/fdorantesm/react-skill-icons"></a>
<a href="https://github.com/fdorantesm/react-skill-icons/blob/master/LICENSE"><img src="https://img.shields.io/github/license/fdorantesm/react-skill-icons?color=2b9348" alt="License Badge"/></a>
</div>

## Installation


Install with npm
```bash
npm install @nimr0d/react-skill-icons
```

Install with yarn
```bash
yarn add @nimr0d/react-skill-icons
```

Install with pnpm
```bash
pnpm install @nimr0d/react-skill-icons
```

Install with bun
```bash
bun add @nimr0d/react-skill-icons
```

## Usage

```tsx
import { HTML, JavaScript } from '@nimr0d/react-skill-icons-vite';
import { FC } from 'react';

const SkillsList: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <JavaScript className="h-12 w-12" />
      <HTML className="h-12 w-12" />
    </div>
  );
};

export default SkillsList;
```

## Available Icons

To see all icons and their names, visit [skillicons.dev](https://skillicons.dev/).

## Credits

- Original SVG icons by [tandpfun/skill-icons](https://github.com/tandpfun/skill-icons)
- React conversion and packaging by [nimr0d](https://github.com/rs-nn/react-skill-icons-vite)


# Icons List

Here's a list of all the icons currently supported. Feel free to open an issue to suggest icons to add!

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
|     `ableton`      |    <img src="./dist/icons/Ableton-Dark.svg" width="48">    |
|   `activitypub`    |  <img src="./dist/icons/ActivityPub-Dark.svg" width="48">  |
|      `actix`       |     <img src="./dist/icons/Actix-Dark.svg" width="48">     |
|      `adonis`      |       <img src="./dist/icons/Adonis.svg" width="48">       |
|        `ae`        |    <img src="./dist/icons/AfterEffects.svg" width="48">    |
|     `aiscript`     |   <img src="./dist/icons/AiScript-Dark.svg" width="48">    |
|     `alpinejs`     |   <img src="./dist/icons/AlpineJS-Dark.svg" width="48">    |
|     `anaconda`     |   <img src="./dist/icons/Anaconda-Dark.svg" width="48">    |
|  `androidstudio`   | <img src="./dist/icons/AndroidStudio-Dark.svg" width="48"> |
|     `angular`      |    <img src="./dist/icons/Angular-Dark.svg" width="48">    |
|     `ansible`      |      <img src="./dist/icons/Ansible.svg" width="48">       |
|      `apollo`      |       <img src="./dist/icons/Apollo.svg" width="48">       |
|      `apple`       |     <img src="./dist/icons/Apple-Dark.svg" width="48">     |
|     `appwrite`     |      <img src="./dist/icons/Appwrite.svg" width="48">      |
|       `arch`       |     <img src="./dist/icons/Arch-Dark.svg" width="48">      |
|     `arduino`      |      <img src="./dist/icons/Arduino.svg" width="48">       |
|      `astro`       |       <img src="./dist/icons/Astro.svg" width="48">        |
|       `atom`       |        <img src="./dist/icons/Atom.svg" width="48">        |
|        `au`        |      <img src="./dist/icons/Audition.svg" width="48">      |
|     `autocad`      |    <img src="./dist/icons/AutoCAD-Dark.svg" width="48">    |
|       `aws`        |      <img src="./dist/icons/AWS-Dark.svg" width="48">      |
|       `azul`       |        <img src="./dist/icons/Azul.svg" width="48">        |
|      `azure`       |     <img src="./dist/icons/Azure-Dark.svg" width="48">     |
|      `babel`       |       <img src="./dist/icons/Babel.svg" width="48">        |
|       `bash`       |     <img src="./dist/icons/Bash-Dark.svg" width="48">      |
|       `bevy`       |     <img src="./dist/icons/Bevy-Dark.svg" width="48">      |
|    `bitbucket`     |   <img src="./dist/icons/BitBucket-Dark.svg" width="48">   |
|     `blender`      |    <img src="./dist/icons/Blender-Dark.svg" width="48">    |
|    `bootstrap`     |     <img src="./dist/icons/Bootstrap.svg" width="48">      |
|       `bsd`        |      <img src="./dist/icons/BSD-Dark.svg" width="48">      |
|       `bun`        |      <img src="./dist/icons/Bun-Dark.svg" width="48">      |
|        `c`         |         <img src="./dist/icons/C.svg" width="48">          |
|        `cs`        |         <img src="./dist/icons/CS.svg" width="48">         |
|       `cpp`        |        <img src="./dist/icons/CPP.svg" width="48">         |
|     `crystal`      |    <img src="./dist/icons/Crystal-Dark.svg" width="48">    |
|    `cassandra`     |   <img src="./dist/icons/Cassandra-Dark.svg" width="48">   |
|      `clion`       |     <img src="./dist/icons/CLion-Dark.svg" width="48">     |
|     `clojure`      |    <img src="./dist/icons/Clojure-Dark.svg" width="48">    |
|    `cloudflare`    |  <img src="./dist/icons/Cloudflare-Dark.svg" width="48">   |
|      `cmake`       |     <img src="./dist/icons/CMake-Dark.svg" width="48">     |
|     `codepen`      |    <img src="./dist/icons/CodePen-Dark.svg" width="48">    |
|   `coffeescript`   | <img src="./dist/icons/CoffeeScript-Dark.svg" width="48">  |
|       `css`        |        <img src="./dist/icons/CSS.svg" width="48">         |
|     `cypress`      |    <img src="./dist/icons/Cypress-Dark.svg" width="48">    |
|        `d3`        |      <img src="./dist/icons/D3-Dark.svg" width="48">       |
|       `dart`       |     <img src="./dist/icons/Dart-Dark.svg" width="48">      |
|      `debian`      |    <img src="./dist/icons/Debian-Dark.svg" width="48">     |
|       `deno`       |     <img src="./dist/icons/DENO-Dark.svg" width="48">      |
|      `devto`       |     <img src="./dist/icons/DevTo-Dark.svg" width="48">     |
|     `discord`      |      <img src="./dist/icons/Discord.svg" width="48">       |
|       `bots`       |    <img src="./dist/icons/DiscordBots.svg" width="48">     |
|    `discordjs`     |   <img src="./dist/icons/DiscordJS-Dark.svg" width="48">   |
|      `django`      |       <img src="./dist/icons/Django.svg" width="48">       |
|      `docker`      |       <img src="./dist/icons/Docker.svg" width="48">       |
|      `dotnet`      |       <img src="./dist/icons/DotNet.svg" width="48">       |
|     `dynamodb`     |   <img src="./dist/icons/DynamoDB-Dark.svg" width="48">    |
|     `eclipse`      |    <img src="./dist/icons/Eclipse-Dark.svg" width="48">    |
|  `elasticsearch`   | <img src="./dist/icons/Elasticsearch-Dark.svg" width="48"> |
|     `electron`     |      <img src="./dist/icons/Electron.svg" width="48">      |
|      `elixir`      |    <img src="./dist/icons/Elixir-Dark.svg" width="48">     |
|      `elysia`      |    <img src="./dist/icons/Elysia-Dark.svg" width="48">     |
|      `emacs`       |       <img src="./dist/icons/Emacs.svg" width="48">        |
|      `ember`       |       <img src="./dist/icons/Ember.svg" width="48">        |
|     `emotion`      |    <img src="./dist/icons/Emotion-Dark.svg" width="48">    |
|     `express`      |   <img src="./dist/icons/ExpressJS-Dark.svg" width="48">   |
|     `fastapi`      |      <img src="./dist/icons/FastAPI.svg" width="48">       |
|    `fediverse`     |   <img src="./dist/icons/Fediverse-Dark.svg" width="48">   |
|      `figma`       |     <img src="./dist/icons/Figma-Dark.svg" width="48">     |
|     `firebase`     |   <img src="./dist/icons/Firebase-Dark.svg" width="48">    |
|      `flask`       |     <img src="./dist/icons/Flask-Dark.svg" width="48">     |
|     `flutter`      |    <img src="./dist/icons/Flutter-Dark.svg" width="48">    |
|      `forth`       |       <img src="./dist/icons/Forth.svg" width="48">        |
|     `fortran`      |      <img src="./dist/icons/Fortran.svg" width="48">       |
| `gamemakerstudio`  |  <img src="./dist/icons/GameMakerStudio.svg" width="48">   |
|      `gatsby`      |       <img src="./dist/icons/Gatsby.svg" width="48">       |
|       `gcp`        |      <img src="./dist/icons/GCP-Dark.svg" width="48">      |
|       `git`        |        <img src="./dist/icons/Git.svg" width="48">         |
|      `github`      |    <img src="./dist/icons/Github-Dark.svg" width="48">     |
|  `githubactions`   | <img src="./dist/icons/GithubActions-Dark.svg" width="48"> |
|      `gitlab`      |    <img src="./dist/icons/GitLab-Dark.svg" width="48">     |
|      `gmail`       |     <img src="./dist/icons/Gmail-Dark.svg" width="48">     |
|     `gherkin`      |    <img src="./dist/icons/Gherkin-Dark.svg" width="48">    |
|        `go`        |       <img src="./dist/icons/GoLang.svg" width="48">       |
|      `gradle`      |    <img src="./dist/icons/Gradle-Dark.svg" width="48">     |
|      `godot`       |     <img src="./dist/icons/Godot-Dark.svg" width="48">     |
|     `grafana`      |    <img src="./dist/icons/Grafana-Dark.svg" width="48">    |
|     `graphql`      |    <img src="./dist/icons/GraphQL-Dark.svg" width="48">    |
|       `gtk`        |      <img src="./dist/icons/GTK-Dark.svg" width="48">      |
|       `gulp`       |        <img src="./dist/icons/Gulp.svg" width="48">        |
|     `haskell`      |    <img src="./dist/icons/Haskell-Dark.svg" width="48">    |
|       `haxe`       |     <img src="./dist/icons/Haxe-Dark.svg" width="48">      |
|    `haxeflixel`    |  <img src="./dist/icons/HaxeFlixel-Dark.svg" width="48">   |
|      `heroku`      |       <img src="./dist/icons/Heroku.svg" width="48">       |
|    `hibernate`     |   <img src="./dist/icons/Hibernate-Dark.svg" width="48">   |
|       `html`       |        <img src="./dist/icons/HTML.svg" width="48">        |
|       `htmx`       |     <img src="./dist/icons/Htmx-Dark.svg" width="48">      |
|       `idea`       |     <img src="./dist/icons/Idea-Dark.svg" width="48">      |
|        `ai`        |    <img src="./dist/icons/Illustrator.svg" width="48">     |
|    `instagram`     |     <img src="./dist/icons/Instagram.svg" width="48">      |
|       `ipfs`       |     <img src="./dist/icons/IPFS-Dark.svg" width="48">      |
|       `java`       |     <img src="./dist/icons/Java-Dark.svg" width="48">      |
|        `js`        |     <img src="./dist/icons/JavaScript.svg" width="48">     |
|     `jenkins`      |    <img src="./dist/icons/Jenkins-Dark.svg" width="48">    |
|       `jest`       |        <img src="./dist/icons/Jest.svg" width="48">        |
|      `jquery`      |       <img src="./dist/icons/JQuery.svg" width="48">       |
|      `kafka`       |       <img src="./dist/icons/Kafka.svg" width="48">        |
|       `kali`       |     <img src="./dist/icons/Kali-Dark.svg" width="48">      |
|      `kotlin`      |    <img src="./dist/icons/Kotlin-Dark.svg" width="48">     |
|       `ktor`       |     <img src="./dist/icons/Ktor-Dark.svg" width="48">      |
|    `kubernetes`    |     <img src="./dist/icons/Kubernetes.svg" width="48">     |
|     `laravel`      |    <img src="./dist/icons/Laravel-Dark.svg" width="48">    |
|      `latex`       |     <img src="./dist/icons/LaTeX-Dark.svg" width="48">     |
|       `less`       |     <img src="./dist/icons/Less-Dark.svg" width="48">      |
|     `linkedin`     |      <img src="./dist/icons/LinkedIn.svg" width="48">      |
|      `linux`       |     <img src="./dist/icons/Linux-Dark.svg" width="48">     |
|       `lit`        |      <img src="./dist/icons/Lit-Dark.svg" width="48">      |
|       `lua`        |      <img src="./dist/icons/Lua-Dark.svg" width="48">      |
|        `md`        |   <img src="./dist/icons/Markdown-Dark.svg" width="48">    |
|     `mastodon`     |   <img src="./dist/icons/Mastodon-Dark.svg" width="48">    |
|    `materialui`    |  <img src="./dist/icons/MaterialUI-Dark.svg" width="48">   |
|      `matlab`      |    <img src="./dist/icons/Matlab-Dark.svg" width="48">     |
|      `maven`       |     <img src="./dist/icons/Maven-Dark.svg" width="48">     |
|       `mint`       |     <img src="./dist/icons/Mint-Dark.svg" width="48">      |
|     `misskey`      |    <img src="./dist/icons/Misskey-Dark.svg" width="48">    |
|     `mongodb`      |      <img src="./dist/icons/MongoDB.svg" width="48">       |
|      `mysql`       |     <img src="./dist/icons/MySQL-Dark.svg" width="48">     |
|      `neovim`      |    <img src="./dist/icons/NeoVim-Dark.svg" width="48">     |
|      `nestjs`      |    <img src="./dist/icons/NestJS-Dark.svg" width="48">     |
|     `netlify`      |    <img src="./dist/icons/Netlify-Dark.svg" width="48">    |
|      `nextjs`      |    <img src="./dist/icons/NextJS-Dark.svg" width="48">     |
|      `nginx`       |       <img src="./dist/icons/Nginx.svg" width="48">        |
|       `nim`        |      <img src="./dist/icons/Nim-Dark.svg" width="48">      |
|       `nix`        |      <img src="./dist/icons/Nix-Dark.svg" width="48">      |
|      `nodejs`      |    <img src="./dist/icons/NodeJS-Dark.svg" width="48">     |
|      `notion`      |    <img src="./dist/icons/Notion-Dark.svg" width="48">     |
|       `npm`        |      <img src="./dist/icons/Npm-Dark.svg" width="48">      |
|      `nuxtjs`      |    <img src="./dist/icons/NuxtJS-Dark.svg" width="48">     |
|     `obsidian`     |   <img src="./dist/icons/Obsidian-Dark.svg" width="48">    |
|      `ocaml`       |       <img src="./dist/icons/OCaml.svg" width="48">        |
|      `octave`      |    <img src="./dist/icons/Octave-Dark.svg" width="48">     |
|      `opencv`      |    <img src="./dist/icons/OpenCV-Dark.svg" width="48">     |
|    `openshift`     |     <img src="./dist/icons/OpenShift.svg" width="48">      |
|    `openstack`     |   <img src="./dist/icons/OpenStack-Dark.svg" width="48">   |
|       `p5js`       |        <img src="./dist/icons/p5js.svg" width="48">        |
|       `perl`       |        <img src="./dist/icons/Perl.svg" width="48">        |
|        `ps`        |     <img src="./dist/icons/Photoshop.svg" width="48">      |
|       `php`        |      <img src="./dist/icons/PHP-Dark.svg" width="48">      |
|     `phpstorm`     |   <img src="./dist/icons/PhpStorm-Dark.svg" width="48">    |
|      `pinia`       |     <img src="./dist/icons/Pinia-Dark.svg" width="48">     |
|       `pkl`        |      <img src="./dist/icons/Pkl-Dark.svg" width="48">      |
|      `plan9`       |     <img src="./dist/icons/Plan9-Dark.svg" width="48">     |
|   `planetscale`    |  <img src="./dist/icons/PlanetScale-Dark.svg" width="48">  |
|       `pnpm`       |     <img src="./dist/icons/Pnpm-Dark.svg" width="48">      |
|     `postgres`     |  <img src="./dist/icons/PostgreSQL-Dark.svg" width="48">   |
|     `postman`      |      <img src="./dist/icons/Postman.svg" width="48">       |
|    `powershell`    |  <img src="./dist/icons/Powershell-Dark.svg" width="48">   |
|        `pr`        |      <img src="./dist/icons/Premiere.svg" width="48">      |
|      `prisma`      |       <img src="./dist/icons/Prisma.svg" width="48">       |
|    `processing`    |  <img src="./dist/icons/Processing-Dark.svg" width="48">   |
|    `prometheus`    |     <img src="./dist/icons/Prometheus.svg" width="48">     |
|       `pug`        |      <img src="./dist/icons/Pug-Dark.svg" width="48">      |
|     `pycharm`      |    <img src="./dist/icons/PyCharm-Dark.svg" width="48">    |
|        `py`        |    <img src="./dist/icons/Python-Dark.svg" width="48">     |
|     `pytorch`      |    <img src="./dist/icons/PyTorch-Dark.svg" width="48">    |
|        `qt`        |      <img src="./dist/icons/QT-Dark.svg" width="48">       |
|        `r`         |       <img src="./dist/icons/R-Dark.svg" width="48">       |
|     `rabbitmq`     |   <img src="./dist/icons/RabbitMQ-Dark.svg" width="48">    |
|      `rails`       |       <img src="./dist/icons/Rails.svg" width="48">        |
|   `raspberrypi`    |  <img src="./dist/icons/RaspberryPi-Dark.svg" width="48">  |
|      `react`       |     <img src="./dist/icons/React-Dark.svg" width="48">     |
|    `reactivex`     |   <img src="./dist/icons/ReactiveX-Dark.svg" width="48">   |
|      `redhat`      |    <img src="./dist/icons/RedHat-Dark.svg" width="48">     |
|      `redis`       |     <img src="./dist/icons/Redis-Dark.svg" width="48">     |
|      `redux`       |       <img src="./dist/icons/Redux.svg" width="48">        |
|      `regex`       |     <img src="./dist/icons/Regex-Dark.svg" width="48">     |
|      `remix`       |     <img src="./dist/icons/Remix-Dark.svg" width="48">     |
|      `replit`      |    <img src="./dist/icons/Replit-Dark.svg" width="48">     |
|      `rider`       |     <img src="./dist/icons/Rider-Dark.svg" width="48">     |
|   `robloxstudio`   |    <img src="./dist/icons/RobloxStudio.svg" width="48">    |
|      `rocket`      |       <img src="./dist/icons/Rocket.svg" width="48">       |
|     `rollupjs`     |   <img src="./dist/icons/RollupJS-Dark.svg" width="48">    |
|       `ros`        |      <img src="./dist/icons/ROS-Dark.svg" width="48">      |
|       `ruby`       |        <img src="./dist/icons/Ruby.svg" width="48">        |
|       `rust`       |        <img src="./dist/icons/Rust.svg" width="48">        |
|       `sass`       |        <img src="./dist/icons/Sass.svg" width="48">        |
|      `spring`      |    <img src="./dist/icons/Spring-Dark.svg" width="48">     |
|      `sqlite`      |       <img src="./dist/icons/SQLite.svg" width="48">       |
|  `stackoverflow`   | <img src="./dist/icons/StackOverflow-Dark.svg" width="48"> |
| `styledcomponents` |  <img src="./dist/icons/StyledComponents.svg" width="48">  |
|     `sublime`      |    <img src="./dist/icons/Sublime-Dark.svg" width="48">    |
|     `supabase`     |   <img src="./dist/icons/Supabase-Dark.svg" width="48">    |
|      `scala`       |     <img src="./dist/icons/Scala-Dark.svg" width="48">     |
|     `sklearn`      |  <img src="./dist/icons/ScikitLearn-Dark.svg" width="48">  |
|     `selenium`     |      <img src="./dist/icons/Selenium.svg" width="48">      |
|      `sentry`      |       <img src="./dist/icons/Sentry.svg" width="48">       |
|    `sequelize`     |   <img src="./dist/icons/Sequelize-Dark.svg" width="48">   |
|     `sketchup`     |   <img src="./dist/icons/Sketchup-Dark.svg" width="48">    |
|     `solidity`     |      <img src="./dist/icons/Solidity.svg" width="48">      |
|     `solidjs`      |    <img src="./dist/icons/SolidJS-Dark.svg" width="48">    |
|      `svelte`      |       <img src="./dist/icons/Svelte.svg" width="48">       |
|       `svg`        |      <img src="./dist/icons/SVG-Dark.svg" width="48">      |
|      `swift`       |       <img src="./dist/icons/Swift.svg" width="48">        |
|     `symfony`      |    <img src="./dist/icons/Symfony-Dark.svg" width="48">    |
|     `tailwind`     |  <img src="./dist/icons/TailwindCSS-Dark.svg" width="48">  |
|      `tauri`       |     <img src="./dist/icons/Tauri-Dark.svg" width="48">     |
|    `tensorflow`    |  <img src="./dist/icons/TensorFlow-Dark.svg" width="48">   |
|    `terraform`     |   <img src="./dist/icons/Terraform-Dark.svg" width="48">   |
|     `threejs`      |    <img src="./dist/icons/ThreeJS-Dark.svg" width="48">    |
|     `twitter`      |      <img src="./dist/icons/Twitter.svg" width="48">       |
|        `ts`        |     <img src="./dist/icons/TypeScript.svg" width="48">     |
|      `ubuntu`      |    <img src="./dist/icons/Ubuntu-Dark.svg" width="48">     |
|      `unity`       |     <img src="./dist/icons/Unity-Dark.svg" width="48">     |
|      `unreal`      |    <img src="./dist/icons/UnrealEngine.svg" width="48">    |
|        `v`         |       <img src="./dist/icons/V-Dark.svg" width="48">       |
|       `vala`       |        <img src="./dist/icons/Vala.svg" width="48">        |
|      `vercel`      |    <img src="./dist/icons/Vercel-Dark.svg" width="48">     |
|       `vim`        |      <img src="./dist/icons/VIM-Dark.svg" width="48">      |
|   `visualstudio`   | <img src="./dist/icons/VisualStudio-Dark.svg" width="48">  |
|       `vite`       |     <img src="./dist/icons/Vite-Dark.svg" width="48">      |
|      `vitest`      |    <img src="./dist/icons/Vitest-Dark.svg" width="48">     |
|      `vscode`      |    <img src="./dist/icons/VSCode-Dark.svg" width="48">     |
|     `vscodium`     |   <img src="./dist/icons/VSCodium-Dark.svg" width="48">    |
|       `vue`        |     <img src="./dist/icons/VueJS-Dark.svg" width="48">     |
|     `vuetify`      |    <img src="./dist/icons/Vuetify-Dark.svg" width="48">    |
|       `wasm`       |    <img src="./dist/icons/WebAssembly.svg" width="48">     |
|     `webflow`      |      <img src="./dist/icons/Webflow.svg" width="48">       |
|     `webpack`      |    <img src="./dist/icons/Webpack-Dark.svg" width="48">    |
|     `webstorm`     |   <img src="./dist/icons/WebStorm-Dark.svg" width="48">    |
|     `windicss`     |   <img src="./dist/icons/WindiCSS-Dark.svg" width="48">    |
|     `windows`      |    <img src="./dist/icons/Windows-Dark.svg" width="48">    |
|    `wordpress`     |     <img src="./dist/icons/Wordpress.svg" width="48">      |
|     `workers`      |    <img src="./dist/icons/Workers-Dark.svg" width="48">    |
|        `xd`        |         <img src="./dist/icons/XD.svg" width="48">         |
|       `yarn`       |     <img src="./dist/icons/Yarn-Dark.svg" width="48">      |
|       `yew`        |      <img src="./dist/icons/Yew-Dark.svg" width="48">      |
|       `zig`        |      <img src="./dist/icons/Zig-Dark.svg" width="48">      |
## Props

`className`: Apply custom properties supported by SVGSVGElement type.

```jsx
<GithubDark className="icon" />
```

## Credits

Authors of skillicons.dev and react-skillicons
<br>
All credits go to them

- [Tandpfun](https://github.com/tandpfun) tandpfun/skill-icons
- [willywdev](https://github.com/willywdev) willywdev/react-skillicons

## Changes

I make some improvements like pull the icons from the original source `github:tandpfun/skill-icons` and then generate automatically all the components to avoid import svg files.

Feel free to fork this repo to generate more svg packages.

---
<br>
<br>

<div align="center">
    <a href="https://github.com/fdorantesm" target="_blank">
        <img src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white" alt="github" style="margin-bottom: 5px;" />
    </a>
    <a href="https://twitter.com/fdorantesm" target="_blank">
        <img src="https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt="twitter" style="margin-bottom: 5px;" />
    </a>
    <a href="https://linkedin.com/in/fdorantesm" target="_blank">
        <img src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" style="margin-bottom: 5px;" />
    </a>
    <a href="https://www.youtube.com/user/FernandoDorantes" target="_blank">
        <img src="https://img.shields.io/badge/youtube-%23EE4831.svg?&style=for-the-badge&logo=youtube&logoColor=white" alt="youtube" style="margin-bottom: 5px;" />
    </a>
</div>
