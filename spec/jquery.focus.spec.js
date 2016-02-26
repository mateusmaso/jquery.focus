describe("jquery.focus", function() {
  afterEach(function() {
    $("#fixtures").empty();
  });

  describe("input", function() {
    beforeEach(function() {
      this.input = $("<input>");
      $("#fixtures").append(this.input);
    });

    it("should focus begin", function() {
      var value = "Bar";
      this.input.val(value);
      this.input.focusBegin();
      var position = this.input.get(0).selectionStart;
      this.input.val(value.substring(0, position) + "Foo" + value.substring(position));
      chai.expect(this.input.val()).to.equal("FooBar");
    });

    it("should focus begin, skipping the given number of characters", function() {
      var value = "Bar";
      this.input.val(value);
      this.input.focusBegin(2);
      var position = this.input.get(0).selectionStart;
      this.input.val(value.substring(0, position) + "Foo" + value.substring(position));
      chai.expect(this.input.val()).to.equal("BaFoor");
    });

    it("should focus end", function() {
      var value = "Foo";
      this.input.val(value);
      this.input.focusEnd();
      var position = this.input.get(0).selectionStart;
      this.input.val(value.substring(0, position) + "Bar" + value.substring(position));
      chai.expect(this.input.val()).to.equal("FooBar");
    });
  });

  describe("textarea", function() {
    beforeEach(function() {
      this.textarea = $("<textarea>");
      $("#fixtures").append(this.textarea);
    });

    it("should focus begin", function() {
      var value = "Bar";
      this.textarea.val(value);
      this.textarea.focusBegin();
      var selection = window.getSelection();
      selection.getRangeAt(0).insertNode(document.createTextNode("Foo"));
      var position = this.textarea.get(0).selectionStart;
      this.textarea.val(value.substring(0, position) + "Foo" + value.substring(position));
      chai.expect(this.textarea.val()).to.equal("FooBar");
    });

    it("should focus begin, skipping the given number of characters", function() {
      var value = "Bar";
      this.textarea.val(value);
      this.textarea.focusBegin(2);
      var selection = window.getSelection();
      selection.getRangeAt(0).insertNode(document.createTextNode("Foo"));
      var position = this.textarea.get(0).selectionStart;
      this.textarea.val(value.substring(0, position) + "Foo" + value.substring(position));
      chai.expect(this.textarea.val()).to.equal("BaFoor");
    });

    it("should focus end", function() {
      var value = "Foo";
      this.textarea.val(value);
      this.textarea.focusEnd();
      var position = this.textarea.get(0).selectionStart;
      this.textarea.val(value.substring(0, position) + "Bar" + value.substring(position));
      chai.expect(this.textarea.val()).to.equal("FooBar");
    });
  });

  describe("contenteditable", function() {
    beforeEach(function() {
      this.div = $("<div contenteditable>");
      $("#fixtures").append(this.div);
    });


    it("should focus begin", function() {
      var value = "Bar";
      this.div.html(value);
      this.div.focusBegin();
      var selection = window.getSelection();
      selection.getRangeAt(0).insertNode(document.createTextNode("Foo"));
      chai.expect(this.div.html()).to.equal("FooBar");
    });

    it("should focus end", function() {
      var value = "Foo";
      this.div.html(value);
      this.div.focusEnd();
      var selection = window.getSelection();
      selection.getRangeAt(0).insertNode(document.createTextNode("Bar"));
      chai.expect(this.div.html()).to.equal("FooBar");
    });
  });
});