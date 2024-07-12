# 🎉 Customer Transactions Dashboard 🚀

## Project Description 📊

Welcome to the Customer Transactions Dashboard! This project is a web application that fetches data from an API to retrieve customer and transaction information. It displays the data in a data table with filtering and sorting capabilities and provides detailed views and graphical analyses of customer transactions. The application includes the following exciting features:

- 🔍 **Data Table**: View customers and transactions with filtering by name or transaction amount and sorting by transaction amount.
- 📋 **Customer Details**: Detailed view of each customer's transactions.
- 📈 **Customer Graphs**: Graph showing the transactions of a selected customer.
- 📊 **Analytics Page**:
  - Transactions across different years, displaying daily transactions for 2022, 2023, and 2024.
  - Peak transactions for each month across the years.
  - Total transactions per month for each year.

## Technologies Used 💻

- ⚛️ **React JS with TypeScript**: For building the user interface.
- 🎨 **Tailwind CSS**: For styling the application.
- 💎 **ShadCN/UI**: For UI components.
- 🌐 **Zustand**: For state management.
- 🔔 **React Hot Toast**: For notifications and alerts.
- 🌐 **Axios**: For fetching data from the API.
- 🔀 **Faker.js**: For generating random data.

## Getting Started 🚀

### Prerequisites 📋

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation 🛠️

1. Clone the repository:
   ```sh
   git clone https://github.com/moazelgandy2/route-task.git
   ```
2. Navigate to the project directory:
   ```sh
    cd route-task
   ```
3. Install the dependencies:

   ```sh
   npm install

   #or

   yarn install
   ```

### Running the Application 🚀

For development (USE JSON-SERVER):

1. Start the JSON server:

   ```sh
    npx json-server db.json
   ```

   by default, the server will run on port 3000.

2. Start the React application:

   ```sh
    npm run dev

    # or

    yarn dev
   ```

   The application will run on port 5173.

3. For production (USING express JS):
   follow the instructions in this repo: [route-task-server](https://github.com/moazelgandy2/route-task-server)

### Usage 📝

1. Open your browser and go to `http://localhost:5173`.
2. Use the data table to view, filter, and sort customer transactions.
3. Navigate to the customer details page to see individual transactions and graphs.
4. Visit the analytics page to view detailed graphical analyses of customer transactions.

### Project Structure 📁

The project structure is as follows:

```sh
src/
|-- components/ # Reusable UI components
|-- pages/ # Application pages
|-- services/ # API services
|-- store/ # State management
|-- App.tsx # Main application component
|-- main.tsx # Entry point
```

### Contact 📧

For any questions or feedback, feel free to reach out to me at **contact@moazelgandy.tech**
