const contentMap: any = [
  {
    title: "Getting Started",
    slug: "getting-started",
    items: [
      {
        slug: "introduction",
        title: "Introduction",
      },
      {
        slug: "advantages",
        title: "Advantages",
      },
      {
        slug: "installation",
        title: "Installation",
      },
      {
        slug: "globals",
        title: "Globals",
      },
      {
        slug: "versatile-components",
        title: "Versatile Components",
      },
      {
        slug: "prop-types",
        title: "Prop Types",
      },
      {
        slug: "passing-refs",
        title: "Passing Refs",
      },
    ],
  },
  {
    title: "Frameworks",
    slug: "frameworks",
    items: [
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
    items: [
      {
        slug: "getting-started",
        title: "Getting Started",
        description:
          "Learn about all of Prismane's components. Explore all of the components that we ordered by their type.",
      },
      {
        slug: "accordion",
        title: "Accordion",
        category: "data-display",
        description:
          "Accordion displays a list of options that can be expanded or collapsed.",
        versatile: false,
      },
      {
        slug: "action-button",
        title: "ActionButton",
        category: "inputs",
        description: "ActionButton displays a square call-to-action button.",
        versatile: false,
      },
      {
        slug: "alert",
        title: "Alert",
        category: "feedback",
        description: "Alert displays an important message for an action.",
        versatile: false,
      },
      {
        slug: "animation",
        title: "Animation",
        category: "miscellaneous",
        description:
          "Animation display a container that can animate between CSS properties.",
        versatile: false,
      },
      {
        slug: "aspect-ratio",
        title: "AspectRatio",
        category: "layout",
        description: "AspectRatio renders a responsive container.",
        versatile: false,
      },
      {
        slug: "autocomplete-field",
        title: "AutocompleteField",
        category: "inputs",
        description:
          "AutocompleteField displays a field that has a set of options, which can be filtered.",
        versatile: false,
      },
      {
        slug: "avatar",
        title: "Avatar",
        category: "data-display",
        description:
          "Avatar displays a profile picture or a color background with initials.",
        versatile: false,
      },
      {
        slug: "backdrop",
        title: "Backdrop",
        category: "overlay",
        description:
          "Backdrop displays a container that is used to limit the user's actions and make them focus on it's content.",
        versatile: false,
      },
      {
        slug: "badge",
        title: "Badge",
        category: "data-display",
        description:
          "Badge displays a small badge with short information to it's children.",
        versatile: false,
      },
      {
        slug: "box",
        title: "Box",
        category: "layout",
        description: "Box displays a versatile container, by default a div.",
        versatile: true,
      },
      {
        slug: "breadcrumb",
        title: "Breadcrumb",
        category: "navigation",
        description: "Box displays a versatile container, by default a div.",
        versatile: false,
      },
      {
        slug: "button",
        title: "Button",
        category: "inputs",
        description: "Button displays a styled button.",
        versatile: true,
      },
      {
        slug: "card",
        title: "Card",
        category: "data-display",
        description:
          "Card displays a container that groups and displays content.",
        versatile: true,
      },
      {
        slug: "center",
        title: "Center",
        category: "layout",
        description:
          "Center displays a container that places it's content in the center.",
        versatile: true,
      },
      {
        slug: "checkbox",
        title: "Checkbox",
        category: "inputs",
        description:
          "Checkbox displays a field that has a set of options, which can be filtered.",
        versatile: false,
      },
      {
        slug: "chip",
        title: "Chip",
        category: "data-display",
        description:
          "Chip displays a container that is used to highlight some important short information.",
        versatile: false,
      },
      {
        slug: "circle",
        title: "Circle",
        category: "layout",
        description:
          "Circle displays a circle that renders it's content in the center.",
        versatile: true,
      },
      {
        slug: "close-button",
        title: "CloseButton",
        category: "inputs",
        description: "CloseButton displays a square close button.",
        versatile: false,
      },
      {
        slug: "collapse",
        title: "Collapse",
        category: "data-display",
        description:
          "Collapse displays a container that can hide and show content.",
        versatile: false,
      },
      {
        slug: "color-field",
        title: "ColorField",
        category: "inputs",
        description:
          "Color field displays a field that has a set of colors, which can be chosen.",
        versatile: false,
      },
      {
        slug: "container",
        title: "Container",
        category: "layout",
        description:
          "Container displays a container that constrains the content, whilst still remaining fluid.",
        versatile: false,
      },
      {
        slug: "dialog",
        title: "Dialog",
        category: "overlay",
        description:
          "Dialog displays a container that displays a notification.",
        versatile: false,
      },
      {
        slug: "divider",
        title: "Divider",
        category: "miscellaneous",
        description:
          "Divider displays a horizontal line that visually separates the content.",
        versatile: false,
      },
      {
        slug: "drawer",
        title: "Drawer",
        category: "overlay",
        description:
          "Drawer displays a container that slides from the side and occupies the users attention.",
        versatile: false,
      },
      {
        slug: "field",
        title: "Field",
        category: "inputs",
        description:
          "Field displays a field that is used as the base component to create fields.",
        versatile: true,
      },
      {
        slug: "flex",
        title: "Flex",
        category: "layout",
        description: "Flex displays a container that has a display of flex.",
        versatile: true,
      },
      {
        slug: "form",
        title: "Form",
        category: "inputs",
        description:
          "Form displays a form container that groups a given set of fields.",
        versatile: false,
      },
      {
        slug: "gradient",
        title: "Gradient",
        category: "data-display",
        description: "Gradient displays a container with gradient background.",
        versatile: true,
      },
      {
        slug: "grid",
        title: "Grid",
        category: "layout",
        description: "Grid displays a container that has a display of grid.",
        versatile: false,
      },
      {
        slug: "hidden",
        title: "Hidden",
        category: "layout",
        description: "Hidden displays a container that hides it's content.",
        versatile: false,
      },
      {
        slug: "hide",
        title: "Hide",
        category: "layout",
        description: "Hide displays a container that hides under a breakpoint.",
        versatile: false,
      },
      {
        slug: "highlight",
        title: "Highlight",
        category: "typography",
        description:
          "Highlight displays a container that highlights it's content.",
        versatile: true,
      },
      {
        slug: "icon",
        title: "Icon",
        category: "data-display",
        description:
          "Icon displays a container that can be used as a frame for an icon and provides consistency in sizing.",
        versatile: false,
      },
      {
        slug: "image",
        title: "Image",
        category: "data-display",
        description: "Image displays an image element.",
        versatile: false,
      },
      {
        slug: "initials",
        title: "Initials",
        category: "typography",
        description: "Initials displays the initials of a provided name.",
        versatile: false,
      },
      {
        slug: "key",
        title: "Key",
        category: "data-display",
        description:
          "Key displays a container that is used to display keyboard key combinations.",
        versatile: false,
      },
      {
        slug: "link",
        title: "Link",
        category: "navigation",
        description:
          "Link displays an anchor and leverages it's functionality by having the ability to execute functions before redirect.",
        versatile: true,
      },
      {
        slug: "list",
        title: "List",
        category: "data-display",
        description:
          "List displays a container that groups elements in a list.",
        versatile: false,
      },
      {
        slug: "menu",
        title: "Menu",
        category: "overlay",
        description:
          "Menu displays a menu container that displays different actions the user can perform.",
        versatile: false,
      },
      {
        slug: "modal",
        title: "Modal",
        category: "overlay",
        description: "Modal displays a container that displays a notification.",
        versatile: false,
      },
      {
        slug: "native-date-field",
        title: "NativeDateField",
        category: "inputs",
        description: "NativeDateField displays a native date field.",
        versatile: false,
      },
      {
        slug: "native-select-field",
        title: "NativeSelectField",
        category: "inputs",
        description: "NativeSelectField displays a native select field.",
        versatile: false,
      },
      {
        slug: "number-field",
        title: "NumberField",
        category: "inputs",
        description:
          "NumberField displays a field that handles numbers, allowing incrementing and decrementing the value.",
        versatile: false,
      },
      {
        slug: "paper",
        title: "Paper",
        category: "data-display",
        description: "Paper displays a container with background and shadow.",
        versatile: true,
      },
      {
        slug: "password-field",
        title: "PasswordField",
        category: "inputs",
        description:
          "PasswordField displays a field that handles passwords, allowing for showing and hiding the password.",
        versatile: false,
      },
      {
        slug: "pin-field",
        title: "PinField",
        category: "inputs",
        description:
          "PinField displays a field that handles pins, allowing for easily typing in number combinations.",
        versatile: false,
      },
      {
        slug: "popover",
        title: "Popover",
        category: "overlay",
        description:
          "Popover displays a dialog container that is shown around a control.",
        versatile: false,
      },
      {
        slug: "portal",
        title: "Portal",
        category: "overlay",
        description:
          "Portal displays a container that is displayed outside of the current DOM tree.",
        versatile: false,
      },
      {
        slug: "progress",
        title: "Progress",
        category: "data-display",
        description:
          "Progress displays a container that shows the progress of a process.",
        versatile: false,
      },
      {
        slug: "radio",
        title: "Radio",
        category: "inputs",
        description:
          "Radio displays a group of fields that handles toggling between multiple values.",
        versatile: false,
      },
      {
        slug: "segmented-field",
        title: "SegmentedField",
        category: "inputs",
        description:
          "SegmentedField displays a field that handles toggling between multiple values.",
        versatile: false,
      },
      {
        slug: "select-field",
        title: "SelectField",
        category: "inputs",
        description:
          "SelectField displays a field that handles choosing a value from a set values.",
        versatile: false,
      },
      {
        slug: "show",
        title: "Show",
        category: "layout",
        description: "Show displays a container that hides under a breakpoint.",
        versatile: false,
      },
      {
        slug: "skeleton",
        title: "Skeleton",
        category: "feedback",
        description: "Skeleton displays a loading state of a container.",
        versatile: false,
      },
      {
        slug: "spinner",
        title: "Spinner",
        category: "feedback",
        description:
          "Spinner displays a spinning container displaying a loading state.",
        versatile: false,
      },
      {
        slug: "square",
        title: "Square",
        category: "layout",
        description: "Square displays a square container.",
        versatile: true,
      },
      {
        slug: "stack",
        title: "Stack",
        category: "data-display",
        description:
          "Stack displays a container that groups elements together and puts space around them.",
        versatile: false,
      },
      {
        slug: "switch",
        title: "Switch",
        category: "inputs",
        description:
          "Switch displays a field that handles toggling between true or false.",
        versatile: false,
      },
      {
        slug: "table",
        title: "Table",
        category: "data-display",
        description:
          "Table displays a table container that is used to organize and display data in a convenient way.",
        versatile: false,
      },
      {
        slug: "tabs",
        title: "Tabs",
        category: "data-display",
        description:
          "Tabs displays a container that allows the user to switch between different screens.",
        versatile: false,
      },
      {
        slug: "text",
        title: "Text",
        category: "typography",
        description:
          "Text displays a text container used to display text and easily style it.",
        versatile: true,
      },
      {
        slug: "textarea-field",
        title: "TextareaField",
        category: "inputs",
        description:
          "TextareaField displays a field that handles toggling between multiple values.",
        versatile: false,
      },
      {
        slug: "text-field",
        title: "TextField",
        category: "inputs",
        description:
          "TextField displays a field that handles toggling between multiple values.",
        versatile: false,
      },
      {
        slug: "toaster",
        title: "Toaster",
        category: "feedback",
        description:
          "Toaster displays a container that renders elements for a given time and then removes them from the DOM.",
        versatile: false,
      },
      {
        slug: "tooltip",
        title: "Tooltip",
        category: "overlay",
        description:
          "Tooltip display a container that shows additional information on hover.",
        versatile: false,
      },
      {
        slug: "transition",
        title: "Transition",
        category: "miscellaneous",
        description:
          "Transition display a container that can transition it's CSS properties.",
        versatile: true,
      },
    ],
  },
  {
    title: "Components API",
    slug: "components-api",
    items: [
      {
        slug: "getting-started",
        title: "Getting Started",

        description:
          "Learn about all of Prismane's components' API. Explore all of the props that they can receive and their CSS classes",
      },
      {
        slug: "accordion-api",
        title: "Accordion API",
        category: "data-display",
        description:
          "Learn about the Accordion component's props and CSS classes.",
      },
      {
        slug: "action-button-api",
        title: "ActionButton API",
        category: "inputs",
        description:
          "Learn about the ActionButton component's props and CSS classes.",
      },

      {
        slug: "alert-api",
        title: "Alert API",
        category: "feedback",
        description: "Learn about the Alert component's props and CSS classes.",
      },
      {
        slug: "animation-api",
        title: "Animation API",
        category: "miscellaneous",
        description:
          "Learn about the Animation component's props and CSS classes.",
      },
      {
        slug: "aspect-ratio-api",
        title: "AspectRatio API",
        category: "layout",
        description:
          "Learn about the AspectRatio component's props and CSS classes.",
      },
      {
        slug: "autocomplete-field-api",
        title: "AutocompleteField API",
        category: "inputs",
        description:
          "Learn about the AutocompleteField component's props and CSS classes.",
      },
      {
        slug: "avatar-api",
        title: "Avatar API",
        category: "data-display",
        description:
          "Learn about the Avatar component's props and CSS classes.",
      },
      {
        slug: "backdrop-api",
        title: "Backdrop API",
        category: "overlay",
        description:
          "Learn about the Backdrop component's props and CSS classes.",
      },
      {
        slug: "badge-api",
        title: "Badge API",
        category: "data-display",
        description: "Learn about the Badge component's props and CSS classes.",
      },
      {
        slug: "box-api",
        title: "Box API",
        category: "layout",
        description: "Learn about the Box component's props and CSS classes.",
      },
      {
        slug: "breadcrumb-api",
        title: "Breadcrumb API",
        category: "navigation",
        description:
          "Learn about the Breadcrumb component's props and CSS classes.",
      },
      {
        slug: "button-api",
        title: "Button API",
        category: "inputs",
        description:
          "Learn about the Button component's props and CSS classes.",
      },
      {
        slug: "card-api",
        title: "Card API",
        category: "data-display",
        description: "Learn about the Card component's props and CSS classes.",
      },
      {
        slug: "center-api",
        title: "Center API",
        category: "layout",
        description:
          "Learn about the Center component's props and CSS classes.",
      },

      {
        slug: "checkbox-api",
        title: "Checkbox API",
        category: "inputs",
        description:
          "Learn about the Checkbox component's props and CSS classes.",
      },
      {
        slug: "chip-api",
        title: "Chip API",
        category: "data-display",
        description: "Learn about the Chip component's props and CSS classes.",
      },
      {
        slug: "circle-api",
        title: "Circle API",
        category: "layout",
        description:
          "Learn about the Circle component's props and CSS classes.",
      },
      {
        slug: "close-button-api",
        title: "CloseButton API",
        category: "inputs",
        description:
          "Learn about the CloseButton component's props and CSS classes.",
      },

      {
        slug: "collapse-api",
        title: "Collapse API",
        category: "data-display",
        description:
          "Learn about the Collapse component's props and CSS classes.",
      },
      {
        slug: "color-field-api",
        title: "ColorField API",
        category: "inputs",
        description:
          "Learn about the ColorField component's props and CSS classes.",
      },
      {
        slug: "container-api",
        title: "Container API",
        category: "layout",
        description:
          "Learn about the Container component's props and CSS classes.",
      },
      {
        slug: "dialog-api",
        title: "Dialog API",
        category: "overlay",
        description:
          "Learn about the Dialog component's props and CSS classes.",
      },

      {
        slug: "divider-api",
        title: "Divider API",
        category: "miscellaneous",
        description:
          "Learn about the Divider component's props and CSS classes.",
      },
      {
        slug: "drawer-api",
        title: "Drawer API",
        category: "overlay",
        description:
          "Learn about the Drawer component's props and CSS classes.",
      },
      {
        slug: "field-api",
        title: "Field API",
        category: "inputs",
        description: "Learn about the Field component's props and CSS classes.",
      },
      {
        slug: "flex-api",
        title: "Flex API",
        category: "layout",
        description: "Learn about the Flex component's props and CSS classes.",
      },
      {
        slug: "form-api",
        title: "Form API",
        category: "inputs",
        description: "Learn about the Form component's props and CSS classes.",
      },
      {
        slug: "gradient-api",
        title: "Gradient API",
        category: "data-display",
        description:
          "Learn about the Gradient component's props and CSS classes.",
      },
      {
        slug: "grid-api",
        title: "Grid API",
        category: "layout",
        description: "Learn about the Grid component's props and CSS classes.",
      },
      {
        slug: "hidden-api",
        title: "Hidden API",
        category: "layout",
        description:
          "Learn about the Hidden component's props and CSS classes.",
      },
      {
        slug: "hide-api",
        title: "Hide API",
        category: "layout",
        description: "Learn about the Hide component's props and CSS classes.",
      },
      {
        slug: "highlight-api",
        title: "Highlight API",
        category: "typography",
        description:
          "Learn about the Highlight component's props and CSS classes.",
      },

      {
        slug: "icon-api",
        title: "Icon API",
        category: "data-display",
        description: "Learn about the Icon component's props and CSS classes.",
      },
      {
        slug: "image-api",
        title: "Image API",
        category: "data-display",
        description: "Learn about the Image component's props and CSS classes.",
      },
      {
        slug: "initials-api",
        title: "Initials API",
        category: "typography",
        description:
          "Learn about the Initials component's props and CSS classes.",
      },
      {
        slug: "key-api",
        title: "Key API",
        category: "data-display",
        description: "Learn about the Key component's props and CSS classes.",
      },
      {
        slug: "link-api",
        title: "Link API",
        category: "navigation",
        description: "Learn about the Link component's props and CSS classes.",
      },
      {
        slug: "list-api",
        title: "List API",
        category: "data-display",
        description: "Learn about the List component's props and CSS classes.",
      },
      {
        slug: "menu-api",
        title: "Menu API",
        category: "overlay",
        description: "Learn about the Menu component's props and CSS classes.",
      },
      {
        slug: "modal-api",
        title: "Modal API",
        category: "overlay",
        description: "Learn about the Modal component's props and CSS classes.",
      },
      {
        slug: "native-date-field-api",
        title: "NativeDateField API",
        category: "inputs",
        description:
          "Learn about the NativeDateField component's props and CSS classes.",
      },
      {
        slug: "native-select-field-api",
        title: "NativeSelectField API",
        category: "inputs",
        description:
          "Learn about the NativeSelectField component's props and CSS classes.",
      },
      {
        slug: "number-field-api",
        title: "NumberField API",
        category: "inputs",
        description:
          "Learn about the NumberField component's props and CSS classes.",
      },

      {
        slug: "paper-api",
        title: "Paper API",
        category: "data-display",
        description: "Learn about the Paper component's props and CSS classes.",
      },
      {
        slug: "password-field-api",
        title: "PasswordField API",
        category: "inputs",
        description:
          "Learn about the PasswordField component's props and CSS classes.",
      },
      {
        slug: "pin-field-api",
        title: "PinField API",
        category: "inputs",
        description:
          "Learn about the PinField component's props and CSS classes.",
      },
      {
        slug: "popover-api",
        title: "Popover API",
        category: "overlay",
        description:
          "Learn about the Popover component's props and CSS classes.",
      },
      {
        slug: "portal-api",
        title: "Portal API",
        category: "overlay",
        description:
          "Learn about the Portal component's props and CSS classes.",
      },
      {
        slug: "progress-api",
        title: "Progress API",
        category: "data-display",
        description:
          "Learn about the Progress component's props and CSS classes.",
      },
      {
        slug: "radio-api",
        title: "Radio API",
        category: "inputs",
        description: "Learn about the Radio component's props and CSS classes.",
      },
      {
        slug: "segmented-field-api",
        title: "SegmentedField API",
        category: "inputs",
        description:
          "Learn about the SegmentedField component's props and CSS classes.",
      },

      {
        slug: "select-field-api",
        title: "SelectField API",
        category: "inputs",
        description:
          "Learn about the SelectField component's props and CSS classes.",
      },
      {
        slug: "show-api",
        title: "Show API",
        category: "data-display",
        description: "Learn about the Show component's props and CSS classes.",
      },
      {
        slug: "skeleton-api",
        title: "Skeleton API",
        category: "feedback",
        description:
          "Learn about the Skeleton component's props and CSS classes.",
      },
      {
        slug: "spinner-api",
        title: "Spinner API",
        category: "feedback",
        description:
          "Learn about the Spinner component's props and CSS classes.",
      },
      {
        slug: "square-api",
        title: "Square API",
        category: "layout",
        description:
          "Learn about the Square component's props and CSS classes.",
      },

      {
        slug: "stack-api",
        title: "Stack API",
        category: "data-display",
        description: "Learn about the Stack component's props and CSS classes.",
      },
      {
        slug: "switch-api",
        title: "Switch API",
        category: "inputs",
        description:
          "Learn about the Switch component's props and CSS classes.",
      },
      {
        slug: "table-api",
        title: "Table API",
        category: "data-display",
        description: "Learn about the Table component's props and CSS classes.",
      },
      {
        slug: "tabs-api",
        title: "Tabs API",
        category: "data-display",
        description: "Learn about the Tabs component's props and CSS classes.",
      },
      {
        slug: "text-api",
        title: "Text API",
        category: "typography",
        description: "Learn about the Text component's props and CSS classes.",
      },
      {
        slug: "textarea-field-api",
        title: "TextareaField API",
        category: "inputs",
        description:
          "Learn about the TextareaField component's props and CSS classes.",
      },
      {
        slug: "text-field-api",
        title: "TextField API",
        category: "inputs",
        description:
          "Learn about the TextField component's props and CSS classes.",
      },
      {
        slug: "toaster-api",
        title: "Toaster API",
        category: "feedback",
        description:
          "Learn about the Toaster component's props and CSS classes.",
      },
      {
        slug: "tooltip-api",
        title: "Tooltip API",
        category: "overlay",
        description:
          "Learn about the Tooltip component's props and CSS classes.",
      },
      {
        slug: "transition-api",
        title: "Transition API",
        description:
          "Learn about the Transition component's props and CSS classes.",
      },
    ],
  },
  {
    title: "Hooks",
    slug: "hooks",
    items: [
      {
        slug: "getting-started",
        title: "Getting Started",
        description:
          "Learn about all of Prismane's hooks. Explore all of the hooks, ordered by their type.",
      },
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
        slug: "use-copy-to-clipboard",
        title: "useCopyToClipboard",

        category: "state-management",
        description:
          "useCopyToClipboard hook provides a copyToClipboard method to save a string in the clipboard and the copiedValue value (default: null).",
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
        slug: "use-presence",
        title: "usePresence",
        category: "user-interface",
        description:
          "usePresence hook provides a way to animate an element, before removing it from the DOM.",
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

export default contentMap;
