# weather-app
A simple, interactive weather application built with Vite, React, and Tailwind CSS. The app allows users to search for weather details, save favorite cities, and toggle between temperature units (Celsius/Fahrenheit). Additionally, it provides a 5-day forecast, dark mode, and supports geolocation for weather updates based on the user's current location.

---

## 🌟 Features

- 🔍 **Search any city**: View real-time weather data including temperature, humidity, and conditions.
- ⭐ **Favorites**: Save and view favorite cities with live weather updates.
- 🌡️ **Unit Toggle**: Switch between Celsius and Fahrenheit.
- 📅 **5-Day Forecast (Optional)**: View a detailed 5-day weather forecast.
- 📍 **Geolocation Support**: Get weather updates for your current location.
- 🌙 **Dark Mode**: Toggle between light and dark themes for a better user experience.

---

## 🛠️ Technologies Used

- **Frontend**: React (using [Vite](https://vitejs.dev/) for fast development)
- **Styling**: Tailwind CSS
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Version Control**: Git & GitHub

---

## 📅 Plan 

| Phase | Description | 
|-------|-------------|
| **Phase 1** | Project Setup & Basic Structure | 
| **Phase 2** | Basic App Functionality (API, Search, Display) | 
| **Phase 3** | Advanced Features (Favorites, Unit Toggle, Forecast, Dark Mode) | 
| **Phase 4** | Polish & Optimization (Responsive Design, Error Handling) |
| **Phase 5** | Deployment & GitHub |
| **Phase 6** | Optional Features (Geolocation, Final Testing, Docs) |

---

## 📅 Phase-wise Project Breakdown

---

### 🚧 Phase 1: Project Setup & Basic Structure 

**Goal:** Get the development environment ready and create the skeleton of the app.

#### ✅ Tasks:
- **Initialize project using Vite with React:**
  ```bash
  npm create vite@latest weather-app -- --template react
  cd weather-app
  npm install
- **Set up Tailwind CSS:**
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

Configure tailwind.config.js and add Tailwind directives to index.css.
- **Set up file structure:**
  - /components – Reusable components (e.g., SearchBar, WeatherCard, Toggle)
  - /pages – Page-level components (e.g., HomePage, FavoritesPage)
  - /utils – API calls, helper functions
  - /assets – Icons, images (optional)
- **Initialize Git repository:**
  ```bash
  git init
  git remote add origin https://github.com/your-username/weather-app.git

## 🌤️ Phase 2: Basic App Functionality 

**Goal:** Connect to the OpenWeatherMap API and display weather data.

#### ✅ Tasks:

- 🔧 **SearchBar Component**: Created and styled a responsive `SearchBar` component using Tailwind CSS.
- 🔧 **API Integration**: Connected the app to the OpenWeatherMap API using `axios` to fetch current weather data based on user input.
- 🔧 **WeatherCard Component**: Built a `WeatherCard` component to display:
  - Temperature
  - Weather condition (with icon)
  - Humidity and location info
- 🔧 **Loading & Error Handling**: 
  - Displayed a loading spinner while fetching data
  - Handled errors like city not found or API failure with user-friendly messages
- 🧪 **Testing**:
  - Searched for multiple cities
  - Verified correct weather data rendered for each

---

## 🌈 Phase 3: Advanced Features & UI Enhancements 

**Goal:** Add interactivity and personalization features for a better user experience.

#### ✅ Features Implemented:

- ⭐ **Favorites System**:
  - Added a “Save to Favorites” button
  - Stored favorite cities in `localStorage`
  - Created a `FavoritesDashboard` to display saved locations

- 🌡️ **Unit Toggle (°C/°F)**:
  - Implemented a toggle button to switch between Celsius and Fahrenheit
  - Adjusted the conversion manually within the app logic

- 📅 **5-Day Forecast** *(Optional but Added)*:
  - Used OpenWeatherMap's forecast API
  - Displayed future weather in horizontally scrollable `ForecastCards`

- 🌙 **Dark Mode**:
  - Added dark mode support using Tailwind’s `dark` class strategy
  - Included a toggle button to switch themes
  - Persisted theme preference in `localStorage`

---
## 📱 Phase 4: Polish & Optimization (2–3 hours)
**Goal:** Finalize layout, improve responsiveness, and handle edge cases.

#### 🧼 Tasks:
- 💡 Make app responsive with Tailwind utilities.
- ⚠️ Add error handling:
  - Empty search input
  - Invalid city name
  - API request failure
- 🔄 Refactor components:
  - Ensure modular, readable code
  - Use React hooks effectively (useState, useEffect, custom hooks)
- 🧪 Perform manual testing across devices and screen sizes.

---

## 🚀 Phase 5: Deployment & GitHub Integration 
**Goal:** Make the app live and publish code.
#### ✅ Tasks:
- Push code to GitHub:
  ```bash
  git add .
  git commit -m "Initial weather app"
  git push -u origin main

--- 

## 🧪 Phase 6: Optional Features & Final Testing 
**Goal:** Add geolocation, finalize UI/UX, and polish code.
#### 🔍 Final Additions:
- 📍 Geolocation Support:
  - Use navigator.geolocation to get user's location.
  - Fetch and display local weather.
- 🔁 Final Testing:
  - Responsive UI on mobile/tablet
  - Favorites persist after reload
  - Unit toggle and forecast work as expected
- 🧼 Clean-up:
  - Remove all console.log statements
  - Use .env for API keys
  - Add alt tags and accessibility improvements
- Final commit, push, and publish 🚀

