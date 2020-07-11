const { Temporal, Intl } = require("proposal-temporal");

const currDate = Temporal.now.date("Europe/London");

function getWeeklyDaysInMonth(yearMonth, dayNumberOfTheWeek) {
  const firstOfMonth = yearMonth.toDateOnDay(1);
  let nextWeekday = firstOfMonth.plus({
    days: (7 + dayNumberOfTheWeek - firstOfMonth.dayOfWeek) % 7,
  });
  const result = [];
  while (nextWeekday.month === yearMonth.month) {
    result.push(nextWeekday);
    nextWeekday = nextWeekday.plus({ days: 7 });
  }
  return result;
}

console.log(
  new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(currDate)
);
