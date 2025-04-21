# Waygo Tourism Project

Welcome to the Waygo Tourism project! This website is designed to help users generate travel plans and discover places based on their chosen destination and budget.

## Project Structure

The project is organized as follows:

```
waygo-tourism
├── src
│   ├── index.html          # Main HTML file
│   ├── css
│   │   ├── style.css       # Main styles
│   │   └── responsive.css   # Responsive styles
│   ├── js
│   │   ├── main.js         # Main JavaScript file
│   │   ├── destinations.js  # Destination data management
│   │   └── planner.js      # Travel plan generation
│   ├── data
│   │   └── destinations.json # Destination data
│   └── components
│       ├── header.html     # Header component
│       ├── footer.html     # Footer component
│       └── search-form.html # Search form component
├── package.json            # NPM configuration
└── README.md               # Project documentation
```

## Features

- **Search Functionality**: Users can input their desired destination and budget to receive tailored travel plans.
- **Responsive Design**: The website is designed to be fully responsive, ensuring a great user experience on all devices.
- **Dynamic Content**: The site fetches destination data from a JSON file, allowing for easy updates and management of travel information.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd waygo-tourism
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Open `src/index.html` in your web browser to view the project.

## Usage

- Enter your desired destination and budget in the search form.
- Click the search button to generate a list of recommended travel plans and activities.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.