import { sum } from '../sum';

test('一加二 等於三', () => {
  expect(sum(1, 2)).toBe(3)
}) 

test('一加4 等於五', () => {
  expect(sum(1, 4)).toBe(5)
}) 