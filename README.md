# RestaurantsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

It's a simple interface to call the restaurant backend server defined at https://github.com/foadmk/restaurants-backend

It searches up to five restaurants that best matches up to five search criterias.

## Source code

* src/app
  * components/
    * results -> component responsible to render the results
    * search-bar -> component responsible to render the search bar
  * helpers/
    * validation-functions -> functions to validade user input
  * models/
    * restaurant -> restaurant interface
    * search -> search interface
  * pages/
    * main -> main page component that renders the search-bar and the results component
  * services/
    * restaurant.sevices -> service that call the backend api and get the restaurant results


## Running instructions

To run this project, you need to have node and npm package manager installed. More information at -> https://nodejs.org/en/download/

First install the npm packages

`npm install`

Then to get the server running on dev mode

`ng serve` 

After server started navigate to `http://localhost:4200/`.

## testing instructions

`ng test` 

After karma server started navigate to `http://localhost:9876/`.

## Important notes

If you are running the backend in other address than `http://localhost:3333/api` (default for the backend project) you should adjust the `restaurantBackend` value at ./environments/
