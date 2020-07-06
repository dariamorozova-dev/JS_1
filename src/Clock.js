class Clock {
    constructor() {
        this.clock = document.getElementById('clock');
        this.color = document.getElementById('color');
    }

    getTime() {
        const currentTime = new Date();
        let h = currentTime.getHours().toString();
        let m = currentTime.getMinutes().toString();
        let s = currentTime.getSeconds().toString();

        this.setTime(h, m, s);
    }

    setTime(h, m, s) {
        let clockStr = null;
        let colorStr = null;

        if (h.length < 2) {
            h = '0' + h;
        }
        if (m.length < 2) {
            m = '0' + m;
        }
        if (s.length < 2) {
            s = '0' + s;
        }

        clockStr = `${h}:${m}:${s}`;
        colorStr = `#${h}${m}${s}`;

        this.clock.textContent = clockStr;
        this.color.textContent = colorStr;

        this.setBackground(colorStr);
    }

    setBackground(colorStr) {
        document.body.style.backgroundColor = colorStr;
    }
}
