$(document).on("click", ".add", function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('.gridly').append(brick);
      return $('.gridly').gridly();
    });