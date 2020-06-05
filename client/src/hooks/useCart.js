import {useLocalStorage} from './useLocalStorage'

export const useCart = (key, initialValue) => {
    const[value, setValue] = useLocalStorage(key, initialValue)

    const addToCart = (plant) => {
        setValue([...value, plant]);
      };

    const removeFromCart = (plant) => {
        setValue(value.filter((p) => p.id !== plant.id));
      };

    return [value, addToCart, removeFromCart]
}