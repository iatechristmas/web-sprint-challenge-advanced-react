import react, { useState } from 'react';
import {useLocalStorage} from './useLocalStorage'

export const useForm = (key, initialValue) => {
	const [ values, setValues ] = useLocalStorage(key, initialValue);

	const handleChanges = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	};

	const clearForm = (e) => {
		e.preventdefault();
		setValues(initialValue);
	};

	return [ values, handleChanges, clearForm ];
};
