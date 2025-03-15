import * as icons from '@phosphor-icons/react';

const directoryIconMap: Record<string, keyof typeof icons | undefined> = {
  'getting-started': 'RocketLaunch',
  frameworks: 'Atom',
  styling: 'PaintBrush',
  theming: 'Palette',
  components: 'SquaresFour',
  'components/data-display': 'Rows',
  'components/inputs': 'Textbox',
  'components/feedback': 'WarningDiamond',
  'components/miscellaneous': 'Toolbox',
  'components/layout': 'AlignCenterVerticalSimple',
  'components/overlay': 'StackSimple',
  'components/navigation': 'LinkSimple',
  'components/typography': 'TextAa',
  'components-api': 'Code',
  'components-api/data-display': 'Rows',
  'components-api/inputs': 'Textbox',
  'components-api/feedback': 'WarningDiamond',
  'components-api/miscellaneous': 'Toolbox',
  'components-api/layout': 'AlignCenterVerticalSimple',
  'components-api/overlay': 'StackSimple',
  'components-api/navigation': 'LinkSimple',
  'components-api/typography': 'TextAa',
  hooks: 'Wrench',
  'hooks/user-interface': 'CursorClick',
  'hooks/state-management': 'Database',
  'hooks/miscellaneous': 'Toolbox',
  validators: 'Checks',
  'validators/date': 'Calendar',
  'validators/string': 'TextAa',
  'validators/number': 'MathOperations',
  'validators/multiple': 'Toolbox',
  playground: 'CompassTool'
};

export default directoryIconMap;
