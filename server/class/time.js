class Time {
    // the time will be save as 24 hour clock type
    constructor(hour, minute) {
        this.hour = hour;
        this.minute = minute;
    }

    static toMinute(hour, minute) {
        return hour * 60 + minute;
    }

    setTime(hour = 0, minute = 0) {
        this.hour = hour;
        this.minute = minute;
    }

    whatTimeIsIt() {
        return {
            hour: this.hour,
            minute: this.minute,
            type: "24-hour clock"
        }
    }

    to12HourClock() {
        let time_12 = {
            hour: this.hour,
            minute: this.minute,
            type: ""
        }
        if (time_12.hour >= 12) {
            time_12.type = "pm";
            time_12.hour = time_12.hour - 12;
        } else {
            time_12.type = "am";
        }
        if (time_12.hour == 0) {
            time_12.hour = 12;
        }
        return time_12;
    }

    add(minute) {
        let sum = minute + this.minute + this.hour * 60;

        this.hour = Math.floor(sum/60)%24;
        this.minute = sum % 60;

        return this;
    }

    subtract(minute) {
        let sum = this.minute + this.hour * 60 - minute;
        
        if (sum < 0) {
            sum = 1440 + sum % 1440; 
        }

        this.hour = Math.floor(sum/60)%24;
        this.minute = sum % 60;

        return this;
    }

    toMinute() {
        return this.hour*60 + this.minute;
    }

}

module.exports = Time;