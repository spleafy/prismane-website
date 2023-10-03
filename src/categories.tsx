import {
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
  Calendar,
  MathOperations,
} from "@phosphor-icons/react";

const categories = {
  components: [
    {
      name: "typography",
      icon: <TextAa />,
    },
    {
      name: "inputs",
      icon: <Textbox />,
    },
    {
      name: "layout",
      icon: <AlignCenterVerticalSimple />,
    },
    {
      name: "data-display",
      icon: <Rows />,
    },
    {
      name: "overlay",
      icon: <StackSimple />,
    },
    {
      name: "feedback",
      icon: <WarningDiamond />,
    },
    {
      name: "navigation",
      icon: <LinkSimple />,
    },
    {
      name: "miscellaneous",
      icon: <Toolbox />,
    },
  ],
  hooks: [
    {
      name: "user-interface",
      icon: <CursorClick />,
    },
    {
      name: "state-management",
      icon: <Database />,
    },
    {
      name: "miscellaneous",
      icon: <Toolbox />,
    },
  ],
  validators: [
    {
      name: "string",
      icon: <TextAa />,
    },
    {
      name: "number",
      icon: <MathOperations />,
    },
    {
      name: "date",
      icon: <Calendar />,
    },
    {
      name: "multiple",
      icon: <Toolbox />,
    },
  ],
};

export default categories;
