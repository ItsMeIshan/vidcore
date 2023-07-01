import { render } from "@testing-library/react";
import App from "../components/App";

test("sidebar should close on click", () => {
  const app = render(<App />);
  console.log(app);
});
