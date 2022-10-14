const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// Definição da função sendMarsTemperature...
const sendMarsTemperature = (onSuccess) => { // 1. Criamos a função `sendMarsTemperature`
  const currentTemperature = getMarsTemperature(); // 2. Armazenamos a temperatura
  setTimeout(() => onSuccess(currentTemperature), messageDelay()); // 3, 4, 5. Fazemos um `setTimout` utilizando a callback `onSuccess` e a variável `currentTemperature`
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);