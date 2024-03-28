# MetaLab App

MetaLab is a web application that integrates various functionalities using React JS and relevant libraries. It includes features such as a responsive navigation bar, population data visualization, real-time cryptocurrency prices, and MetaMask integration.

## Features

### Task-1: Responsive Navigation Bar
- The navigation bar collapses into a hamburger menu on smaller screens.
- Highlights the active navigation item.

### Task-2: Population Data Visualization
- Utilizes React JS and Chart.js library to display population data for different nations.
- Provides appropriate labels, legends, and axis titles for the graph.
- Data is fetched from the [DataUSA API](https://datausa.io/api/data?drilldowns=Nation&measures=Population).

### Task-3: Real-Time Cryptocurrency Prices
- Fetches cryptocurrency prices asynchronously using React's lifecycle methods or hooks.
- Displays price of the crypto in various currencies
- Designed visually appealing cards to showcase the cryptocurrency prices.
- Data is obtained from the [CoinDesk API](https://api.coindesk.com/v1/bpi/currentprice.json).

### Task-4: MetaMask Integration
- Utilizes the Web3 JS library for MetaMask integration.
- Displays appropriate feedback/messages for successful/unsuccessful wallet connection attempts.
- Ensures compatibility with modern browsers and MetaMask extension.

