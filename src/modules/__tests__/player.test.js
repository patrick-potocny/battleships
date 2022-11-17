/* eslint-disable */
const Player = require('../player')

describe('Player', () => {
  beforeEach(() => {
    player = new Player('Player name')
  })

  test('recieve random hit', () => {
    expect(player.gameboard.recieveRandomHit()).toEqual(expect.any(String))
  });
}); 