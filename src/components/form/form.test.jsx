import { toBeInTheDocument } from '@testing-library/jest-dom'

import React from 'react';
import Form from './form';
import { render, fireEvent } from '@testing-library/react';

test('Sending Form with sucess', () => {
    expect.extend({ toBeInTheDocument });

    const sucessMessage = "Form enviado com sucesso";
    const { getByLabelText, getByText } = render(<Form />);

    fireEvent.change(getByLabelText(/Username/i), { target: { value: 'username' } });
    fireEvent.change(getByLabelText(/Password/i), { target: { value: '123456' } });
    fireEvent.click(getByText(/submit/i));

    expect(getByText(sucessMessage)).toBeInTheDocument();

});

test('Form error message', () => {
    expect.extend({ toBeInTheDocument });

    const sucessMessage = "Todos os campos são obrigatórios.";
    const { getByText } = render(<Form />);
    fireEvent.click(getByText(/submit/i));

    expect(getByText(sucessMessage)).toBeInTheDocument();

});