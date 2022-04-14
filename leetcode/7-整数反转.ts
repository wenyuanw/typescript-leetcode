function reverse(x: number): number {
    let res = parseInt(Math.abs(x).toString().split('').reverse().join(''))
    if (x >= 0) {
        if(res > (Math.pow(2, 23) - 1)) {
            return 0
        }
        return res
    }
    if(-res < -Math.pow(2, 23)) {
        return 0
    }
    return -res
};