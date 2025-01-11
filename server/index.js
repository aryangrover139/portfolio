// const express = require('express');
// const mongoose=require("mongoose");
// const cors=require('cors')

// const app= express();

// app.use(express.json())
// app.use(cors())

// app.use(express.urlencoded({ extended: true }));


// mongoose.connect("mongodb://127.0.0.1:27017/baby")
// .then(()=>console.log("connected"))
// .catch((err)=>console.log(err));


// const UserSchema=new mongoose.Schema({
//     Name:String,
//     Email:String,
//     Contact:Number,
//     Address:String,
//     Message:String,
// });

// const UserModel=mongoose.model("users", UserSchema);

// app.get("/",(req,res)=>{
//     UserModel.find({})
//     .then((data)=>res.json(data))
//     .catch((err)=>{res.json(err)})
// })

// app.post("/create", (req, res) => {
//     const { Name, Email, Contact, Address, Message } = req.body;

 
//     UserModel.create({ Name, Email, Contact, Address, Message })
//         .then((data) => {

//             res.send('<h1>User Created Successfully</h1>'+data);
//         })
//         .catch((err) => {
//             console.error(err);
//             res.status(500).send('<h1>Error occurred while creating user</h1>');
//         });
// });


// app.listen(9000)






const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path')

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/baby")
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Contact: Number,
    Address: String,
    Message: String,
});

const UserModel = mongoose.model("users", UserSchema);

app.get("/", (req, res) => {
    UserModel.find({})
        .then((data) => res.json(data))
        .catch((err) => { res.json(err) });
});

// app.post("/create", (req, res) => {
//     const { Name, Email, Contact, Address, Message } = req.body;

//     UserModel.create({ Name, Email, Contact, Address, Message })
//         .then((data) => {
//             res.send('<h1>User Created Successfully</h1>' + data);
//         })
//         .catch((err) => {
//             console.error(err);
//             res.status(500).send('<h1>Error occurred while creating user</h1>');
//         });
// });
app.use(express.static('../client'));
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html')); 
});
app.post("/create", (req, res) => {
    const { Name, Email, Contact, Address, Message } = req.body;

    UserModel.create({ Name, Email, Contact, Address, Message })
        // .then((data) => {
        //     res.json(data);
        // })
        // .catch((err) => {
        //     console.error(err);
        //     res.status(500).send('<h1>Error occurred while creating user</h1>');
        // });
});

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});




