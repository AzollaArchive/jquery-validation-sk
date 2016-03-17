(function ($) {
  'use strict';

  $.validator.setDefaults({
    showErrors: function (errorMap, errorList) {
      // Clean up any tooltips for valid elements
      $.each(this.validElements(), function (index, element) {
        var $element = $(element);
        if($element.hasClass("select2-hidden-accessible")){
          $($($element.next().children()[0]).children()[0]).data("title", "") // Clear the title - there is no error associated anymore
            .removeClass("jquery-validation-sk_error")
            .tooltip("destroy");
        }
        $element.data("title", "") // Clear the title - there is no error associated anymore
          .removeClass("jquery-validation-sk_error")
          .tooltip("destroy");
      });
      // Create new tooltips for invalid elements
      $.each(errorList, function (index, error) {
        var $element = $(error.element);
        if($element.hasClass("select2-hidden-accessible")){
          $($($element.next().children()[0]).children()[0]).tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
            .data("title", error.message)
            .addClass("jquery-validation-sk_error")
            .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
        }
        $element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
          .data("title", error.message)
          .addClass("jquery-validation-sk_error")
          .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
      });
    }
  });

})(window.jQuery || window.Zepto);
