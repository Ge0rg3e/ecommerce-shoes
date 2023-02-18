// Types
interface Props {
    data: {
        image: string;
        title: string;
        color: string;
        brand: string;
        price: number;
        size: number;
    }[];
}

// Component
const Products = (props: Props) => {
    return (
        <div className='w-[80%] flex flex-wrap justify-center sm:justify-start gap-10 py-[75px]'>
            {props.data.map((entry, i) => (
                <div
                    className='bg-[#1e232a] w-[300px] h-[300px] flex flex-col items-center gap-y-[15px] rounded-md group'
                    key={i}
                >
                    <div
                        className='transition-smth w-full h-[160px] bg-[50%_58%] bg-no-repeat group-hover:scale-110'
                        style={{
                            backgroundImage: `url('${entry.image}')`,
                            backgroundSize: '80%',
                        }}
                    ></div>

                    <div className='text-center'>
                        <div className='uppercase font-semibold max-w-[290px]'>
                            {entry.title}
                        </div>

                        <div className='font-bold text-xl'>
                            {entry.price} &euro;
                        </div>
                    </div>

                    <button className='bg-[#222830] w-[65%] h-[40px] flex justify-center items-center gap-x-2 font-medium rounded-sm group-hover:rounded-md'>
                        ADD TO CARD{' '}
                        <i className='transition-smth text-xl far fa-long-arrow-right pt-1 group-hover:text-indigo-500 group-hover:pl-0.5'></i>
                    </button>
                </div>
            ))}

            {!props.data.length && (
                <div className='bg-[#1e232a] w-[300px] h-[300px] flex flex-col items-center gap-y-[15px] rounded-md p-5'>
                    <div className='animate-pulse w-full h-[125px] bg-[#222830] rounded-md'></div>

                    <div className='animate-pulse flex flex-col justify-center items-center'>
                        <div className='w-[200px] h-1 bg-[#222830] rounded-md my-5'></div>

                        <div className='w-[150px] h-1 bg-[#222830] rounded-md my-5'></div>
                    </div>

                    <button className='bg-[#222830] animate-pulse w-[65%] h-[40px] rounded-sm'></button>
                </div>
            )}
        </div>
    );
};

// Export
export default Products;
