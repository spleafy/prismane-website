import { PRISMANE_COLORS } from '@prismane/core';

const ColorPalette = () => {
  const colors: any = { ...PRISMANE_COLORS };

  return (
    <>
      {Object.keys(colors).map((name, index) => (
        <div key={index} className="flex flex-col gap-5">
          <span className="flex w-32 text-xl font-bold uppercase text-primary-500">
            {name}
          </span>
          <div className="mb-5 flex grow items-center gap-5">
            {Object.keys(colors[name]).map((shade, index) => (
              <div
                key={index}
                className="flex grow cursor-pointer flex-col"
                onClick={() => {
                  navigator.clipboard.writeText(colors[name][shade].toString());
                }}
              >
                <div
                  className="mb-2 flex h-16 grow rounded-md"
                  style={{ backgroundColor: colors[name][shade] }}
                ></div>
                <span className="font-bold text-base-900 dark:text-white">
                  {shade}
                </span>
                <span className="text-sm text-base-700 dark:text-base-300">
                  {colors[name][shade]}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ColorPalette;
