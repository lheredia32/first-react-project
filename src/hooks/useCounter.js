import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    
	const [counter, setCounter] = useState(initialValue)

	const increment = (value = 1) => {
		setCounter(counter + value)
	}
	const decrement = (value = 1, negative) => {
		if (!negative && counter < 1) return
		setCounter(counter - value)
	}
	const reset = (value) => {
		setCounter(0)
	}

	return {
		counter,
		increment,
		decrement,
		reset
	}
    
}
