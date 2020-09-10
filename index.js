// Regex

var regex = /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/;

var testString = "rsh@soal.io"

if(regex.test(testString)) {
	console.log(`this string follows email id format`)
} else {
	console.log(`this string does not follow email id  format`)
}

// console.log(regex.exec(testString));

// /[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}/.exec("my email id is niskars h@soal.io")

