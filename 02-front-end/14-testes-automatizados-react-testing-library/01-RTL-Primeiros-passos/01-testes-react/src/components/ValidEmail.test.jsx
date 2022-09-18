import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';


describe('Testando o componente ValidEmail', () => {
  
  it('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });
  //getBy retorna um erro e encerra o test, já queryBy retorna null e nao encerra o teste
  it('Testando se o componente não aparece caso o campo email esteja vazio.', () => {
    render(<ValidEmail email="" />)
    const isValidText = screen.queryByTestId('id-is-email-valid');
    expect(isValidText).not.toBeInTheDocument();
  });

  test('Testando se o componente possui texto verde ao ser digitado um email válido.', () => {
    const EMAIL_USER = 'email@email.com';
  
    render(<ValidEmail email={EMAIL_USER} />);
    const isValidText = screen.getByTestId('id-is-email-valid');
    expect(isValidText).toHaveAttribute('class', 'green-text');
  });

  test('Testando se o componente possui texto vermelho ao ser digitado um email inválido.', () => {
    const EMAIL_USER = 'emailerrado';
  
    render(<ValidEmail email={EMAIL_USER} />);
    const isValidText = screen.getByTestId('id-is-email-valid');
    expect(isValidText).toHaveAttribute('class', 'red-text');
  });
  
})