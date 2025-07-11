import { useState } from 'react';
import { File, Info } from '@phosphor-icons/react';
import { Modal } from '@prismane/core';
// Components
import SingleCode from '@/components/docs/SingleCode';
import InteractiveExample from '@/components/InteractiveExample';
// Containers
import Section from '../Section';
// Example
import FormHookExample, {
  FormHookExampleSource,
  FullFormHookExampleSource
} from '../examples/FormHookExample';

const FormHook = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <Section>
      <span className="section-heading">
        Form building has never <br /> been{' '}
        <span className="section-heading text-gradient">easier.</span>
      </span>
      <span className="section-subheading mb-14">
        Using Prismane&apos;s useForm hook you can handle forms like a breeze.
      </span>
      <InteractiveExample
        actions={[
          {
            children: <Info />,
            props: {
              onClick: () => setShownModal(true)
            },
            tooltip: 'Show full code'
          }
        ]}
        side={
          <SingleCode
            icon={<File />}
            name="Form.tsx"
            value={FormHookExampleSource}
            classNames={{
              root: 'h-full !my-0',
              body: 'h-full [&>pre]:h-full'
            }}
          />
        }
      >
        <FormHookExample />
      </InteractiveExample>
      <Modal
        mx={16}
        open={shownModal}
        onClose={() => setShownModal(false)}
        closable
      >
        <Modal.Header>
          <h2 className="text-base-900 dark:text-white">
            Simple useForm Hook Form Example
          </h2>
        </Modal.Header>
        <span className="text-base-700 dark:text-base-300">
          This is the code of a simple form that is built using the useForm hook
          of Prismane.
        </span>
        <SingleCode
          value={FullFormHookExampleSource}
          icon={<File />}
          name="Example.tsx"
          classNames={{
            body: 'max-h-[440px]'
          }}
        />
      </Modal>
    </Section>
  );
};

export default FormHook;
