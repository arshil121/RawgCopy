import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string): string => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target);

  if (index !== -1) {
    const endIndex = index + target.length;
    const baseUrl = url.slice(0, endIndex);
    const restUrl = url.slice(endIndex);

    // Append "/crop/600/400" to the base URL
    return `${baseUrl}crop/600/400/${restUrl}`;
  }

  // Handle the case where "media/" is not found in the URL
  console.error('Invalid URL format. Unable to locate "media/" segment.');
  return url;
};

export default getCroppedImageUrl;
