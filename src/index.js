module.exports = function toReadable (number) {
    let txt = {
        ones: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tens: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        sep: ['', ' thousand ', ' million ', ' billion ', ' trillion ', ' quadrillion ', ' quintillion ', ' sextillion ']
    };
    
    const [ones, tens, sep] = [txt.ones, txt.tens, txt.sep]

    let val = number,
      arr = [],
      str = '',
      i = 0;

    val = parseInt(val, 10);

    if (val==0) {
        return "zero"
    }


    while (val) {
      arr.push(val % 1000);
      val = parseInt(val / 1000, 10);
    }

    while (arr.length) {
      str = (function (a) {
        let x = Math.floor(a / 100),
          y = Math.floor(a / 10) % 10,
          z = a % 10;

        return (x > 0 ? ones[x] + ' hundred ' : '') +
          (y >= 2 ? tens[y] + ' ' + ones[z] : ones[10 * y + z]);
      })(arr.shift()) + sep[i++] + str;
    }

    return str.trim();
}
