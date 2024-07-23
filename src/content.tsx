import {
  RocketLaunch,
  Atom,
  PaintBrush,
  Palette,
  SquaresFour,
  Code,
  Wrench,
  Checks,
  CompassTool,
  TextAa,
  Textbox,
  AlignCenterVerticalSimple,
  Rows,
  StackSimple,
  WarningDiamond,
  LinkSimple,
  Toolbox,
  CursorClick,
  Database,
  MathOperations,
  Calendar
} from '@phosphor-icons/react';

const content: any = [
  {
    icon: <RocketLaunch />,
    title: 'Getting Started',
    slug: 'getting-started',
    items: [
      {
        slug: 'introduction',
        title: 'Introduction',
        description:
          'Say hello to Prismane, the UI library that shapes the next level of UI development!'
      },
      {
        slug: 'advantages',
        title: 'Advantages',
        description:
          'These are the main advantages which make people switch to Prismane! 💪'
      },
      {
        slug: 'installation',
        title: 'Installation',
        description:
          'Quickly get started with Prismane. Install the package and start developing!'
      },
      {
        slug: 'globals',
        title: 'Globals',
        description:
          'Learn about all of the global variables and types Prismane exports to make you development even easier.'
      },
      {
        slug: 'versatile-components',
        title: 'Versatile Components',
        description:
          "Learn about Prismane's 'Versatile Components', what they do and how to use them."
      },
      {
        slug: 'prop-types',
        title: 'Prop Types'
      },
      {
        slug: 'passing-refs',
        title: 'Passing Refs'
      },
      {
        slug: 'accessibility',
        title: 'Accessibility'
      }
    ]
  },
  {
    icon: <Atom />,
    title: 'Frameworks',
    slug: 'frameworks',
    items: [
      {
        slug: 'nextjs-setup',
        title: 'Next.js Setup'
      },
      {
        slug: 'vite-setup',
        title: 'Vite Setup'
      }
    ]
  },
  {
    icon: <PaintBrush />,
    title: 'Styling',
    slug: 'styling',
    items: [
      { slug: 'style-props', title: 'Style Props' },
      { slug: 'sx-prop', title: 'The sx Prop' },
      { slug: 'color-palette', title: 'Color Palette' },
      { slug: 'css-variables', title: 'CSS Variables' },
      { slug: 'global-style-overwriting', title: 'Global Style Overwriting' },
      { slug: 'responsive-styles', title: 'Responsive Styles' },
      { slug: 'use-prismane-color', title: 'usePrismaneColor' }
    ]
  },
  {
    icon: <Palette />,
    title: 'Theming',
    slug: 'theming',
    items: [
      { slug: 'theme-object', title: 'Theme Object' },
      { slug: 'prismane-provider', title: 'PrismaneProvider' },
      { slug: 'advanced-customization', title: 'Advanced Customization' },
      { slug: 'theming-utils', title: 'Theming Utils' }
    ]
  },
  {
    icon: <SquaresFour />,
    title: 'Components',
    slug: 'components',
    items: [
      {
        slug: 'getting-started',
        title: 'Getting Started',
        description:
          "Learn about all of Prismane's components. Explore all of the components that we ordered by their type."
      },
      {
        slug: 'data-display',
        title: 'Data Display',
        icon: <Rows />,
        items: [
          {
            slug: 'accordion',
            title: 'Accordion',

            description:
              'Accordion displays a list of options that can be expanded or collapsed.',
            versatile: false
          },
          {
            slug: 'avatar',
            title: 'Avatar',

            description:
              'Avatar displays a profile picture or a color background with initials.',
            versatile: false
          },
          {
            slug: 'badge',
            title: 'Badge',

            description:
              "Badge displays a small badge with short information to it's children.",
            versatile: false
          },
          {
            slug: 'card',
            title: 'Card',

            description:
              'Card displays a container that groups and displays content.',
            versatile: true
          },
          {
            slug: 'chip',
            title: 'Chip',

            description:
              'Chip displays a container that is used to highlight some important short information.',
            versatile: false
          },
          {
            slug: 'collapse',
            title: 'Collapse',

            description:
              'Collapse displays a container that can hide and show content.',
            versatile: false
          },
          {
            slug: 'gradient',
            title: 'Gradient',

            description:
              'Gradient displays a container with gradient background.',
            versatile: true
          },
          {
            slug: 'icon',
            title: 'Icon',

            description:
              'Icon displays a container that can be used as a frame for an icon and provides consistency in sizing.',
            versatile: false
          },
          {
            slug: 'image',
            title: 'Image',

            description: 'Image displays an image element.',
            versatile: false
          },
          {
            slug: 'key',
            title: 'Key',

            description:
              'Key displays a container that is used to display keyboard key combinations.',
            versatile: false
          },
          {
            slug: 'list',
            title: 'List',

            description:
              'List displays a container that groups elements in a list.',
            versatile: false
          },
          {
            slug: 'paper',
            title: 'Paper',

            description:
              'Paper displays a container with background and shadow.',
            versatile: true
          },
          {
            slug: 'progress',
            title: 'Progress',

            description:
              'Progress displays a container that shows the progress of a process.',
            versatile: false
          },
          {
            slug: 'stack',
            title: 'Stack',

            description:
              'Stack displays a container that groups elements together and puts space around them.',
            versatile: false
          },
          {
            slug: 'table',
            title: 'Table',

            description:
              'Table displays a table container that is used to organize and display data in a convenient way.',
            versatile: false
          },
          {
            slug: 'tabs',
            title: 'Tabs',

            description:
              'Tabs displays a container that allows the user to switch between different screens.',
            versatile: false
          }
        ]
      },
      {
        slug: 'inputs',
        title: 'Inputs',
        icon: <Textbox />,
        items: [
          {
            slug: 'action-button',
            title: 'ActionButton',

            description:
              'ActionButton displays a square call-to-action button.',
            versatile: false
          },
          {
            slug: 'autocomplete-field',
            title: 'AutocompleteField',

            description:
              'AutocompleteField displays a field that has a set of options, which can be filtered.',
            versatile: false
          },
          {
            slug: 'button',
            title: 'Button',

            description: 'Button displays a styled button.',
            versatile: true
          },
          {
            slug: 'checkbox',
            title: 'Checkbox',

            description:
              'Checkbox displays a field that has a set of options, which can be filtered.',
            versatile: false
          },
          {
            slug: 'close-button',
            title: 'CloseButton',

            description: 'CloseButton displays a square close button.',
            versatile: false
          },
          {
            slug: 'color-field',
            title: 'ColorField',

            description:
              'Color field displays a field that has a set of colors, which can be chosen.',
            versatile: false
          },
          {
            slug: 'field',
            title: 'Field',

            description:
              'Field displays a field that is used as the base component to create fields.',
            versatile: true
          },
          {
            slug: 'form',
            title: 'Form',

            description:
              'Form displays a form container that groups a given set of fields.',
            versatile: false
          },
          {
            slug: 'native-date-field',
            title: 'NativeDateField',

            description: 'NativeDateField displays a native date field.',
            versatile: false
          },
          {
            slug: 'native-select-field',
            title: 'NativeSelectField',

            description: 'NativeSelectField displays a native select field.',
            versatile: false
          },
          {
            slug: 'number-field',
            title: 'NumberField',

            description:
              'NumberField displays a field that handles numbers, allowing incrementing and decrementing the value.',
            versatile: false
          },
          {
            slug: 'password-field',
            title: 'PasswordField',

            description:
              'PasswordField displays a field that handles passwords, allowing for showing and hiding the password.',
            versatile: false
          },
          {
            slug: 'pin-field',
            title: 'PinField',

            description:
              'PinField displays a field that handles pins, allowing for easily typing in number combinations.',
            versatile: false
          },
          {
            slug: 'radio',
            title: 'Radio',

            description:
              'Radio displays a group of fields that handles toggling between multiple values.',
            versatile: false
          },
          {
            slug: 'segmented-field',
            title: 'SegmentedField',

            description:
              'SegmentedField displays a field that handles toggling between multiple values.',
            versatile: false
          },
          {
            slug: 'select-field',
            title: 'SelectField',

            description:
              'SelectField displays a field that handles choosing a value from a set values.',
            versatile: false
          },
          {
            slug: 'switch',
            title: 'Switch',

            description:
              'Switch displays a field that handles toggling between true or false.',
            versatile: false
          },
          {
            slug: 'textarea-field',
            title: 'TextareaField',

            description:
              'TextareaField displays a field that handles toggling between multiple values.',
            versatile: false
          },
          {
            slug: 'text-field',
            title: 'TextField',

            description:
              'TextField displays a field that handles toggling between multiple values.',
            versatile: false
          }
        ]
      },
      {
        slug: 'feedback',
        title: 'Feedback',
        icon: <WarningDiamond />,
        items: [
          {
            slug: 'alert',
            title: 'Alert',

            description: 'Alert displays an important message for an action.',
            versatile: false
          },
          {
            slug: 'skeleton',
            title: 'Skeleton',

            description: 'Skeleton displays a loading state of a container.',
            versatile: false
          },
          {
            slug: 'spinner',
            title: 'Spinner',

            description:
              'Spinner displays a spinning container displaying a loading state.',
            versatile: false
          },
          {
            slug: 'toaster',
            title: 'Toaster',

            description:
              'Toaster displays a container that renders elements for a given time and then removes them from the DOM.',
            versatile: false
          }
        ]
      },
      {
        slug: 'miscellaneous',
        title: 'Miscellaneous',
        icon: <Toolbox />,
        items: [
          {
            slug: 'animation',
            title: 'Animation',

            description:
              'Animation display a container that can animate between CSS properties.',
            versatile: false
          },
          {
            slug: 'divider',
            title: 'Divider',

            description:
              'Divider displays a horizontal line that visually separates the content.',
            versatile: false
          },
          {
            slug: 'transition',
            title: 'Transition',

            description:
              "Transition display a container that can transition it's CSS properties.",
            versatile: true
          }
        ]
      },
      {
        slug: 'layout',
        title: 'Layout',
        icon: <AlignCenterVerticalSimple />,
        items: [
          {
            slug: 'aspect-ratio',
            title: 'AspectRatio',

            description: 'AspectRatio renders a responsive container.',
            versatile: false
          },
          {
            slug: 'box',
            title: 'Box',

            description:
              'Box displays a versatile container, by default a div.',
            versatile: true
          },
          {
            slug: 'center',
            title: 'Center',

            description:
              "Center displays a container that places it's content in the center.",
            versatile: true
          },
          {
            slug: 'circle',
            title: 'Circle',

            description:
              "Circle displays a circle that renders it's content in the center.",
            versatile: true
          },
          {
            slug: 'container',
            title: 'Container',

            description:
              'Container displays a container that constrains the content, whilst still remaining fluid.',
            versatile: false
          },
          {
            slug: 'flex',
            title: 'Flex',

            description:
              'Flex displays a container that has a display of flex.',
            versatile: true
          },
          {
            slug: 'footer',
            title: 'Footer',

            description: 'Footer displays a footer element.',
            versatile: false
          },
          {
            slug: 'grid',
            title: 'Grid',

            description:
              'Grid displays a container that has a display of grid.',
            versatile: false
          },
          {
            slug: 'header',
            title: 'Header',

            description: 'Header displays a header element.',
            versatile: false
          },
          {
            slug: 'hidden',
            title: 'Hidden',

            description: "Hidden displays a container that hides it's content.",
            versatile: false
          },
          {
            slug: 'hide',
            title: 'Hide',

            description:
              'Hide displays a container that hides under a breakpoint.',
            versatile: false
          },
          {
            slug: 'main',
            title: 'Main',

            description: 'Main displays a main element.',
            versatile: false
          },
          {
            slug: 'show',
            title: 'Show',

            description:
              'Show displays a container that hides under a breakpoint.',
            versatile: false
          },
          {
            slug: 'square',
            title: 'Square',

            description: 'Square displays a square container.',
            versatile: true
          }
        ]
      },
      {
        slug: 'overlay',
        title: 'Overlay',
        icon: <StackSimple />,
        items: [
          {
            slug: 'backdrop',
            title: 'Backdrop',

            description:
              "Backdrop displays a container that is used to limit the user's actions and make them focus on it's content.",
            versatile: false
          },
          {
            slug: 'dialog',
            title: 'Dialog',

            description:
              'Dialog displays a container that displays a notification.',
            versatile: false
          },
          {
            slug: 'drawer',
            title: 'Drawer',

            description:
              'Drawer displays a container that slides from the side and occupies the users attention.',
            versatile: false
          },
          {
            slug: 'menu',
            title: 'Menu',

            description:
              'Menu displays a menu container that displays different actions the user can perform.',
            versatile: false
          },
          {
            slug: 'modal',
            title: 'Modal',

            description:
              'Modal displays a container that displays a notification.',
            versatile: false
          },
          {
            slug: 'popover',
            title: 'Popover',

            description:
              'Popover displays a dialog container that is shown around a control.',
            versatile: false
          },
          {
            slug: 'portal',
            title: 'Portal',

            description:
              'Portal displays a container that is displayed outside of the current DOM tree.',
            versatile: false
          },
          {
            slug: 'tooltip',
            title: 'Tooltip',

            description:
              'Tooltip display a container that shows additional information on hover.',
            versatile: false
          }
        ]
      },
      {
        slug: 'navigation',
        title: 'Navigation',
        icon: <LinkSimple />,
        items: [
          {
            slug: 'breadcrumb',
            title: 'Breadcrumb',
            description:
              'Box displays a versatile container, by default a div.',
            versatile: false
          },
          {
            slug: 'link',
            title: 'Link',
            description:
              "Link displays an anchor and leverages it's functionality by having the ability to execute functions before redirect.",
            versatile: true
          }
        ]
      },
      {
        slug: 'typography',
        title: 'Typography',
        icon: <TextAa />,
        items: [
          {
            slug: 'highlight',
            title: 'Highlight',

            description:
              "Highlight displays a container that highlights it's content.",
            versatile: true
          },
          {
            slug: 'initials',
            title: 'Initials',

            description: 'Initials displays the initials of a provided name.',
            versatile: false
          },
          {
            slug: 'text',
            title: 'Text',

            description:
              'Text displays a text container used to display text and easily style it.',
            versatile: true
          }
        ]
      }
    ]
  },
  {
    icon: <Code />,
    title: 'Components API',
    slug: 'components-api',
    items: [
      {
        slug: 'getting-started',
        title: 'Getting Started',
        description:
          "Learn about all of Prismane's components' API. Explore all of the props that they can receive and their CSS classes."
      },
      {
        slug: 'data-display',
        title: 'Data Display',
        icon: <Rows />,
        items: [
          {
            slug: 'accordion-api',
            title: 'Accordion API',
            description:
              "Learn about the Accordion component's props and CSS classes."
          },
          {
            slug: 'avatar-api',
            title: 'Avatar API',
            description:
              "Learn about the Avatar component's props and CSS classes."
          },
          {
            slug: 'badge-api',
            title: 'Badge API',
            description:
              "Learn about the Badge component's props and CSS classes."
          },
          {
            slug: 'card-api',
            title: 'Card API',
            description:
              "Learn about the Card component's props and CSS classes."
          },
          {
            slug: 'chip-api',
            title: 'Chip API',
            description:
              "Learn about the Chip component's props and CSS classes."
          },
          {
            slug: 'collapse-api',
            title: 'Collapse API',
            description:
              "Learn about the Collapse component's props and CSS classes."
          },
          {
            slug: 'gradient-api',
            title: 'Gradient API',
            description:
              "Learn about the Gradient component's props and CSS classes."
          },
          {
            slug: 'icon-api',
            title: 'Icon API',
            description:
              "Learn about the Icon component's props and CSS classes."
          },
          {
            slug: 'image-api',
            title: 'Image API',
            description:
              "Learn about the Image component's props and CSS classes."
          },
          {
            slug: 'key-api',
            title: 'Key API',
            description:
              "Learn about the Key component's props and CSS classes."
          },
          {
            slug: 'list-api',
            title: 'List API',
            description:
              "Learn about the List component's props and CSS classes."
          },
          {
            slug: 'paper-api',
            title: 'Paper API',
            description:
              "Learn about the Paper component's props and CSS classes."
          },
          {
            slug: 'progress-api',
            title: 'Progress API',
            description:
              "Learn about the Progress component's props and CSS classes."
          },
          {
            slug: 'show-api',
            title: 'Show API',
            description:
              "Learn about the Show component's props and CSS classes."
          },
          {
            slug: 'stack-api',
            title: 'Stack API',
            description:
              "Learn about the Stack component's props and CSS classes."
          },
          {
            slug: 'table-api',
            title: 'Table API',
            description:
              "Learn about the Table component's props and CSS classes."
          },
          {
            slug: 'tabs-api',
            title: 'Tabs API',
            description:
              "Learn about the Tabs component's props and CSS classes."
          }
        ]
      },
      {
        slug: 'inputs',
        title: 'Inputs',
        icon: <Textbox />,
        items: [
          {
            slug: 'action-button-api',
            title: 'ActionButton API',
            description:
              "Learn about the ActionButton component's props and CSS classes."
          },
          {
            slug: 'autocomplete-field-api',
            title: 'AutocompleteField API',
            description:
              "Learn about the AutocompleteField component's props and CSS classes."
          },
          {
            slug: 'button-api',
            title: 'Button API',
            description:
              "Learn about the Button component's props and CSS classes."
          },
          {
            slug: 'checkbox-api',
            title: 'Checkbox API',
            description:
              "Learn about the Checkbox component's props and CSS classes."
          },
          {
            slug: 'close-button-api',
            title: 'CloseButton API',
            description:
              "Learn about the CloseButton component's props and CSS classes."
          },
          {
            slug: 'color-field-api',
            title: 'ColorField API',
            description:
              "Learn about the ColorField component's props and CSS classes."
          },
          {
            slug: 'field-api',
            title: 'Field API',
            description:
              "Learn about the Field component's props and CSS classes."
          },
          {
            slug: 'form-api',
            title: 'Form API',
            description:
              "Learn about the Form component's props and CSS classes."
          },
          {
            slug: 'native-date-field-api',
            title: 'NativeDateField API',
            description:
              "Learn about the NativeDateField component's props and CSS classes."
          },
          {
            slug: 'native-select-field-api',
            title: 'NativeSelectField API',
            description:
              "Learn about the NativeSelectField component's props and CSS classes."
          },
          {
            slug: 'number-field-api',
            title: 'NumberField API',
            description:
              "Learn about the NumberField component's props and CSS classes."
          },
          {
            slug: 'password-field-api',
            title: 'PasswordField API',
            description:
              "Learn about the PasswordField component's props and CSS classes."
          },
          {
            slug: 'pin-field-api',
            title: 'PinField API',
            description:
              "Learn about the PinField component's props and CSS classes."
          },
          {
            slug: 'radio-api',
            title: 'Radio API',
            description:
              "Learn about the Radio component's props and CSS classes."
          },
          {
            slug: 'segmented-field-api',
            title: 'SegmentedField API',
            description:
              "Learn about the SegmentedField component's props and CSS classes."
          },
          {
            slug: 'select-field-api',
            title: 'SelectField API',
            description:
              "Learn about the SelectField component's props and CSS classes."
          },
          {
            slug: 'switch-api',
            title: 'Switch API',
            description:
              "Learn about the Switch component's props and CSS classes."
          },
          {
            slug: 'textarea-field-api',
            title: 'TextareaField API',
            description:
              "Learn about the TextareaField component's props and CSS classes."
          },
          {
            slug: 'text-field-api',
            title: 'TextField API',
            description:
              "Learn about the TextField component's props and CSS classes."
          }
        ]
      },
      {
        slug: 'feedback',
        title: 'Feedback',
        icon: <WarningDiamond />,
        items: [
          {
            slug: 'alert-api',
            title: 'Alert API',
            description:
              "Learn about the Alert component's props and CSS classes."
          },
          {
            slug: 'skeleton-api',
            title: 'Skeleton API',
            description:
              "Learn about the Skeleton component's props and CSS classes."
          },
          {
            slug: 'spinner-api',
            title: 'Spinner API',
            description:
              "Learn about the Spinner component's props and CSS classes."
          },
          {
            slug: 'toaster-api',
            title: 'Toaster API',
            description:
              "Learn about the Toaster component's props and CSS classes."
          }
        ]
      },
      {
        slug: 'miscellaneous',
        title: 'Miscellaneous',
        icon: <Toolbox />,
        items: [
          {
            slug: 'animation-api',
            title: 'Animation API',
            description:
              "Learn about the Animation component's props and CSS classes."
          },
          {
            slug: 'divider-api',
            title: 'Divider API',
            description:
              "Learn about the Divider component's props and CSS classes."
          },
          {
            slug: 'transition-api',
            title: 'Transition API',
            description:
              "Learn about the Transition component's props and CSS classes."
          }
        ]
      },
      {
        slug: 'layout',
        title: 'Layout',
        icon: <AlignCenterVerticalSimple />,
        items: [
          {
            slug: 'aspect-ratio-api',
            title: 'AspectRatio API',
            description:
              "Learn about the AspectRatio component's props and CSS classes."
          },
          {
            slug: 'box-api',
            title: 'Box API',
            description:
              "Learn about the Box component's props and CSS classes."
          },
          {
            slug: 'center-api',
            title: 'Center API',
            description:
              "Learn about the Center component's props and CSS classes."
          },
          {
            slug: 'circle-api',
            title: 'Circle API',
            description:
              "Learn about the Circle component's props and CSS classes."
          },
          {
            slug: 'container-api',
            title: 'Container API',
            description:
              "Learn about the Container component's props and CSS classes."
          },
          {
            slug: 'flex-api',
            title: 'Flex API',
            description:
              "Learn about the Flex component's props and CSS classes."
          },
          {
            slug: 'footer-api',
            title: 'Footer API',
            description:
              "Learn about the Footer component's props and CSS classes."
          },
          {
            slug: 'grid-api',
            title: 'Grid API',
            description:
              "Learn about the Grid component's props and CSS classes."
          },
          {
            slug: 'header-api',
            title: 'Header API',
            description:
              "Learn about the Header component's props and CSS classes."
          },
          {
            slug: 'hidden-api',
            title: 'Hidden API',
            description:
              "Learn about the Hidden component's props and CSS classes."
          },
          {
            slug: 'hide-api',
            title: 'Hide API',
            description:
              "Learn about the Hide component's props and CSS classes."
          },
          {
            slug: 'main-api',
            title: 'Main API',
            description:
              "Learn about the Main component's props and CSS classes."
          },
          {
            slug: 'square-api',
            title: 'Square API',
            description:
              "Learn about the Square component's props and CSS classes."
          }
        ]
      },
      {
        slug: 'overlay',
        title: 'Overlay',
        icon: <StackSimple />,
        items: [
          {
            slug: 'backdrop-api',
            title: 'Backdrop API',
            description:
              "Learn about the Backdrop component's props and CSS classes."
          },
          {
            slug: 'dialog-api',
            title: 'Dialog API',
            description:
              "Learn about the Dialog component's props and CSS classes."
          },
          {
            slug: 'drawer-api',
            title: 'Drawer API',
            description:
              "Learn about the Drawer component's props and CSS classes."
          },
          {
            slug: 'menu-api',
            title: 'Menu API',
            description:
              "Learn about the Menu component's props and CSS classes."
          },
          {
            slug: 'modal-api',
            title: 'Modal API',
            description:
              "Learn about the Modal component's props and CSS classes."
          },
          {
            slug: 'popover-api',
            title: 'Popover API',
            description:
              "Learn about the Popover component's props and CSS classes."
          },
          {
            slug: 'portal-api',
            title: 'Portal API',
            description:
              "Learn about the Portal component's props and CSS classes."
          },
          {
            slug: 'tooltip-api',
            title: 'Tooltip API',
            description:
              "Learn about the Tooltip component's props and CSS classes."
          }
        ]
      },
      {
        slug: 'navigation',
        title: 'Navigation',
        icon: <LinkSimple />,
        items: [
          {
            slug: 'breadcrumb-api',
            title: 'Breadcrumb API',
            description:
              "Learn about the Breadcrumb component's props and CSS classes."
          },
          {
            slug: 'link-api',
            title: 'Link API',
            description:
              "Learn about the Link component's props and CSS classes."
          }
        ]
      },
      {
        slug: 'typography',
        title: 'Typography',
        icon: <TextAa />,
        items: [
          {
            slug: 'highlight-api',
            title: 'Highlight API',
            description:
              "Learn about the Highlight component's props and CSS classes."
          },
          {
            slug: 'initials-api',
            title: 'Initials API',
            description:
              "Learn about the Initials component's props and CSS classes."
          },
          {
            slug: 'text-api',
            title: 'Text API',
            description:
              "Learn about the Text component's props and CSS classes."
          }
        ]
      }
    ]
  },
  {
    icon: <Wrench />,
    title: 'Hooks',
    slug: 'hooks',
    items: [
      {
        slug: 'user-interface',
        title: 'User Interface',
        icon: <CursorClick />,
        items: [
          {
            slug: 'use-animation',
            title: 'useAnimation',
            description:
              'useAnimation hook provides a simple way to manage animation state in your components.'
          },
          {
            slug: 'use-dimensions',
            title: 'useDimensions',
            description:
              'useDimensions hook provides a simple way to get the dimensions of an element.'
          },
          {
            slug: 'use-draggable',
            title: 'useDraggable',
            description:
              'useDraggable hook provides a simple way to drag elements.'
          },
          {
            slug: 'use-focus-trap',
            title: 'useFocusTrap',
            description:
              "useFocusTrap hook provides a simple way to trap the user's focus."
          },
          {
            slug: 'use-idle',
            title: 'useIdle',
            description:
              'useIdle hook provides a simple way to handle when a client is active and idle.'
          },
          {
            slug: 'use-keyboard-shortcut',
            title: 'useKeyboardShortcut',
            description:
              'useKeyboardShortcut hook provides a simple way to handle key combinations.'
          },
          {
            slug: 'use-media-query',
            title: 'useMediaQuery',
            description:
              'useMediaQuery hook provides a simple way to handle media queries.'
          },
          {
            slug: 'use-outside-click',
            title: 'useOutsideClick',
            description:
              "useOutsideClick hook provides a simple way to handle a click out of the element's constraints."
          },
          {
            slug: 'use-presence',
            title: 'usePresence',
            description:
              'usePresence hook provides a way to animate an element, before removing it from the DOM.'
          },
          {
            slug: 'use-scroll',
            title: 'useScroll',
            description:
              'useScroll hook provides a simple way to simplify handling scrolling.'
          }
        ]
      },
      {
        slug: 'state-management',
        title: 'State Management',
        icon: <Database />,
        items: [
          {
            slug: 'use-counter',
            title: 'useCounter',
            description:
              'useCounter hook provides a simple way to manage a stateful counter.'
          },
          {
            slug: 'use-copy-to-clipboard',
            title: 'useCopyToClipboard',
            description:
              'useCopyToClipboard hook provides a copyToClipboard method to save a string in the clipboard and the copiedValue value (default: null).'
          },
          {
            slug: 'use-debounce',
            title: 'useDebounce',
            description:
              'useDebounce hook provides a simple way to debounce heavy calculations.'
          },
          {
            slug: 'use-form',
            title: 'useForm',
            description: 'useForm hook provides a simple way to handle forms.'
          },
          {
            slug: 'use-interval',
            title: 'useInterval',
            description:
              'useInterval hook provides a simple way to handle complex intervals.'
          },
          {
            slug: 'use-local-storage',
            title: 'useLocalStorage',
            description:
              'useLocalStorage hook provides a simple way to handle saving data to the localStorage.'
          },
          {
            slug: 'use-memoization',
            title: 'useMemoization',
            description:
              'useMemoization hook provides a simple way to memoize expensive calculations.'
          },
          {
            slug: 'use-previous',
            title: 'usePrevious',
            description:
              'usePrevious hook provides a simple way to handle saving the previous value of a variable.'
          },
          {
            slug: 'use-search',
            title: 'useSearch',
            description:
              'useSearch hook provides a simple way to search through different types of data.'
          },
          {
            slug: 'use-sorting',
            title: 'useSorting',
            description:
              'useSorting hook provides a simple way of sorting big chunks of data by key and direction.'
          },
          {
            slug: 'use-toggle',
            title: 'useToggle',
            description:
              'useToggle hook provides a simple way to handle toggling between a set of values.'
          }
        ]
      },
      {
        slug: 'miscellaneous',
        title: 'Miscellaneous',
        icon: <Toolbox />,
        items: [
          {
            slug: 'use-emulated-field-change',
            title: 'useEmulatedFieldChange',
            description:
              'useEmulatedFieldChange hook provides a simple way to emulate field change events.'
          },
          {
            slug: 'use-id',
            title: 'useId',
            description:
              'useId hook provides a simple way to create unique ids.'
          },
          {
            slug: 'use-localization',
            title: 'useLocalization',
            description:
              'useLocalization hook provides a simple way to handle localization and dynamic translation.'
          },
          {
            slug: 'use-network-status',
            title: 'useNetworkStatus',
            description:
              'useNetworkStatus hook provides a simple way of handling changes in the internet connection.'
          },
          {
            slug: 'use-theme-mode-value',
            title: 'useThemeModeValue',
            description:
              'useThemeModeValue hook simplifies the logic for using two style properties for dark and light modes.'
          }
        ]
      }
    ]
  },
  {
    icon: <Checks />,
    title: 'Validators',
    slug: 'validators',
    items: [
      {
        slug: 'date',
        title: 'Date',
        icon: <Calendar />,
        items: [
          {
            slug: 'after',
            title: 'after',
            description:
              'This validator checks if a date is after a given date.'
          },
          {
            slug: 'before',
            title: 'before',
            description:
              'This validator checks if a date is before a given date.'
          },
          {
            slug: 'future',
            title: 'future',
            description: 'This validator checks if a date is in the future.'
          },
          {
            slug: 'past',
            title: 'past',
            description: 'This validator checks if a date is in the past.'
          }
        ]
      },
      {
        slug: 'string',
        title: 'String',
        icon: <TextAa />,
        items: [
          {
            slug: 'alphanumeric',
            title: 'alphanumeric',
            description:
              'This validator checks if a string has only alphanumeric characters.'
          },
          {
            slug: 'contains',
            title: 'contains',
            description:
              'This validator checks if a string contains a given substring.'
          },
          {
            slug: 'email',
            title: 'email',
            description: 'This validator checks if a string is a valid email.'
          },
          {
            slug: 'ends',
            title: 'ends',
            description:
              'This validator checks if a string ends with a given substring.'
          },
          {
            slug: 'lowercase',
            title: 'lowercase',
            description:
              'This validator checks if a string has only lowercase characters.'
          },
          {
            slug: 'max',
            title: 'max',
            description:
              "This validator checks if a given string's length is less than a given maximum."
          },
          {
            slug: 'min',
            title: 'min',
            description:
              "This validator checks if a given string's length is more than a given minimum."
          },
          {
            slug: 'regex',
            title: 'regex',
            description:
              'This validator checks if a string matches a regular expression pattern.'
          },
          {
            slug: 'starts',
            title: 'starts',
            description:
              'This validator checks if a string starts with a given substring.'
          },
          {
            slug: 'substring',
            title: 'substring',
            description:
              'This validator checks if a string is a substring of a given string.'
          },
          {
            slug: 'trimmed',
            title: 'trimmed',
            description:
              'This validator checks if a string has no more than one consecutive spaces.'
          },
          {
            slug: 'uppercase',
            title: 'uppercase',
            description:
              'This validator checks if a string has only uppercase characters.'
          },
          {
            slug: 'url',
            title: 'url',
            description: 'This validator checks if a string is a valid URL.'
          },
          {
            slug: 'username',
            title: 'username',
            description:
              'This validator checks if a string is a valid username.'
          },
          {
            slug: 'uuid',
            title: 'uuid',
            description: 'This validator checks if a string is a valid ID.'
          }
        ]
      },
      {
        slug: 'number',
        title: 'Number',
        icon: <MathOperations />,
        items: [
          {
            slug: 'between',
            title: 'between',
            description:
              'This validator checks if a number is between an interval of two numbers.'
          },
          {
            slug: 'less',
            title: 'less',
            description:
              'This validator checks if a number is less than a given number.'
          },
          {
            slug: 'more',
            title: 'more',
            description:
              'This validator checks if a number is more than a given number.'
          },
          {
            slug: 'multiple',
            title: 'multiple',
            description:
              'This validator checks if a number is a multiple of a given number.'
          },
          {
            slug: 'negative',
            title: 'negative',
            description: 'This validator checks if a number is negative.'
          },
          {
            slug: 'positive',
            title: 'positive',
            description: 'This validator checks if a number is positive.'
          }
        ]
      },
      {
        slug: 'multiple',
        title: 'Multiple',
        icon: <Toolbox />,
        items: [
          {
            slug: 'match',
            title: 'match',
            description:
              'This validator checks if a given set of variables are the same.'
          },
          {
            slug: 'required',
            title: 'required',
            description:
              'This validator checks if a given variable has a value or not.'
          }
        ]
      }
    ]
  },
  {
    icon: <CompassTool />,
    title: 'Playground',
    slug: 'playground',
    items: [],
    props: {
      href: '/playground',
      target: '_blank'
    }
  }
];

export default content;
