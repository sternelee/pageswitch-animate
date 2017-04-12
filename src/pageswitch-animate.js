;
(function(name, definition) {
    var hasDefine = typeof define === 'function',
        hasExports = typeof module !== 'undefined' && module.exports;
    if (hasDefine) {
        define(definition);
    } else if (hasExports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})('Pwa', function() {
    var Pwa = {};
    Pwa.pwAnimateCache = function() {
        for (allBoxes = window.document.documentElement.querySelectorAll(".animate"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["style"] ? allBoxes[i].setAttribute("data-style-cache", allBoxes[i].attributes["style"].value) : allBoxes[i].setAttribute("data-style-cache", " "), allBoxes[i].style.visibility = "hidden"
    };
    Pwa.pwAnimate = function(a) {
        Pwa.clearPwAnimate();
        var b = a.pages[a.current].querySelectorAll(".animate");
        for (i = 0; i < b.length; i++) b[i].style.visibility = "visible", effect = b[i].attributes["data-effect"] ? b[i].attributes["data-effect"].value : "", b[i].className = b[i].className + "  " + effect + " " + "animated", style = b[i].attributes["style"].value, duration = b[i].attributes["data-time"] ? b[i].attributes["data-time"].value : "", duration && (style = style + "-webkit-animation-duration:" + duration + ";animation-duration:" + duration + ";"), delay = b[i].attributes["data-delay"] ? b[i].attributes["data-delay"].value : "", delay && (style = style + "-webkit-animation-delay:" + delay + ";animation-delay:" + delay + ";"), b[i].setAttribute("style", style)
    };
    Pwa.clearPwAnimate = function() {
        for (allBoxes = window.document.documentElement.querySelectorAll(".animate"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["data-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["data-style-cache"].value), allBoxes[i].style.visibility = "hidden", allBoxes[i].className = allBoxes[i].className.replace("animated", " "), allBoxes[i].attributes["data-effect"] && (effect = allBoxes[i].attributes["data-effect"].value, allBoxes[i].className = allBoxes[i].className.replace(effect, " "))
    };
    return Pwa;
});
