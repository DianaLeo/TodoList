require('dotenv').config();

const mongoose = require('mongoose');
const uri = process.env.CONNECTION_STRING;
console.log('uri',uri);
//Found this method online
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
  console.log("Connected to MongoDB");
})
.catch((err)=>{
  console.log(err);
});

// Method taught by teacher
// const mongoose = require('mongoose');

// const connectToDB = () => {
//   const connectionString = process.env.CONNECTION_STRING;
//   if (!connectionString) {
//     console.error('CONNECTION_STRING is not defined');
//     // 0 -> normal exit
//     // not 0 -> abnormal，error occurs， 1+
//     process.exit(1);//这里相当于return
//   }
//   const db = mongoose.connection;
//   db.on('error', (error) => {
//     console.error(error);
//     process.exit(2);
//   });
//   db.on('connected', () => {
//     console.log('DB connected');
//   });
//   db.on('disconnected', () => {
//     console.log('DB disconnected');
//   });

//   return mongoose.connect(connectionString);
// };

// module.exports = connectToDB;