import fs from "fs/promises";

export interface ImportMap {
  imports: Record<string, string>;
}
const getChangeConfig = () => {
  let config: Record<string, string>;
  try {
    const changeConfig = process.argv
      .find((val) => val.includes("--changeConfig"))
      ?.split("=")?.[1];
    if (changeConfig) {
      config = JSON.parse(changeConfig);
    } else {
      throw new Error("failed to parse");
    }
  } catch (e) {
    console.error("failed to parse change config");
    process.exit(1);
  }

  return config;
};

export const release = async (mapLocation: string) => {
  const result = <ImportMap>JSON.parse(await fs.readFile(mapLocation, "utf8"));

  const changeConfig = getChangeConfig();

  const updatedImportMap = {
    imports: {
      ...result.imports,
      ...changeConfig,
    },
  };

  await fs.writeFile(mapLocation, JSON.stringify(updatedImportMap, null, 2));
};
