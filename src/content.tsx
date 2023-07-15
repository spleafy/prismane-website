import {
  Sparkle,
  PaintBrush,
  Palette,
  SquaresFour,
  Code,
  Wrench,
  Checks,
} from "@phosphor-icons/react";

const content: any = [
  {
    title: "Getting Started",
    slug: "getting-started",
    icon: <Sparkle />,
    items: [
      {
        slug: "overview",
        title: "Overview",
      },
      {
        slug: "installation",
        title: "Installation",
      },
      {
        slug: "nextjs-setup",
        title: "Next.js Setup",
      },
      {
        slug: "vite-setup",
        title: "Vite Setup",
      },
    ],
  },
  {
    title: "Styling",
    slug: "styling",
    icon: <PaintBrush />,
    items: [
      { slug: "style-props", title: "Style Props" },
      { slug: "sx-prop", title: "The sx Prop" },
      { slug: "color-palette", title: "Color Palette" },
      { slug: "css-variables", title: "CSS Variables" },
      { slug: "global-style-overwriting", title: "Global Style Overwriting" },
      { slug: "responsive-styles", title: "Responsive Styles" },
      { slug: "use-prismane-color", title: "usePrismaneColor" },
    ],
  },
  {
    title: "Theming",
    slug: "theming",
    icon: <Palette />,
    items: [
      { slug: "theme-object", title: "Theme Object" },
      { slug: "prismane-provider", title: "PrismaneProvider" },
      { slug: "advanced-customization", title: "Advanced Customization" },
      { slug: "theming-utils", title: "Theming Utils" },
    ],
  },
  {
    title: "Components",
    slug: "components",
    icon: <SquaresFour />,
    items: [
      {
        slug: "getting-started",
        title: "Getting Started",
      },
      {
        slug: "accordion",
        title: "Accordion",
        category: "data-display",
        description:
          "Accordion displays a list of options that can be expanded or collapsed.",
      },
      {
        slug: "action-button",
        title: "ActionButton",
        category: "inputs",
        description: "ActionButton displays a square call-to-action button.",
      },
      {
        slug: "alert",
        title: "Alert",
        category: "feedback",
        description: "Alert displays an important message for an action.",
      },
      {
        slug: "animation",
        title: "Animation",
        category: "miscellaneous",
        description:
          "Animation display a container that can animate between CSS properties.",
      },
      {
        slug: "aspect-ratio",
        title: "AspectRatio",
        category: "layout",
        description: "AspectRatio renders a responsive container.",
      },
      {
        slug: "autocomplete-field",
        title: "AutocompleteField",
        category: "inputs",
        description:
          "AutocompleteField displays a field that has a set of options, which can be filtered.",
      },
      {
        slug: "avatar",
        title: "Avatar",
        category: "data-display",
        description:
          "Avatar displays a profile picture or a color background with initials.",
      },
      {
        slug: "backdrop",
        title: "Backdrop",
        category: "overlay",
        description:
          "Backdrop displays a container that is used to limit the user's actions and make them focus on it's content.",
      },
      {
        slug: "badge",
        title: "Badge",
        category: "data-display",
        description:
          "Badge displays a small badge with short information to it's children.",
      },
      {
        slug: "box",
        title: "Box",
        category: "layout",
        description: "Box displays a versatile container, by default a div.",
      },
      {
        slug: "breadcrumb",
        title: "Breadcrumb",
        category: "navigation",
        description: "Box displays a versatile container, by default a div.",
      },
      {
        slug: "button",
        title: "Button",
        category: "inputs",
        description: "Button displays a styled button.",
      },
      {
        slug: "card",
        title: "Card",
        category: "data-display",
        description:
          "Card displays a container that groups and displays content.",
      },
      {
        slug: "center",
        title: "Center",
        category: "layout",
        description:
          "Center displays a container that places it's content in the center.",
      },
      {
        slug: "checkbox",
        title: "Checkbox",
        category: "inputs",
        description:
          "Checkbox displays a field that has a set of options, which can be filtered.",
      },
      {
        slug: "chip",
        title: "Chip",
        category: "data-display",
        description:
          "Chip displays a container that is used to highlight some important short information.",
      },
      {
        slug: "circle",
        title: "Circle",
        category: "layout",
        description:
          "Circle displays a circle that renders it's content in the center.",
      },
      {
        slug: "close-button",
        title: "CloseButton",
        category: "inputs",
        description: "CloseButton displays a square close button.",
      },
      {
        slug: "collapse",
        title: "Collapse",
        category: "data-display",
        description:
          "Collapse displays a container that can hide and show content.",
      },
      {
        slug: "color-field",
        title: "ColorField",
        category: "inputs",
        description:
          "Color field displays a field that has a set of colors, which can be chosen.",
      },
      {
        slug: "container",
        title: "Container",
        category: "layout",
        description:
          "Container displays a container that constrains the content, whilst still remaining fluid.",
      },
      {
        slug: "dialog",
        title: "Dialog",
        category: "overlay",
        description:
          "Dialog displays a container that displays a notification.",
      },
      {
        slug: "divider",
        title: "Divider",
        category: "miscellaneous",
        description:
          "Divider displays a horizontal line that visually separates the content.",
      },
      {
        slug: "drawer",
        title: "Drawer",
        category: "overlay",
        description:
          "Drawer displays a container that slides from the side and occupies the users attention.",
      },
      {
        slug: "field",
        title: "Field",
        category: "inputs",
        description:
          "Field displays a field that is used as the base component to create fields.",
      },
      {
        slug: "flex",
        title: "Flex",
        category: "layout",
        description: "Flex displays a container that has a display of flex.",
      },
      {
        slug: "form",
        title: "Form",
        category: "inputs",
        description:
          "Form displays a form container that groups a given set of fields.",
      },
      {
        slug: "gradient",
        title: "Gradient",
        category: "data-display",
        description: "Gradient displays a container with gradient background.",
      },
      {
        slug: "grid",
        title: "Grid",
        category: "layout",
        description: "Grid displays a container that has a display of grid.",
      },
      {
        slug: "hidden",
        title: "Hidden",
        category: "layout",
        description: "Hidden displays a container that hides it's content.",
      },
      {
        slug: "hide",
        title: "Hide",
        category: "layout",
        description: "Hide displays a container that hides under a breakpoint.",
      },
      {
        slug: "highlight",
        title: "Highlight",
        category: "typography",
        description:
          "Highlight displays a container that highlights it's content.",
      },
      {
        slug: "icon",
        title: "Icon",
        category: "data-display",
        description:
          "Icon displays a container that can be used as a frame for an icon and provides consistency in sizing.",
      },
      {
        slug: "image",
        title: "Image",
        category: "data-display",
        description: "Image displays an image element.",
      },
      {
        slug: "initials",
        title: "Initials",
        category: "typography",
        description: "Initials displays the initials of a provided name.",
      },
      {
        slug: "key",
        title: "Key",
        category: "data-display",
        description:
          "Key displays a container that is used to display keyboard key combinations.",
      },
      {
        slug: "link",
        title: "Link",
        category: "navigation",
        description:
          "Link displays an anchor providing additional styling and features.",
      },
      {
        slug: "list",
        title: "List",
        category: "data-display",
        description:
          "List displays a container that groups elements in a list.",
      },
      {
        slug: "menu",
        title: "Menu",
        category: "overlay",
        description:
          "Menu displays a menu container that displays different actions the user can perform.",
      },
      {
        slug: "modal",
        title: "Modal",
        category: "overlay",
        description: "Modal displays a container that displays a notification.",
      },
      {
        slug: "native-date-field",
        title: "NativeDateField",
        category: "inputs",
        description: "NativeDateField displays a native date field.",
      },
      {
        slug: "native-select-field",
        title: "NativeSelectField",
        category: "inputs",
        description: "NativeSelectField displays a native select field.",
      },
      {
        slug: "number-field",
        title: "NumberField",
        category: "inputs",
        description:
          "NumberField displays a field that handles numbers, allowing incrementing and decrementing the value.",
      },
      {
        slug: "paper",
        title: "Paper",
        category: "data-display",
        description: "Paper displays a container with background and shadow.",
      },
      {
        slug: "password-field",
        title: "PasswordField",
        category: "inputs",
        description:
          "PasswordField displays a field that handles passwords, allowing for showing and hiding the password.",
      },
      {
        slug: "pin-field",
        title: "PinField",
        category: "inputs",
        description:
          "PinField displays a field that handles pins, allowing for easily typing in number combinations.",
      },
      {
        slug: "popover",
        title: "Popover",
        category: "overlay",
        description:
          "Popover displays a dialog container that is shown around a control.",
      },
      {
        slug: "portal",
        title: "Portal",
        category: "overlay",
        description:
          "Portal displays a container that is displayed outside of the current DOM tree.",
      },
      {
        slug: "progress",
        title: "Progress",
        category: "data-display",
        description:
          "Progress displays a container that shows the progress of a process.",
      },
      {
        slug: "radio",
        title: "Radio",
        category: "inputs",
        description:
          "Radio displays a group of fields that handles toggling between multiple values.",
      },
      {
        slug: "segmented-field",
        title: "SegmentedField",
        category: "inputs",
        description:
          "SegmentedField displays a field that handles toggling between multiple values.",
      },
      {
        slug: "select-field",
        title: "SelectField",
        category: "inputs",
        description:
          "SelectField displays a field that handles choosing a value from a set values.",
      },
      {
        slug: "show",
        title: "Show",
        category: "layout",
        description: "Show displays a container that hides under a breakpoint.",
      },
      {
        slug: "skeleton",
        title: "Skeleton",
        category: "feedback",
        description: "Skeleton displays a loading state of a container.",
      },
      {
        slug: "spinner",
        title: "Spinner",
        category: "feedback",
        description:
          "Spinner displays a spinning container displaying a loading state.",
      },
      {
        slug: "square",
        title: "Square",
        category: "layout",
        description: "Square displays a square container.",
      },
      {
        slug: "stack",
        title: "Stack",
        category: "data-display",
        description:
          "Stack displays a container that groups elements together and puts space around them.",
      },
      {
        slug: "switch",
        title: "Switch",
        category: "inputs",
        description:
          "Switch displays a field that handles toggling between true or false.",
      },
      {
        slug: "table",
        title: "Table",
        category: "data-display",
        description:
          "Table displays a table container that is used to organize and display data in a convenient way.",
      },
      {
        slug: "tabs",
        title: "Tabs",
        category: "data-display",
        description:
          "Tabs displays a container that allows the user to switch between different screens.",
      },
      {
        slug: "text",
        title: "Text",
        category: "typography",
        description:
          "Text displays a text container used to display text and easily style it.",
      },
      {
        slug: "textarea-field",
        title: "TextareaField",
        category: "inputs",
        description:
          "TextareaField displays a field that handles toggling between multiple values.",
      },
      {
        slug: "text-field",
        title: "TextField",
        category: "inputs",
        description:
          "TextField displays a field that handles toggling between multiple values.",
      },
      {
        slug: "toaster",
        title: "Toaster",
        category: "feedback",
        description:
          "Toaster displays a container that renders elements for a given time and then removes them from the DOM.",
      },
      {
        slug: "tooltip",
        title: "Tooltip",
        category: "overlay",
        description:
          "Tooltip display a container that shows additional information on hover.",
      },
      {
        slug: "transition",
        title: "Transition",
        category: "miscellaneous",
        description:
          "Transition display a container that can transition it's CSS properties.",
      },
    ],
  },
  {
    title: "Components API",
    slug: "components-api",
    icon: <Code />,
    items: [
      { slug: "accordion-api", title: "Accordion API" },
      { slug: "action-button-api", title: "ActionButton API" },
      { slug: "alert-api", title: "Alert API" },
      { slug: "animation-api", title: "Animation API" },
      { slug: "aspect-ratio-api", title: "AspectRatio API" },
      { slug: "autocomplete-field-api", title: "AutocompleteField API" },
      { slug: "avatar-api", title: "Avatar API" },
      { slug: "backdrop-api", title: "Backdrop API" },
      { slug: "badge-api", title: "Badge API" },
      { slug: "box-api", title: "Box API" },
      { slug: "breadcrumb-api", title: "Breadcrumb API" },
      { slug: "button-api", title: "Button API" },
      { slug: "card-api", title: "Card API" },
      { slug: "center-api", title: "Center API" },
      { slug: "checkbox-api", title: "Checkbox API" },
      { slug: "chip-api", title: "Chip API" },
      { slug: "circle-api", title: "Circle API" },
      { slug: "close-button-api", title: "CloseButton API" },
      { slug: "collapse-api", title: "Collapse API" },
      { slug: "color-field-api", title: "ColorField API" },
      { slug: "container-api", title: "Container API" },
      { slug: "dialog-api", title: "Dialog API" },
      { slug: "divider-api", title: "Divider API" },
      { slug: "drawer-api", title: "Drawer API" },
      { slug: "field-api", title: "Field API" },
      { slug: "flex-api", title: "Flex API" },
      { slug: "form-api", title: "Form API" },
      { slug: "gradient-api", title: "Gradient API" },
      { slug: "grid-api", title: "Grid API" },
      { slug: "hidden-api", title: "Hidden API" },
      { slug: "hide-api", title: "Hide API" },
      { slug: "highlight-api", title: "Highlight API" },
      { slug: "icon-api", title: "Icon API" },
      { slug: "image-api", title: "Image API" },
      { slug: "initials-api", title: "Initials API" },
      { slug: "key-api", title: "Key API" },
      { slug: "link-api", title: "Link API" },
      { slug: "list-api", title: "List API" },
      { slug: "menu-api", title: "Menu API" },
      { slug: "modal-api", title: "Modal API" },
      { slug: "native-date-field-api", title: "NativeDateField API" },
      { slug: "native-select-field-api", title: "NativeSelectField API" },
      { slug: "number-field-api", title: "NumberField API" },
      { slug: "paper-api", title: "Paper API" },
      { slug: "password-field-api", title: "PasswordField API" },
      { slug: "pin-field-api", title: "PinField API" },
      { slug: "popover-api", title: "Popover API" },
      { slug: "portal-api", title: "Portal API" },
      { slug: "progress-api", title: "Progress API" },
      { slug: "radio-api", title: "Radio API" },
      { slug: "segmented-field-api", title: "SegmentedField API" },
      { slug: "select-field-api", title: "SelectField API" },
      { slug: "show-api", title: "Show API" },
      { slug: "skeleton-api", title: "Skeleton API" },
      { slug: "spinner-api", title: "Spinner API" },
      { slug: "square-api", title: "Square API" },
      { slug: "stack-api", title: "Stack API" },
      { slug: "switch-api", title: "Switch API" },
      { slug: "table-api", title: "Table API" },
      { slug: "tabs-api", title: "Tabs API" },
      { slug: "text-api", title: "Text API" },
      { slug: "textarea-field-api", title: "TextareaField API" },
      { slug: "text-field-api", title: "TextField API" },
      { slug: "toaster-api", title: "Toaster API" },
      { slug: "tooltip-api", title: "Tooltip API" },
      { slug: "transition-api", title: "Transition API" },
    ],
  },
  {
    title: "Hooks",
    slug: "hooks",
    icon: <Wrench />,
    items: [
      { slug: "getting-started", title: "Getting Started" },
      {
        slug: "use-animation",
        title: "useAnimation",
        category: "user-interface",
        description:
          "useAnimation hook provides a simple way to manage animation state in your components.",
      },
      {
        slug: "use-counter",
        title: "useCounter",
        category: "state-management",
        description:
          "useCounter hook provides a simple way to manage a stateful counter.",
      },
      {
        slug: "use-debounce",
        title: "useDebounce",
        category: "state-management",
        description:
          "useDebounce hook provides a simple way to debounce heavy calculations.",
      },
      {
        slug: "use-dimensions",
        title: "useDimensions",
        category: "user-interface",
        description:
          "useDimensions hook provides a simple way to get the dimensions of an element.",
      },
      {
        slug: "use-draggable",
        title: "useDraggable",
        category: "user-interface",
        description:
          "useDraggable hook provides a simple way to drag elements.",
      },
      {
        slug: "use-emulated-field-change",
        title: "useEmulatedFieldChange",
        category: "miscellaneous",
        description:
          "useEmulatedFieldChange hook provides a simple way to emulate field change events.",
      },
      {
        slug: "use-form",
        title: "useForm",
        category: "state-management",
        description: "useForm hook provides a simple way to handle forms.",
      },
      {
        slug: "use-id",
        title: "useId",
        category: "miscellaneous",
        description: "useId hook provides a simple way to create unique ids.",
      },
      {
        slug: "use-idle",
        title: "useIdle",
        category: "user-interface",
        description:
          "useIdle hook provides a simple way to handle when a client is active and idle.",
      },
      {
        slug: "use-interval",
        title: "useInterval",
        category: "state-management",
        description:
          "useInterval hook provides a simple way to handle complex intervals.",
      },
      {
        slug: "use-keyboard-shortcut",
        title: "useKeyboardShortcut",
        category: "user-interface",
        description:
          "useKeyboardShortcut hook provides a simple way to handle key combinations.",
      },
      {
        slug: "use-local-storage",
        title: "useLocalStorage",
        category: "state-management",
        description:
          "useLocalStorage hook provides a simple way to handle saving data to the localStorage.",
      },
      {
        slug: "use-localization",
        title: "useLocalization",
        category: "miscellaneous",
        description:
          "useLocalization hook provides a simple way to handle localization and dynamic translation.",
      },
      {
        slug: "use-media-query",
        title: "useMediaQuery",
        category: "user-interface",
        description:
          "useMediaQuery hook provides a simple way to handle media queries.",
      },
      {
        slug: "use-memoization",
        title: "useMemoization",
        category: "state-management",
        description:
          "useMemoization hook provides a simple way to memoize expensive calculations.",
      },
      {
        slug: "use-outside-click",
        title: "useOutsideClick",
        category: "user-interface",
        description:
          "useOutsideClick hook provides a simple way to handle a click out of the element's constraints.",
      },
      {
        slug: "use-previous",
        title: "usePrevious",
        category: "state-management",
        description:
          "usePrevious hook provides a simple way to handle saving the previous value of a variable.",
      },
      {
        slug: "use-toggle",
        title: "useToggle",
        category: "state-management",
        description:
          "useToggle hook provides a simple way to handle toggling between a set of values.",
      },
    ],
  },
  {
    title: "Validators",
    slug: "validators",
    icon: <Checks />,
    items: [
      { slug: "min", title: "min" },
      { slug: "max", title: "max" },
      { slug: "required", title: "required" },
      { slug: "match", title: "match" },
      { slug: "url", title: "url" },
      { slug: "email", title: "email" },
      { slug: "username", title: "username" },
    ],
  },
];

export default content;
