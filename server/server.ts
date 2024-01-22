import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());
// Parse JSON request bodies
app.use(express.json());

app.post("/fetch-html", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res
      .status(400)
      .send('Bad Request: Missing "url" in the request body');
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const html = await page.evaluate(() => {
      return document.body.innerHTML;
    });

    await browser.close();

    res.send(html);
  } catch (error) {
    console.error("Failed to fetch HTML:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
