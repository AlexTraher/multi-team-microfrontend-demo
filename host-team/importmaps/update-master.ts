import fs from "fs/promises";
import { release } from "@cjsi/import-map-updater";

const MASTER_MAP_LOCATION = "./maps/app.json" as const;

release(MASTER_MAP_LOCATION);
