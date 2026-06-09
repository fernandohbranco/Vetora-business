const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

// Vídeo placeholder para testes antes do upload no Cloudinary
const PLACEHOLDER_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

export function cloudinaryVideo(publicId: string, width = 1920): string {
  if (!CLOUD_NAME) return PLACEHOLDER_VIDEO;
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto:good,f_auto,w_${width},c_limit/${publicId}.mp4`;
}

export function cloudinaryPoster(publicId: string, width = 1920): string {
  if (!CLOUD_NAME) return "";
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0,q_auto,f_auto,w_${width}/${publicId}.jpg`;
}
