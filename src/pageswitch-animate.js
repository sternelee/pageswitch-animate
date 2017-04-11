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
})('pwAnimate', function() {
    var pwa = {};
    pwa.pwAnimateCache = function() {
        for (allBoxes = window.document.documentElement.querySelectorAll(".animate"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["style"] ? allBoxes[i].setAttribute("animate-style-cache", allBoxes[i].attributes["style"].value) : allBoxes[i].setAttribute("animate-style-cache", " "), allBoxes[i].style.visibility = "hidden"
    };
    pwa.pwAnimate = function(a) {
        pwa.clearPwAnimate();
        var b = a.pages[a.current].querySelectorAll(".animate");
        for (i = 0; i < b.length; i++) b[i].style.visibility = "visible", effect = b[i].attributes["animate-effect"] ? b[i].attributes["animate-effect"].value : "", b[i].className = b[i].className + "  " + effect + " " + "animated", style = b[i].attributes["style"].value, duration = b[i].attributes["animate-time"] ? b[i].attributes["animate-time"].value : "", duration && (style = style + "animatemation-duration:" + duration + ";-webkit-animatemation-duration:" + duration + ";"), delay = b[i].attributes["animate-delay"] ? b[i].attributes["animate-delay"].value : "", delay && (style = style + "animatemation-delay:" + delay + ";-webkit-animatemation-delay:" + delay + ";"), b[i].setAttribute("style", style)
    };
    pwa.clearPwAnimate = function() {
        for (allBoxes = window.document.documentElement.querySelectorAll(".animate"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["animate-style-cache"].value), allBoxes[i].style.visibility = "hidden", allBoxes[i].className = allBoxes[i].className.replace("animated", " "), allBoxes[i].attributes["animate-effect"] && (effect = allBoxes[i].attributes["animate-effect"].value, allBoxes[i].className = allBoxes[i].className.replace(effect, " "))
    };
    return pwa;
});
