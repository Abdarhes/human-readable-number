module.exports = function toReadable (number) {
        const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const hundreds = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    
        if (number < 10) {
            return numbers[number];
        } else if (number >= 10 && number < 20) {
            return tens[number - 10];
        } else if (number >= 20 && number < 100) {
            const tensNumber = Math.floor(number / 10);
            const numbersNumber = number % 10;
            return hundreds[tensNumber] + (numbersNumber !== 0 ? ` ${numbers[numbersNumber]}` : '');
        } else if (number >= 100 && number < 1000) {
            const hundredNumber = Math.floor(number / 100);
            const hundredDigit = number % 100;
            return (hundredDigit === 0) ? (`${units[hundredNumber]} hundred`) : (`${numbers[hundredNumber]} hundred ${toReadable(hundredDigit)}`);
        }
    }

