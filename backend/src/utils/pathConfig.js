import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";
import mime from "mime-types";

const pathDir = path.join(
  dirname(dirname(dirname(fileURLToPath(import.meta.url)))),
  "uploads"
);

/**
 * Generate a path to upload image
 * @param {string} folder Folder name
 * @param {string} filename File name
 * @return {Object}
 */
const uploadPath = async (folder, filename) => {
  let uploadTime = new Date().getTime().toString();
  const uploadDir = path.join(pathDir, folder, uploadTime);
  await fs.mkdir(uploadDir);
  return {
    path: path.join(uploadDir, filename),
    time: uploadTime
  };
};

/**
 * Get Absolute path to the uploaded image
 * @param {string} parentFolder
 * @param {string} folder
 * @param {string} filename
 * @return {Object}
 */
const getUploadedFile = async (parentFolder, folder, filename) => {
  const filePath = path.join(pathDir, parentFolder, folder, filename);
  const file = await fs.readFile(filePath);
  const contentType = mime.lookup(filename);
  return { contentType, file };
};

/**
 * @param {string} parentFolder
 * @param {string} folder
 * @param {string} filename
 */
const deleteUploadedFile = async (parentFolder, folder, filename) => {
  const filePath = path.join(pathDir, parentFolder, folder, filename);
  await fs.unlink(filePath);
  const parentFile = path.dirname(filePath);
  if ((await fs.readdir(parentFile)).length === 0) {
    await fs.rmdir(parentFile);
  }
};

export { uploadPath, getUploadedFile, deleteUploadedFile, pathDir };
