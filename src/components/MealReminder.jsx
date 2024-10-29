import React, { useState, useEffect } from 'react';
import MealSuggestions from './MealSuggestions';

function MealReminder() {
    const [message, setMessage] = useState("Don't forget to eat!");

    useEffect(() => {
        const checkMealTime = () => {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();

            if (currentHour === 7 && currentMinute === 0) {
                setMessage("It's time for breakfast!");
            } else if (currentHour === 12 && currentMinute === 30) {
                setMessage("It's time for lunch!");
            } else if (currentHour === 18 && currentMinute === 0) {
                setMessage("It's time for dinner!");
            }
        };

        // Set up a timer to check the time every minute
        const intervalId = setInterval(checkMealTime, 60000); // 60000 ms = 1 minute

        // Run the check immediately in case it's already mealtime
        checkMealTime();

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h2>Meal Reminder</h2>
            <p>{message}</p>

            {/* Meal Suggestions for Breakfast, Lunch, and Dinner */}
            <MealSuggestions mealType="breakfast" />
            <MealSuggestions mealType="lunch" />
            <MealSuggestions mealType="dinner" />
        </div>
    );
}

export default MealReminder;

/*

ChatGPT helped me on the following portions of my code:

useEffect Hook Implementation:
    - Set up the useEffect hook to manage meal reminders based on the current time.

checkMealTime Function:
    - Created the checkMealTime function to check the current hour and minute.
    - Matched the time to preset mealtimes: 7:00 AM (breakfast), 12:30 PM (lunch), and 6:00 PM (dinner).
    - Updated the message state with the relevant meal reminder.

setInterval for Regular Checks:
    - Added setInterval within useEffect to run checkMealTime every minute (60,000 ms).

Immediate Execution of checkMealTime:
    - Executed checkMealTime immediately upon component load to ensure timely reminders without waiting for the interval.

Cleanup with clearInterval:
    - Used clearInterval to clean up the interval on component unmount, preventing memory leaks.


*/