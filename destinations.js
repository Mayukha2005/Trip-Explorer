const destinations = {
    // Sample destination data
    database: {
        "Paris": {
            country: "France",
            attractions: [
                {
                    name: "Eiffel Tower",
                    cost: 25,
                    duration: 3,
                    category: "landmark"
                },
                {
                    name: "Louvre Museum",
                    cost: 20,
                    duration: 4,
                    category: "culture"
                }
                // Add more attractions
            ],
            accommodations: [
                {
                    name: "Budget Hostel",
                    costPerNight: 30,
                    category: "budget"
                },
                {
                    name: "Mid-range Hotel",
                    costPerNight: 100,
                    category: "moderate"
                }
                // Add more accommodations
            ],
            transportationCosts: {
                public: 10,
                taxi: 30,
                rental: 50
            }
        }
        // Add more destinations
    },

    // Get destination information
    getDestinationInfo(destination) {
        return this.database[destination] || null;
    },

    // Check if destination exists
    isValidDestination(destination) {
        return destination in this.database;
    }
};