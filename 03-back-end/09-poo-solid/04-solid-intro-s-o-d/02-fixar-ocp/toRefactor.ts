// function progressNotification(
//   message: string,
//   notificationType: string,
// ): void {
//   switch (notificationType) {
//     case 'Email':
//       console.log('Email: ', message);
//       break;
//     case 'Phone':
//       console.log('Phone: ', message);
//       break;
//     case 'Console':
//       console.log('Console: ', message);
//       break;
//     default:
//       console.log(message);
//       break;
//   }
// }

// Solução
type Notification = { type: string, send: (message: string) => void };

// Criando variáveis para guardar cada tipo aceito por nossa função
const consoleNotification: Notification = {
  type: 'Console',
  send: (message) => console.log('Console: ', message),
};

const emailNotification: Notification = {
  type: 'Email',
  send: (message) => console.log('Email: ', message),
};

const phoneNotification: Notification = {
  type: 'Phone',
  send: (message) => console.log('Phone: ', message),
};

const alexaNotification: Notification = {
  type: 'Alexa',
  send: (message) => console.log('Alexa: ', message),
};

const noTypeNotification: Notification = {
  type: '',
  send: (message) => console.log(message),
};

const notifications: Notification[] = [
  consoleNotification,
  emailNotification,
  phoneNotification,
  alexaNotification,
  noTypeNotification,
];

// Agora podemos adicionar novos tipos sem modificar nossa função
export default function progressNotification(
  message: string,
  type_ = '',
  notificationsArray: Notification[] = notifications,
): void {
  notificationsArray.forEach((notification) => {
    if (notification.type === type_) {
      notification.send(message);
    }
  });
}

progressNotification('hey');
