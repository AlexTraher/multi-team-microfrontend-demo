import { execSync } from "child_process";
const version = process.env.npm_package_version;
const packageName = process.env.npm_package_name;


const release = async () => {
  const changeConfig = {
    [packageName]: `http://localhost:8080/cjsi-navy-mfe.${version}.js`
  }

  debugger;
  const result = execSync(`yarn workspace @cjsi/importmap run deploy-master --changeConfig='${JSON.stringify(changeConfig)}'`, { stdio: 'inherit' });
  debugger;
}

release();



