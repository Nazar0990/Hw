function compareNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function factorial(n) {
    if (n < 0) return "Number must be non-negative";
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
}

function combineDigits(a, b, c) {
    return a * 100 + b * 10 + c;
}

function rectangleArea(length, width) {
    if (width === undefined) return length * length;
    return length * width;
}

function isPerfect(n) {
    if (n <= 1) return false;
    let s = 1;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            s += i;
            if (i !== n / i) s += n / i;
        }
    }
    return s === n;
}

function perfectNumbersInRange(min, max) {
    let a = [];
    for (let i = min; i <= max; i++) {
        if (isPerfect(i)) a.push(i);
    }
    console.log(a.join(", "));
}

function formatTime(h, m = 0, s = 0) {
    const hh = h.toString().padStart(2, '0');
    const mm = m.toString().padStart(2, '0');
    const ss = s.toString().padStart(2, '0');
    console.log(${hh}:${mm}:${ss});
}

function timeToSeconds(h, m = 0, s = 0) {
    return h * 3600 + m * 60 + s;
}

function secondsToTime(sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return (
        h.toString().padStart(2, '0') + ":" +
        m.toString().padStart(2, '0') + ":" +
        s.toString().padStart(2, '0')
    );
}

function dateDifference(h1, m1, s1, h2, m2, s2) {
    const t1 = timeToSeconds(h1, m1, s1);
    const t2 = timeToSeconds(h2, m2, s2);
    return secondsToTime(Math.abs(t2 - t1));
}