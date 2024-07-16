const number = prompt('Enter a three-digit number');

if (number === null) {
    alert('You canceled');
} else if (!number.trim() || isNaN(number.trim())) {
    alert('Please, enter a valid number');
} else if (number.trim().length !== 3 || number !== String(+number)) {
    alert('Please, enter a three-digit number');
} else {

const numArr = number.toString().split('');

if (numArr[0] === numArr[1] && numArr[1] === numArr[2] && numArr[0] === numArr[2]) {
    console.log('All numbers are the same');
} else if(numArr[0] === numArr[1] || numArr[1] === numArr[2] || numArr[0] === numArr[2]) {
    console.log('Some numbers are the same');
} else {
    console.log(number);
}

}