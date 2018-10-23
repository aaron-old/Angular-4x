## Working with ASP.NET 4.x & Angular 6

- Create a new Web Api Project in Visual Studio
  - it can be 4.x (4.5x, 4.6x, 4.7x), this example uses 4.7.
- Once the project is created run the following ng command
  - `ng new appName -p {prefix} --routing -g --style {style extension} --directory ./`
  - A list of the commands are available on [Angular CLI wiki](https://github.com/angular/angular-cli/wiki/new)
  - this will create the folders inline with the current project structure.
- Install all the npm dependencies for angular and the project.
- Build the project ` ng build `
- The dist directory will be used to store the scripts that will run on the index

In order to get a normal development envrionment, the index of the application needs to contain
references to the distribution scripts;
  - in dev, test and production environments the amount and names of these files may change.

### In Development
Use ` ng build --watch ` this will give you the ability for your builds to be updated.
Or if the server side logic is not needed you can run from localhost.


### Build locations
it is possible to change the location of where the build is run, and also it could change
based on the environment

in dev it could look like this
` ng build ...options --output-dir dist/dev `
