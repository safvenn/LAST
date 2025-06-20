const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mkdsafwan4:safvan@cluster0.yipzo6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
