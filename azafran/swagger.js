const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Azafran API",
    description: "Endpoints for Azafran an application for recipes",
  },
  securityDefinitions: {
    oAuthSample: {
      type: "oauth2",
      authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
      flow: "implicit",
      scopes: {
        read_pets: "read your pets",
        write_pets: "modify pets in your account",
      },
    },
  },
  security: [{ oAuthSample: [] }],
};

const outputFile = "./swagger-output.json";
const routes = ["./index.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
