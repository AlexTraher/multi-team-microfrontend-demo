import { Command, Flags } from "@oclif/core";
import { readFile, writeFile } from "fs/promises";
import { changeConfigFlag, ImportMap } from "../common";
import path from "path";

export default class PreRelease extends Command {
  static description = "creates a pre-release import map with changes provided and the current production import map"

  static examples = [
    "$ imu pre-release -m ./src/importmap.json -c \"{ \"@cjsi/navy-mfe\": \"http:localhost:8081/csji-navy-mfe.1.0.1.js\" }\" -f pre-release.json",
  ]

  static flags = {
    mapLocation: Flags.string({ char: "m", description: "the location of the import map", required: true }),
    changeConfig: changeConfigFlag(),
    preReleaseFilename: Flags.string({ char: "f", description: "the filename of the pre-release", required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PreRelease);
    const result = <ImportMap>JSON.parse(await readFile(flags.mapLocation, "utf8"));

    const updatedImportMap = {
      imports: {
        ...result.imports,
        ...flags.changeConfig,
      },
    };
    const filePath = path.join(path.dirname(flags.mapLocation), flags.preReleaseFilename);
    await writeFile(filePath, JSON.stringify(updatedImportMap, null, 2));
    this.log(`Successfully pre-released a new import map and saved to ${filePath}`);
  }
}
