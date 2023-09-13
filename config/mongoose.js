// mongoose.connect(url)
//   .then(() => {
//     console.log('Connected to Database :: MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/issue_tracker');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"error in connecting to db"));

db.once('open',function()
{
    console.log("mongodb connected successfully");
})

module.exports=db;