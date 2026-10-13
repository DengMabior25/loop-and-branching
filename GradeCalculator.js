function studentGradeCalculator(scores) {
    if (scores.length !== 10) {
        console.log("Please enter exactly 10 students scores.");
        return;
    }

    let total =0;
    let passed = 0;
    let failed = 0;
    let highest = scores[0];
    let lowest = scores[0];

    for (let i = 0; i < score.length; i++) {
        let score = scores[i];
        total += score;

        if (score >= 75) {
            passed++;
        } else {
            failed++;
        }

        if (score > highest) highest = score;
        if (score < lowest) lowest = score;
    }

    let average = total / score.length;

    console.log(`Average Score: ${average}`);
    console.log(`Passed Students (Score >= 75): ${passed}`);
    console.log(`Failed Students: ${failed}`);
    console.log(`Highest Score: ${highest}`);
    console.log(`Lowest Score: ${lowest}`);
}

const studentScores = 10;
studentGradeCalculator(studentScores);
