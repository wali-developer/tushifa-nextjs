import fs from "fs";
import { baseUrl } from "./api";
import path from "path";
import { writeFile } from "fs/promises";

async function saveBase64Image(base64Image, filename) {
  const imagePath = `public/uploads/${filename}`;
  const dataBuffer = Buffer.from(base64Image, "base64");
  try {
    // fs.writeFileSync(imagePath, dataBuffer);
    await writeFile(imagePath, dataBuffer);

    return imagePath;
  } catch (error) {
    console.error("Error saving image:", error);
    throw error;
  }
}

export default saveBase64Image;
