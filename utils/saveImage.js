import { writeFile } from "fs/promises";
import { baseUrl } from "./api";

async function saveImage(file) {
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `public/uploads/${Date.now()}-${file.name}`;
  await writeFile(path, buffer);

  const newPath = path.replace("public/", "");
  const imageUrl = `${baseUrl}/${newPath}`;
  return imageUrl;
}

export default saveImage;
