jquery.focus [![Build Status](https://travis-ci.org/mateusmaso/jquery.focus.svg?branch=master)](https://travis-ci.org/mateusmaso/jquery.focus)
============

This library is an extension for jQuery which allows focusing on editable elements either at the beginning or ending.

## Features

* Textarea, input and contenteditable support.
* Put cursor at the ending using ```focusEnd``` method.
* Put cursor at the beginning using ```focusBegin``` method.

## Dependencies

* jquery.js (>= 2.1.0)

## Examples

```javascript
$("textarea, input[type='text'], [contenteditable]").focusBegin();
$("textarea, input[type='text'], [contenteditable]").focusEnd();
```

## License

Copyright (c) 2012-2014 Mateus Maso. Released under an MIT license.
