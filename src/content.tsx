import {
  Sparkle,
  Atom,
  PaintBrush,
  Palette,
  SquaresFour,
  Code,
  Wrench,
  Checks,
} from "@phosphor-icons/react";

import contentMap from "./contentMap";

const content = contentMap.slice();

content[0].icon = <Sparkle />;
content[1].icon = <Atom />;
content[2].icon = <PaintBrush />;
content[3].icon = <Palette />;
content[4].icon = <SquaresFour />;
content[5].icon = <Code />;
content[6].icon = <Wrench />;
content[7].icon = <Checks />;

export default content;
