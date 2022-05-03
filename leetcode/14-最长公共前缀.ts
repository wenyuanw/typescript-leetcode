function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''
  let ans = strs[0]
  for (let i = 1; i < strs.length; i++) {
    const len = Math.min(ans.length, strs[i].length)
    let count = 0
    for (; count < len; count++) {
      if (ans[count] !== strs[i][count]) {
        break
      }
    }
    ans = ans.substring(0, count)
    if (ans === '') return ans
  }
  return ans
}