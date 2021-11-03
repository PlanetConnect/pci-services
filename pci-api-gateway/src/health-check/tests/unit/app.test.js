"use strict";

const app = require("../../app");

var event, context;

describe("Health check tests", function () {
  it("verifies successful response", async () => {
    const result = await app.lambdaHandler(event, context);

    expect(result).toBeInstanceOf(Object);
    expect(result.statusCode).toBe(200);
    expect(typeof result.body).toBe("string");

    let response = JSON.parse(result.body);

    expect(response).toBeInstanceOf(Object);
    expect(typeof response.message).toBe("string");
  });
});
