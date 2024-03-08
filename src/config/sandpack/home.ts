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

export const App = `import { Fire, Tag } from "@phosphor-icons/react";
import { Card, Image, Text, Chip, Button, Flex, fr } from "@prismane/core";

export default function App() {
  return (
    <Card w={360} h={540} gap={fr(2)}>
      <Image 
        src="https://i.pinimg.com/originals/c0/1f/4c/c01f4c611c6ecaa688d25ddf1259b4aa.jpg" 
        br="base" 
        fit="cover"
        mb={fr(2)}
      />
      <Flex gap={fr(2)}>
        <Chip icon={<Fire />}>On Sale</Chip>
        <Chip icon={<Tag />} color="teal">New</Chip>
      </Flex>
      <Flex direction="column">
        <Text fs="2xl" fw="bold" cl={["base", 900]}>Modern Sofa</Text>
        <Text cl={["base", 700]}>
          Experience the ultimate comfort and style with our luxurious sofa, 
          designed to elevate your living space.
        </Text>
      </Flex>
      <Text fw="bold" fs="2xl" cl="primary">$500</Text>
      <Flex gap={fr(4)} mt="auto">
        <Button>Buy Now</Button>
        <Button variant="tertiary" color="base">Add To Cart</Button>
      </Flex>
    </Card>
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
  background-color: rgb(var(--prismane-colors-base-300));
}
`;
