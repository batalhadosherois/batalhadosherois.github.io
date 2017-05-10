//Json Object
var data2016 = [
	{
		time: '2016-05-15',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/comeco.jpg',
				width: '95%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'O Começo!'
		},
		{
			tag: 'p',
			content: 'O dia em que pedi esta bela dama em namoro. Um pedido inusitado, estavamos de cabeça para baixo em um brinquedo no Holi Parque. Não sei se ela entendeu o que disse na hora, mas o importante é que ela aceitou hauahauhauh.'
		}]
	},
	{
		time: '2017-04-07',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/07042017.jpg',
				width: '95%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Tchê Café'
		},
		{
			tag: 'p',
			content: ''
		}]
	}
];

var data2017 = [
	{
		time: '2017-04-07',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/07042017.jpg',
				width: '95%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Tchê Café'
		},
		{
			tag: 'p',
			content: ''
		}]
	},
		{
		time: '2017-01-26',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/26012017.jpg',
				width: '95%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Rio de Janeiro!'
		},
		{
			tag: 'p',
			content: ''
		}]
	}
];



$(document).ready(function () {

	$("#myTimeline").albeTimeline(data2016);
	$("#myTimeline2").albeTimeline(data2017);

});
