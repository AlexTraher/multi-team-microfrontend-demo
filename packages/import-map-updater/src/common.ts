import { Flags } from "@oclif/core";

export const changeConfigFlag = Flags.build({
  char: "c",
  description: "a json.stringified key value pair map",
  parse: (string): Promise<Record<string, string>> => JSON.parse(string),
  required: true,
});

export interface ImportMap {
  imports: Record<string, string>;
}
