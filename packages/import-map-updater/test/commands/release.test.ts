import { expect, test } from "@oclif/test";
import fs from "fs/promises";
import sinon, { SinonStubbedMember } from "sinon";
import { mockImportMap, mockChangeConfig } from "../helpers/data";

describe("release command", () => {
  test
  .stdout()
  .stub(fs, "readFile", async () => JSON.stringify(mockImportMap))
  .stub(fs, "writeFile", sinon.stub())
  .command(["release", "-c", JSON.stringify(mockChangeConfig), "-m", "./src/importmap.json"])
  .it("runs release command and saves changes", (ctx) => {
    const writeFile = <SinonStubbedMember<typeof fs.writeFile>>fs.writeFile;
    expect(writeFile.calledWithExactly(
      "./src/importmap.json",
      JSON.stringify({
        imports: {
          ...mockImportMap.imports,
          ...mockChangeConfig,
        },
      }, null, 2),
    )).to.be.true;

    expect(ctx.stdout).to.equal("Successfully released a new import map and saved to ./src/importmap.json\n");
  });
});
