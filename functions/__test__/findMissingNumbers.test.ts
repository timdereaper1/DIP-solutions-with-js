import { findMissingNumbers } from "../findMissingNumbers";

describe("Missing Values", () => {
	it("Finds all missing values in an array of numbers", () => {
		const nums = [4, 6, 2, 6, 7, 2, 1];
		const result = findMissingNumbers(nums);
		expect(result).toEqual([3, 5]);
	});

	it("Returns empty array for no missing values", () => {
		const nums = [1, 2, 3, 4, 5, 6];
		const result = findMissingNumbers(nums);
		expect(result).toEqual([]);
	});

	it("Finds missing values with different minimum value apart from 1", () => {
		const nums = [2, 5, 7];
		const result = findMissingNumbers(nums);
		expect(result).toEqual([3, 4, 6]);
	});
});
