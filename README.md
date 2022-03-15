# Import map demo 
A micro frontend architecture demo that has a host application and a shared import map, then a tool to update import maps on the fly.

## Getting started
First run `yarn`.

Then `yarn dev`.

This will start all the servers for the various micro frontends, plus the host application, and the import maps. 

You can then visit the main application at `http://localhost:9000`. This is the host application and you will be able see the other microfrontends being loaded in.
## The pieces
The demo is comprised of 4 main folders: 
  - `red-team` - that holds micro frontends "owned" by the red vertical team.

  - `blue-team` - that holds microfrontends "owned" by the blue vertical team.

  - `host-team` - that holds the host application and also the shared resource that links all the applications together; the importmaps.

  - `packages` - holds shared npm packages that are used by multiple apps, currently this is limited to the import-map-updater library, but in a production application would likely also include a shared component library.

## The workflow
- A vertical team (in this codebase the blue or red team) will make a change to one of their micro frontends.
- They can then verify that change in the host application by creating a "pre-release" import map which can be routed to via a query param in the host application
- Once they are happy they can update the production importmap and release their changes into production, while never affecting the host application.

## `import-map-updater`
The import map updater is a package that is used by all teams to help manage the shared resource that is the import maps. it provides a cli interface to update the production import map, or to create pre-release import maps.

In addition it has a node api to trigger updates to a specific host team's import maps. This provides a straightforward interface for vertical teams to use to update the import maps and removes any requirements for manual intervention.

## Caveats
This repo is intended to mimic multiple independent teams producing micro frontends that can be composed at runtime. 

While this demo does provide a good proxy for the actual solution we use, there are a few simplifications we have made. 

Firstly, we haven't considered multiple environments, which we do consider in our live implementation. This is dealt with by an additional param in the `import-map-updater` and multiple importmaps (one for each environment).

Secondly, in this example, the `import-map-updater` trigger simply runs a command in a separate workspace, however our actual implementation is slightly more sophisticated and triggers a REST api, helping to manage credentials etc as well.





