# simple-server

## Setting up a Node-Typescript project from scratch

<details>
1. <summary>Creat the project</summary> 
    
    I. Create directory for the project on your local machine.

    II. Create a repo on github and copy the new repo code

    ```
    echo "# simple-server" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/melvingaye/simple-server.git
    git push -u origin main
    ```

    III. Paste and run the copied commands in the terminal (you may have to hit Enter to push to github).

    IV. Back in the terminal run `npm init --y` to generate a package.json file.

    V. [Add a gitignore file](https://github.com/github/gitignore/blob/main/Node.gitignore).

    VI. Push all changes to github.

</details>

2. Add Typescript

   I. Install typescript in the project. run `npm install -D typescript` adds it as a dev dependency. Run `npx tsc -v` to check the version that was installed.

   II. Init a typescript config. `npx tsc --
