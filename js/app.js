var highestItemNo = -1;


$(document).ready(function() {
	onDocReady();
});


function onDocReady()
{
	highestItemNo = $("#items-list li").length - 1;

	// For testing, prime the list with a few examples:

	addNewItem("eggs");
	addNewItem("bacon");
	addNewItem("cheese");
	addNewItem("croissants");
	addNewItem("milk");
	addNewItem("orange juice");
	addNewItem("bananas");
	addNewItem("cereal");


	$("#add-img").click(function() {
		addNewItem($("#new-item-text").val());
	});


	$("#new-item-text").keydown(function(event) {

		if ( event.which == 13 )
		{
			addNewItem($(this).val());
		}

	});

}


function addNewItem(pItemDescr)
{
	if (pItemDescr == '') return;   // Don't add item in this case

	highestItemNo += 1;

	// Note: in the html below, the line feeds are significant in terms of displayed white space.
	// If using an html string, layout in fashion similar to how it would be done in index.html.

	$("#items-list").append(
		'<li class="item-block" id="li' + highestItemNo + '" draggable="true" ondragstart="drag(event)">\n' +
		'<input class="item-purchased" id="item' + highestItemNo + '" type="checkbox" value="1">\n' +
		'<label class="item-descr" for="item' + highestItemNo + '">' + pItemDescr + '</label>\n' +
		'</li>\n'
		);

	$("#new-item-text").val("");	
}


function allowDrop(ev) 
{
    ev.preventDefault();
}


function drag(ev) 
{
    ev.dataTransfer.setData("itemId", ev.target.id);
}


function drop(ev) 
{
    ev.preventDefault();
    var itemId = ev.dataTransfer.getData("itemId");
    $("#" + itemId).remove();
}