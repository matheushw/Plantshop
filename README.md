# Web Development Project 
Professor Dilvan de Abreu Moreira  
SCC0219 - Intro to Web Development

## Group 12 
Frederico Bulhões de Souza Ribeiro - **11208440**   
Maria Eduarda Kawakami Moreira - **11218751**  
Matheus Barcellos de Castro Cunha - **11208238**

# Plant Shop 🌱🌼💐 
The website was designed to be a plant e-commerce. Here users will be able to find any plant they want, being it flowers, pots, bouquets or house plants. It's also possible to rent flowers for a special ocasion. 

## Requirements
* The system will have 2 types of users: Clients and Administrators:
  * Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.
  * Customers are users who access the system to buy products/services.
* The admin record includes, at least: name, id, phone, email, address.
* Each customer's record includes, at least: name, id, address, phone, email.
* Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.
* The store will sell plants and decoration services.
* Selling Products: Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
* Product Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
* The system must provide accessibility requirements and provide good usability. The system must be responsive.
* One service provided is a flower decoration rent, where the customer can check all the available time for decoration and rent of a specific theme (for example, a wedding or a birthday party) for the period of time needed.  

## Project Description

Our website is running at https://plantshop.club/

### Flow Diagram

![Diagrama de fluxo](https://i.imgur.com/mlaWlqZ.png)

### Data storage
Our project will store all users data such as password, email, name, phone number and address in a specific database. The products info will also be stored in a dedicated database.
We are using mongodb to store all the data we need. 

### Limitations
Right now, the website is fully functional and is working for several clients.

### Screens
#### Homepage
This page contains an overview of our products. There we can check out the products on sale and some product categories. In the top, we have a slider showing the products on sale.

#### Login
The page of login has a form, that requires the email and the password. There is also the option to go to the sign up page, if the user doesn't have an account. 

#### Sign up
The page of sign up has a form, that requires the name, email, phone number and the password. There is also the option to go to the login page, if the user already has an account. 

#### Profile Page
This page shows user's infos in the left and its previous and current orders in the right. Users will be able to edit its infos, except password.

#### Admin Page
This page shows admin's infos. Admins will be able to go to the inventory management page, and also will be able to go the admin register page, to register another admin. New administrators can only be added by another administrators.   
In our application, there is already an admin that you can test with the email: **dilvan@gmail.com** and the password: **123456**.

#### Register Admin
In this page, an admin will be able to register another store admin.

#### Inventory
In the Admin Page, there is the option to manage the inventory. In this page, all the products will be displayed and some funcionionalities will be available (add, update and remove products). 

#### Cart
The page contains all the current products the customer put in the cart. For each product, there is the option to delete it, to increase and decrease the amount. It is required to be logged in to finish the purchase.

#### Product Description
This page cointains the description of the product, its price and the quantity available, also the option to add to the cart. The customer can go to this page by clicking in the product.

#### Category Page
There are four pages of categories of plants: plants (in general) 🌱, flowers 🌷, bouquets 💐 and pots 🌳. In this pages, we have all of the plants in the store that fit into that category. 

#### Rent Flower (Special Feature)
In this page users will be able to schedule a flower rent, the rents will appear in the cart.


## Comments About the Code
Our entire website is curentily built using HTML5, CSS3 and React. For managing the state of the application, we used Redux. We have chosen to use Typescript integration with React since we believe that typing our variables, functions, etc. would avoid headaches related to the project size.  

## Test Plan

We plant to test the all user pages, including:

- Home page
- Product pages
  - Plants page 
  - Flowers page
  - Bouquets page
  - Pots page
- Rent page
- Login page
- Register page
- User profile page
- Shopping cart page
- Administrator page

Besides that, we will test all major functionalities, including:

- General actions:
  - Log in
  - Log out
- User actions:
  - Adding product to cart
  - Removing product from cart
  - Creating new user
  - Scheduling rent
- Admin actions:
  - Adding items to stock 
  - Adding new item to stock 
  - Removing items from stock
  - Adding new administrator

## Test results
Please check our [wiki](https://github.com/matheushw/Plantshop/wiki/Tests) for the test results!

## Build Procedures
Specific build procedures regarding the client side and the server side are inside of their's respective directories.

## Problems
No problems.

## Comments
Our group never had to deal with such a big project like this one. Also, we have never developed with React.
