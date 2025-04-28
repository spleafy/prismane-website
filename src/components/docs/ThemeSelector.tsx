import React, { HTMLAttributes, useMemo } from 'react';
import { LivePreview, LiveProvider } from 'react-live';
import config from '@/config/mdx';
import Code from '@/components/docs/Code/Code';
import InteractiveExample from '@/components/InteractiveExample';
import {
  PrismaneProvider as LocalPrismaneProvider,
  PRISMANE_COLORS
} from '@prismane/core';
import type { PrismaneInputTheme } from '@prismane/core/dist/src/types';

type Theme = {
  name: string;
  description: string;
  filename?: string;
  code?: string;
  // Add the actual theme configuration object
  config: PrismaneInputTheme;
  preview: string;
};

const defaultPreview = `
<Card w={420} gap={fr(2)} style={{fontFamily:'|fontFamily|'}}>
  <Image
    src="https://i.pinimg.com/originals/c0/1f/4c/c01f4c611c6ecaa688d25ddf1259b4aa.jpg"
    br="base"
    fit="cover"
    mb={fr(2)}
    h={236}
  />
  <Flex gap={fr(2)} mt={fr(4)}>
    <Chip icon={<Fire />}>On Sale</Chip>
    <Chip icon={<Tag />} color="teal">
      New
    </Chip>
  </Flex>
  <Flex direction="column" gap={fr(2)}>
    <Text
      fs="2xl"
      fw="bold"
      mt={fr(3)}
      cl={(theme) => (theme.mode === 'dark' ? ['base', 100] : ['base', 900])}
      style={{fontFamily:'|fontFamily|'}}
    >
      |title|
    </Text>
    <Text
      cl={(theme) => (theme.mode === 'dark' ? ['base', 300] : ['base', 700])}
      style={{fontFamily:'|fontFamily|'}}
    >
      Experience the ultimate comfort and style with our luxurious sofa,
      designed to elevate your living space.
    </Text>
  </Flex>
  <Text fw="bold" fs="2xl" cl="primary" style={{fontFamily:'|fontFamily|'}}>
    $500
  </Text>
  <Tooltip label="Button tooltip information" aria-label="A tooltip">
  <Alert mt={fr(4)} mb={fr(2)} w={'full'} variant="warning" closable>Review Your Order</Alert>
  </Tooltip>
  <Field mb={fr(2)} icon={<EnvelopeSimple />} placeholder="Enter your email" />
  <Flex gap={fr(4)}>
    <Button full>Buy Now</Button>
    <Button variant="secondary" color="base" full>
      Add To Cart
    </Button>
  </Flex>
</Card>`;
const THEMES: Theme[] = [
  {
    name: 'Meridian',
    description:
      'A precise, structured theme characterized by clean lines and professional spacing for business-critical applications. Its neutral color palette with subtle accents maintains focus on content while projecting authority and reliability',
    filename: 'theme_meridian.json',
    code: `// Create a custom theme object
const theme = {
    colors: {
      primary: { ...PRISMANE_COLORS.blue },
      base: {
        100: '#333333', // Title
        300: '#454545', // Text
        700: '#1111ff', // Secondary button
        800: '#fafafa' // Card
      }
    },
    borderRadius: {
      xs: '0px',
      sm: '0px',
      base: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px'
    },
    fontFamily: 'Inter'
};`,
    // Placeholder config for Loom
    config: {
      colors: {
        primary: { ...PRISMANE_COLORS.blue },
        base: {
          100: '#333333', // Title
          300: '#454545', // Text
          700: '#1111ff', // Secondary button
          800: '#fafafa' // Card
        }
      },
      borderRadius: {
        xs: '0px',
        sm: '0px',
        base: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px'
      },
      fontFamily: 'Inter'
    },
    preview: defaultPreview
      .replaceAll('|title|', 'Meridian Sofa')
      .replaceAll('|fontFamily|', 'Inter')
  },
  {
    name: 'Flux',
    description:
      'An adaptable theme with smooth transitions and a fluid design system that easily transforms between different states and layouts. Its versatile component styling combines contemporary aesthetics with practical usability, making it suitable for a wide range of modern applications.',
    filename: 'theme_flux.json',
    code: `// Create a custom theme object
const theme = {
    colors: {
      primary: { ...PRISMANE_COLORS.green },
      base: { ...PRISMANE_COLORS.sepia }
    },
    borderRadius: {
      xs: '8px',
      sm: '12px',
      base: '16px',
      md: '24px',
      lg: '32px',
      xl: '48px',
      '2xl': '64px'
    }
    fontFamily: 'Poppins'
};`,
    config: {
      colors: {
        primary: { ...PRISMANE_COLORS.green },
        base: { ...PRISMANE_COLORS.sepia }
      },
      borderRadius: {
        xs: '8px',
        sm: '12px',
        base: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        '2xl': '64px'
      }
    },
    preview: defaultPreview
      .replaceAll('|title|', 'Flux Sofa')
      .replaceAll('|fontFamily|', 'Poppins')
  },
  {
    name: 'Loom',
    description:
      'A playful theme featuring soft rounded corners, friendly button styles, and a vibrant color scheme that creates an approachable feel. Loom weaves together engaging animations and generous spacing to create interfaces that feel both fun and intuitive.',
    filename: 'theme_loom.json',
    code: `// Create a custom theme object
const theme = {
    colors: {
      primary: { ...PRISMANE_COLORS.green },
      base: { ...PRISMANE_COLORS.emerald }
    },
    borderRadius: {
      xs: '4px',
      sm: '6px',
      base: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '32px'
    }
    fontFamily: 'Annie Use Your Telescope'
};`,
    // Actual theme config for Meridian
    config: {
      colors: {
        primary: { ...PRISMANE_COLORS.green },
        base: { ...PRISMANE_COLORS.emerald }
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        base: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px'
      }
    },
    preview: defaultPreview
      .replaceAll('|title|', 'Loom Sofa')
      .replaceAll('|fontFamily|', 'Annie Use Your Telescope')
  },
  {
    name: 'Ember',
    description:
      'A warm, inviting theme with subtle gradients and soft shadows that create depth without overwhelming the user. Its thoughtfully balanced typography and glowing accent highlights provide just enough visual energy while maintaining readability and a sense of calm confidence.',
    filename: 'theme_ember.json',
    code: `// Create a custom theme object
const theme = {
    colors: {
      primary: { ...PRISMANE_COLORS.orange },
      base: { ...PRISMANE_COLORS.amethyst }
    },
    borderRadius: {
      xs: '8px',
      sm: '12px',
      base: '16px',
      md: '24px',
      lg: '32px',
      xl: '48px',
      '2xl': '64px'
    }
    fontFamily: 'Poppins'
};`,
    // Placeholder config for Ember
    config: {
      colors: {
        primary: { ...PRISMANE_COLORS.orange },
        base: { ...PRISMANE_COLORS.amethyst }
      },
      borderRadius: {
        xs: '8px',
        sm: '12px',
        base: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        '2xl': '64px'
      }
    },
    preview: defaultPreview
      .replaceAll('|title|', 'Ember Sofa')
      .replaceAll('|fontFamily|', 'Poppins')
  }
];

