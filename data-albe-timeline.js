//Json Object
var data = [
	{
		time: '2016-05-25',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/comeco.jpg',
				width: '50px',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Começo do Namoro'
		},
		{
			tag: 'p',
			content: 'Começamos'
		}]
	},
	{
		time: '2016-05-25',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/Mexicano.jpg',
				width: '100px',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Mexicano'
		},
		{
			tag: 'p',
			content: 'Primeira comida mexicana'
		}]
	},
	{
		time: '2016-01-20',
		body: [{
			tag: 'img',
			attr: {
				src: '../img/qrcode.png',
				width: '150px',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Sample with image'
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}]
	},
	{
		time: '2013-01-20',
		body: [{
			tag: 'img',
			attr: {
				src: '../img/girl.png',
				width: '100px',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Sample with image rigth'
		},
		{
			tag: 'p',
			content: 'Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.'
		}]
	}
];

$(document).ready(function () {

	$("#myTimeline").albeTimeline(data);

});
