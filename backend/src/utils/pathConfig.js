import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";
import mime from "mime-types";
import ejs from "ejs";

const uploadDir = path.join(
  dirname(dirname(dirname(fileURLToPath(import.meta.url)))),
  "upload"
);

const publicDir = path.join(
  dirname(dirname(dirname(fileURLToPath(import.meta.url)))),
  "public"
);

const templateDir = path.join(
  dirname(dirname(fileURLToPath(import.meta.url))),
  "templates"
);

/**
 * Generate a path to upload image
 * @param {string} folder Folder name
 * @param {string} filename File name
 * @return {Object}
 */
const uploadPath = async (folder, filename) => {
  let uploadTime = new Date().getTime().toString();
  const pathUploadDir = path.join(uploadDir, folder, uploadTime);
  await fs.mkdir(pathUploadDir);
  return {
    path: path.join(pathUploadDir, filename),
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
  const filePath = path.join(uploadDir, parentFolder, folder, filename);
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
  const filePath = path.join(uploadDir, parentFolder, folder, filename);
  await fs.unlink(filePath);
  const parentFile = path.dirname(filePath);
  if ((await fs.readdir(parentFile)).length === 0) {
    await fs.rmdir(parentFile);
  }
};

/**
 * Generate Html to String with ejs
 * @param {string} templatePath Path to the template
 * @param {Object} data Data into the template
 */
const renderTemplate = (templatePath, data) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, data, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

export {
  uploadPath,
  getUploadedFile,
  deleteUploadedFile,
  uploadDir,
  templateDir,
  publicDir,
  renderTemplate
};
