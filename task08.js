// TasK 0.8

function toHours(minutes) {
    hour = minutes / 60;

    if (hour % 1) {

        var i = hour - Math.floor(hour);
        var mins = Math.round(i * 60);
        return `${Math.floor(hour)} hour${Math.floor(hour) > 1 ? "s" : ''}, ${mins} minute${mins > 1 ? "s" : ''}`;
    }
    return `${hour} hour${hour > 1 ? "s" : ''}, 0  minutes`;

}

console.log(toHours(71));
