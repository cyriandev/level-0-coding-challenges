// TasK 0.8

function toHours(time) {
    const hours = time / 60;

    if (hours % 1) {

        const hour = hours - Math.floor(hours);
        const minutes = Math.round(hour * 60);

        return `${Math.floor(hours)} hour${Math.floor(hours) >= 0 ? "s" : ''}, ${minutes} minute${minutes > 1 ? "s" : ''}`;
    }
    return `${hours} hour${hours >= 0 ? "s" : ''}, 0  minutes`;

}

console.log(toHours(71));

