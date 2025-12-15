import expres from "express";

const app = expres();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
