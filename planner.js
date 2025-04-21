async function generateTravelPlan(destination, budget, duration) {
    // Validate inputs
    if (!destination || !budget || !duration) {
        throw new Error('Missing required parameters');
    }

    // Get destination information
    const destInfo = destinations.getDestinationInfo(destination);
    if (!destInfo) {
        throw new Error('Destination not found');
    }

    // Calculate daily budget
    const durationDays = getDurationInDays(duration);
    const dailyBudget = budget / durationDays;

    // Generate recommendations based on budget and duration
    const recommendations = generateRecommendations(destInfo, dailyBudget, durationDays);

    return {
        destination: destination,
        budget: budget,
        duration: duration,
        recommendations: recommendations
    };
}

function getDurationInDays(duration) {
    const durationMap = {
        'weekend': 2,
        'week': 7,
        'fortnight': 14,
        'month': 30
    };
    return durationMap[duration] || 7;
}

function generateRecommendations(destInfo, dailyBudget, durationDays) {
    let recommendations = [];
    const { attractions, accommodations, transportationCosts } = destInfo;

    // Calculate accommodation recommendations
    const accommodation = findSuitableAccommodation(accommodations, dailyBudget);
    if (accommodation) {
        recommendations.push({
            name: `Stay at ${accommodation.name}`,
            description: `Recommended accommodation within your budget`,
            cost: accommodation.costPerNight * durationDays
        });
    }

    // Calculate attractions recommendations
    const suitableAttractions = attractions.filter(att => att.cost <= dailyBudget * 0.3);
    suitableAttractions.forEach(att => {
        recommendations.push({
            name: att.name,
            description: `Popular attraction, approximately ${att.duration} hours`,
            cost: att.cost
        });
    });

    // Add transportation recommendation
    const transport = recommendTransportation(transportationCosts, dailyBudget);
    recommendations.push({
        name: `Transportation: ${transport.type}`,
        description: `Daily transportation option`,
        cost: transport.cost * durationDays
    });

    return recommendations;
}

function findSuitableAccommodation(accommodations, dailyBudget) {
    return accommodations.find(acc => acc.costPerNight <= dailyBudget * 0.5);
}

function recommendTransportation(transportationCosts, dailyBudget) {
    if (dailyBudget >= transportationCosts.rental) {
        return { type: 'Car Rental', cost: transportationCosts.rental };
    } else if (dailyBudget >= transportationCosts.taxi) {
        return { type: 'Taxi', cost: transportationCosts.taxi };
    } else {
        return { type: 'Public Transportation', cost: transportationCosts.public };
    }
}