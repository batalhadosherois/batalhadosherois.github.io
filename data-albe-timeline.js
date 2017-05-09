//Json Object
var data = [
	{
		time: '2016-05-25',
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
			content: 'Começo do Namoro'
		},
		{
			tag: 'p',
			content: 'Começamos'
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
			content: 'Primeira comida mexicana'
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
