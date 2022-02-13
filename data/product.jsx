import { v4 as uuid } from "uuid";

const data = [
  {
    id: uuid(),
    productName: "first test",
    category: "Compra",
    totalValue: 249,
    dateMade: "02-2021",
  },
  {
    id: uuid(),
    productName: "second test",
    category: "Venda",
    totalValue: 249,
    dateMade: "02-2021",
  },
  {
    id: uuid(),
    productName: "third test",
    category: "Venda",
    totalValue: 249,
    dateMade: "02-2021",
  },
  {
    id: uuid(),
    productName: "four test",
    category: "Venda",
    totalValue: 249,
    dateMade: "02-2021",
  },
];

export default data;
