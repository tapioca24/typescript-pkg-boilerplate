import * as pkg from '../dist/index'

describe('factorial', () => {
  it('正数を入力すると階乗を返す', () => {
    expect(pkg.factorial(3)).toBe(6)
    expect(pkg.factorial(5)).toBe(120)
  })

  it('0を入力すると1を返す', () => {
    expect(pkg.factorial(0)).toBe(1)
  })

  it('負数を入力すると例外をスローする', () => {
    expect(() => pkg.factorial(-1)).toThrowError('Value must be non-negative')
  })
})
