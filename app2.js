// app.js
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import routes from './src/routes';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Use centralized routes
app.use('/api/v1', routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
