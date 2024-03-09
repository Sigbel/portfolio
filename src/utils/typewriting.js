const typewriting = () => {
  var _CONTENT = ["+ Designer", "+ Ilustrador", "+ Modelador"];

  var _PART = 0;
  var _PART_INDEX = 0;
  var _INTERNAL_VAL;
  var _ELEMENT = document.querySelector("#text_typewriting");
  var _CURSOR = document.querySelector("#cursor");

  const Type = () => {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    if (text === _CONTENT[_PART]) {
      _CURSOR.style.display = "inline_block";
      clearInterval(_INTERNAL_VAL);
      setTimeout(() => {
        _INTERNAL_VAL = setInterval(Delete, 50);
      }, 1000);
    }
  };

  const Delete = () => {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    if (text === "") {
      clearInterval(_INTERNAL_VAL);

      if (_PART == _CONTENT.length - 1) {
        _PART = 0;
      } else {
        _PART++;
      }

      _PART_INDEX = 0;

      setTimeout(() => {
        _CURSOR.style.display = "inline-block";
        _INTERNAL_VAL = setInterval(Type, 100);
      }, 200);
    }
  };

  _INTERNAL_VAL = setInterval(Type, 100);
};

export default typewriting;
