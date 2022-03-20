# simple-server

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

I. Install typescript in the project. run `npm install -D typescript` adds typescript as a dev dependency.
Run `npx tsc -v` to check the version that was installed.

II. Run `npx tsc --y` to init typescript config. Open the generated file and delete everything inside of "compilerOptions" **except** the first line with the link to the tsconfig documentation.

III. Get the node version you're running `node -v`

IV. Get the [tsconfig base](https://github.com/tsconfig/bases/) for your node verion, and place it outside/above the "compiletOptions" in the tsconfig file.

V. In the tsconfig file inside of "compilerOptions", add `outDir: ./dist` (this is where all js files created by the typescript compiler are placed).

VI. Add `include: ["/src/**/*"]` and `exclude: ["/node_modules"]` outside of the compilerOptions and add `baseUrl: './src` inside of the compilerOptions. When all these changes are made your tsconfig should look something like this.

```
{
  "extends": "@tsconfig/node14/tsconfig.json",
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
    "outDir": "./dist",
    "baseUrl": "./src"
  },
  "include": ["/src/**/*"],
  "exclude": ["/node_modules"]
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

</details>

<details>
<summary>4. Add Linting</summary>

I. Run `npm i -D eslint` to install the linter.

II. Add an eslint `.eslintrc` [config file](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) to the root of your project.

III. In order to use eslint with prettier some dependencies are needed, eslint prettier config and plugin. Run `npm i -D eslint-config-prettier`
and `npm i -D eslint-plugin-prettier`.

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

</details>

<details>
<summary>5. Add Commit lint</summary>
*Coming soon*
</details>

<details>
<summary>6. Add Dependabot</summary>
*Coming soon*
</details>

<details>
<summary>7. Add Release bot</summary>
*Coming soon*
</details>

<details>
<summary>7. Setup CI/CD</summary>
*Coming soonS*
</details>
