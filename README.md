<p align="center">
  <img src="https://github.com/hachadorian/MIT/blob/master/src/images/mobilebanner.png" alt="MIT logo" height="100px"/>
</p>

# Municipal Implementation Toolbox (MIT)

DVRPC has designed this online toolbox to serve as a guide for municipalities to help implement the goals of Connections 2050, the region’s Long-range Plan. It contains resources, case studies, and model/sample ordinances for tools that are most useful for implementing the 5 Core Principles of the Plan.

## Installation:
Use npm to install dependencies.

```bash
npm install
```
Then run the develop script to run application locally.
```bash
npm run develop
```

## Testing:
[Cypress](https://github.com/cypress-io/cypress) is used for testing. To run the tests you must have two terminals open. The first terminal should run the Gatsby development script
```bash
npm run develop
```
and the second terminal opens cypress
```bash
npx cypress open
```
Cypress is ran through the browser. I had some difficulties when running in Firefox but Google Chrome works well.

## Links for planners:
This application makes use of markdown files. Indentation is important for parsing and improper indentation can lead to bad formatting when displayed. [This link](https://www.markdownguide.org/basic-syntax/) shows how to properly write markdown and should answer most syntax questions. Any further questions can be sent to developers.
