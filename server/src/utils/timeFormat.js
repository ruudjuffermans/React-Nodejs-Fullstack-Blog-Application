export function getYearMonthDay() {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return { year, month, day };
}

export function timestampToExpDate(timestampInSeconds) {
  return new Date(timestampInSeconds * 1000);
}
