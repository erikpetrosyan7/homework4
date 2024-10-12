// 1

let n = 5;

function lastDigitToFirst(num) {
	let result = '';
	num += '';
	if (num[num.length - 1] != 0) {
		result += num[num.length - 1];
		for (let i = 0; i < num.length - 1; i++) {
			result += num[i];
		}
	} else {
		return num;
	}

	return +result;
}
lastDigitToFirst(n);

// 2

function isInclude(d, n) {
	n += '';
	for (let i = 0; i < n.length; i++) {
		if (n[i] == d) {
			return 'Yes';
		}
	}
	return 'No';
}
isInclude(8, 45689);

// 3

let number = 34;

function changeFirstAndLast(n) {
	let result = '';
	n = String(n);
	if (n.length == 1) {
		return +n;
	}

	result += n[n.length - 1];

	for (let i = 1; i < n.length - 1; i++) {
		result += n[i];
	}
	result += n[0];
	return +result;
}
changeFirstAndLast(number);

// 4

let number = 4593653;

function difference(n) {
	n += '';
	if (n.length == 1) {
		return 0;
	}

	let biggestNumber = -1;
	let smallestNumber = 10;

	for (let i = 0; i < n.length; i++) {
		if (n[i] > biggestNumber) {
			biggestNumber = +n[i];
		} else if (n[i] < smallestNumber) {
			smallestNumber = +n[i];
		}
	}
	return biggestNumber - smallestNumber;
}

difference(number);
