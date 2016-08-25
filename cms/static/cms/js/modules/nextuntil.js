/**
 * Essentially same as jQuery's `.nextUntil` but also includes non-element nodes.
 *
 * @function nextUntil
 * @public
 * @param {Element} element to start from
 * @param {String} until class name of the element
 * @returns {Array<Element>} resulting array of elements
 */
var nextUntil = function nextUntil(element, until) {
    var next = [];
    var el = element;

    while (el.nextSibling && !(el.nextSibling.className && el.nextSibling.className.match(new RegExp(until)))) {
        el = el.nextSibling;
        next.push(el);
    }

    return next;
};

module.exports = nextUntil;