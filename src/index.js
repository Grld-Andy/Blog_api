import dotenv from 'dotenv';
import express from 'express';
import swagger from "./swagger.js";
import bodyParser from "body-parser";
import limiter from './middleware/rateLimiter.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use('/api', limiter);
app.use(express.json());
app.use(bodyParser.json());
app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.specs, { explorer: true }));

app.get('/', (req, res) => {
  res.send(`<a href="${req.protocol}://${req.get('host')}/api-docs">Swagger docs</a>`);
});

app.listen(port, () => {
  console.log(`Visit http://localhost:${port}`);
});

export default app;
