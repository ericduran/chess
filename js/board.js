(function () {
  $('img').on('dragstart', function (e) {
    e.originalEvent.dataTransfer.setData("Text", e.target.id);
  });

  $('span').on('dragover', function (e) {
    e.preventDefault();
  });

  $('span').on('drop', function (e) {
    var data = e.originalEvent.dataTransfer.getData("Text");
    if (e.target.nodeName == "IMG") {
      $(e.target).parent().html(document.getElementById(data));
    }
    else {
      $(e.target).html(document.getElementById(data));
    }
    e.preventDefault();
  });
})();