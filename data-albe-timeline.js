//Json Object
var data2016 = [
	{
		time: '2016-07-10',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/10072016.jpg',
				width: '100%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: ''
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2016-09-11',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/11092016.jpg',
				width: '100%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: ''
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2016-06-12',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/12062016.jpg',
				width: '100%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: ''
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2016-09-26',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/26092016.jpg',
				width: '100%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: ''
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2016-10-29',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/29102016.jpg',
				width: '100%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: ''
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2016-12-31',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/31122016.jpg',
				width: '100%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: ''
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2016-05-15',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/comeco.jpg',
				width: '100%',
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
		time: '2016-07-23',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/Mexicano.jpg',
				width: '100%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Mexicano'
		},
		{
			tag: 'p',
			content: 'Foto tirada após almoçarmos comida mexicana. Este dia é importante, pois, foi a primeira vez que utilizamos um cupom de desconto, algo que se repete várias vezes até hoje =D'
		}]
	}
	
];

var data2017 = [
	{
		time: '2017-05-06',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/06052017.jpg',
				width: '100%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: 'Batalha de Gigantes'
		},
		{
			tag: 'p',
			content: 'Uma batalha épica, de 3 rounds, vencida por mim u.u. Foi uma grande luta!'
		}]
	},
	{
		time: '2017-03-12',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/12032017.jpg',
				width: '100%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: ''
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2017-05-13',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/13052017.jpg',
				width: '100%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: ''
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2017-03-31',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/31032017.jpg',
				width: '100%',
				cssclass: 'img-responsive'
			}
		},
		{
			tag: 'h2',
			content: ''
		},
		{
			tag: 'p',
			content: ''
		}]
	},
	{
		time: '2017-04-07',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/07042017.jpg',
				width: '100%',
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
				width: '100%',
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
