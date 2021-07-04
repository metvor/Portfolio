var scrollUp = window.scrollY;
window.onscroll = function() {
    var scrollDown = window.scrollY;
    if (scrollUp > scrollDown) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-60px";
    }
    scrollUp = scrollDown;
}

