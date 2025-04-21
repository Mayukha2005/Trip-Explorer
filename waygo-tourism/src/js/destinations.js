function fetchDestinations() {
    return fetch('data/destinations.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function filterDestinations(destinations, budget) {
    return destinations.filter(destination => {
        return destination.budgetRange.min <= budget && destination.budgetRange.max >= budget;
    });
}

function displayDestinations(destinations) {
    const destinationList = document.getElementById('destination-list');
    destinationList.innerHTML = '';

    destinations.forEach(destination => {
        const listItem = document.createElement('li');
        listItem.textContent = `${destination.name}: ${destination.recommendedActivities.join(', ')}`;
        destinationList.appendChild(listItem);
    });
}

export { fetchDestinations, filterDestinations, displayDestinations };