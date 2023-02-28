const ABC = {
  makeElement : function makeElement(TagName, attribute, attriValue, parent) {
    const element = document.createElement(TagName);
    element.setAttribute(attribute, attriValue);
    parent.appendChild(element)
  },
}