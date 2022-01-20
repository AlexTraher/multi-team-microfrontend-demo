import fs from 'fs/promises';

const MASTER_MAP_LOCATION = './maps/app.json' as const;


interface ImportMap {
  imports: Record<string, string>
}

// This updater comes from import-map-updater
const updateMaster = async (changeConfig: Record<string,string>) => {
  const result = <ImportMap>JSON.parse(await fs.readFile(MASTER_MAP_LOCATION, 'utf8'));

  const updatedImportMap = {
    imports: {
      ...result.imports,
      ...changeConfig
    }
  }

  await fs.writeFile(MASTER_MAP_LOCATION, JSON.stringify(updatedImportMap, null, 2));
}

let config: Record<string, string>;

try {
  const changeConfig = process.argv.find((val) => val.includes('--changeConfig'))?.split('=')?.[1];
  if (changeConfig) {
    config = JSON.parse(changeConfig);
  } else {
    throw new Error('failed to parse');
  }
  // TODO - put this in separate file
} catch (e) {
  debugger;
  console.error('failed to parse change config');
  process.exit(1);
}

console.log('updating...');

updateMaster(config);