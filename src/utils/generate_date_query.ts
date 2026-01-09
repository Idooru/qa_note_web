type Params = {
  year: string | number;
  month: string | number;
  day: string | number;
};

export const generateDateQuery = (params: Params) => {
  const { year, month, day } = params;
  return `?year=${year}&month=${month}&day=${day}`;
};
