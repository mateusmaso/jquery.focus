// jquery.focus
// ------------
// v0.1.4
//
// Copyright (c) 2012-2016 Mateus Maso
// Distributed under MIT license
//
// http://github.com/mateusmaso/jquery.focus

(function(root, factory) {

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(global.$);
    exports = factory(global.$);
  } else {
    factory(root.$);
  }

}(this, function($) {

  $.fn.focusBegin = function(skip) {
    return this.each(function() {
      var element = $(this)[0],
          offset = skip || 0;

      if ($(this).is('textarea')) {
        element.focus();
        element.setSelectionRange(offset, offset);
      } else if ($(this).is('input')) {
        element.selectionStart = offset;
        element.selectionEnd = offset;
        element.focus()
      } else {
        var range = document.createRange();
        var selection = window.getSelection();
        range.selectNodeContents(element);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  };

  $.fn.focusEnd = function() {
    return this.each(function() {
      var element = $(this)[0];

      if ($(this).is('textarea')) {
        element.focus();
        element.setSelectionRange($(this).val().length, $(this).val().length);
      } else if ($(this).is('input')) {
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
    });
  };

}));
