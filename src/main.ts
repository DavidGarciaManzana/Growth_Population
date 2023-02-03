let nbYear = (p0: number, percent: number, aug: number, p: number): number => {
    let years:number = 0;
    for (let i: number = 0; Math.floor(p0) <= p; i++) {
        if (percent == 0) {
            p0 += (p0 * (percent / 100)) + aug + 1;
            years++
        } else {
            p0 += (p0 * (percent / 100)) + aug;
            years++
        }
    };
    return years;
};