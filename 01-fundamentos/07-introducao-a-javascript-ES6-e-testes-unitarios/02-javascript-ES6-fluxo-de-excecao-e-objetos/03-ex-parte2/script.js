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
    // Adicione abaixo as informações necessárias.
    const nomeEntregador = order.order.delivery.deliveryPerson;
    const nomeDestino = order.name;
    const telefoneDestino = order.phoneNumber;
    const enderecoDestino = `${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
    console.log(`Olá ${nomeEntregador}, entrega para: ${nomeDestino}, Telefone: ${telefoneDestino}, R. ${enderecoDestino}.`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const nomeDestino = order.name
    order.name = 'Luiz Silva';
    const pedido1 = Object.keys(order.order.pizza)[0];
    const pedido2 = Object.keys(order.order.pizza)[1];
    const pedido3 = Object.keys(order.order.drinks)[0];
    order.order.pizza.marguerita.price = 20;
    const total = order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price
    console.log(`Olá ${nomeDestino}, total do seu pedido de ${pedido1}, ${pedido2} e ${pedido3} é R$ ${total.toFixed(2)}`);
  }
  
  orderModifier(order);
  