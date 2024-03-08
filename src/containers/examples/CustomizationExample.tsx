import { Heart } from "@phosphor-icons/react";
import { Button } from "@prismane/core";

const CustomizationExample = () => {
  return (
    <Button
      size="md"
      br="full"
      variant="secondary"
      color="teal"
      icon={<Heart />}
      mb={[0, { hover: 12 }]}
    >
      Send Love
    </Button>
  );
};

export const CustomizationExampleSource = `
import { Heart } from "@phosphor-icons/react";
import { Button } from "@prismane/core";

const CustomizationExample = () => {
  return (
    <Button
      size="md"
      br="full"
      variant="secondary"
      color="teal"
      icon={<Heart />}
      mb={[0, { hover: 12 }]}
    >
      Send Love
    </Button>
  );
};
`;

export default CustomizationExample;
