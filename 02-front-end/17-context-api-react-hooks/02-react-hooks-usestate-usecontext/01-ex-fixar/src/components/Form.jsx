import StudentInfo from './StudentInfo';
import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function Form() {
  const {
    name,
    setName,
    age,
    setAge,
    location,
    setLocation,
    module,
    setModule,
    addData,
  } = useContext(FormContext);

  const handleClick = (event) => {
    event.preventDefault();
    const studentInfo = {
      name,
      age,
      location,
      module,
    };
    addData(studentInfo);

    setName('');
    setAge('');
    setLocation('');
    setModule(false);
  };

  return (
    <form>
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor="name">
          Nome completo
          <input
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <br />
        <label htmlFor="age">
          Idade
          <input
            type="number"
            id="age"
            value={age}
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <br />
        <label htmlFor="city">
          Cidade/UF
          <input
            type="text"
            id="city"
            value={location}
            onChange={({ target }) => setLocation(target.value)}
          />
        </label>
        <br />
      </fieldset>
      <fieldset>
        <legend>Módulo</legend>
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            id="frontend"
            name="module"
            value="Front-end"
            checked={module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="cs">
          Ciência da computação
          <input
            type="radio"
            id="cs"
            name="module"
            value="Ciência da computação"
            checked={module === 'Ciência da computação'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
      </fieldset>
      <button type="submit" onClick={handleClick}>
        Enviar
      </button>
      <StudentInfo />
    </form>
  );
}

export default Form;
