export const formatDateTime = (dateString) => {
  const date = new Date(dateString);

  // Ubah waktu ke zona waktu lokal sesuai kebutuhan
  // Kalau ingin pakai waktu WIB (UTC+7), bisa pakai manual offset
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  const wibTime = new Date(utc + (7 * 60 * 60000)); // tambah 7 jam

  const day = String(wibTime.getDate()).padStart(2, '0');
  const month = String(wibTime.getMonth() + 1).padStart(2, '0'); // bulan mulai 0
  const year = wibTime.getFullYear();

  const hours = String(wibTime.getHours()).padStart(2, '0');
  const minutes = String(wibTime.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} - ${hours}:${minutes} WIB`;
}

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Ubah waktu ke zona waktu lokal sesuai kebutuhan
  // Kalau ingin pakai waktu WIB (UTC+7), bisa pakai manual offset
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  const wibTime = new Date(utc + (7 * 60 * 60000)); // tambah 7 jam

  const day = String(wibTime.getDate()).padStart(2, '0');
  const month = String(wibTime.getMonth() + 1).padStart(2, '0'); // bulan mulai 0
  const year = wibTime.getFullYear();

  return `${day}/${month}/${year}`;
}

export const interntMonth = (dateStrng) => {
  const date = new Date(dateStrng);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.ceil(diffDays / 30);
  return `${diffMonths} bulan`;
}

export const internDate = (dateStrng) => {
  const date = new Date(dateStrng);
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  const wibTime = new Date(utc + (7 * 60 * 60000)); // tambah 7 jam

  const day = String(wibTime.getDate()).padStart(2, '0');
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const month = monthNames[wibTime.getMonth()];
  const year = wibTime.getFullYear();

  return `${day} ${month} ${year}`;
}

export const formatDayDateTime = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${formattedDate} - ${hours}:${minutes} WIB`;
}

export const imageMissing = (image) => {
  if (image === "cover.jpg" || image === null || image === undefined || image === "") {
    return 'https://placehold.co/600x400?text=Image+Not+Found';
  } else {
    return image;
  }
}

export const formatContent = (content) => {
  return content.replace(/<p>/g, '').replace(/<\/p>/g, '');
}

