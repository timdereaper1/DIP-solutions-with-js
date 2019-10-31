import { getFrequentWords } from "../getFrequentWords";

describe("Finding frequent words", () => {
	it("finds most frequent words", () => {
		const words = ["daily", "interview", "pro", "pro", "for", "daily", "pro", "problems"];
		const result = getFrequentWords(words, 2);
		expect(result).toEqual(["pro", "daily"]);
	});

	it("returns word for same input", () => {
		const words = ["book", "book"];
		const result = getFrequentWords(words, 2);
		expect(result).toEqual(["book"]);
	});
});
