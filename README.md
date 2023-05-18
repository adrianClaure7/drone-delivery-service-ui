# Drone Delivery Service UI

This Angular 16 project allows you to assign locations to drones in different trips. The application takes a file containing drone and location data, converts it to JSON format, and sends it to the corresponding API in the C# backend. The backend processes the data, assigns the locations to the drones, and returns the result. The application then converts the received data into the required string format.

## Installation

1. Clone the repository:

https://github.com/adrianClaure7/drone-delivery-service-ui.git

2. Install dependencies:

npm install


## Usage

1. Start the development server:
ng serve

2. Open your browser and navigate to:
http://localhost:4200

**Note:** Make sure the backend server is up and running at http://localhost:5188.


## Running Unit Tests

Run the following command to execute the unit tests:

ng test


## Further Help

For more information on the Angular CLI, refer to the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Credits

Development: Adrian Claure