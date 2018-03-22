$(document).ready(function() {
	$("#activateMessenger").click(function(e) {
	  $.ajax({
			url: "/api/appId",
			type: 'GET',
			'Content-Type': 'application/json',
			success: function(result) {
				Smooch.init(JSON.parse(result));
				Smooch.show();
	  }});
	});
});
