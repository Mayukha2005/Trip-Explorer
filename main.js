document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const resultsSection = document.getElementById('results');

    // Form submission handler
    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const destination = document.getElementById('destination').value;
        const budget = document.getElementById('budget').value;
        const duration = document.getElementById('duration').value;

        try {
            const plan = await generateTravelPlan(destination, budget, duration);
            displayResults(plan);
        } catch (error) {
            showError('Unable to generate travel plan. Please try again.');
        }
    });

    // Display results in the results section
    function displayResults(plan) {
        resultsSection.innerHTML = `
            <div class="results-container">
                <h3>Your Travel Plan for ${plan.destination}</h3>
                <div class="plan-details">
                    <p><i class="fas fa-map-marker-alt"></i> Destination: ${plan.destination}</p>
                    <p><i class="fas fa-wallet"></i> Budget: $${plan.budget}</p>
                    <p><i class="fas fa-clock"></i> Duration: ${plan.duration}</p>
                </div>
                <div class="recommendations">
                    ${generateRecommendationsHTML(plan.recommendations)}
                </div>
            </div>
        `;
    }

    // Generate HTML for recommendations
    function generateRecommendationsHTML(recommendations) {
        return recommendations.map(item => `
            <div class="recommendation-item">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p class="price">Estimated Cost: $${item.cost}</p>
            </div>
        `).join('');
    }

    // Error handler
    function showError(message) {
        resultsSection.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>${message}</p>
            </div>
        `;
    }
});