$(document).ready(function (){

  source.init();
});

var source = {
  url: 'https://www.reddit.com/r/boating.json',
  init: function () {
    source.initStyling();
    // source.initEvents();
  },

  initStyling: function() {
    source.getBoats();
  },

getBoats: function (event) {
  // boatsArr = "";

  $.ajax({
    url: source.url,
    method: 'GET',
    success: function (boatsArr) {
      console.log(boatsArr);
      boatsArr.data.children.forEach(function (currVal) {
        // $('.boats').append('<h3>' + currVal.data.title + '</h3>');
        $('.boats').append('<h3>' + "<a href = '" + currVal.data.url + "'>" + currVal.data.title + "</a>" + '</h3>');
        $('.boats').append('<p>' + "<img src= '" + currVal.data.thumbnail + "'>" + '</p>');
      });
    }
  });
},
};
