export const useMask = () => ({
  toBRL: (value) => {
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      type: "currency",
      currency: "BRL",
    }).format(value);

    return formattedValue;
  },
});
