export const getCurrentDate = () => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  return `${month}-${year}`;
};

export const formatCurrentMonth = (currentMonth) => {
  const [month, year] = currentMonth.split("-");
  const months = [
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
