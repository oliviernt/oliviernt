$(function(){
	$("a.extern").click(function(){
		window.open($(this).attr("href"));
		return false;
	});

	$FB = $("#facebook");
	if($FB)
	{
		$.ajax({
			data: {
				A: "facebook_feed"
			},
			dataType: "json",
			success: function(data){
			},
			url: "ajax.php"
		});
	}
});
