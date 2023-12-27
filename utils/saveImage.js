// import { writeFile } from "fs/promises";
// import { baseUrl } from "./api";

// async function saveImage(file) {
//   const byteData = await file.arrayBuffer();
//   const buffer = Buffer.from(byteData);
//   const path = `public/uploads/${Date.now()}-${file.name}`;
//   await writeFile(path, buffer);

//   const newPath = path.replace("public/", "");
//   const imageUrl = `${baseUrl}/${newPath}`;
//   return imageUrl;
// }

// export default saveImage;

import { writeFile } from "fs/promises";
import { join } from "path";
import { baseUrl } from "./api";

async function saveImage(file) {
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);

  // Use the 'public/uploads' directory relative to the project root
  const uploadsDirectory = join(process.cwd(), "public", "uploads");

  // Ensure the 'public/uploads' directory exists
  try {
    await fs.promises.mkdir(uploadsDirectory, { recursive: true });
  } catch (error) {
    console.error("Error creating 'public/uploads' directory:", error);
    throw error;
  }

  // Generate a unique filename based on the current timestamp
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = join(uploadsDirectory, fileName);

  try {
    // Write the file to the specified path
    await writeFile(filePath, buffer);

    // Construct the URL for the uploaded image
    const imageUrl = `${baseUrl}/uploads/${fileName}`;
    return imageUrl;
  } catch (error) {
    console.error("Error writing file:", error);
    throw error;
  }
}

export default saveImage;
