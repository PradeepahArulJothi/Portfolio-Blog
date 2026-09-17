import app from "./app.js";
import { config } from "./config.js";
import "dotenv/config";

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
