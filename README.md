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
- React conversion and packaging by [nimr0d](https://github.com/nimr0d)


# Icons List

Here's a list of all the icons currently supported. Feel free to open an issue to suggest icons to add!

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
|     `ableton`      |    <img src="./icons/Ableton-Dark.svg" width="48">    |
|   `activitypub`    |  <img src="./icons/ActivityPub-Dark.svg" width="48">  |
|      `actix`       |     <img src="./icons/Actix-Dark.svg" width="48">     |
|      `adonis`      |       <img src="./icons/Adonis.svg" width="48">       |
|        `ae`        |    <img src="./icons/AfterEffects.svg" width="48">    |
|     `aiscript`     |   <img src="./icons/AiScript-Dark.svg" width="48">    |
|     `alpinejs`     |   <img src="./icons/AlpineJS-Dark.svg" width="48">    |
|     `anaconda`     |   <img src="./icons/Anaconda-Dark.svg" width="48">    |
|  `androidstudio`   | <img src="./icons/AndroidStudio-Dark.svg" width="48"> |
|     `angular`      |    <img src="./icons/Angular-Dark.svg" width="48">    |
|     `ansible`      |      <img src="./icons/Ansible.svg" width="48">       |
|      `apollo`      |       <img src="./icons/Apollo.svg" width="48">       |
|      `apple`       |     <img src="./icons/Apple-Dark.svg" width="48">     |
|     `appwrite`     |      <img src="./icons/Appwrite.svg" width="48">      |
|       `arch`       |     <img src="./icons/Arch-Dark.svg" width="48">      |
|     `arduino`      |      <img src="./icons/Arduino.svg" width="48">       |
|      `astro`       |       <img src="./icons/Astro.svg" width="48">        |
|       `atom`       |        <img src="./icons/Atom.svg" width="48">        |
|        `au`        |      <img src="./icons/Audition.svg" width="48">      |
|     `autocad`      |    <img src="./icons/AutoCAD-Dark.svg" width="48">    |
|       `aws`        |      <img src="./icons/AWS-Dark.svg" width="48">      |
|       `azul`       |        <img src="./icons/Azul.svg" width="48">        |
|      `azure`       |     <img src="./icons/Azure-Dark.svg" width="48">     |
|      `babel`       |       <img src="./icons/Babel.svg" width="48">        |
|       `bash`       |     <img src="./icons/Bash-Dark.svg" width="48">      |
|       `bevy`       |     <img src="./icons/Bevy-Dark.svg" width="48">      |
|    `bitbucket`     |   <img src="./icons/BitBucket-Dark.svg" width="48">   |
|     `blender`      |    <img src="./icons/Blender-Dark.svg" width="48">    |
|    `bootstrap`     |     <img src="./icons/Bootstrap.svg" width="48">      |
|       `bsd`        |      <img src="./icons/BSD-Dark.svg" width="48">      |
|       `bun`        |      <img src="./icons/Bun-Dark.svg" width="48">      |
|        `c`         |         <img src="./icons/C.svg" width="48">          |
|        `cs`        |         <img src="./icons/CS.svg" width="48">         |
|       `cpp`        |        <img src="./icons/CPP.svg" width="48">         |
|     `crystal`      |    <img src="./icons/Crystal-Dark.svg" width="48">    |
|    `cassandra`     |   <img src="./icons/Cassandra-Dark.svg" width="48">   |
|      `clion`       |     <img src="./icons/CLion-Dark.svg" width="48">     |
|     `clojure`      |    <img src="./icons/Clojure-Dark.svg" width="48">    |
|    `cloudflare`    |  <img src="./icons/Cloudflare-Dark.svg" width="48">   |
|      `cmake`       |     <img src="./icons/CMake-Dark.svg" width="48">     |
|     `codepen`      |    <img src="./icons/CodePen-Dark.svg" width="48">    |
|   `coffeescript`   | <img src="./icons/CoffeeScript-Dark.svg" width="48">  |
|       `css`        |        <img src="./icons/CSS.svg" width="48">         |
|     `cypress`      |    <img src="./icons/Cypress-Dark.svg" width="48">    |
|        `d3`        |      <img src="./icons/D3-Dark.svg" width="48">       |
|       `dart`       |     <img src="./icons/Dart-Dark.svg" width="48">      |
|      `debian`      |    <img src="./icons/Debian-Dark.svg" width="48">     |
|       `deno`       |     <img src="./icons/DENO-Dark.svg" width="48">      |
|      `devto`       |     <img src="./icons/DevTo-Dark.svg" width="48">     |
|     `discord`      |      <img src="./icons/Discord.svg" width="48">       |
|       `bots`       |    <img src="./icons/DiscordBots.svg" width="48">     |
|    `discordjs`     |   <img src="./icons/DiscordJS-Dark.svg" width="48">   |
|      `django`      |       <img src="./icons/Django.svg" width="48">       |
|      `docker`      |       <img src="./icons/Docker.svg" width="48">       |
|      `dotnet`      |       <img src="./icons/DotNet.svg" width="48">       |
|     `dynamodb`     |   <img src="./icons/DynamoDB-Dark.svg" width="48">    |
|     `eclipse`      |    <img src="./icons/Eclipse-Dark.svg" width="48">    |
|  `elasticsearch`   | <img src="./icons/Elasticsearch-Dark.svg" width="48"> |
|     `electron`     |      <img src="./icons/Electron.svg" width="48">      |
|      `elixir`      |    <img src="./icons/Elixir-Dark.svg" width="48">     |
|      `elysia`      |    <img src="./icons/Elysia-Dark.svg" width="48">     |
|      `emacs`       |       <img src="./icons/Emacs.svg" width="48">        |
|      `ember`       |       <img src="./icons/Ember.svg" width="48">        |
|     `emotion`      |    <img src="./icons/Emotion-Dark.svg" width="48">    |
|     `express`      |   <img src="./icons/ExpressJS-Dark.svg" width="48">   |
|     `fastapi`      |      <img src="./icons/FastAPI.svg" width="48">       |
|    `fediverse`     |   <img src="./icons/Fediverse-Dark.svg" width="48">   |
|      `figma`       |     <img src="./icons/Figma-Dark.svg" width="48">     |
|     `firebase`     |   <img src="./icons/Firebase-Dark.svg" width="48">    |
|      `flask`       |     <img src="./icons/Flask-Dark.svg" width="48">     |
|     `flutter`      |    <img src="./icons/Flutter-Dark.svg" width="48">    |
|      `forth`       |       <img src="./icons/Forth.svg" width="48">        |
|     `fortran`      |      <img src="./icons/Fortran.svg" width="48">       |
| `gamemakerstudio`  |  <img src="./icons/GameMakerStudio.svg" width="48">   |
|      `gatsby`      |       <img src="./icons/Gatsby.svg" width="48">       |
|       `gcp`        |      <img src="./icons/GCP-Dark.svg" width="48">      |
|       `git`        |        <img src="./icons/Git.svg" width="48">         |
|      `github`      |    <img src="./icons/Github-Dark.svg" width="48">     |
|  `githubactions`   | <img src="./icons/GithubActions-Dark.svg" width="48"> |
|      `gitlab`      |    <img src="./icons/GitLab-Dark.svg" width="48">     |
|      `gmail`       |     <img src="./icons/Gmail-Dark.svg" width="48">     |
|     `gherkin`      |    <img src="./icons/Gherkin-Dark.svg" width="48">    |
|        `go`        |       <img src="./icons/GoLang.svg" width="48">       |
|      `gradle`      |    <img src="./icons/Gradle-Dark.svg" width="48">     |
|      `godot`       |     <img src="./icons/Godot-Dark.svg" width="48">     |
|     `grafana`      |    <img src="./icons/Grafana-Dark.svg" width="48">    |
|     `graphql`      |    <img src="./icons/GraphQL-Dark.svg" width="48">    |
|       `gtk`        |      <img src="./icons/GTK-Dark.svg" width="48">      |
|       `gulp`       |        <img src="./icons/Gulp.svg" width="48">        |
|     `haskell`      |    <img src="./icons/Haskell-Dark.svg" width="48">    |
|       `haxe`       |     <img src="./icons/Haxe-Dark.svg" width="48">      |
|    `haxeflixel`    |  <img src="./icons/HaxeFlixel-Dark.svg" width="48">   |
|      `heroku`      |       <img src="./icons/Heroku.svg" width="48">       |
|    `hibernate`     |   <img src="./icons/Hibernate-Dark.svg" width="48">   |
|       `html`       |        <img src="./icons/HTML.svg" width="48">        |
|       `htmx`       |     <img src="./icons/Htmx-Dark.svg" width="48">      |
|       `idea`       |     <img src="./icons/Idea-Dark.svg" width="48">      |
|        `ai`        |    <img src="./icons/Illustrator.svg" width="48">     |
|    `instagram`     |     <img src="./icons/Instagram.svg" width="48">      |
|       `ipfs`       |     <img src="./icons/IPFS-Dark.svg" width="48">      |
|       `java`       |     <img src="./icons/Java-Dark.svg" width="48">      |
|        `js`        |     <img src="./icons/JavaScript.svg" width="48">     |
|     `jenkins`      |    <img src="./icons/Jenkins-Dark.svg" width="48">    |
|       `jest`       |        <img src="./icons/Jest.svg" width="48">        |
|      `jquery`      |       <img src="./icons/JQuery.svg" width="48">       |
|      `kafka`       |       <img src="./icons/Kafka.svg" width="48">        |
|       `kali`       |     <img src="./icons/Kali-Dark.svg" width="48">      |
|      `kotlin`      |    <img src="./icons/Kotlin-Dark.svg" width="48">     |
|       `ktor`       |     <img src="./icons/Ktor-Dark.svg" width="48">      |
|    `kubernetes`    |     <img src="./icons/Kubernetes.svg" width="48">     |
|     `laravel`      |    <img src="./icons/Laravel-Dark.svg" width="48">    |
|      `latex`       |     <img src="./icons/LaTeX-Dark.svg" width="48">     |
|       `less`       |     <img src="./icons/Less-Dark.svg" width="48">      |
|     `linkedin`     |      <img src="./icons/LinkedIn.svg" width="48">      |
|      `linux`       |     <img src="./icons/Linux-Dark.svg" width="48">     |
|       `lit`        |      <img src="./icons/Lit-Dark.svg" width="48">      |
|       `lua`        |      <img src="./icons/Lua-Dark.svg" width="48">      |
|        `md`        |   <img src="./icons/Markdown-Dark.svg" width="48">    |
|     `mastodon`     |   <img src="./icons/Mastodon-Dark.svg" width="48">    |
|    `materialui`    |  <img src="./icons/MaterialUI-Dark.svg" width="48">   |
|      `matlab`      |    <img src="./icons/Matlab-Dark.svg" width="48">     |
|      `maven`       |     <img src="./icons/Maven-Dark.svg" width="48">     |
|       `mint`       |     <img src="./icons/Mint-Dark.svg" width="48">      |
|     `misskey`      |    <img src="./icons/Misskey-Dark.svg" width="48">    |
|     `mongodb`      |      <img src="./icons/MongoDB.svg" width="48">       |
|      `mysql`       |     <img src="./icons/MySQL-Dark.svg" width="48">     |
|      `neovim`      |    <img src="./icons/NeoVim-Dark.svg" width="48">     |
|      `nestjs`      |    <img src="./icons/NestJS-Dark.svg" width="48">     |
|     `netlify`      |    <img src="./icons/Netlify-Dark.svg" width="48">    |
|      `nextjs`      |    <img src="./icons/NextJS-Dark.svg" width="48">     |
|      `nginx`       |       <img src="./icons/Nginx.svg" width="48">        |
|       `nim`        |      <img src="./icons/Nim-Dark.svg" width="48">      |
|       `nix`        |      <img src="./icons/Nix-Dark.svg" width="48">      |
|      `nodejs`      |    <img src="./icons/NodeJS-Dark.svg" width="48">     |
|      `notion`      |    <img src="./icons/Notion-Dark.svg" width="48">     |
|       `npm`        |      <img src="./icons/Npm-Dark.svg" width="48">      |
|      `nuxtjs`      |    <img src="./icons/NuxtJS-Dark.svg" width="48">     |
|     `obsidian`     |   <img src="./icons/Obsidian-Dark.svg" width="48">    |
|      `ocaml`       |       <img src="./icons/OCaml.svg" width="48">        |
|      `octave`      |    <img src="./icons/Octave-Dark.svg" width="48">     |
|      `opencv`      |    <img src="./icons/OpenCV-Dark.svg" width="48">     |
|    `openshift`     |     <img src="./icons/OpenShift.svg" width="48">      |
|    `openstack`     |   <img src="./icons/OpenStack-Dark.svg" width="48">   |
|       `p5js`       |        <img src="./icons/p5js.svg" width="48">        |
|       `perl`       |        <img src="./icons/Perl.svg" width="48">        |
|        `ps`        |     <img src="./icons/Photoshop.svg" width="48">      |
|       `php`        |      <img src="./icons/PHP-Dark.svg" width="48">      |
|     `phpstorm`     |   <img src="./icons/PhpStorm-Dark.svg" width="48">    |
|      `pinia`       |     <img src="./icons/Pinia-Dark.svg" width="48">     |
|       `pkl`        |      <img src="./icons/Pkl-Dark.svg" width="48">      |
|      `plan9`       |     <img src="./icons/Plan9-Dark.svg" width="48">     |
|   `planetscale`    |  <img src="./icons/PlanetScale-Dark.svg" width="48">  |
|       `pnpm`       |     <img src="./icons/Pnpm-Dark.svg" width="48">      |
|     `postgres`     |  <img src="./icons/PostgreSQL-Dark.svg" width="48">   |
|     `postman`      |      <img src="./icons/Postman.svg" width="48">       |
|    `powershell`    |  <img src="./icons/Powershell-Dark.svg" width="48">   |
|        `pr`        |      <img src="./icons/Premiere.svg" width="48">      |
|      `prisma`      |       <img src="./icons/Prisma.svg" width="48">       |
|    `processing`    |  <img src="./icons/Processing-Dark.svg" width="48">   |
|    `prometheus`    |     <img src="./icons/Prometheus.svg" width="48">     |
|       `pug`        |      <img src="./icons/Pug-Dark.svg" width="48">      |
|     `pycharm`      |    <img src="./icons/PyCharm-Dark.svg" width="48">    |
|        `py`        |    <img src="./icons/Python-Dark.svg" width="48">     |
|     `pytorch`      |    <img src="./icons/PyTorch-Dark.svg" width="48">    |
|        `qt`        |      <img src="./icons/QT-Dark.svg" width="48">       |
|        `r`         |       <img src="./icons/R-Dark.svg" width="48">       |
|     `rabbitmq`     |   <img src="./icons/RabbitMQ-Dark.svg" width="48">    |
|      `rails`       |       <img src="./icons/Rails.svg" width="48">        |
|   `raspberrypi`    |  <img src="./icons/RaspberryPi-Dark.svg" width="48">  |
|      `react`       |     <img src="./icons/React-Dark.svg" width="48">     |
|    `reactivex`     |   <img src="./icons/ReactiveX-Dark.svg" width="48">   |
|      `redhat`      |    <img src="./icons/RedHat-Dark.svg" width="48">     |
|      `redis`       |     <img src="./icons/Redis-Dark.svg" width="48">     |
|      `redux`       |       <img src="./icons/Redux.svg" width="48">        |
|      `regex`       |     <img src="./icons/Regex-Dark.svg" width="48">     |
|      `remix`       |     <img src="./icons/Remix-Dark.svg" width="48">     |
|      `replit`      |    <img src="./icons/Replit-Dark.svg" width="48">     |
|      `rider`       |     <img src="./icons/Rider-Dark.svg" width="48">     |
|   `robloxstudio`   |    <img src="./icons/RobloxStudio.svg" width="48">    |
|      `rocket`      |       <img src="./icons/Rocket.svg" width="48">       |
|     `rollupjs`     |   <img src="./icons/RollupJS-Dark.svg" width="48">    |
|       `ros`        |      <img src="./icons/ROS-Dark.svg" width="48">      |
|       `ruby`       |        <img src="./icons/Ruby.svg" width="48">        |
|       `rust`       |        <img src="./icons/Rust.svg" width="48">        |
|       `sass`       |        <img src="./icons/Sass.svg" width="48">        |
|      `spring`      |    <img src="./icons/Spring-Dark.svg" width="48">     |
|      `sqlite`      |       <img src="./icons/SQLite.svg" width="48">       |
|  `stackoverflow`   | <img src="./icons/StackOverflow-Dark.svg" width="48"> |
| `styledcomponents` |  <img src="./icons/StyledComponents.svg" width="48">  |
|     `sublime`      |    <img src="./icons/Sublime-Dark.svg" width="48">    |
|     `supabase`     |   <img src="./icons/Supabase-Dark.svg" width="48">    |
|      `scala`       |     <img src="./icons/Scala-Dark.svg" width="48">     |
|     `sklearn`      |  <img src="./icons/ScikitLearn-Dark.svg" width="48">  |
|     `selenium`     |      <img src="./icons/Selenium.svg" width="48">      |
|      `sentry`      |       <img src="./icons/Sentry.svg" width="48">       |
|    `sequelize`     |   <img src="./icons/Sequelize-Dark.svg" width="48">   |
|     `sketchup`     |   <img src="./icons/Sketchup-Dark.svg" width="48">    |
|     `solidity`     |      <img src="./icons/Solidity.svg" width="48">      |
|     `solidjs`      |    <img src="./icons/SolidJS-Dark.svg" width="48">    |
|      `svelte`      |       <img src="./icons/Svelte.svg" width="48">       |
|       `svg`        |      <img src="./icons/SVG-Dark.svg" width="48">      |
|      `swift`       |       <img src="./icons/Swift.svg" width="48">        |
|     `symfony`      |    <img src="./icons/Symfony-Dark.svg" width="48">    |
|     `tailwind`     |  <img src="./icons/TailwindCSS-Dark.svg" width="48">  |
|      `tauri`       |     <img src="./icons/Tauri-Dark.svg" width="48">     |
|    `tensorflow`    |  <img src="./icons/TensorFlow-Dark.svg" width="48">   |
|    `terraform`     |   <img src="./icons/Terraform-Dark.svg" width="48">   |
|     `threejs`      |    <img src="./icons/ThreeJS-Dark.svg" width="48">    |
|     `twitter`      |      <img src="./icons/Twitter.svg" width="48">       |
|        `ts`        |     <img src="./icons/TypeScript.svg" width="48">     |
|      `ubuntu`      |    <img src="./icons/Ubuntu-Dark.svg" width="48">     |
|      `unity`       |     <img src="./icons/Unity-Dark.svg" width="48">     |
|      `unreal`      |    <img src="./icons/UnrealEngine.svg" width="48">    |
|        `v`         |       <img src="./icons/V-Dark.svg" width="48">       |
|       `vala`       |        <img src="./icons/Vala.svg" width="48">        |
|      `vercel`      |    <img src="./icons/Vercel-Dark.svg" width="48">     |
|       `vim`        |      <img src="./icons/VIM-Dark.svg" width="48">      |
|   `visualstudio`   | <img src="./icons/VisualStudio-Dark.svg" width="48">  |
|       `vite`       |     <img src="./icons/Vite-Dark.svg" width="48">      |
|      `vitest`      |    <img src="./icons/Vitest-Dark.svg" width="48">     |
|      `vscode`      |    <img src="./icons/VSCode-Dark.svg" width="48">     |
|     `vscodium`     |   <img src="./icons/VSCodium-Dark.svg" width="48">    |
|       `vue`        |     <img src="./icons/VueJS-Dark.svg" width="48">     |
|     `vuetify`      |    <img src="./icons/Vuetify-Dark.svg" width="48">    |
|       `wasm`       |    <img src="./icons/WebAssembly.svg" width="48">     |
|     `webflow`      |      <img src="./icons/Webflow.svg" width="48">       |
|     `webpack`      |    <img src="./icons/Webpack-Dark.svg" width="48">    |
|     `webstorm`     |   <img src="./icons/WebStorm-Dark.svg" width="48">    |
|     `windicss`     |   <img src="./icons/WindiCSS-Dark.svg" width="48">    |
|     `windows`      |    <img src="./icons/Windows-Dark.svg" width="48">    |
|    `wordpress`     |     <img src="./icons/Wordpress.svg" width="48">      |
|     `workers`      |    <img src="./icons/Workers-Dark.svg" width="48">    |
|        `xd`        |         <img src="./icons/XD.svg" width="48">         |
|       `yarn`       |     <img src="./icons/Yarn-Dark.svg" width="48">      |
|       `yew`        |      <img src="./icons/Yew-Dark.svg" width="48">      |
|       `zig`        |      <img src="./icons/Zig-Dark.svg" width="48">      |
## Props

`className`: Apply custom properties supported by SVGSVGElement type.

```jsx
<GithubDark className="icon" />
```

## Credits

Authors of skillicons.dev and react-skillicons

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
