var utils = {
	gebi: function(id){
		return document.getElementById(id);
	}
};
utils.getSelectedText = function(){
  var range = rangy.getSelection();
  if (range.rangeCount !== 0) {
    range = range.getRangeAt(0);
    return range.toString();
  }
  return false;
};

utils.wrap = function (toWrap, wrapper) {
  wrapper = wrapper || document.createElement('div');
  if (toWrap.nextSibling) {
    toWrap.parentNode.insertBefore(wrapper, toWrap.nextSibling);
  } else {
    toWrap.parentNode.appendChild(wrapper);
  }
  return wrapper.appendChild(toWrap);
};