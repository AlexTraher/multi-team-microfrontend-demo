import { Command, Flags } from "@oclif/core";
import { readFile, writeFile } from "fs/promises";
import { changeConfigFlag, ImportMap } from "../common";

export default class Release extends Command {
  static description = "updates the production import map with changes provided"

  static examples = [
    "$ imu release -m ./src/importmap.json -c \"{ \"@cjsi/navy-mfe\": \"http:localhost:8081/csji-navy-mfe.1.0.1.js\" }\"",
  ]

  static flags = {
    mapLocation: Flags.string({ char: "m", description: "the location of the import map", required: true }),
    changeConfig: changeConfigFlag(),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Release);
    const result = <ImportMap>JSON.parse(await readFile(flags.mapLocation, "utf8"));

    const updatedImportMap = {
      imports: {
        ...result.imports,
        ...flags.changeConfig,
      },
    };

    await writeFile(flags.mapLocation, JSON.stringify(updatedImportMap, null, 2));
    this.log(`Successfully released a new import map and saved to ${flags.mapLocation}`);
  }
}