interface ThemeSelectorProps extends HTMLAttributes<HTMLElement> {
  icon?: React.ReactNode;
}

const ThemeSelector = ({
  icon,
  children,
  className,
  ...props
}: ThemeSelectorProps) => {
  const [selectedThemeIndex, setSelectedThemeIndex] = React.useState<number>(0);

  const selectedTheme = useMemo(
    () => THEMES[selectedThemeIndex],
    [selectedThemeIndex]
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-start gap-2">
        {THEMES.map((theme, index) => (
          <button
            className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm transition-colors focus:outline-none ${
              index === selectedThemeIndex
                ? 'code-item-active bg-base-100 text-base-700 dark:bg-base-900 dark:text-base-200'
                : 'code-item-inactive hover:bg-base-50 dark:hover:bg-base-900/50'
            }`}
            onClick={() => {
              setSelectedThemeIndex(index);
            }}
            key={index}
          >
            {theme.name}
          </button>
        ))}
      </div>
      <div className="mb-2 max-w-[50%] text-sm text-base-500">
        {selectedTheme.description}
      </div>
      <InteractiveExample
        side={
          <Code
            files={[
              {
                name: selectedTheme.filename || '',
                icon,
                value: selectedTheme.code || '',
                language: 'jsx'
              }
            ]}
            className="relative mt-0 flex h-full w-full flex-col !rounded-md [&_button]:z-10 [&_div]:w-full [&_pre]:h-full [&_pre]:w-full"
            preview
          />
        }
        classNames={{
          root: 'h-[790px]',
          example:
            '!py-14 dark:!bg-base-900 !bg-base-100 !bg-none flex items-center justify-center'
        }}
        switchOrder
      >
        <LiveProvider
          disabled
          scope={config} // Use the memoized scope
          code={selectedTheme.preview.trim()}
          language={'jsx'}
        >
          <LocalPrismaneProvider theme={selectedTheme.config}>
            <LivePreview className="flex w-full grow flex-wrap items-center justify-center [&_*]:transition-all [&_*]:duration-700" />
          </LocalPrismaneProvider>
        </LiveProvider>
      </InteractiveExample>
    </div>
  );
};

export default ThemeSelector;
