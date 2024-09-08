# Getting started with React
## Creating a React Project
- Using npx
``` bash
npx create-react-app <app-name>

```
- Using Vite
``` bash
npm create vite@latest

```
**Use the above command and proceed as directed, and then type:**
``` bash
npm install

```
**This command will install the required packages**

## Running the project
- If using npx
``` bash
npm start

```
- If using vite
``` bash
npm run dev

```

## Creating a GIT Repo using terminal from VS Code
- Initialize or Reinitialize Git:
``` bash
git init

```
- Add All Files 
``` bash
git add .

```

- Commit the Changes:
``` bash
git commit -m "Changes Commited"

```
-  Create a GitHub Repository from the Terminal If using GitHub CLI (assuming it’s installed):
``` bash
gh auth login
gh repo create my-react-project --public --source=. --remote=origin
```
- Push the Code to GitHub:
``` bash
git push -u origin main
```
## Creating a React build
**The build folder will contain all the necessary static assets (HTML, CSS, JS, etc.). We can deploy this folder to any web server or hosting service.**
``` bash
npm run build

```

---
Written with ❤️ by ANAN

