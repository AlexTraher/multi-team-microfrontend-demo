import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@cjsi/navy-mfe",
  app: () => System.import("@cjsi/navy-mfe"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@cjsi/maroon-mfe",
  app: () => System.import("@cjsi/maroon-mfe"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@cjsi/sky-mfe",
  app: () => System.import("@cjsi/sky-mfe"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
