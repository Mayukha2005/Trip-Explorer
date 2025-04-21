function generateTravelPlan(destination, budget) {
    // Sample data for demonstration purposes
    const destinations = [
        { name: "Paris", budgetRange: [1000, 3000], activities: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"] },
        { name: "New York", budgetRange: [1500, 4000], activities: ["Statue of Liberty", "Central Park", "Broadway Show"] },
        { name: "Tokyo", budgetRange: [1200, 3500], activities: ["Shibuya Crossing", "Tokyo Tower", "Sushi Making Class"] },
        { name: "Sydney", budgetRange: [1300, 3200], activities: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge Climb"] }
    ];

    const selectedDestination = destinations.find(dest => dest.name.toLowerCase() === destination.toLowerCase());

    if (selectedDestination) {
        if (budget >= selectedDestination.budgetRange[0] && budget <= selectedDestination.budgetRange[1]) {
            return {
                destination: selectedDestination.name,
                activities: selectedDestination.activities
            };
        } else {
            return {
                error: "Budget is not sufficient for this destination."
            };
        }
    } else {
        return {
            error: "Destination not found."
        };
    }
}

// Example usage
const userDestination = "Paris";
const userBudget = 2500;
const travelPlan = generateTravelPlan(userDestination, userBudget);
console.log(travelPlan);