import {
  TextAa,
  Textbox,
  AlignCenterVerticalSimple,
  Rows,
  StackSimple,
  WarningDiamond,
  LinkSimple,
  Toolbox,
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
};

export default categories;
