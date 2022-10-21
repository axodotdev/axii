import { render } from "@testing-library/vue";
import DownloadImageButton from "../DownloadImageButton.vue";

test("mounts component", () => {
  const { container } = render(DownloadImageButton, {
    props: {
      container: {},
    },
  });

  expect(container).toMatchSnapshot();
});
