$('ul').on('mouseover','li',function()
{
	var $this=$(this);
	$('li').removeClass('big');
	$this.addClass('big');
})
