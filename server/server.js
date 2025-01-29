import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
let cats = [
  { breed: "Maine Coon", origin: "Maine", hairType: "long-haired" },
  { breed: "Ragdoll", origin: "California", hairType: "long-haired" },
  { breed: "Siamese cat", origin: "Thailand", hairType: "short-haired" },
  {
    breed: "British Shorthair",
    origin: "Great Britain",
    hairType: "short-haired",
  },
  {
    breed: "Selkirk Rex",
    origin: "USA",
    hairType: "long-haired",
  },
  {
    breed: "Japanese Bobtail",
    origin: "Japan",
    hairType: "short-haired",
  },
  {
    breed: "British Longhair",
    origin: "Great Britain",
    hairType: "long-haired",
  },
];
app.get("/", (req, res) => {
  res.json("WHOOP! IT'S ALIVEEE *evil laugh*");
});

app.get("/cats", (req, res) => {
  res.json(cats);
});

app.listen(2698, () => console.log("App is running in 2698"));
