// Extra Practice: Staircase Problem
function steps(n) {
    for (let i = 1; i <= n; i++) {
        let step = '#'.repeat(i);
        console.log(step);
    }
}

steps(3); // Test with 3 levels
