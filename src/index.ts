export function factorial(n: number): number {
  if (n < 0) {
    throw new Error('Value must be non-negative')
  }

  return n > 0
    ? n * factorial(n - 1)
    : 1
}
