const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const dateString = (dateStr) => {
    const date = new Date(dateStr);
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    return `${day} ${date.getDate()} ${month}`;
};