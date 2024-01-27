<div align="center">
   <img src="https://github.com/jeadamek/rocketMovies_backend/assets/78454317/bee3ecf0-0193-4c38-9bec-004d1a679227" width="80px"/>
</div>
<h3 align="center">🚀 Final Project | Frontend - Explorer</h3>

<div align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jeadamek/food-explorer-frontend">

  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/jeadamek/food-explorer-frontend">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jeadamek/food-explorer-frontend?color=%231280BF">

 <a href="https://food-explorer-deploy.vercel.app/" target="_blank"> ▶️ Access Deploy </a>
</div>  
</br>

# Food Explorer App

This is the final project of Explorer course at the [Rocketseat School](https://www.rocketseat.com.br/). To access the entire course assignments click [this link](https://github.com/jeadamek/explorer-rocketseat). 

The task of this project involved creating the user interface of an application using the ReactJs library. Food Explorer front-end works in conjunction with the [Food Explorer API](https://github.com/jeadamek/food-explorer-api). 

Food Explorer is a responsive web application that allows admins to manage dishes, orders, and clients, while clients can create accounts, place orders, and manage their profiles.

The project's preview can be seen below:<br/>

### Desktop


![Food Explorer preview desktop client](https://github.com/jeadamek/food-explorer-frontend/assets/78454317/0883613c-c6c7-41ae-9894-8c2689e8f7a8)
<!-- ![Food Explorer preview desktop admin](https://github.com/jeadamek/food-explorer-frontend/assets/78454317/b45f78a8-6fa4-4347-b65e-93ea776a32b0) -->

### Tablet and Mobile

<div>
  <img src="https://github.com/jeadamek/food-explorer-frontend/assets/78454317/c21e1b67-ab9e-4460-ac2c-49fe8bcef231" height='600' alt="Food Explorer preview mobile admin">

</div>

<!-- ### Tablet 

  <img src="https://github.com/jeadamek/food-explorer-frontend/assets/78454317/41a868e9-69e1-412a-a32e-5a409a03e1c5" height='400' alt="Preview"> -->

## ✨ Features

- Admin can add new dishes
- Admin can edit existing dishes
- Admin can list and update orders
- Clients can create an account
- Clients can update their profiles
- Clients can place orders
- Clients can check the status of their orders
- Clients can mark dishes as favorites
- Search functionality to find dishes by name or ingredient


## 👩‍💻 Learnings

While working on the Food Explorer project, I could practice and study the following topics:

- Using Vite
- Styling and Formatting with Styled Components
- Responsive Web Design
- State Management with React Context
- Hooks and User Authentication
- Error Handling and Logging
- Building an Application using ReactJS Components
- Navigation with React Router Dom
- Working with APIs using Axios
- Data Immutability
- Promises with Async/Await
- Route Mapping
- Asynchronous Operations and Promises
- Object Orientation
- Data Types in JavaScript
- Functions Callbacks
- Context API
- ES6 Modules

## 🛠️ Technologies

<div style="display: inline_block"><br/>
  <img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />  
  </br>
  </br>
  <img align="center" alt="Reactjs" src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge" />
  </br>
  </br>
  <img align="center" alt="Git" src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white" />
</div>
</br>


## 🚀 Getting started

To run the Food Explorer application locally, follow these steps:

First, you need the app's API to run the application locally:

1. Clone the repository to your local machine.
`git clone git@github.com:jeadamek/food-explorer-api.git`
2. Navigate to the project directory `cd food-explorer-api`
3. Install the dependencies `npm install`
4. Run the development server `npm run dev`
5. Access the application at [http://localhost:3333](http://localhost:3333) in your browser.


After that, you can launch the Food Explorer front-end application by following these instructions:

1. Clone the repository to your local machine.
`git clone git@github.com:jeadamek/food-explorer-frontend.git`
2. Navigate to the project directory `cd food-explorer-frontend`
3. Install the dependencies `npm install`
4. Run the development server `npm run dev`
5. Access the application at [http://localhost:3030](http://localhost:3030) in your browser.


## 💻 Usage
Access the application by clicking on this link [Food Explorer](#)

1. ### Admin Actions

   - To access the admin interface, you need to be authenticated as an admin. If you haven't created an admin account, you can manually set the `isAdmin` field to `true` in the database for your user account. For this the link won't work, you must clone the repository in your local machine.

   - Once logged in as an admin, you can perform the following actions:

     - **Add a New Dish**: Click on the "Add Dish" button on the admin dashboard. Fill in the required details such as dish name, description, ingredients, and an optional image. Click "Save" to add the new dish to the menu.

     - **Edit an Existing Dish**: On the admin dashboard, find the dish you want to edit in the dish list. Click on the dish card to open the edit form. Modify the necessary fields and click "Save" to update the dish details.

     - **List Orders**: On the admin dashboard, navigate to the "Orders" tab to view a list of all orders. The orders are displayed in a table format, showing the order ID, client details, order status, and total amount.

     - **Update Orders**: From the admin order list, you can update the status of an order by selecting the desired status from the dropdown menu in the corresponding row. Clicking "Save" will update the order status.

2. ### Client Actions

   - To access client features, you need to create an account or use an existing account.

   - Once logged in as a client, you can perform the following actions:

     - **Update Profile**: Click on the "Profile" link in the navigation bar to access your profile page. Here, you can update your name, email, and password. Make the necessary changes and click "Save" to update your profile.

     - **Place an Order**: Browse the menu on the home page and select a dish you want to order. Click on the dish card to view details, and use the quantity stepper to set the desired quantity. Click "Add" to add the dish to your cart. Repeat this process for any other dishes you want to order.

     - **Check Order Status**: On the "Order History" page, you can view a list of your previous orders. The orders are displayed in reverse chronological order, with the most recent order appearing at the top. Each order shows the order status, items ordered, and the date of the order.

     - **Mark Dishes as Favorites**: On the home page, click on the heart icon on a dish card to mark it as a favorite. The heart icon will change to a filled heart, indicating that the dish is now a favorite. To remove a dish from your favorites, click on the filled heart icon again.

     - **Search for Dishes**: Use the search input on the home page to find dishes by name or ingredient. The results will be dynamically updated as you type, making it easy to discover specific dishes.


## 🎨 Layout
🔗 [View on Figma](https://www.figma.com/file/c8uPpa1BM4s2WtlmKOl1SV/food-explorer-v2-(Community)?type=design&node-id=201%3A1532&t=UKYfOVTwYGxe2x1j-1)


## 📝 License

This project is under the MIT license. See the file [LICENSE](LICENSE) for more details.


## 🎯 Author

<p>
	Made by Jessica Adamek. Connect with me! 	
</p>
<div>
  <a href="https://www.linkedin.com/in/jessica-adamek/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="A linkedin badge">
  </a>  
</div>
