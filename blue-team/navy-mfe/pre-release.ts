import { triggerPreRelease } from "@cjsi/import-map-updater";

const version = process.env.npm_package_version;
const packageName = process.env.npm_package_name;

const release = async () => {
  const changeConfig = {
    [packageName]: `http://localhost:8080/cjsi-navy-mfe-beta.${version}.js`,
  };


  triggerPreRelease('@cjsi/importmap', changeConfig, `navy-mfe-${version}`);
};

release();
