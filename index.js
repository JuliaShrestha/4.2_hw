const number = prompt('Enter a three-digit number');

if (!number || isNaN(number)) {
    alert('Please, enter the number');
} else if (number.length !== 3 ) {
    alert('Please, enter a three-digit number');
} else {
    alert(number);
}

const numArr = number.split('');

if (number[0] === number[1] && number[1] === number[2] && number[0] === number[2]) {
    console.log('All numbers are the same');
} else if(number[0] === number[1] || number[1] === number[2] || number[0] === number[2]) {
    console.log('Some numbers are the same');
} else {
    alert(number);
}