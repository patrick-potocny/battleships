/* eslint-disable */
const Gameboard = require('../gameboard')

describe('Gameboard', () => {
  beforeEach(() => {
    gameboard = new Gameboard()
    gameboard.placeShip(2, [[0, 0], [0, 1]])
  })

  test('Place ship at first two cells', () => {
    expect(gameboard.board[0][0].length).toBe(2)
    expect(gameboard.board[0][1].length).toBe(2)
  });

  test('Hit ship', () => {
    gameboard.recieveHit([0, 1])
    expect(gameboard.board[0][0].lives).toBe(1)
  });

  test('miss ship', () => {
    gameboard.recieveHit([0, 2])
    expect(gameboard.board[0][0].lives).toBe(2)
    expect(gameboard.board[0][2]).toBe(false)
  });

  test('Sink all ships', () => {
    gameboard.recieveHit([0, 0])
    expect(gameboard.recieveHit([0, 1])).toBe('gameEnd')
  });

  test('Populate board', () => {
    gameboard.populateBoard()
    console.table(gameboard.board);
  });

  test('recieve random hit ', () => {
    expect(gameboard.recieveRandomHit()).toEqual(expect.any(String))
  });
});