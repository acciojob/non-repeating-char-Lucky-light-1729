function firstNonRepeatedChar(str) {
	const freqMap = {};
	for (let char of str) 
	{
		freqMap[char] = (freqMap[char] || 0) + 1;
	}
	for (let char of str) 
	{
		if (freqMap[char] === 1) 
		{
			return char;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
