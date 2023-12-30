import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { baseUrl } from "./api";

async function saveImage(file) {
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);

  const projectRoot = process.cwd();
  const uploadsDirectory = join(projectRoot, "public", "uploads");

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = join(uploadsDirectory, fileName);

  try {
    await writeFile(filePath, buffer);

    const imageUrl = `${baseUrl}/uploads/${fileName}`;
    return imageUrl;
  } catch (error) {
    console.error("Error writing file:", error);
    throw error;
  }
}

export default saveImage;
