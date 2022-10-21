import { render } from "@testing-library/vue";
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
