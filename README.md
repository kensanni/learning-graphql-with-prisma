# learning-graphql-with-prisma

## About

learning-graphql is a project I followed from [https://www.howtographql.com/graphql-js/0-introduction/](https://www.howtographql.com/graphql-js/0-introduction/) to learn the basics of Graphql and how it works

## Technologies Used

#### Server side:
    - Graphql: GraphQL is a new API standard that provides a more efficient,
     powerful and flexible alternative to REST. It was developed
     and open-sourced by Facebook and is now maintained by a large community of companies
     and individuals from all over the world
    
    - Graphql-yoga: Fully-featured GraphQL Server with focus on easy setup,
      performance & great developer experience

    - Prisma: turn your database into a GraphQL API. Prisma lets you design your data model and have a production ready
      GraphQL API online in minutes.
      
    - Node: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
    
    - ES6: This project is built with ES6 and transpiles down to ES5 with babel
    
#### Style checking and best pratice
    - ESLINT, which is configured to Airbnb-base rule
    
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Installation and Dependencies

You can get the app running locally in the following way:
1.  Install NodeJs [`node`](https://nodejs.org/en/download/), version 5 or greater on your machine

2. Clone the repository and cd into it
   
	  ```
    git clone https://github.com/kensanni/learning-graphql-with-prisma.git
    cd learning-graphql-with-prisma
    ```
		
 4. Install all dependenices 
    
		 npm install
		 
 5. deploy the database model for prisma
    
		 prisma deploy
		 
 6. To start the server
    
		 npm run start

 7.  To run Graphql-playground
 
		 graphql playground
