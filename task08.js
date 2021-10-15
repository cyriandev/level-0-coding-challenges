// TasK 0.8

function toHours(time) {
    var hours = time / 60;

    if (hours % 1) {

        var hour = hours - Math.floor(hours);
        var minutes = Math.round(hour * 60);

        return `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? "s" : ''}, ${minutes} minute${minutes > 1 ? "s" : ''}`;
    }
    return `${hours} hour${hours > 1 ? "s" : ''}, 0  minutes`;

}

console.log(toHours(71));

