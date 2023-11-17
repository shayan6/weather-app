# Weather App

## Introduction

Welcome to the Weather App! This web application allows users to add locations and view weather information for the day. It's a simplified version inspired by the iOS native weather app.

## Tech Stack

- Built with React and functional components
- Project setup using Vite (or Create React App)
- Data storage handled with local storage for seamless data retrieval on refresh
- Visual components designed with Material UI (MUI or Joy)
- Icons displayed using Font Awesome or MUI Icons
- Styling implemented with Styled Components, Emotion, or MUI "sx" prop
- Axios (or similar) for making requests to the Weather API

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd weather-app

2. **Install dependencies:**
    ```bash
    npm install

3. **Run the development server:**
    ```bash
    npm run dev

## Features

### 1. Homepage

- **List of Locations:**
  - Each location is accompanied by an Edit button.
  - Current temperature is displayed for each location.
  - Favourited locations appear at the top.
  - Toggle between Celsius and Fahrenheit.

### 2. View

- **Location Display:**
  - Shows the name and current temperature of the selected location.
- **Upcoming Weather Information:**
  - Provides forecast details for the next hours or days.
- **Weather Types Display:**
  - Utilizes Font Awesome icons to represent different weather conditions.
- **Stretch Goal: React Helmet Integration**
  - Updates the page title dynamically when viewing or editing a location.

### 3. Create / Edit

- **Change Location Name:**
  - Allows users to modify the name of a location.
- **Weather Data Modification:**
  - Fetches different weather data for the specified location.
- **Location Search (Stretch Goal):**
  - Autocomplete functionality using a locations API.
- **Favorite Locations:**
  - Users can mark a location as a favorite.
- **Delete Locations:**
  - Provides the ability to remove a location.

## Deployment

The Weather App is hosted on Netlify for convenient access. Explore the live demo [here](#insert-live-demo-link).

## Important Note

To run the app successfully, follow these steps:

1. Obtain an API key by creating an account, verifying your email, and accessing the Weather API.
2. Handle rate limiting to avoid issues with too many requests in a short period.

## Live Demo

Visit the live demo of the Weather App [here](#insert-live-demo-link).

## Contact

Thank you for checking out our Weather App! If you have any questions or feedback, feel free to reach out.

Happy weather exploring! ☀️🌧️❄️
