import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as config from './utils/config.js';
import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/api/posts', postRoutes)
app.get('/', (req, res) => res.send('Welcome to our Memories API'))

let DB_URL = config.MONGODB_URL;
const PORT = config.PORT
console.log('DB URL:', DB_URL)

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch(error => console.error(error.message))

mongoose.set('useFindAndModify', false);
