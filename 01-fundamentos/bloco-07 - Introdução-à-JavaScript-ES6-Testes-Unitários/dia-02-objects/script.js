const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
// exercicio 1

// const customerInfo = (order) => {
//   const deliveryPerson = order.order.delivery.deliveryPerson
//   const costumer = order.name;
//   const phoneNumber = order.phoneNumber;
//   const street = order.address.street
//   const streetNumber = order.address.number
//   const apartment = order.address.apartment
//   const payment = order.payment.total
// console.log(`Olá ${deliveryPerson}, entrega para: ${costumer}, Telefone: ${phoneNumber}, R. ${street}, Nº ${streetNumber}, AP: ${apartment}. Valor ficou R$ ${payment},00`);
// }
// customerInfo(order);

// exercicio 2

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newCostumer = order.name = 'Luiz Silva';
  const newValue = order.payment.total = '50';
  const ordered = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
console.log(`Olá ${newCostumer}, o total do seu pedido de ${ordered[0]} e ${drink} é de R$ ${newValue},00`);
}
// "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
orderModifier(order);