# MyApp

## Description 

It is an application works with Cat API - https://docs.thecatapi.com

Handled three API endpoints:
<br><br>
-- Cat list 
https://api.thecatapi.com/v1/images/search
<br><br>
Query Parameter
<ul>
  <li>page - integer</li>
  <li>limit - integer</li>
  <li>order - string ( Rand, Desc, Asc )</li>
</ul>



-- List the Cat Breeds
https://api.thecatapi.com/v1/breeds
<br><br>
Query Parameter
<ul>
  <li>page - integer</li>
  <li>limit - integer</li>
</ul>

-- Search for Breeds by name 
https://api.thecatapi.com/v1/breeds/search
<br><br>
Query Parameter
<ul>
  <li>q - integer</li>
</ul>

## Architecture

<ul>
  <li>App - main directory</li>
  <li>pages - the page contains components, components belonging for page, store, services</li>
  <li>base - contain global components</li>
  <li>store - contain store file selector for every point of store</li>
</ul>

## Pages

<ul>
  <li>cats-list / - main page, cats list</li>
  <li>cats-list-favourites /favourites - favourites cats</li>
  <li>breeds-list /breeds - breeds list</li>
  <li>contact-us /contact-us - feedback form with validation</li>
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
