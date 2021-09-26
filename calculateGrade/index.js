
let marks = [23,43,67,36];

function calculateGrade(marks) {
    const reducer = (perviousVal,currentVal) => perviousVal + currentVal;
    const value = marks.reduce(reducer);
    const grade = value/marks.length;
    if(grade <= 50) {
        console.log('F');
        return 'F';
    } 
    if(grade >= 51 && grade <= 60) {
        console.log('D');
        return 'D';
    }
    if(grade >= 61 && grade <= 70) {
        console.log('C');
        return 'C';
    }
    if(grade >= 71 && grade <= 80) {
        console.log('B');
        return 'B';
    }
    if(grade >= 81 && grade <= 100) {
        console.log('A');
        return 'A';
    }
}

calculateGrade([90,91,92,93,94]);

