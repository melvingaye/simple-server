# Simple Server

### Getting Started

[_Coming Soon_](https://shields.io/)
[_credits_](https://github.com/microsoft/TypeScript-Node-Starter)
[Project Board](https://github.com/users/melvingaye/projects/2/views/1)

### Setting up Express API with Swagger Auto Documentation

[_coming soon_](https://www.npmjs.com/package/@decorators/express)
[_comming soon tsed_](https://tsed.io/tutorials/swagger.html#endpoint-documentation)
[_coming soon tsoa_](https://tsoa-community.github.io/docs/getting-started.html)
[_docker images_](https://www.docker.com/)

### Setting up a Node-Typescript project from scratch

<details>
<summary>1. Creat the project</summary>

I. Create a directory for the project on your local machine.

II. Create a `/src` directory in your project directory.

III. Create a repo on github and copy the new repo code

```
echo "# simple-server" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin <REPO_URL>
git push -u origin main
```

IV. Open a terminal in VSCode (make sure you're in the root directory of the project).
Paste and run the copied commands in the terminal (you may have to hit Enter to push to github).
Go back to the browser where you created the repo and refresh, make sure what you pushed shows up on github.

V. Back in the terminal run `npm init --y` to generate a package.json file.

VI. [Add a .gitignore file](https://github.com/github/gitignore/blob/main/Node.gitignore).

VII. Push all changes to github.

</details>

<details>
<summary>2. Add Typescript</summary>

I. Run `npm install -D typescript` to add typescript as a dev dependency. Run `npx tsc -v` to check the version that was installed.

II. Run `npx tsc --y` to init typescript config. Open the generated file and delete everything inside of "compilerOptions" **except** the first line with the link to the tsconfig documentation.

III. Get the node version you're running `node -v`, then get [tsconfig base](https://github.com/tsconfig/bases/) for your node verion, and place it outside/above the "compiletOptions" in the tsconfig file.

IV. In the tsconfig file inside of "compilerOptions", add `outDir: ./dist` (this is where all js files created by the typescript compiler are placed) and `baseUrl: './src` .
Then add `include: ["src/**/*"]` and `exclude: ["/node_modules"]` outside of the compilerOptions. When all these changes are made your tsconfig should look something like this.

```
{
	"extends": "@tsconfig/node14/tsconfig.json",
	"compilerOptions": {
		/* Visit https://aka.ms/tsconfig.json to read more about this file */
		"outDir": "./dist",
		"baseUrl": "./src",
		"types": ["node"]
	},
	"include": ["src/**/*"],
	"exclude": ["/node_modules"]
}
```

V. Run `npm i -D ts-node-dev` to add [ts-node-dev](https://github.com/wclr/ts-node-dev). Run `npm i -D tsconfig-paths` to provide module resolution for tsconfig paths and launch script. Run `npm i -D nodemon` to add [nodemon](https://www.npmjs.com/package/nodemon) for hot reloading on file change and save.

VI. Create a new directory `.vscode` in the root of the project and add a `launch.json` in the directory. Add the following to the launch file. Optional script to add to package.json `"dev": "./node_modules/.bin/nodemon --watch src/**/*.ts --exec ./node_modules/.bin/ts-node-dev -r tsconfig-paths/register ./src/index.ts",` (It is the same as what is in the launch file but gives the option to run from the terminal)

```
{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "node",
			"request": "launch",
			"name": "Run Server",
			"runtimeExecutable": "${workspaceFolder}\\node_modules\\.bin\\nodemon",
			"restart": true,
			"console": "integratedTerminal",
			"internalConsoleOptions": "neverOpen",
			"sourceMaps": true,
			"smartStep": true,
			"args": [
				"--watch",
				"'src/**/*.ts'",
				"--ignore",
				"'src/**/*.spec.ts'",
				"--exec",
				"./node_modules/.bin/ts-node-dev",
				"-r",
				"tsconfig-paths/register",
				"${workspaceFolder}\\src\\index.ts"
			],
			"skipFiles": ["<node_internals>/**"]
		}
	]
}
```

</details>

<details>
<summary>3. Add Formatting</summary>

I. Add [editorconfig](https://editorconfig.org/) in the root of the project.

II. Add prettier `npm i -D prettier`.

III. Add a prettier `.prettierrc` [config](https://prettier.io/docs/en/configuration.html) file to the root of the project and add the following to that file

```
{
	"semi": true,
	"trailingComma": "all",
	"singleQuote": true,
	"printWidth": 120,
	"tabWidth": 4,
	"endOfLine": "lf",
	"bracketSpacing": true
}
```

IV. Add formatting script to package.json `"format": "npx prettier --write src/**/*.ts",`

V. Also enable `autoFormatOnSave` in VSCode settings if it is not enabled, on Windows press `Ctrl + ,` on Mac `Cmd + ,`.

</details>

<details>
<summary>4. Add Linting</summary>

I. Run `npm i -D eslint` to install the linter that gets used to enforce coding standards.

II. Add an eslint `.eslintrc` [config file](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) to the root of your project.

III. In order to use eslint with prettier some dependencies are needed, eslint prettier config and plugin. Run [`npm i -D eslint-config-prettier` [README](https://github.com/prettier/eslint-config-prettier/) and `npm i -D eslint-plugin-prettier` [README](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration).

IV. In order to use eslint to lint typescript there are also dependencies. Run `npm i -D @typescript-eslint/parser` and `npm i -D @typescript-eslint/eslint-plugin`.

V. Add configuration options to the config file. It should look something like this (research other options).

```
{
	"env": { "node": true },
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"sourceType": "module"
	},
	"plugins": ["@typescript-eslint", "prettier"],
	"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
	"rules": {
		"prettier/prettier": "error"
	}
}
```

VI. Add linting script to package.json `"lint": "eslint --ext .js,.ts ."`

</details>

<details>
<summary>5. Add Commit lint</summary>

I. Run `npm i -D @commitlint/cli @commitlint/config-conventional` [commitlint](https://commitlint.js.org/#/guides-local-setup)

II. Add config file `commitlint.config.js` in the root of the project

```
module.exports = { extends: ['@commitlint/config-conventional'] };
```

III. Add [husky](https://typicode.github.io/husky/#/?id=automatic-recommended) for pre-commit hooks `npx husky-init && npm install`. This will generate a pre-commit file with `npm test` in it. Replace `npm test` with this `echo "Running lint checks..."`

IV. Add the file .husky/commit-msg with no extension and paste this in there

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

V. In the terminal run `git commit -m "foo: this will fail"` test to make sure commitlint works on commits

VI. Run `npm i -D lint-staged` to add [linting](https://github.com/okonet/lint-staged#examples) for pre-commit hooks. Add a `.lintstagedrc.json` file in the root of the project. Paste this into the file.

```
{
	"*.{js,ts}": ["eslint --cache --fix"]
}
```

</details>

<details>
<summary>6. Setup CI/CD</summary>

I. Create a develop branch and set it as the [default branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch) instead of main.

II. Add [branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) for develop and main.

On github on the repo top navigation, Click "Settings" at the top. On the left menu under "Code and automation" click "Branches".
On the page that shows, there should be an "Add Rule" button, click that. Under the possible configurations there are two that will need to be enabled, others can be enabled at your own discretion.

On github on the repo top navigation, Click "Settings" at the top. Scroll down till you see "Pull Requests" make sure the only one that is selected is "Allow squash merging" unselect the other options if they are selected.

III. Add the following directory in the root of the project `.github/workflows`

IV. Add `develop.yml` in the workflows directory. Configure develop to lint and run possible tests [Actions Docs](https://docs.github.com/en/actions).

1. Add actions for merges to main, and pr against develop (add branch protection for main)
2. Put develop merge into main on a schedule (once code coverage is setup)
3. [Add Release bot](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration)
4. [_Add Dependabot!_](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)
5. Add [branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)

</details>

<details>
<summary>7. Set up Docker for local development later</summary>
</details>

<details>
<summary>8. Set up UAT and prod</summary>
</details>
