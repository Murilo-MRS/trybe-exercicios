import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Verifica o compnente App.', () => {
  test('Verificando se existe o campo Email.', () => {
    // acessar os elmentos da tela 
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    
    // fazer os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
    
  })

  test('Verificando se existe um botão', () => {
    render(<App />);
    // acessar os elmentos da tela 
    const btn = screen.getAllByRole('button');
    // fazer os testes
    // expect(btn).toBeInTheDocument(); só espera um elemento
    expect(btn).toHaveLength(2);
  });

  test('Verificando se existe um botão enviar', () => {
    render(<App />);
    // acessar os elmentos da tela 
    const btnSend = screen.getByTestId('id-send');
    // fazer os testes
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  });

  test('Verificando se o botão e o campo email estão funcionando.', () => {
    render(<App />);
    // acessar os elmentos da tela 
    const EMAIL_USER = 'email@email.com';
    const textEmail = screen.getByTestId('id-email-user')
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    // fazer os testes
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
    // interagir coms os elementos da tela
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);

  });
  
  // acessar os elementos da tela


  // fazer os testes

});
