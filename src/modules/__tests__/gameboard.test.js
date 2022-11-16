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
    gameboard.recieveAttack([0, 1])
    expect(gameboard.board[0][0].lives).toBe(1)
  });

  test('miss ship', () => {
    gameboard.recieveAttack([0, 2])
    expect(gameboard.board[0][0].lives).toBe(2)
    expect(gameboard.board[0][2]).toBe(false)
  });

  test('Sink all ships', () => {
    gameboard.recieveAttack([0, 0])
    expect(gameboard.recieveAttack([0, 1])).toBe('gameEnd')
  });
});