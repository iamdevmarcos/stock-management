export const getCurrentDate = () => {
  let now = new Date();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  return `${month}-${year}`;
};

export const formatCurrentMonth = (currentMonth) => {
  let [month, year] = currentMonth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${months[parseInt(month) - 1]} de ${year}`;
};
