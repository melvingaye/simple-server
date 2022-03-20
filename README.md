# simple-server

## Setting up a Node-Typescript project from scratch

<details>
<summary>1. Creat the project</summary> 
    
I. Create a directory for the project on your local machine.

II. Create a src directory in your project directory.

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
Go back to the browser page where you created the repo and refresh, make sure what you pushed shows up on github.

V. Back in the terminal run `npm init --y` to generate a package.json file.

VI. [Add a .gitignore file](https://github.com/github/gitignore/blob/main/Node.gitignore).

VII. Push all changes to github.

</details>

<details>
<summary>2. Add Typescript</summary>

I. Install typescript in the project. run `npm install -D typescript` adds typescript as a dev dependency.
Run `npx tsc -v` to check the version that was installed.

II. Init typescript config. `npx tsc --y`

III. Get the node version you're running `node -v`

IV. Get the [tsconfig base](https://github.com/tsconfig/bases/) for your node version and update the generated tsconfig.json with the extends entry for the tsconfig base.

V. Update `outDir` in your tsconfig by adding `./dist` as the value (this is where all js files created by the typescript compiler are placed).

</details>

<details>
<summary>3. Add Formatting</summary>
</details>

<details>
<summary>3. Add Linting</summary>
</details>
