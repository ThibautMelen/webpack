export default function(str) {
	console.log('logger.js is RUNNING!!');

let page = (((str.replace(/^[ \n\r\t\f]+/, '')
							.replace(/[ \n\r\t\f]+$/, ''))
							.replace(/type="text\/javascript"/g, ''))
							.replace(/\s+/g, ' '))
    					.replace(/\\?\n|\\?\r\n/g, '')
							.replace(/rgb\((\-?\d+),(\-?\d+),(\-?\d+)\)/g, function (match, red, green, blue) {
      					return shortenRgb(red, green, blue);
    					})
							.replace(/<!--[^>]*-->/gm, '')
							.replace(/, /g, ',')
							.replace(/&rsquo;/g, "’")
							.replace(/&#8230;/g,'...')
							.replace(/&rarr;/g, "→")
							.replace(/\/\*([^<]*)/g, "");




//(str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
	return page;
}
