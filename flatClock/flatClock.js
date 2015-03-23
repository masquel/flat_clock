function countDown(c, e, l, o) {
    var t = new Date,
        n = t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + (t.getDate() + 1) + " 00:00:00",
        a = new Date(l || n),
        e = e || "black",
        s = JSON.parse('{"ru": {"hour": "часов","minute": "минут","second": "секунд"},"en": {"hour": "hours","minute": "minutes","second": "seconds"}}'),
        o = o || "ru";
    console.log(o);
    var i = s[o],
        r = setInterval(function() {
            var l = a.getTime() - t.getTime();
            if (0 > l) clearInterval(r), alert("Хуй");
            else {
                for (var o = Math.floor(l / 36e5), n = Math.floor(l / 6e4) % 60, s = Math.floor(l / 1e3) % 60, d = document.querySelectorAll(c), u = 0; u < d.length; u++) {
                    var o = '<div class="flat-clock-hours"><div class="flat-clock-digit">' + o + '</div><span class="flat-clock-text">' + i.hour + "</span></div>",
                        n = '<div class="flat-clock-minutes"><div class="flat-clock-digit">' + n + '</div><span class="flat-clock-text">' + i.minute + "</span></div>",
                        s = '<div class="flat-clock-seconds"><div class="flat-clock-digit">' + s + '</div><span class="flat-clock-text">' + i.second + "</span></div>";
                    d[u].innerHTML = '<div class="flat-clock-wrapper ' + e + '">' + o + n + s + "</div>"
                }
                s || n || o || clearInterval(r)
            }
            t.setSeconds(t.getSeconds() + 1)
        }, 1e3)
}
countDown(".clock", "black", new Date("2015/03/30"), ""), countDown(".clock1", "white"), countDown(".clock2", "green"), countDown(".clock3", "blue"), countDown(".clock4", "red"), countDown(".clock5", "", "", "en");
