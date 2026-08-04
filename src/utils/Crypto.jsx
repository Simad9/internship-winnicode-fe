import CryptoJS from "crypto-js";

// Kunci untuk enkripsi (jangan simpan ini di frontend, ini hanya contoh)
const encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY;

// Fungsi untuk mengenkripsi data sebelum disimpan ke localStorage
export const enkripsiData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), encryptionKey).toString();
};

// Fungsi untuk mendekripsi data yang disimpan di localStorage
export const dekripsiData = (encryptedData) => {
  if (!encryptedData || typeof encryptedData !== "string") return null;
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData ? JSON.parse(decryptedData) : null;
  } catch (error) {
    console.error("Gagal mendekripsi data:", error);
    return null;
  }
};