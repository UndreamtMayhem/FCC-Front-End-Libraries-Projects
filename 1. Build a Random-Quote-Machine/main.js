var MODULE = MODULE || {};
// Add array of colors to this property
MODULE.colours = ['#6BCC65',
      '#6B65CC',
      '#CC6B65',
      '#CC656B',
      '#656BCC',
      '#65CC6B',
       "#aa0000", '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"
      ];
//Write a function that returns an hex color value from an array 
MODULE.generateColorFunc = function(){
  var colours = MODULE.colours;
  colourslen = colours.length - 1;
  var selectedColourindex = Math.floor(Math.random() * colourslen) ;
  var selectedColour = colours[selectedColourindex];
  return selectedColour;
}
// Sets the backgroundColor based on the result of the colorGeneratorFunc
MODULE.setBackgroundColor = function(){
  var selectedColour = MODULE.generateColorFunc();  
  $('#bg-change').css({backgroundColor: selectedColour, color: "#fff", });
  $('footer').css({backgroundColor: selectedColour, color: "#fff", });
}
// Get the types of quotes
MODULE.getQuoteType = function(){
  var famousQuoteSelected = $('#famous-quote').attr('class');
  var movieQuoteSelected = $('#movie-quote').attr('class');

  if(famousQuoteSelected == "active"){
    console.log("famous is active");
    return quoteCatergory = "famous";
  }
  else if (movieQuoteSelected == "active"){
    console.log("movie is selected is active");
    return quoteCatergory = "movies";
  }
  else {
    return quoteCatergory = "";
  }
}

// Gets quote and author and sets the dom elements required
// REFACTOR AND PASS IN ELEMENTS TO POPULATE with author and text
MODULE.getQuoteAndSetDom = function(quoteCatergory){
  $.ajax({
      headers: {
        "X-Mashape-Key": "nQOwCmbYmrmshMxP1c8MXrOnjyxXp1Xgrv6jsnGZc1UeZqPSJS",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=' + quoteCatergory +"&count=1" ,
      success: function(response) {

        $('#author').text(response.author);
        $('#text').text(response.quote);
      },
      fail: function(err){
        console.log("fail");
      }
  });
  
}

// Sets all logic consider name change 
MODULE.initQuote = function(){
  MODULE.setBackgroundColor();
  quoteType = MODULE.getQuoteType();
  MODULE.getQuoteAndSetDom(quoteType);

}

MODULE.buttonLogic = {};
// Opens up twitter share page with text and author from the quote
// Refactor and pass in text and author in next version
MODULE.buttonLogic.shareQuote = function(){
  var text = $('#text').text();
  var author = $('#author').text();
  var win = window.open("https://twitter.com/intent/tweet?text=" + text + " :" + author, '_blank');
  win.focus();
};
// Opens up twitter page of User to follow
// Refactor and allow link to be passed in 
MODULE.buttonLogic.followButton = function(){
  // split up end name
  var url = "https://twitter.com/undreamtmayhem";
  var win = window.open(url, '_blank');
};

$(document).ready(function() {
  MODULE.initQuote();
  // Refactor this
  $('#new-quote').on('click', MODULE.initQuote);
  $('#twitter-share-button').on('click', MODULE.buttonLogic.shareQuote);

  // allow user to select what is the follow button
  $('#twitter-follow-button').on('click', MODULE.buttonLogic.followButton)
  $("#famous-quote").on('click', function(){
      $("#famous-quote").addClass("active");
      $("#movie-quote").removeClass("active");
  });

  $("#movie-quote").on('click', function(){
      $("#movie-quote").addClass("active");
      $("#famous-quote").removeClass("active");
  });
});
