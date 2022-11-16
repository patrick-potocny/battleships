/* eslint-disable */
const Ship = require("../ship");

describe("Ship", () => {
  beforeEach(() => {
    ship = new Ship(4);
  });
  test("Creates ship of length 4", () => {
    expect(ship.length).toBe(4);
  });

  test("Hits ship once", () => {
    ship.hit();
    expect(ship.lives).toBe(3);
  });

  test("Sink the ship", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hit()).toBe(true);
  });

});
