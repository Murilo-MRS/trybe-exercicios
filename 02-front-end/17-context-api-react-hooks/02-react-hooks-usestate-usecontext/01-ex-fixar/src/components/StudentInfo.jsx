import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

export default function StudentInfo() {
  const { data } = useContext(FormContext);
  return (
    <ul>
      {data.map((element, index) => (
        <li key={index}>
          <p>{element.name}</p>
          <p>{element.age}</p>
          <p>{element.location}</p>
          <p>{element.module}</p>
        </li>
      ))}
    </ul>
  );
}
