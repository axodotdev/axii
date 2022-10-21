import { expect, test } from "vitest";
import { calculateAspectRatioFit } from "../aspect-ratio";

test("calculateAspectRatioFit", () => {
  expect(calculateAspectRatioFit(4, 4, 2, 2)).toStrictEqual({
    width: 2,
    height: 0.8,
  });

  expect(calculateAspectRatioFit(20, 20, 10, 10)).toStrictEqual({
    width: 10,
    height: 4,
  });
});
