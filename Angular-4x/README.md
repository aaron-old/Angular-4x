## Working with ASP.NET 4.x & Angular 6

### Creating a New Project
- Create a new Web Api Project in Visual Studio (w/ MVC)
  - it can be 4.x (4.5x, 4.6x, 4.7x), this example uses 4.7.
- Once the project is created run the following ng command at the directory above the web project <br>
  `ng new appName -p {prefix} --routing -g --style {style extension} --directory ./`
  - If your in an offline environment pass the `--skip-install` so you may provide project deps manually.

  - A list of the commands are available on [Angular CLI wiki](https://github.com/angular/angular-cli/wiki/new)

- This will create the folders inline with the current project structure.
- Since the ASP.net scaffolded files will unlikely be used, you can remove the following;
  - Clear the contents of `App_Start/BundleConfig`
  - Delete the directory `Areas/`
  - (Optional) Delete the directory `Content`
  - (Optional) Delete the directory `Scripts`
  
- Install all the npm dependencies for angular and the project (`npm install`).

- Build the project ` ng build `

- The `dist` directory will be used to store the scripts that will run on the index by default, 
you can change this location in the `angular.json` file

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
` ng build { A list of options } --output-path dist/dev `


### Teach the MVC router to use the Angular Router
in the App_Start/RouteConfig, the current setup creates the router for mvc, and needs to be overwritten
so that any requests may be sent to the index controller method.
```` 
routes.MapRoute(
    name: "default",
    url: "{*url}",
    defaults: new { controller = "Home", action = "Index" }
  ); 
````

### How do I bring in modules w/o internet
The fun part, probably easier solutions but the simplist in our current environment revolves around copy

Currently, I have a mapped directory on my profile that is shared between the location with the internet connection
and the offline location

I wrote a robocopy script to update my offline location with this mapped drives changes.. or I could simply just copy
over all the new stuff from that day.
