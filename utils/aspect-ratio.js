export const calculateAspectRatioFit = (
  srcWidth,
  srcHeight,
  maxWidth,
  maxHeight
) => {
  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth * ratio, height: srcHeight * (ratio / 2.5) };
};
