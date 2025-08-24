const studentGrades = [
    99, 85, 76, 88, 92, 67, 73, 84, 91, 78,
    55, 50, 45, 60, 70, 80, 90, 100, 65, 75,
    40, 30, 20, 10, 0
];
const acceptedGradeThreshold = 50;

function calculateAverage(grades) {
    let total = 0;
    for (let grade of grades) {
        total += grade;
    }

    let average = total / grades.length;

    checkGradeAcceptance(average);

    return average;
}

function checkGradeAcceptance(grage, threshold = acceptedGradeThreshold, log = true) {
    if (grage >= threshold) {
        //if (log) console.log( grage + " Passed");
        return true;
    } else {
        //if (log) console.log(grage + " Failed");
        return false;
    }
}

function filterPassed(grades /*, threshold = acceptedGradeThreshold*/) {
    if (!Array.isArray(grades)) {
        throw new Error("grades must be an array");
    }

    //return grades.filter(grade => grade >= threshold);

    //OR

    return grades.filter(grade => checkGradeAcceptance(grade, threshold = acceptedGradeThreshold, log = false));
}

function doubleGrades(grades) {
    if (!Array.isArray(grades)) {
        throw new Error("grades must be an array");
    }
    
    /*return grades.map(grade => {
        let doubled = grade + 10;
        return doubled > 100 ? 100 : doubled;
    });*/

    //OR

    return grades.map(grade => Math.min(grade + 10, 100));
}

console.log("Source Grades:", studentGrades);
console.log("Average Grade:", calculateAverage(studentGrades));
console.log("Passed Grades:", filterPassed(studentGrades));
console.log("Doubled Grades:", doubleGrades(studentGrades));

function printLogs() {
    console.log('--- --- ---');
    console.log('--- --- ---');
    console.log('--- --- ---');
    console.log("Average Grade:", calculateAverage(studentGrades));
    console.log("Passed Grades:", filterPassed(studentGrades));
    console.log("Doubled Grades:", doubleGrades(studentGrades));
}