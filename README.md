# MyApp

## Description 

This is an application work with Cat API - https://docs.thecatapi.com

Handled three API endpoints:
-- Cat list 
https://api.thecatapi.com/v1/images/search
<br>
Query Parameter
<br>
page - integer
<br>
limit - integer
<br>
order - string ( Rand, Desc, Asc )


-- List the Cat Breeds
https://api.thecatapi.com/v1/breeds?
<br>
Query Parameter
<br>
page - integer
<br>
limit - integer

-- Search for Breeds by name 
https://api.thecatapi.com/v1/breeds/search
<br>
Query Parameter
<br>
q - string

## Architecture

<ul>
  <li>App - main directory</li>
  <li>pages - contain page components, components belonged for page, store, services</li>
  <li>base - contain global components</li>
  <li>store - contain store file selector for every point of store</li>
</ul>

## Default app information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
