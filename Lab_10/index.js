import express from "express";
import appRoute from "./routes/index.js";
import { connectToDatabase } from "./DB/index.js";

const app = express();
app.use(express.json());
app.use("/api/v1/products", appRoute);

app.get("/", (req, res) => {
  console.log(req.method);
  res.send("Hello, Node.js!");
});

app.post("/api/data", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: "Name and age are required!" });
  }

  res.status(200).json({
    message: "Data received successfully!",
    data: { name, age },
  });
});

const PORT = 5000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error occurred with MySQL connection. Error = ", err);
    process.exit(1); // Dừng chương trình nếu không kết nối được MySQL
  });
