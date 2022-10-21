import { fireEvent, render } from "@testing-library/vue";
import CopyCodeButton from "../CopyCodeButton.vue";

test("mounts component", () => {
  const { container } = render(CopyCodeButton, {
    props: {
      ascii: ">o.o<",
      gradient: false,
    },
  });

  expect(container).toMatchSnapshot();
});

test("mounts tooltip", () => {
  const { container, getByRole } = render(CopyCodeButton, {
    props: {
      ascii: ">o.o<",
      gradient: false,
    },
  });
  fireEvent.mouseOver(getByRole("button"));

  expect(container).toMatchSnapshot();
});
