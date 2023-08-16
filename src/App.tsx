/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react';
import './App.css';

type Viewports = {
	desktop: string;
	tablet: string;
	mobile: string;
};

type ProductData = {
	category: string;
	categoryImage: Viewports;
	description: string;
	features: string;
	gallery: {
		first: Viewports;
		second: Viewports;
		third: Viewports;
	};
	id: number;
	image: Viewports;
	includes: { quantity: number; item: string }[];
	name: string;
	new: boolean;
	others: { image: Viewports; slug: string; name: string }[];
	price: number;
	slug: string;
};

function App() {
	const [data, setData] = useState<ProductData[]>([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const res = await fetch('../starter-code/data.json');
		const data = await res.json();
		console.log(data);
		setData(data);
	};
	return (
		<>
			<ul>
				{data.map((product: ProductData, i: number) => (
					<li key={i}>
						<h2>{product.id}</h2>
						<h1>{product.category}</h1>
						<img src={product.gallery.third.desktop}></img>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
