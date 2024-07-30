module.exports = function toReadable (number) {
    const numberDict = {
        '1': 'one', 
        '2': 'two', 
        '3': 'three', 
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety'
    };
    let i = number;
	let j = 1;
	let result = ''
    if (i == 0) {
        return 'zero'
    }
	while (i != 0) {
		switch (j) {
			case 1:
				if ((number % 10) == 0) {
                    break
				} else {
					result = `${numberDict[(i % 10).toString()]} ${result}`;
					break;
				}
			case 2:
				if ((i % 10) == 0) {
					break
				} else if ((i % 10) != 1) {
					result = `${numberDict[(i % 10 * 10).toString()]} ${result}`;
					break;
				} else {
					result = `${numberDict[(number % 100).toString()]}`;
					break;
				}
			case 3:
				result = `${numberDict[(i % 10).toString()]} hundred ${result}`;
				break;
		}
		i = Math.floor(i / 10)
		j++
	}
	return result.trim();
}
