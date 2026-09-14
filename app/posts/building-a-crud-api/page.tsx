export default function BuildingACrudAPI() {
    return (
      <main className="post-page">
        <article className="post">
          <a href="/memory-lane/" className="back-link">
            ← Back to Memory Lane
          </a>
  
          <h1>Building My First CRUD API with Node.js, Express, and MongoDB</h1>
  
          <p className="post-date">September 13, 2026</p>
  
          <img
            src="/memory-lane/images/crud-api.png"
            alt="My CRUD API project using Node.js, Express, and MongoDB"
            className="post-image"
          />
  
          <h2>Learning How APIs Work</h2>
  
          <p>
            Recently, I worked on building a CRUD API using Node.js, Express,
            MongoDB, and Mongoose. This project helped me better understand how
            the frontend and backend of a web application communicate with each
            other.
          </p>
  
          <p>
            An API, or Application Programming Interface, allows different parts
            of an application to exchange information. In my project, Express
            was used to create the server and handle requests, 
            while MongoDB stored the application&apos;s data.
           
          </p>
  
          <h2>Using CRUD Operations</h2>
  
          <p>
            I created routes that allowed the application to perform the four
            main CRUD operations: Create, Read, Update, and Delete. POST requests
            can add new information, GET requests retrieve information, PUT or
            PATCH requests update existing records, and DELETE requests remove
            records.
          </p>
  
          <h2>Connecting to MongoDB</h2>
  
          <p>
            I used Mongoose to connect my Node.js application to MongoDB.
            Mongoose helped me define the structure of my data and made it easier
            for the application to communicate with the database.
          </p>
  
          <h2>Testing the API</h2>
  
          <p>
            One of the most useful parts of this project was testing the API.
            Testing each route helped me understand how HTTP requests, status
            codes, JSON data, and database operations work together.
          </p>
  
          <h2>What I Learned</h2>
  
          <p>
            Building this API gave me a stronger understanding of backend
            development and how information moves through a full-stack
            application. It also gave me more experience troubleshooting
            connections, routes, and database operations.
          </p>
        </article>
      </main>
    );
  }