import express from "express";
import cors from "cors";
const app = express();
const PORT = 8080;

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://www.freetogame.com/api/games", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
 
    res.json(data);
 
} catch (error) {
    console.error("Error fetching data:", error);
  }
});

app.listen(PORT, () => {
  console.log(`we're running on ${PORT}`);
});
