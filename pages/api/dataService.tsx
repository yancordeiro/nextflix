export const fetchData = async () => {
  const response = await fetch("pages/api/data.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
};
