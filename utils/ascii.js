import aalib from "aalib.js";
import { readUploadedImage } from "./read-uploaded-image";

export function useAsciiConverter({ reverse, ascii }) {
  const convert = async (file) => {
    const { width, height, image } = await readUploadedImage(file);

    aalib.read.image
      .fromURL(image)
      .map(
        aalib.aa({
          colored: false,
          width,
          height,
        })
      )
      .map(reverse.value ? aalib.filter.inverse() : (a) => a)
      .map(
        aalib.render.html({
          background: "transparent",
          color: "white",
          fontFamily: "monospace",
          width,
          height,
        })
      )
      .do((el) => {
        ascii.value = el.innerHTML;
      })
      .subscribe();
  };

  return {
    convert,
  };
}
