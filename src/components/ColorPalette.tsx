import { PRISMANE_COLORS } from "@prismane/core";

const ColorPalette = () => {
  const colors: any = { ...PRISMANE_COLORS };

  return (
    <>
      {Object.keys(colors).map((name, index) => (
        <div key={index} className="flex flex-col gap-5">
          <span className="flex w-32 text-primary-500 uppercase font-bold text-xl">
            {name}
          </span>
          <div className="flex grow items-center gap-5 mb-5">
            {Object.keys(colors[name]).map((shade, index) => (
              <div
                key={index}
                className="flex flex-col grow cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(colors[name][shade].toString());
                }}
              >
                <div
                  className="flex h-16 grow rounded-md mb-2"
                  style={{ backgroundColor: colors[name][shade] }}
                ></div>
                <span className="font-bold dark:text-white text-base-900">
                  {shade}
                </span>
                <span className="text-sm dark:text-base-300 text-base-700">
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
