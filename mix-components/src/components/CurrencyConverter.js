import { useState, useEffect } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

const CurrencyConverter = () => {
	const [amount, setAmount] = useState(10);
	const [fromCur, setFromCur] = useState("USD");
	const [toCur, setToCur] = useState("EUR");
	const [output, setOutput] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function convert() {
			try {
				const res = await fetch(
					`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
				)
				
				if (!res.ok) {
					setOutput(amount);
					throw new Error("Something went wrong with fetching");
				}

				const data = await res.json();
				setOutput(data.rates[toCur]);
				} catch (error) {
					console.log(error.message)
				}
		}

		if (fromCur === toCur) return setOutput(amount);
		convert();
	}, [amount, fromCur, toCur]);

	return (
		<div>
			<input type="text" amount={amount} onChange={(e) => setAmount(e.target.value)} />
			<select amount={fromCur} onChange={(e) => setFromCur(e.target.amount)}>
				<option amount="USD">USD</option>
				<option amount="EUR">EUR</option>
				<option amount="CAD">CAD</option>
				<option amount="INR">INR</option>
			</select>
			<select amount={toCur} onChange={(e) => setToCur(e.target.amount)}>
				<option amount="USD">USD</option>
				<option amount="EUR">EUR</option>
				<option amount="CAD">CAD</option>
				<option amount="INR">INR</option>
			</select>
			<p>
				=> {output} {toCur}
			</p>
		</div>
	)
}

export default CurrencyConverter