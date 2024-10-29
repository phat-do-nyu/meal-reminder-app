import React, { useState, useEffect } from 'react';

function MealSuggestions({ mealType }) {
    const [mealOptions, setMealOptions] = useState([]); // Initialize as empty array
    const APP_ID = "7d05388b"; 
    const APP_KEY = "b683401a426f376412a55623db33e7e5";

    useEffect(() => {
        const fetchMealOptions = async () => {
            try {
                const response = await fetch(
                    `https://api.edamam.com/search?q=healthy&mealType=${mealType}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3`
                );
                const data = await response.json();
                setMealOptions(data.hits || []); // Fallback to empty array if data.hits is undefined
            } catch (error) {
                console.error(`Error fetching ${mealType} options:`, error);
                setMealOptions([]); // Set as empty array if fetch fails
            }
        };

        fetchMealOptions();
    }, [mealType]);

    return (
        <div>
            <h3>Today's {mealType.charAt(0).toUpperCase() + mealType.slice(1)} Options</h3>
            <ul>
                {mealOptions.length > 0 ? (
                    mealOptions.map((meal, index) => (
                        <li key={index}>
                            <p><strong>{meal.recipe.label}</strong></p>
                            <img src={meal.recipe.image} alt={meal.recipe.label} style={{ width: '100px' }} />
                            <p>Calories: {Math.round(meal.recipe.calories)}</p>
                            <a href={meal.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
                        </li>
                    ))
                ) : (
                    <p>No meal options available.</p>
                )}
            </ul>
        </div>
    );
}

export default MealSuggestions;
