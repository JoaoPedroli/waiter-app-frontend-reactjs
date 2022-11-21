import { Order } from "../../types/Order";
import { OrdersBoard } from "./OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "637982f4437108f19e4ec8b7",
    table: "123",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Cola Cola",
          imagePath: "1668906569345-coca-cola.png",
          price: 7,
        },
        quantity: 3,
        _id: "637982f4437108f19e4ec8b8",
      },
      {
        product: {
          name: "Cerveja",
          imagePath: "1668907080461-cerveja.png",
          price: 10,
        },
        quantity: 2,
        _id: "637982f4437108f19e4ec8b9",
      },
    ],
  },
];

export const Orders = () => {
  return (
    <Container>
      <OrdersBoard icon="⏱️" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="🧑‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
};
