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
 - [x] Use **Apollo Client** to interact with the GraphQL API.
 - [x]  Style the app minimally using plain CSS or a library like TailwindCSS, Material-UI or bootstrap.
 
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

To create the application, I first focused on the database layer. I began by creating a migrations.sql file and then a seeds.sql file to populate the tables, ensuring the database was ready to use.
Next, I moved on to the API layer, creating all the necessary GraphQL schemas. Once the schemas were complete, I used them to guide the implementation of the API in the repository.ts file, where I wrote all the required queries to fetch and store data.
Once both the API and the database were set up, I transitioned to the frontend, creating UI components and writing the logic to interact with the API.

I wish I had more time to properly test the solution by writing unit and integration tests. However, due to time constraints, I manually tested the system throughout the process. I used manual queries when creating the database, the Apollo Client to interact with and validate the API, and performed manual tests for the UI.

The result is a solid first step, but there is still plenty of room for improvement. If I had more time to continue working on the project, I would focus on improving the tooling for troubleshooting, as some of the errors encountered on the UI and in the terminal were unclear.

On the API side, there’s a significant opportunity to refactor the fetchAppointments method. Currently, it filters for unique appointments after retrieving all results, but this could be optimized by ensuring the database query returns only unique appointments. This would eliminate the need for post-query filtering and improve performance.

Additionally, I would aim to separate the layers into different files and create tests for the endpoints. I’d also like to create a module to share common elements, such as types and interfaces, between the frontend and the API.

On the frontend, I would enhance the AppointmentDetails component by adding functionality for editing and deleting appointments, allowing users to manage their appointments more efficiently. Additionally, I would incorporate more visually engaging components, such as interactive maps for locations and more intuitive UI elements, to enhance the user experience. I would also complete the CRUD functionality for services and salons by creating the necessary components. Ideally, all these changes would be covered by unit tests using React Testing Library and integration tests with Cypress.