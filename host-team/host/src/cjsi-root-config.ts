import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@cjsi/navy-mfe",
  app: () => System.import("@cjsi/navy-mfe"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
