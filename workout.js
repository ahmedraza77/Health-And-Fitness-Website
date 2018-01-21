function main()
{
    $('#showdiv1').on('click', function() 
	{
        $('#div1').toggle();
    });
	
	
    $('#showdiv2').on('click', function() 
	{
        $('#div2').toggle();
    });
	
	
	$('#showdiv3').on('click', function() 
	{
        $('#div3').toggle();
    });
}
$(document).ready(main);