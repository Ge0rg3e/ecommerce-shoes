// Import
import { products as demoProducts } from './utils/data';
import Products from './components/products';
import { useEffect, useState } from 'react';
import Filter from './components/filter';

// Component
const App = () => {
    const [priceSort, setPriceSort] = useState<'low' | 'high' | null>(null);
    const [products, setProducts] = useState(demoProducts);
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);

    useEffect(() => {
        let filter =
            color === null || size === null
                ? demoProducts
                : demoProducts.filter(
                      (x) => x.color === color && x.size === size
                  );

        filter = filter.sort((a, b) =>
            priceSort === 'low' ? b.price - a.price : a.price - b.price
        );

        setProducts(filter);
    }, [color, size, priceSort]);

    if (!products) return <></>;

    return (
        <div className='flex flex-col justify-center sm:items-start items-center  sm:flex-row'>
            <Filter
                onUpdate={(id, value) => {
                    if (id === 'priceSort') setPriceSort(value);
                    if (id === 'color') setColor(value);
                    if (id === 'size') setSize(value);
                }}
                states={{ color, size, priceSort }}
            />

            <Products data={products} />
        </div>
    );
};

// Export
export default App;
