export const getStartOfWeek = (date) => {
  const currentDate = new Date(date);
  const currentDayOfWeek = currentDate.getDay();
  const difference = currentDayOfWeek - 1; // Assuming Sunday is the first day of the week

  currentDate.setDate(currentDate.getDate() - difference);
  currentDate.setHours(0, 0, 0, 0);

  return currentDate;
};

export const getEndOfWeek = (date) => {
  const currentDate = new Date(date);
  const currentDayOfWeek = currentDate.getDay();
  const difference = 7 - currentDayOfWeek; // Assuming Sunday is the first day of the week

  currentDate.setDate(currentDate.getDate() + difference);
  currentDate.setHours(23, 59, 59, 999);

  return currentDate;
};
