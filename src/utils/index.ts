// function to generate random date and time for data
export const getRandomDate = (start: Date, end: Date) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const optionsDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const timeString = date.toLocaleString("fa-IR", optionsTime);
  const dateString = date.toLocaleString("fa-IR", optionsDate);
  return { date: dateString, time: timeString };
};

// function to compare data
export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  const getValue = (item: any, key: keyof T) => {
    if (key === "price") {
      // Convert price string to a float, removing any currency symbols
      return parseFloat(item[key].replace(/[^0-9.-]+/g, ""));
    }
    return item[key];
  };

  const aValue = getValue(a, orderBy);
  const bValue = getValue(b, orderBy);

  if (bValue < aValue) {
    return -1;
  }
  if (bValue > aValue) {
    return 1;
  }
  return 0;
}

// function for detect asc or desc
export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: any, b: any) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// data creator function
export function createData(
  id: number,
  code: number,
  name: string,
  factorType: number,
  count: number,
  price: string,
  status: number,
): Data {
  const randomDate = getRandomDate(new Date(2023, 0, 1), new Date(2024, 0, 1)); // Adjust the range as needed
  return {
    id,
    code,
    name,
    date: randomDate.date,
    time: randomDate.time,
    factorType,
    count,
    price,
    status,
  };
}
