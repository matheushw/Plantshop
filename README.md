# Web Development Project 
Professor Dilvan de Abreu Moreira

## Group 12
Frederico Bulhões de Souza Ribeiro - **11208440**   
Maria Eduarda Kawakami Moreira - **11218751**  
Matheus Barcellos de Castro Cunha - **11208238**

# Plant Shop
The website was designed to be a plant e-commerce. Here users will be able to find any plant they want, being it flowers or house plants. It's also possible to rent flowers for a special ocasion and get a decoration service. 
## Requirements
* The system will have 2 types of users: Clients and Administrators
  * Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.
  * Customers are users who access the system to buy products/services.
* The admin record includes, at least: name, id, phone, email.
* Each customer's record includes, at least: name, id, address, phone, email.
* Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.
* The store will sell plants and decoration services.
* Selling Products: Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
* Product Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
* The system must provide accessibility requirements and provide good usability. The system must be responsive.
* One service provided is a flower decoration rent, where the customer can check all the available time for decoration and rent of a specific theme (for example, a wedding or a birthday party) for the period of time needed.  

## Project Description

### Flow Diagram
![Diagrama de fluxo](https://i.imgur.com/IhhWaRW.png)

### Data storage
Our project will store users data such as password and email in a specific database. The products info will also be stored in an dedicated database.

### Screens
#### Homepage
This page contains an overview of our products. There we can check out the products on sale and some product categories.

#### Profile Page
This page shows user's infos as so as its orders. Here users will be able to edit its infos (not available now).

#### Admin Page
This page shows admin's infos. Here admins will be able to go to the inventory management page, and also will be able to go the admin register page, to register another admin. 

#### Cart
The page contains all the current products the customer put in the cart. For each product, there is the option to delete it and to increase the amount (the former is not included in the mockup).

#### Product Description
This spage cointains the description of the product and its price, also the option to add to the cart. The customer can go to the page by clicking in the product.

#### Category Page
There are four pages of categories of plants: plants (in general), flowers, bouquets and pots. In this pages, we have all of the plants in the store that fit into that category. 

#### Login
The page of login has a form, that requires the email and the password. There is also the option to go to the sign up page, if the user doesn't have an account. 

#### Sign up
The page of sign up has a form, that requires the name, email and the password. There is also the option to go to the login page, if the user already has an account. 

#### Rent Flower *(Special Feature)*
In this page users will be able to schedule a flower rent.

## Comments About the Code
Our entire website is curentily built using HTML5 and CSS3.

## Test Plan

## Test Results

## Build Procedures

## Problems

## Comments
