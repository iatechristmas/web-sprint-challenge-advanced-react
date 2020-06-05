import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
	render(<CheckoutForm />);
});

test('form shows success message on submit with form details', () => {
    render(<CheckoutForm />);
    
	const firstNameInput = screen.getByLabelText(/first name/i);
	const lastNameInput = screen.getByLabelText(/last name/i);
	const addressInput = screen.getByLabelText(/address/i);
	const cityInput = screen.getByLabelText(/city/i);
	const stateInput = screen.getByLabelText(/state/i);
	const zipInput = screen.getByLabelText(/zip/i);

	fireEvent.change(firstNameInput, { target: { value: 'Matthew' } });
	fireEvent.change(lastNameInput, { target: { value: 'Molloy' } });
	fireEvent.change(addressInput, { target: { value: '464 Camulos Street' } });
	fireEvent.change(cityInput, { target: { value: 'Los Angeles' } });
	fireEvent.change(stateInput, { target: { value: 'California' } });
	fireEvent.change(zipInput, { target: { value: '90033' } });

	const checkoutButton = screen.getByTestId(/checkout/i);

	fireEvent.click(checkoutButton);

	screen.findAllByText(/woo-hoo!/i);
});
