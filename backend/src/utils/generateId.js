import crypto, { randomUUID } from "node:crypto";

/**
 * Génère un ID à partir d'une chaîne d'entrée.
 * @param {string} input Chaîne d'entrée pour générer la clé.
 * @return {string|null} Renvoie la chaîne générée ou null en cas d'erreur.
 */
function generateId(input) {
  try {
    const hash = crypto.createHash("sha256");
    hash.update(generateUUID() + input);
    const hashedBytes = hash.digest();
    let hexString = "";
    for (const byte of hashedBytes) {
      const hex = ("0" + byte.toString(16)).slice(-2);
      hexString += hex;
    }
    return hexString.substring(0, 20);
  } catch (error) {
    console.error("Erreur lors de la génération de l'ID :", error);
    return null;
  }
}

/**
 * Génère un UUID aléatoire.
 * @return {string} Renvoie un UUID sans tirets.
 */
function generateUUID() {
  return randomUUID().toLowerCase().replaceAll("-", "");
}
export default generateId;
