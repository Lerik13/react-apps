import { Link } from "react-router-dom"

function CartOverview() {
	return (
		<div>
			<p>
				<span>30 pizzas</span>
				<span>$100.25</span>
			</p>
			<Link to="/cart">Open cart &rarr;</Link>
		</div>
	)
}

export default CartOverview
