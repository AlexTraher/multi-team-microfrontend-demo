import { triggerRelease } from '@cjsi/import-map-updater';
const version = process.env.npm_package_version;
const packageName = process.env.npm_package_name;

const release = async () => {
  const changeConfig = {
    [packageName]: `http://localhost:8082/cjsi-maroon-mfe.${version}.js`,
  };

  triggerRelease('@cjsi/importmap', changeConfig);
};

release();
