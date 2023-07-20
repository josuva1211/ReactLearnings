Assignment

1. What is NPM?
    npm does not stands for - Node Pack Manager. It basically manages packages.
    All the packages we need are hosted in npm.

Bundler packs our code and bundle it which will be shipped to production

2. What is the difference between dependency and devDependencies
There are 2 types of dependencies
    - Dev Dependency (Used for only Development mode)
        DevDependencies are primarily used to enhance the developer's productivity, facilitate testing and debugging, or provide build and development tooling.
    - Dependency (Can be used in production also)
        Dependencies are crucial for the application to function correctly in the production environment,

3. Difference between package.json and package.lock.json
    - package.json is configuration and dependency to our npm
    - package.lock.json
        It keeps track of the exact version of our npm packages

4. What is node modules? Is it a good idea to push that on a git?
    It is like a database where package.json will fetch from it whichever is needed

    Transitive Dependency
        Its like a package has its dependencies and its dependncies will have more dependencies and it continues

    No, it is not a good idea to push node_modules to git as it has lot of files
    Even if I delete all my node modules I will able to recover it because it has all dependencies stored in package.json and package.lock.json
    That's why we no need to push node_modules to the github because we can regenerate it

5. why should we not edit package.lock.json

    The package-lock.json file should not be manually edited because it is automatically generated and updated by the package manager based on the information in the package.json file. Modifying the package-lock.json file directly can lead to several issues:
        1. Dependency Inconsistencies
        2. Version Conflicts
        3. Loss of Integrity Checks
        4. Collaboration issues

6. Use of ^ (caret) and ~ (tilda) in package.json
    ^ does minor upgrades automatically like 2.8.3 to 2.8.4
    ~ does major upgrades automatically like 2.8.3 to 3.0.0

7. What is npx?
    npx - executes the installed packages

8. Parcel - is a beast
It will
    - Dev Build
    - Create Local Serve
    - Hot Module Replacement (HMR)
    - File Watching Algorithm (written in C++)
    - Faster Builds because of Caching
    - Image Optimisation
    - Minifaction
    - Bundling
    - Compress files
    - Consistent Hashing
    - Code Splitting
    - Differential Bundling (Support older browsers)
    - Diagnostics
    - Error Handling
    - Security
    - Tree Shaking (Remove unused code for us)
    - Build separate for prod and dev (npx parcel build index.html - for prod)

9. What is browserslist?
Browserlist - Useful website to see how much percentage of people your app will cover
Eg.
    "browserlist": [
        "last 2 versions"
    ]

10. What is .parcel-cache
    - It does caching of the parcel. Everytime we make a change your app rebuilds. So, using caching it rebuilds thus reducing reloading time drastically

11. What is Tree Shaking
    - Tree shaking is an optimisation technique during production build. It will remove unused code from our app intelligently and give optimised code to the prod

12. Hot Module Replacement?
    - Hot Module Replacement (HMR) is a feature that allows for real-time updates and hot reloading of modules without requiring a full page reload. It enhances the developer experience by providing a faster feedback loop during the development process.

13. What is .gitignore? What should we add and not add into it?
    - It helps us to ignore files which are not necessary to push into github
    - We can add files like node_modules, parcel-cache, dist, etc in gitignore
    - We should not add source files, configuration files like package.json and package.lock.json

14. What is the dist folder?
    - The browser does not support or understand react language. So during prod build it will create a dist folder which will have the minified files in html, css, js which the browser understands. The whole code of the app will be present only in these 3 files and some extra mapping files

15. What are script types
    - One is writing logic inside script tag
    - Then giving link to js file using src attribute
    - Script type = "module" allows you to import and import modules
 


