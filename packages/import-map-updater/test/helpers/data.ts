import { ImportMap } from "../../src/types";

export const mockImportMap: ImportMap = {
  imports: {
    "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
    "@cjsi/navy-mfe": "http://localhost:8080/cjsi-navy-mfe.1.0.8.js",
    "@cjsi/root-config": "//localhost:9000/cjsi-root-config.js",
    "@cjsi/maroon-mfe": "http://localhost:8082/cjsi-maroon-mfe.1.0.0.js",
  },
};

export const mockChangeConfig: Record<string, string> = {
  "@cjsi/navy-mfe": "http://localhost:8080/cjsi-navy-mfe.1.1.0.js",
  "@cjsi/sky-mfe": "http://localhost:8080/cjsi-sky-mfe.1.0.0.js",
};
