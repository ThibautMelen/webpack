export default function(str) {
	console.log('logger.js is RUNNING!!');


let page = str.replace(/^[ \n\r\t\f]+/, '')
							.replace(/[ \n\r\t\f]+$/, '');

let a = page.replace(/type="text\/javascript"/g, '');

// let b = a.replace(/\s\B/g, "");
// let b = replace(/>\s+|\s+</g, "");

// var result = a.replace(/>\s+|\s+</g, function(m) {
//     return m.trim();
// });


	return a.replace(/\s+/g, ' ');;
}

// a.replace(/\s+/g, ' ');
