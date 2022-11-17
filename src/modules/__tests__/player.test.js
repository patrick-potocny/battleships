/* eslint-disable */
const Player = require('../player')

describe('Player', () => {
  beforeEach(() => {
    player = new Player('Player name')
  })

  test('Player recieve random hit ', () => {
    expect(player.recieveRandomHit()).toEqual(expect.any(String))
  });
}); 