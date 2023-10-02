# Steps on Collaborating

## 1. Cloning the development branch

To clone the repo and start working, use the following commands.

**SSH:**

```sh
git clone -b development git@github.com:ArshavineRoy/school-management-system.git
```

**HTTPS:**

```sh
git clone https://github.com/ArshavineRoy/school-management-system/tree/development
```

## 2. Pick an item from the Trello workspace's Todo board and move it to Doing

> Steps on how to do this will be demonstrated on call.

## 3. Create a branch in development

Create a branch for what you are working on. Start branches with an **ft-** prefix. e.g., **ft-login**.

```sh
git branch <ft-name>
```

## 4. Switch to your branch

```sh
git checkout <your branch>
```

> **NOTE: Always confirm the branch you're on at the bottom left corner of your VS Code editor before you start coding.**

> **Steps on how to easily create and switch to a branch in VS Code will be demonstrated on call.**

## 5. Running the client or server and installing packages

To run the client, from the root directory, navigate to /client and run

```sh
npm start
```

To run the server, remember to work within the environment

```sh
pipenv install && pipenv shell
```

To install any packages for the server side

```sh
pipenv install <package name>
```

For testing client-server interaction, run client and server on separate terminals (requires a fully working backend).

## 6. Work on your feature and make sure it works perfectly

> This will reduce the time taken during code review and also minimize conflicts.

## 7. Commit your work

Please make sure to write meaningful commit messages. Describe what you have done.

Messages like `"Done"` are not welcome.

```sh
git add .

git commit -m "<your message>"
```

## 8. Push your work to YOUR BRANCH

If it's the first time you're pushing to this branch, make sure to set upstream with `-u` so you can always use `git push` anytime.

```sh
git push -u origin <your branch>
```

For subsequent pushes to the same branch

```sh
git push
```

## 9. Go to GitHub and make a Pull Request to DEVELOPMENT

> Steps on how to do this will be demonstrated on call.

## 10. Whenever possible, move your task in Trello from Doing to Code Review

> Steps on how to do this will be demonstrated on call.

## 11. Fetching changes in development branch

If there are changes in development [merged changes will be announced] and you want to fetch them, switch to development branch in VS Code and run the following command.

> **NB: Ensure you have pushed the changes in your branch first before fetching changes in development!**

```sh
git fetch
```

## 12. Resolve conflicts, if any

> Steps on how to do this will be demonstrated on call.

## 13. Switch back to your branch and continue working, or create a new one if need be.

> Steps on how to do this will be demonstrated on call.

## 14. Merging fetched changes in development to your branch

```sh
git merge origin/development
```

**If you have any issues, schedule a call with me.**

**Happy coding!**
