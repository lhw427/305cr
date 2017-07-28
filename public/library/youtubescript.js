$(function(){
  //search bar handler
  var searchField = $('#query');
  var icon = $('#search-btn');

  //focus event handler
  $(searchField).on('focus', function(){
    $(this).animate({
      width: '80%'
    },400);
    $(icon).animate({
      right: '10px'
    },400);
  }); //close focus event handler

  $(searchField).on('blur', function(){
    if(searchField.val() === ''){
      $(searchField).animate({
        width: '45%'
      }, 400);
        $(icon).animate({
          right: '360px'
        },400);
      }; //close if
  }); //close blur function

  $('#searchForm').submit(function(e){
    e.preventDefault();
  })
}); //close search handler

function search(){
  //clear results
  $('#results').html('');
  $('#searchField').html('');

  //get form input
  var q = $('#query').val();

  //run get request on api
  $.get(
    "https://www.googleapis.com/youtube/v3/search",{
      part: 'snippet, id',
      q: q,
      type: 'video',
      key: 'AIzaSyAwGPzP9qUadJhpRlH9Y5syq5qIkqBxQZ8'},
  function (data){
    let nextPageToken = data.nextPageToken;
    let prevPageToken = data.prevPageToken;

    console.log(data);

    $.each(data.items, function(i, item){
      var output = getOutput(item);

      //display results
      $('#results').append(output);
    });//close each

    let buttons = getButtons(prevPageToken, nextPageToken);

  });//close function
} //close search

function getOutput(item){
	var videoId = item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;

	// Build Output String
	var output = '<li>' +
	'<div class="list-left">' +
	'<img src="'+thumb+'">' +
	'</div>' +
	'<div class="list-right">' +
	'<h3>'+title+'</h3>' +
	'<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>' +
	'<p>'+description+'</p>' +
	'</div>' +
	'</li>' +
	'<div class="clearfix"></div>' +
	'';

	return output;
}

function getButtons(prevPageToken, nextPageToken) {
  if(!prevPageToken){
    var btnoutput = '<div class="button-container">' + 'button id="next-button" class="paging-button" data-token="' + nextPageToken + '" data-query="' + q + '"' +'onclick="nextPage();">Next Page</button></div>';
	} else {
		var btnoutput = '<div class="button-container">'+
		'<button id="prev-button" class="paging-button" data-token="' + prevPageToken + '" data-query="' + q + '"' +
		'onclick="prevPage();">Prev Page</button>' +
		'<button id="next-button" class="paging-button" data-token="' + nextPageToken + '" data-query="' + q + '"' +
		'onclick="nextPage();">Next Page</button></div>';
	}
	return btnoutput;
}
