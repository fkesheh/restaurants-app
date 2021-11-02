# RestaurantsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

It's a simple interface to call the restaurant backend server defined at https://github.com/foadmk/restaurants-backend

It searches up to five restaurants that best matches up to five search criterias.

## Running instructions

To run this project, you need to have node and npm package manager installed. More information at -> https://nodejs.org/en/download/

First install the npm packages

`npm install`

Then to get the server running on dev mode

`ng serve` 

After server started navigate to `http://localhost:4200/`.

## Important notes

If you are running the backend in other address than `http://localhost:3333/api` (default for the backend project) you should adjust the `restaurantBackend` value at ./environments/
