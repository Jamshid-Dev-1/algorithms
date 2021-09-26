
let marks = [23,43,67,36];

function calculateGrade(marks) {
    const avrg = calculateAvarage(marks);
    if(avrg <= 50) {
        console.log('F');
        return 'F';
    } 
    if(avrg >= 51 && avrg <= 60) {
        console.log('D');
        return 'D';
    }
    if(avrg >= 61 && avrg <= 70) {
        console.log('C');
        return 'C';
    }
    if(avrg >= 71 && avrg <= 80) {
        console.log('B');
        return 'B';
    } else {
        console.log('A');
        return 'A';
    }
    
}

function calculateAvarage(array) {
    const reducer = (perviousVal,currentVal) => perviousVal + currentVal;
    const value = marks.reduce(reducer);
    return value/marks.length;
}

calculateGrade([90,91,92,93,94]);

