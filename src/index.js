import app from "./app.js"; 
import {connectDB} from "./config/db.js"
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import dotenv from 'dotenv';

dotenv.config();

connectDB();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 