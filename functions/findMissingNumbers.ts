export const getNumbersWithinRange = (min: number, max: number, arr: number[]): number[] => {
	if (min >= max) return arr;
	const nextNumber = min + 1;
	return getNumbersWithinRange(nextNumber, max, [...arr, nextNumber]);
};

// the array passed to the function should have at least a number of 1
// the function finds all missing numbers in the array within the mini and
// max number
export const findMissingNumbers = (array: Array<number>) => {
	const minimumValue = array.reduce((acc, currentValue) =>
		currentValue < acc ? currentValue : acc
	);
	const maximumValue = array.reduce((acc, currentValue) =>
		currentValue > acc ? currentValue : acc
	);
	const numbers = getNumbersWithinRange(minimumValue, maximumValue, []);
	return numbers.filter(num => !array.includes(num));
};
