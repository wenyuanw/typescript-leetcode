function climbStairs(n: number): number {
    const dp: number[] = []
    dp[0] = -1
    dp[1] = 1
    dp[2] = 2

    if(n < 3) return dp[n]
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
};