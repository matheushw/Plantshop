# Web Development Project 
Professor Dilvan de Abreu Moreira
SCC0219 - Intro to Web Development

## Group 12 
Frederico Bulhões de Souza Ribeiro - **11208440**   
Maria Eduarda Kawakami Moreira - **11218751**  
Matheus Barcellos de Castro Cunha - **11208238**

# Plant Shop 🌱🌼💐 
The website was designed to be a plant e-commerce. Here users will be able to find any plant they want, being it flowers, vases, bouquets or house plants. It's also possible to rent flowers for a special ocasion. 
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

Our website is running at https://fredbr.com/plantshop

### Flow Diagram

![Diagrama de fluxo](https://i.imgur.com/mlaWlqZ.png)

### Data storage
Our project will store users data such as password and email in a specific database. The products info will also be stored in an dedicated database. 

### Limitations
In this phase of the project, the application is being saved **locally** so it's only possible to simulate for a **single client** the server database functionality.

### Screens
#### Homepage
This page contains an overview of our products. There we can check out the products on sale and some product categories. In the top, we have a slider showing the products on sale. 

#### Profile Page :
This page shows user's infos in the left and its previous and current orders in the right. Users will be able to edit its infos, except password.

#### Admin Page
This page shows admin's infos. Admins will be able to go to the inventory management page, and also will be able to go the admin register page, to register another admin. New administrators can only be added by another administrators. In our application, there is already an admin that you can test with the email: **dilvan@gmail.com** and the password: **123456**.

#### Cart
The page contains all the current products the customer put in the cart. For each product, there is the option to delete it and to increase the amount. It is required to be logged in to finish the purchase.

#### Product Description
This page cointains the description of the product, its price and the quantity available, also the option to add to the cart. The customer can go to this page by clicking in the product.

#### Register Admin
In this page, an admin will be able to register another store admin.

#### Category Page
There are four pages of categories of plants: plants (in general) 🌱, flowers 🌷, bouquets 💐 and pots 🌳. In this pages, we have all of the plants in the store that fit into that category. 

#### Login
The page of login has a form, that requires the email and the password. There is also the option to go to the sign up page, if the user doesn't have an account. 

#### Sign up
The page of sign up has a form, that requires the name, email, phone number and the password. There is also the option to go to the login page, if the user already has an account. 

#### Rent Flower (Special Feature)
In this page users will be able to schedule a flower rent.

#### Inventory
In the Admin Page, there is the option to manage the inventory. In this page, all the products will be displayed and some funcionionalities will be available (add, update and remove products). 

## Comments About the Code
Our entire website is curentily built using HTML5, CSS3 and React.

## Test Plan

We plant to test the all user pages, including:

- Home page
- Product pages
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

## Test Results

### Login Page

![Página de Login](https://imgur.com/3EZtl1U.png)

#### Error in Login
![Página de Erro em Login](https://imgur.com/oXShH54.png)

#### Success in Login
![Página de Sucesso em Login](https://imgur.com/LowlzLK.png)

### Register Page

![Página de Cadastro](https://imgur.com/8tar1t1.png)

#### Success in Register
![Página de Sucesso em Cadastro](https://imgur.com/t58Cz2a.png)

### Log Out

After logged in, an icon for loggin out will appear in the far right in the nav bar:

![Log Out](https://imgur.com/B9EtDYw.png)


## Build Procedures

### Software

We're using the following versions of node and npm:

    $ node -v
    v10.24.1
    $ npm -v
    6.14.12

Install them using your favorite software, like nvm or your package manager.

### Installation

To install, run the following:

    $ cd ps
    $ npm install
    $ npm run-script build

Make sure the version of node and npm are the exact same as mentioned above.

To run the server you will also need the serve package. To install it, run:

    $ npm install -g serve

### Running

After running the installation procedures, run the following inside the ps folder:

    $ serve build

Now you will have a node instance running at http://localhost:5000!

## Problems

## Comments
