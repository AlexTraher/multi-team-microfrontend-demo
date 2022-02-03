import { execSync } from "child_process";

type TriggerReleaseFn = (packageName: string, changeConfig: Record<string, string>) => void;
type TriggerPreReleaseFn = (packageName: string, changeConfig: Record<string, string>, preReleaseFolder:string) => void;

export const triggerRelease: TriggerReleaseFn = (packageName, changeConfig) => {
  execSync(
    `yarn workspace ${packageName} run release -c '${JSON.stringify(
      changeConfig,
    )}'`,
    { stdio: "inherit" },
  );
};

export const triggerPreRelease: TriggerPreReleaseFn = (packageName, changeConfig, preReleaseFolder) => {
  execSync(
    `yarn workspace ${packageName} run pre-release -c '${JSON.stringify(
      changeConfig,
    )}' -f ${preReleaseFolder}.json`,
    { stdio: "inherit" },
  );
};
