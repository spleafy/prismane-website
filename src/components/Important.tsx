import { Alert } from "@prismane/core";

const Important = ({ children, ...props }: any) => {
  return (
    <Alert variant="warning" {...props}>
      <Alert.Title>Important</Alert.Title>
      <Alert.Description>{children}</Alert.Description>
    </Alert>
  );
};

export default Important;
