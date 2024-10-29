# Meal Reminder App

## Project Description

The Meal Reminder App is a web application that helps users maintain a healthy eating schedule by reminding them to eat meals at regular times (breakfast, lunch, and dinner). Additionally, it provides healthy meal suggestions for each meal using the Edamam Recipe Search API, promoting variety in diet and easy access to nutritious recipes. This app is designed for individuals who have busy schedules and may forget to eat or need inspiration for healthy meal choices.

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/meal-reminder-app.git
   cd meal-reminder-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   The application should now be running at `http://localhost:3000`.

> **Note**: This project requires an Edamam API key. Add the `APP_ID` and `APP_KEY` directly in the `MealSuggestions.jsx` component for each API request.

## API Information

This app uses the [Edamam Recipe Search API](https://developer.edamam.com/) to retrieve meal suggestions for breakfast, lunch, and dinner. The `MealSuggestions` component makes asynchronous requests to the API based on the `mealType` (breakfast, lunch, or dinner). Each meal suggestion includes the recipe name, image, calories, and a link to view the full recipe.

**API Integration**:
- **File**: `MealSuggestions.jsx`
- **Endpoints**: Requests are made with the parameters `q=healthy` and `mealType` to get meal suggestions for each type.
- **Usage**: Provides variety in meal options and nutritional information to the user.

## AI Assistance Credits

This project was partially developed with the assistance of ChatGPT, which contributed to several parts:
- **Reminder Logic**: ChatGPT helped implement the `useEffect` hook in `MealReminder.jsx` for checking meal times and updating reminder messages.
- **API Integration**: Assisted with the API fetching logic in `MealSuggestions.jsx` and error handling to ensure reliable responses.
- **Project Structure and Organization**: Recommended file organization and separation of concerns for better code modularity.
  
Each AI-assisted section was reviewed and documented in the code to ensure full understanding and functionality.

---

Feel free to update the placeholder GitHub URL with the actual repository link before finalizing the README file. Let me know if you need further customization!