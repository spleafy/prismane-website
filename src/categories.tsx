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
};

export default categories;
