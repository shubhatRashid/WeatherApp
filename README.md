# Current Weather App

![image](https://github.com/shubhatRashid/WeatherApp/assets/106548827/7af59c2e-5fab-4f92-b46d-6e175715de34)


* live @ : https://shubhatsweatherapp.netlify.app/

* A simple Current Weather web application built using HTML, CSS, JavaScript, React, Bootstrap React, Material-UI, Git, and GitHub for version control and deployment.

## Features

- View the current weather conditions for a specific location.
- User-friendly interface with responsive design.
- Real-time updates and accurate weather information.

## Prerequisites

Before you start, make sure you have the following tools installed:

- Node.js: Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/current-weather-app.git
```

2. Navigate to the project directory:

```bash
cd current-weather-app
```

3. Install the project dependencies:

```bash
npm install
```

## Usage

1. Obtain a free API key from a weather data provider (e.g., OpenWeatherMap).

2. Create a `.env` file in the project root and add your API key:

```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

3. Start the application:

```bash
npm start
```

4. Open your web browser and go to `http://localhost:3000` to access the Current Weather app.

5. Enter a location (city name or coordinates) and click the "Get Weather" button to view the current weather conditions.

## Technologies Used

- HTML: Structure of the web page.
- CSS: Styling and layout of the web page.
- JavaScript: Interactive functionality and dynamic content.
- React: JavaScript library for building user interfaces.
- Bootstrap React: UI components library for React applications.
- Material-UI: React components for a consistent and customizable design.
- Git: Version control system for tracking changes.
- GitHub: Platform for hosting and sharing code repositories.

## Project Structure

The project directory is organized as follows:

```
current-weather-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── WeatherCard.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── .gitignore
├── package.json
└── README.md
```

- `node_modules/`: Contains project dependencies.
- `public/`: Holds static files such as the main HTML file.
- `src/`: Contains the source code of the application.
- `.env`: Configuration file for environment variables.
- `.gitignore`: Specifies files and directories to be ignored by version control.
- `package.json`: Project metadata and list of dependencies.

## Deployment

1. Create a GitHub repository for your project.

2. Push your code to the GitHub repository:

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/current-weather-app.git
git push -u origin master
```

3. Deploy the app using a platform like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/). Configure your deployment settings and provide the necessary environment variables.

## Acknowledgements

This project was created for educational purposes and may include third-party libraries and APIs. Check their documentation for licensing and usage terms.

Feel free to customize and enhance the Current Weather app to suit your needs. If you have any questions or need assistance, don't hesitate to contact me. Happy coding!
