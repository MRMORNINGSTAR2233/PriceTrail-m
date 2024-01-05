# PriceTrail: A Next.js Web Scraping Application for Price Tracking

## Introduction

PriceTrail is a web scraping application built using Next.js that allows users to track the prices of e-commerce products. It notifies users when the price drops or when a product is back in stock. This README file provides a comprehensive guide to help you install, set up, and run the PriceTrail application locally on your machine.

## Prerequisites

Before you begin, ensure that you have the following prerequisites installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

## Installation

To install the PriceTrail application, follow these steps:

1. Open your terminal and navigate to the desired location where you want to store the project.
2. Clone the PriceTrail repository using the following command:

```bash
git clone [repository_url]
Navigate to the cloned repository directory:
git clone https://github.com/MRMORNINGSTAR2233/PriceTrail-m.git
bash
Copy code
cd pricetrail
Install the project dependencies using npm:
bash
Copy code
npm install
Set Up Environment Variables
To run the PriceTrail application, you need to set up environment variables for the following services:

BrightData
MongoDB
Node Mailer
Create a new file named .env in the root directory of the project and add the following content:

env
Copy code
# SCRAPER

BRIGHT_DATA_USERNAME=
BRIGHT_DATA_PASSWORD=

# DB

MONGODB_URI=

# OUTLOOK

EMAIL_USER=
EMAIL_PASS=
Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the respective websites of BrightData, MongoDB, and Node Mailer.

Running the Project
Once you have set up the environment variables, you can run the PriceTrail application locally using the following command:

bash
Copy code
npm run dev
This command will start the development server and open the application in your default browser at http://localhost:3000.

Project Overview
The PriceTrail application consists of several key features:

Visually Appealing Header with Carousel: The header of the application features a visually appealing carousel that showcases various e-commerce products.
Search Bar for Inputting Product Links: Users can input the links of the products they want to track using the search bar provided on the homepage.
