(function($) {

  $.fn.focusBegin = function(){
    var element = this[0];

    if (this.is('textarea')) { 
        element.focus(); 
        element.setSelectionRange(0, 0); 
      } else if (this.is('input')) { 
        var range = element.createTextRange();  
        range.moveStart('character', 0); 
        range.select();
      } else {
        var range = document.createRange();   
        range.selectNodeContents(element);    
        range.collapse(true);         
        var selection = window.getSelection();  
        selection.removeAllRanges();        
        selection.addRange(range);
      }
  };
  
  $.fn.focusEnd = function(){
    var element = this[0];

    if (this.is('textarea')) { 
        element.focus();
        element.setSelectionRange(this.val().length, this.val().length); 
      } else if (this.is('input')) { 
        var range = element.createTextRange();  
        range.moveStart('character', this.val().length); 
        range.select();
      } else {
        var range = document.createRange();   
        range.selectNodeContents(element);    
        range.collapse(false);          
        var selection = window.getSelection();  
        selection.removeAllRanges();        
        selection.addRange(range);        
      }
  };

})(jQuery);
