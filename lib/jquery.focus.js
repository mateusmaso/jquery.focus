(function($) {

  $.fn.focusBegin = function() {
    var element = this[0];

    if (this.is('textarea')) {
      element.focus();
      element.setSelectionRange(0, 0);
    } else if (this.is('input')) {
      element.selectionStart = 0;
      element.selectionEnd = 0;
      element.focus()
    } else {
      var range = document.createRange();
      var selection = window.getSelection();
      range.selectNodeContents(element);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  $.fn.focusEnd = function() {
    var element = this[0];

    if (this.is('textarea')) {
      element.focus();
      element.setSelectionRange(this.val().length, this.val().length);
    } else if (this.is('input')) {
      element.selectionStart = element.value.length;
      element.selectionEnd = element.value.length;
      element.focus();
    } else {
      var range = document.createRange();
      var selection = window.getSelection();
      range.selectNodeContents(element);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

})(jQuery);
