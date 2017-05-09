//Json Object
var data = [
	{
		time: '2016-05-15',
		body: [{
			tag: 'img',
			attr: {
				src: 'img/comeco.jpg',
				width: '90%',
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
				width: '90%',
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



$(document).ready(function () {

	$("#myTimeline").albeTimeline(data);
	
	$(".img-responsive").click(function(){
    var source=$(this).attr('src');
    var $dialog = $('<div></div>') 
         .html('<img src="'+source+'" width="200" height="200" alt="Milk(1 lit)">') 
         .dialog({ autoOpen: true, resizable: false, draggable: false, width: 600, height:600, modal: true, title: 'Create Your Own PopUp Window' }); 
}); 

});
