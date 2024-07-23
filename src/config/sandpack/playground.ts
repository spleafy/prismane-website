export const Index = `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrismaneProvider, PRISMANE_COLORS } from "@prismane/core";
import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = {
  colors: {
    primary: {...PRISMANE_COLORS.pink}
  }
}

root.render(
  <StrictMode>
    <PrismaneProvider theme={theme}>
      <App />
    </PrismaneProvider>
  </StrictMode>
);
`;

export const App = `import { Button } from "@prismane/core";

export default function App() {
  return (
    <Button>Click Me!</Button>
  );
}`;

export const CSS = `@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: Poppins;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
