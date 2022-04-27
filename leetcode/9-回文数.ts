function isPalindrome(x: number): boolean {
  const x_r = parseInt(x.toString().split('').reverse().join(''))
  
  return x === x_r
};