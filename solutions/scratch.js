// const binaryArrayToNumber = arr => {
// 	// your code
// 	return arr.reverse()
// 	          .map((digit, index) => digit * Math.pow(2,index))
// 	          .reduce((acc, item) => acc + item, 0);
//   };


// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);


// function binaryArrayToNumber(arr) {
//   return arr.reduce( (a, b) => a << 1 | b );
// }

// console.log(binaryArrayToNumber([1,1,1,0,1]))


//   0001 = 1 (1*1)
//   0010 = 2 (0*1 + 1*2)
//   0011 = 3 (1*1 + 1*2)
//   0100 = 4 (0*1 + 0*2 + 1*4)
//   0101 = 5  

// console.log(Math.pow(2,0))

// var countBits = function(n) {
// 	// Program Me
// 	return n.toString(2).split('').reduce((acc,item) =>  acc + Number(item), 0)
//   };


// console.log(countBits(34)) // 34 -> 100010

// function printerError(s) {
//     // your code
// 	s += 'n'
// 	return (s.length - 1 - s.split('').sort().indexOf('n')).toString() + "/" + (s.length - 1)
// }

// console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))


// function findMissingLetter(array)
// {
// 	for (let i=0; i<array.length-1; i++){
// 		if (array[i].charCodeAt(0) +1 != array[i+1].charCodeAt(0)){
// 			return String.fromCharCode(array[i].charCodeAt(0)+1);
// 		}
// 	}
//   	return ' ';
// }

// console.log(findMissingLetter(['a','b','c','f','g']))

function findUniq(arr) {
	// do magic
	let std = null;
	if (arr[0] === arr[1]) std = arr[0]
	else if (arr[0] === arr[2]) return arr[1]
	else return arr[0]
	return arr.filter((num) => num != std)
  }

  console.log(findUniq([1,1,1,1,1,2,1,1,1,1]))