import { render } from "@testing-library/vue";
import CopyTextButton from "../CopyTextButton.vue";

test("mounts component", () => {
  const { container } = render(CopyTextButton, {
    props: {
      ascii: ">o.o<",
    },
  });

  expect(container).toMatchSnapshot();
});
