const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/Logindataregisteration", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  createIndexes: true
}).then(() => {
  console.log(`connecin succesfully`);
}).catch((e) => {
  console.error(`Error connecting to MongoDB`);
});
