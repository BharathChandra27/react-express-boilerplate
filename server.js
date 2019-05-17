const express = require("express");
const app = express();

const portNo = 5000;

app.get("/api/customers", (req, res) => {
  const customers = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe"
    },
    {
      id: 2,
      firstName: "Steve",
      lastName: "Smith"
    },
    {
      id: 3,
      firstName: "Mary",
      lastName: "Swanson"
    }
  ];

  // CORS: Cross Orign Resource Sharing Error
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(customers);
});

app.listen(portNo, () => console.log(`Server Started at port: ${portNo}`));
