import { calculateAspectRatioFit } from "./aspect-ratio";

const promisifyReader = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(event.target.result);
    reader.readAsDataURL(file);
  });

const promisifyImage = (srcImage) =>
  new Promise((resolve) => {
    // we create an image to read the width and height of the uploaded image by the user  so we can calculate aspect ratio
    const image = new Image();
    image.onload = function () {
      const { width, height } = calculateAspectRatioFit(
        image.width,
        image.height,
        100,
        100
      );
      resolve({ width, height });
    };

    image.src = srcImage;
  });

export const readUploadedImage = async (file) => {
  const image = await promisifyReader(file);
  const { width, height } = await promisifyImage(image);
  return {
    width: parseInt(width),
    height: parseInt(height),
    image,
  };
};
