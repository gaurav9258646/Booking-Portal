const  express =   require("express");
const connectDB = require ("./src/config/db")
const userRoutes = require("./src/routes/user.routes");
const hotelRoutes = require("./src/routes/hotels.routes")

const  app = express();
const dotenv = require("dotenv");
dotenv.config();
connectDB();

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello world  from express !")
});
app.use("/users", userRoutes);
app.use("/hotels", hotelRoutes) 


const PORT =3000;

app.listen(PORT,()=>{
    console.log(`server is runing on http://localhost${PORT}`)
})