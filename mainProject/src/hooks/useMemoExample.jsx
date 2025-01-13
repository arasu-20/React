import React, { useMemo, useState } from 'react';
import useFetch from './use-fetch';

export default function UseMemoExample() {
    const { data, loading, error } = useFetch('https://dummyjson.com/products');
    const [flag, setFlag] = useState(false);
    
    const filteredProducts = useMemo(() => {
        console.log('Rendered only once')
        return data?.products?.length > 0
            ? data.products.filter((singleProduct) => singleProduct.price > 9)
            : [];
    }, [data?.products]);
    console.log(data);
    if (loading) return <h2>Fetching Data...</h2>;
    if (error) return <h2>Error: {error.message}</h2>;

    return (
        <div>
            <h1 style={{color: flag ? 'red' : 'blue'}}>useMemo Example</h1>
            <button onClick={()=>setFlag(!flag)}>Toggle</button>
            <ul>
                {filteredProducts.map((item) => (
                    <li key={item.id}>
                        {item.title} and ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
