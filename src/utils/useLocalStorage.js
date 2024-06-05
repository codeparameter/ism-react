import { useState } from "react";

export default function useLocalStorage(key, defaultValue){
	// Create state variable to store localStorage value in state
	const [localStorageValue, setLocalStorageValue] = useState(() => {
		try {
			const value = localStorage.getItem(key);
			// If value is already present in 
			// localStorage then return it
			
			// Else set default value in 
			// localStorage and then return it
			if (value) {
				return JSON.parse(value);
			} 
			localStorage.setItem(key, JSON.stringify(defaultValue));
			return defaultValue;
		} catch (error) {
			localStorage.setItem(key, JSON.stringify(defaultValue));
			return defaultValue;
		}
	})

	// this method update our localStorage and our state
	const setLocalStorageStateValue = (valueOrFn) => {
		let newValue;
		if (typeof valueOrFn === 'function') {
			newValue = valueOrFn(localStorageValue);
		}
		else {
			newValue = valueOrFn;
		}
		localStorage.setItem(key, JSON.stringify(newValue));
		setLocalStorageValue(newValue);
	}

	window.addEventListener('storage', ()=>{
		setLocalStorageStateValue(LocalStorage(key));
	});

	return [localStorageValue, setLocalStorageStateValue];
}

export function LocalStorage(key){
    try {
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
    } catch (error) {
        return null;
    }
}