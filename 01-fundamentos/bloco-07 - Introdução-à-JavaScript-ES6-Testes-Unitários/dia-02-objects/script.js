// exercicio 1

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

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson
  const costumer = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street
  const streetNumber = order.address.number
  const apartment = order.address.apartment
  const payment = order.payment.total
    console.log(`Olá ${deliveryPerson}, entrega para: ${costumer}, Telefone: ${phoneNumber}, R. ${street}, Nº ${streetNumber}, AP: ${apartment}. Valor ficou R$ ${payment},00`);
}
customerInfo(order);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.

// }

// orderModifier(order);