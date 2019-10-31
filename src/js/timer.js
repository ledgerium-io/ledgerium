// November 4th 2019, 12:00am AEDT
document.addEventListener('DOMContentLoaded', () => {
  moment.tz.setDefault("Australia/Victoria");

  const timer = setInterval(() => {
    const deadline = moment("2019-11-04 12:00");
    const now = moment();
    const ms = deadline.diff(now) + 86400000; // + day
    const days = moment.duration(ms).days();
    const hours = moment.duration(ms).hours();
    const minutes = moment.duration(ms).minutes();
    const sec = moment.duration(ms).seconds();

    if (ms >= 0) {
      const wrap = document.querySelectorAll('.timer__item');
      wrap[0].innerHTML = days;
      wrap[1].innerHTML = hours;
      wrap[2].innerHTML = minutes;
      wrap[3].innerHTML = sec;
    } else {
      clearInterval(timer);
    }
  }, 1000);
});