# WeatherApplication
WeatherApp is a simple web application that allows users to get the current weather information for any city in the world. It fetches data from the OpenWeatherMap API and displays it in a user-friendly interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

Instructions on how to set up the project locally:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/weatherapp.git
    ```
2. Navigate to the project directory:
    ```sh
    cd weatherapp
    ```
3. Open `index.html` in your browser to view the project.

## Usage

1. Open the application in your web browser.
2. Enter the name of a city in the search bar.
3. Click the "Get Weather" button to retrieve and display the current weather data for the specified city.

## Features

- Real-time weather updates.
- Displays temperature, humidity, wind speed, and weather conditions.
- User-friendly interface with responsive design.

## Technologies Used

### HTML
Used to structure the content of the web pages. Key files include:
- `index.html` - The main entry point of the application.

### CSS
Used to style the content of the web pages. Key files include:
- `styles.css` - Contains all the styles for the project.

### JavaScript
Used to add interactivity and handle logic in the web application. Key files include:
- `script.js` - Contains the main JavaScript code for the project.

### API
WeatherApp interacts with the OpenWeatherMap API to fetch weather data.

## API Reference

### OpenWeatherMap API
- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Method:** GET
- **Parameters:**
    - `q` (required): City name.
    - `appid` (required): 
