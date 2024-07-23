import {
  Flex,
  Form,
  TextField,
  PasswordField,
  Checkbox,
  Card,
  Text,
  Button,
  Link,
  fr
} from '@prismane/core';
import { useForm } from '@prismane/core/hooks';
import { required, min, max, email } from '@prismane/core/validators';

const FormHookExample = () => {
  const { register, handleSubmit, handleReset } = useForm({
    fields: {
      email: {
        value: '',
        validators: {
          required: (v) => required(v),
          min: (v) => min(v, 4, 'Email'),
          email: (v) => email(v)
        }
      },
      password: {
        value: '',
        validators: {
          required: (v) => required(v),
          min: (v) => min(v, 4, 'Password'),
          max: (v) => max(v, 16, 'Password')
        }
      },
      checkbox: {
        value: false
      }
    }
  });

  return (
    <Card
      w={fr(120)}
      pt={`${fr(10.5)}!important`}
      pb={`${fr(12)}!important`}
      px={`${fr(12)}!important`}
    >
      <Form
        onSubmit={(e: SubmitEvent) => handleSubmit(e, () => {})}
        onReset={handleReset}
      >
        <Text
          as="h1"
          fs="3xl"
          cl={(theme) => (theme.mode === 'dark' ? 'white' : ['base', 900])}
        >
          Sign In
        </Text>
        <Text mb={fr(8)}>
          New to Prismane?{' '}
          <Link cl="primary" href="#" dp="inline-block">
            Create an account.
          </Link>
        </Text>
        <TextField
          {...register('email')}
          label="Enter email:"
          placeholder="Enter email"
        />
        <PasswordField
          {...register('password')}
          label="Enter password:"
          placeholder="Enter password"
        />
        <Flex align="center" justify="between" gap={fr(2)}>
          <Checkbox {...register('checkbox')} label="Remember me for 30 days" />
          <Link href="#" fs="sm" ml="auto" cl="primary">
            Forgot password
          </Link>
        </Flex>
        <Button type="submit" mt={fr(4)} full>
          Sign In
        </Button>
      </Form>
    </Card>
  );
};

export const FormHookExampleSource = `
const { register, handleSubmit, handleReset } = useForm({
  fields: {
    email: {
      value: "",
      validators: {
        required: (v) => required(v),
        min: (v) => min(v, 4, "Email"),
        email: (v) => email(v),
      },
    },
    password: {
      value: "",
      validators: {
        required: (v) => required(v),
        min: (v) => min(v, 4, "Password"),
        max: (v) => max(v, 16, "Password"),
      },
    },
    checkbox: {
      value: false,
    },
  },
});
`;

export const FullFormHookExampleSource = `
import {
  Flex,
  Form,
  TextField,
  PasswordField,
  Checkbox,
  Card,
  Text,
  Button,
  Link,
  fr,
} from "@prismane/core";
import { useForm } from "@prismane/core/hooks";
import { required, min, max, email } from "@prismane/core/validators";

const FormHookExample = () => {
  const { register, handleSubmit, handleReset } = useForm({
    fields: {
      email: {
        value: "",
        validators: {
          required: (v) => required(v),
          min: (v) => min(v, 4, "Email"),
          email: (v) => email(v),
        },
      },
      password: {
        value: "",
        validators: {
          required: (v) => required(v),
          min: (v) => min(v, 4, "Password"),
          max: (v) => max(v, 16, "Password"),
        },
      },
      checkbox: {
        value: false,
      },
    },
  });

  return (
    <Card
      w={fr(120)}
      pt="42px!important"
      pb="48px!important"
      px="48px!important"
    >
      <Form
        onSubmit={(e: SubmitEvent) => handleSubmit(e, () => {})}
        onReset={handleReset}
      >
        <Text
          as="h1"
          fs="3xl"
          cl={(theme) => (theme.mode === "dark" ? "white" : ["base", 900])}
        >
          Sign In
        </Text>
        <Text mb={fr(8)}>
          New to Prismane?{" "}
          <Link cl="primary" href="#" dp="inline-block">
            Create an account.
          </Link>
        </Text>
        <TextField
          {...register("email")}
          label="Enter email:"
          placeholder="Enter email"
        />
        <PasswordField
          {...register("password")}
          label="Enter password:"
          placeholder="Enter password"
        />
        <Flex align="center" justify="between" gap={fr(2)}>
          <Checkbox {...register("checkbox")} label="Remember me for 30 days" />
          <Link href="#" fs="sm" ml="auto" cl="primary">
            Forgot password
          </Link>
        </Flex>
        <Button type="submit" mt={fr(4)} full>
          Sign In
        </Button>
      </Form>
    </Card>
  );
};
`;

export default FormHookExample;
