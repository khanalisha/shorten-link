const express = require("express");
const { userRouter } = require("./route/link");
const { connection } = require("./db");
const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   try {
//     res.status(400).json({ msg: "Welcome Home" });
//   } catch (error) {
//     res.status(401).json({ error: error.message });
//   }
// });
app.use(userRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connection is created");
    console.log("port is running on 8080");
  } catch (error) {
    console.log(error);
  }
});
