export function countHours(year: number, holidays: string[]) {
  let holidaysNumber = holidays.length;

  holidays.forEach((day) => {
    const formattedDate = `${year}-${day.split("/").join("-")}`;
    const weekDay = new Date(formattedDate).getDay(); // Sunday => 0, Monday => 1, Tuesday => 2 ...

    if (weekDay == 6 || weekDay == 0) holidaysNumber--;
  });

  return holidaysNumber * 2;
}
