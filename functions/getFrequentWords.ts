export const addItem = (item: any, times: number, arr: any[], count = 1): any[] => {
	if (count > times) return arr;
	arr.push(item);
	return addItem(item, times, arr, count + 1);
};

export const getFrequentWords = (array: string[], numberOfWords: number) => {
	const frequencies = array.reduce<{ word: string; freq: number }[]>((acc, currentWord) => {
		const index = acc.findIndex(a => a.word === currentWord);
		if (index === -1) {
			const obj = { word: currentWord, freq: 1 };
			return [...acc, obj];
		}
		acc[index].freq += 1;
		return acc;
	}, []);

	frequencies.sort((a, b) => {
		if (a.freq < b.freq) return 1;
		if (a.freq > b.freq) return -1;
		if (a.freq === b.freq) {
			if (a.word.length > b.word.length) return 1;
			if (a.word.length < b.word.length) return -1;
		}
		return 0;
	});

	const sorted = frequencies.reduce<string[]>((acc, cur) => addItem(cur.word, cur.freq, acc), []);

	return sorted
		.reduce<string[]>((acc, val) => {
			if (acc.includes(val)) return acc;
			return [...acc, val];
		}, [])
		.slice(0, numberOfWords);
};
