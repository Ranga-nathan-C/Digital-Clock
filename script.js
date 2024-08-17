function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const greetingElement = document.getElementById('greeting');
    const body = document.body;

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.toLocaleString('default', { weekday: 'long' });
    const month = now.toLocaleString('default', { month: 'long' });
    const date = now.getDate();
    const year = now.getFullYear();

    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeElement.innerText = timeString;

    const dateString = `${day}, ${month} ${date}, ${year}`;
    dateElement.innerText = dateString;

    let greeting, bgClass;
    if (hours >= 5 && hours < 12) {
        greeting = "Good Morning";
        bgClass = 'morning';
    } else if (hours >= 12 && hours < 17) {
        greeting = "Good Afternoon";
        bgClass = 'afternoon';
    } else if (hours >= 17 && hours < 20) {
        greeting = "Good Evening";
        bgClass = 'evening';
    } else {
        greeting = "Good Night";
        bgClass = 'night';
    }
    greetingElement.innerText = greeting;
    body.className = bgClass;
}

setInterval(updateTime, 1000);

updateTime();
