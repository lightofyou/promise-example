import { random, getData, getDatasWithCount, getDatasWithCountAndTimes } from './main'

describe('--------------------------------TEST START---------------------------------', () => {
  describe('1: random function', () => {
    test('random test with start equal 1, end equal 5, expect 1,2,3,4,5', () => {
      const start = 1, end = 5
      const numbers = Array.from(new Set(Array(100).fill(0).map(() => (random(start, end))))).sort()
      const expectNumbers = [1, 2, 3, 4, 5]
      expect(numbers).toEqual(expectNumbers)
    })
  })
  describe('2: getData function', () => {
    test('getData function should return a Promise and resolve a number', async () => {
      const dataPromise = getData()
      expect(dataPromise).toEqual(expect.any(Object))
      const data = await dataPromise
      expect(data).toEqual(expect.any(Number))
    })
  })
  describe('3: getDatasWithCount function', () => {
    test('getDatasWithCount function should return a Promise and resolve a number array', async () => {
      const dataPromise = getDatasWithCount(2)
      expect(dataPromise).toEqual(expect.any(Object))
      const data = await dataPromise
      expect(data).toEqual(expect.any(Array))
    })
    test('input count equal 5, output array length should be 5', async () => {
      const data = await getDatasWithCount(5)
      expect(data.length).toBe(5)
    })
  })
  describe('3: getDatasWithCountAndTimes function', () => {
    test('getDatasWithCountAndTimes function should return a Promise and resolve a two dimensional number array', async () => {
      const dataPromise = getDatasWithCountAndTimes(2,2)
      expect(dataPromise).toEqual(expect.any(Object))
      const data = await dataPromise
      expect(data).toEqual(expect.any(Array))
      data.forEach(each => {
        expect(each).toEqual(expect.any(Array))
      })
    })
    test('input count equal 3, times equal 5, output array should be 3 * 5', async () => {
      const data = await getDatasWithCountAndTimes(3, 5)
      expect(data.length).toBe(5)
      data.forEach(each => {
        expect(each.length).toBe(3)
      })
    })
  })
})




