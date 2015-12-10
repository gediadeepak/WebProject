# Angular2 sample application

Assumptions
This document is for those who are having fair idea about:
	Angular Version 1.* 
	TypeScript
	MVC Pattern
Solution developed with
We need to use below technologies to develop the sample solutions for Angular2
	Visual Studio 2015 (pro)
	.NET Framework 4.5.2
	Angular2 Alpha version 46
	Node & Bower
	IIS 7 [Optional]
About this Tutorial
This tutorial helps developer to learn Angular2 new functionalities and also they will get knowledge on how to develop Angular2 single page application using modern technologies such as TypeScript, Node and bower
Prerequisites for development
1-	Install Visual Studio 2015(pro or Community)
2-	Install Node, Bower components
3-	IIS 7 - optional
Setting-up development environment
1-	Start visual studio 2015 with Administration rights and select “New Project” option
2-	Select Web >> ASP.net Web Application >> Give name to your project and solution, from the open dialog window select ASP.net 4.5.2 Templates >> Empty and select MVC checkbox and proceed further by clicking Ok, this will creates an empty MVC project.
3-	Now need to install some dependencies using Node and Bower, create package.json file by using command ‘npm init –y’(before executing command need to go in to the project directory using command prompt window as Administrator)
4-	Include your package.json file inside project and open in visual studio, and replace below json text
{
  "name": "<<project Name>>",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "live-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "angular2": "2.0.0-alpha.44"
  },
  "devDependencies": {
    "live-server": "^0.8.1"
  }
5-	Create bower.json file and include it in project and add below json text
{
  "name": "angular2-poc",
  "version": "0.0.1",
  "authors": [
    "Torgeir Helgevold <gedia.deepak@gmail.com>"
  ],
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components" 
  ],
  "dependencies": {
    "bootstrap": "~3.3.4",
    "jquery": "~2.1.4",
    "jquery-ui": "~1.11.4",
    "moment": "~2.10.6",
    "react": "~0.13.3",
    "underscore": "~1.8.3"
  }
}
6-	The above code(Package.json and Bower.json) installs the Angular2, live-server(to view the developed page on virtual development server), bootstrap, jquery etc.
7-	If you running behind proxy then you need to set certain commands in the command prompt to download the repositories from gits.
a.	For npm command set proxy in command prompt
Type command - set http_proxy=http://your_proxy:your_port
b.	And for bower create a bowerrec file to access the repositories
Create .bowerrec file(inside your project directory) and add
{
"proxy":"http://<KID>:<password>@ProxyURL:Port/",
"https-proxy":"<KID>:<password>@ProxyURL:Port/"
}
Note: if you have special char in your password then please encode it and put in as password
Example: S@tya2015 then S%40tya2015
Note:- before executing the next steps make sure you are in the project directory so that it installs the dependencies for only project.
8-	After completing all steps execute below 2 commands to setting up dependencies
a.	Npm install 
b.	Bower install

9-	Now need to install TSD(typescript compiler) and setup typings for the project
a.	Npm install –g tsd
This command installs the compiler globally
b.	Tsd install angular2 es6-promise rx rx-lite

10-	After this all Settings need to set another few compiler settings for type script, go to project, right click on project >> unload it >> open it in edit mode >> 
Add below line after <IISExpressUseClassicPipelineMode />
<TypeScriptExperimentalDecorators>true</TypeScriptExperimentalDecorators>
Save it and close file and reload project.
11-	Go to project properties and under the Typescript tab select Module system as CommonJs.

After doing all you are now good to go to create first simple sample project under typescript and Angular2.
