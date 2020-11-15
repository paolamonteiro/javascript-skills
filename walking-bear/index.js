const paths = [
	'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png',
	'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png',
	'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png',
];

let i = 0;
let steps = 0;
let timer = setInterval(function () {
	if (i >= paths.length) {
		i = 0;
	}

	if (steps > window.innerWidth) {
		steps = 0;
	}

	steps += 10;
	document.getElementById('img').setAttribute('src', paths[i++]);
	document
		.getElementById('img')
		.setAttribute('style', `margin-left: ${steps}px;`);
}, 100);
