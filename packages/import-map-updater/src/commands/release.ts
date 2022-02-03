import { Command, Flags } from "@oclif/core";
import { readFile, writeFile } from "fs/promises";

const flag = Flags.build({
  char: "c",
  description: "a json.stringified key value pair map",
  parse: (string): Promise<Record<string, string>> => JSON.parse(string),
  required: true,
});

export interface ImportMap {
  imports: Record<string, string>;
}

export default class Release extends Command {
  static description = "Say hello"

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    mapLocation: Flags.string({ char: "m", description: "the location of the import map", required: true }),
    changeConfig: flag(),
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
  }
}
