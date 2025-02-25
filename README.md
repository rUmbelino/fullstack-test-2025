## Code Challenge - Nest, Prisma, Postgres, Apollo, React

Build a fullstack app for managing salon appointments. 
This challenge evaluates your proficiency in both frontend and backend development, focusing on GraphQL, PostgreSQL, React, and TypeScript.

 
### Backend 
 
GraphQL API: Implement a GraphQL API that supports the following operations: 
 - [x] Query: Fetch all appointments with their associated salon and service details
 - [x] Mutation: Add a new appointment
 - [ ] Mutation: Update an existing appointment's details
 - [ ] Mutation: Delete an appointment
 
PostgreSQL Database: Use PostgreSQL to store the appointment data.
The db should include these tables:
 - [x] salons with fields: id, name, location.
 - [x] services with fixelds: id, salon_id, name, price.
 - [x] appointments with fields: id, salonId, customerName, serviceName, appointmentTime.
 
Environment: 
   Use any Node.js framework (e.g., Express, Nest) to set up your GraphQL server.
 
### Frontend
 
Develop a simple **React** frontend that interacts with the GraphQL API.


Requirements:
 - [ ] Use **Apollo Client** to interact with the GraphQL API.
 - [ ]  Style the app minimally using plain CSS or a library like TailwindCSS, Material-UI or bootstrap.
 
Features:
 - [x] View Appointments: Display a list of all appointments fetched from the backend.
 - [x] Add Appointment: Provide a form to create a new appointment with these fields:
   - Customer Name
   - Salon
   - Service
   - Appointment Time
 
### Constraints 
 
 - [x] Use clean code practices and adhere to design patterns.
 - [X] Include a README file with:
   - [X] Setup instructions.
   - [X] Brief explanation of your approach.

---

## Running the project
- Run, in the root of the project:
  - `./run.sh`
- Follow the instructions on the script output

## Solution approach

To create the application, I first focused on the database layer, starting by creating a migrations.sql file. Then, I created a seeds.sql file to populate the tables so the database would be ready to use.
After that, I moved to the API layer, creating all the necessary GraphQL schemas. Once the schemas were ready, I used them to guide the implementation of the API in the repository.ts file, where I wrote all the necessary queries to fetch and store data.
Once both the API and the database were set up, I transitioned to the frontend, creating the UI components and writing the logic to interact with the API.
I wish I had more time to properly test the solution by writing unit and integration tests, but since I didn’t have enough time, I tested manually throughout the process. I used manual queries when creating the database, the Apollo Client to interact with and validate the API, and manual tests for the UI.
The result is a solid first step, but there's still plenty of room for improvement. If I had more time to continue working on the project, I would focus on improving the tooling for troubleshooting, as sometimes the errors I encountered on the UI or in the terminal were unclear. On the API side, I would aim to separate the layers into different files and create tests for the endpoints. Additionally, I would like to create a module to share common elements, such as types and interfaces, between the frontend and the API.
On the frontend, I would have a more sofisticated component to show the appointment details, complete the CRUD functionality for appointments, services, and salons by creating the necessary components. I would also write unit tests for each component using React Testing Library and create integration tests with Cypress.