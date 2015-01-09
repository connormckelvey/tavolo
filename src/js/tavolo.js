(function ( $ ) {
  $.fn.tavolo = function() {
    var switched = false;
    var tableElement = this;
    console.log(tableElement.selector);

    var settings = $.extend({
      removeClass: tableElement.selector.replace('.', '')
    });

    var updateTables = function() {
      if (($(window).width() < 767) && !switched ){
        switched = true;
        tableElement.each(function(i, element) {
          splitTable($(element));
        });
        return true;
      }
      else if (switched && ($(window).width() > 767)) {
        switched = false;
        tableElement.each(function(i, element) {
          unsplitTable($(element));
        });
      }
    };

    $(window).load(updateTables);
    $(window).on("redraw",function(){switched=false;updateTables();}); // An event to listen for
    $(window).on("resize", updateTables);


    function splitTable(original)
    {
      original.wrap("<div class='tavolo-wrapper' />");

      var copy = original.clone();
      copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
      copy.removeClass(settings.removeClass);

      original.closest(".tavolo-wrapper").append(copy);
      copy.wrap("<div class='tavolo-pinned' />");
      original.wrap("<div class='tavolo-scrollable' />");

      setCellHeights(original, copy);
    }

    function unsplitTable(original) {
      original.closest(".tavolo-wrapper").find(".tavolo-pinned").remove();
      original.unwrap();
      original.unwrap();
    }

    function setCellHeights(original, copy) {
      var tr = original.find('tr'),
          tr_copy = copy.find('tr'),
          heights = [];

      tr.each(function (index) {
        var self = $(this),
            tx = self.find('th, td');

        tx.each(function () {
          var height = $(this).outerHeight(true);
          heights[index] = heights[index] || 0;
          if (height > heights[index]) {
            heights[index] = height;
          }
        });

      });

      tr_copy.each(function (index) {
        $(this).height(heights[index]);
      });
    }

    return this;
  };
})(jQuery);
