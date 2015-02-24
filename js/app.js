$(document).ready(function() {
	onDocReady();
});


function onDocReady()
{
	$("#add-img").click(function() {
		addNewItem();
	});

	$("#new-item-text").keydown(function(event) {

		if ( event.which == 13 )
		{
			console.log("keydown");
			addNewItem();
		}

	});

}


function addNewItem()
{
	var nextItemNo = $("#items-list li").length;

	// Note: in the html below, the line feeds are significant in terms of displayed white space.
	// If using an html string, layout in fashion similar to index.html.

	$("#items-list").append(
		'<li class="item-block">\n' +
		'<input class="item-purchased" id="item' + nextItemNo + '" type="checkbox" value="1">\n' +
		'<label class="item-descr" for="item' + nextItemNo + '">' + $("#new-item-text").val() + '</label>\n' +
		'</li>\n'
		);

	$("#new-item-text").val("");	
}