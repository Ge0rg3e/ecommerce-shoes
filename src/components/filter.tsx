// Import
import { colors, sizes } from '../utils/data';

// Types
interface Props {
    onUpdate: (id: 'color' | 'size' | 'priceSort', value: any) => void;
    states: {
        priceSort: 'low' | 'high' | null;
        color: string | null;
        size: number | null;
    };
}

// Component
const Filter = ({ states, onUpdate }: Props) => {
    return (
        <div className='flex flex-col items-center justify-start w-[330px] sm:h-screen gap-y-5 p-10'>
            <div className='w-full'>
                <div className='font-medium mb-2'>Price</div>

                <div className='flex items-center gap-4'>
                    <button
                        className={`bg-[#1e232a] w-[100px] h-[35px] rounded-md ${
                            states.priceSort === 'low' && 'text-indigo-500'
                        }`}
                        onClick={() => onUpdate('priceSort', 'low')}
                    >
                        Low to high
                    </button>
                    <button
                        className={`bg-[#1e232a] w-[100px] h-[35px] rounded-md ${
                            states.priceSort === 'high' && 'text-indigo-500'
                        }`}
                        onClick={() => onUpdate('priceSort', 'high')}
                    >
                        High to low
                    </button>
                </div>
            </div>

            <div className='w-full'>
                <div className='font-medium mb-2'>Sizes</div>

                <div className='flex flex-wrap items-center gap-4'>
                    {sizes.map((entry, i) => (
                        <button
                            className={`bg-[#1e232a] w-[40px] h-[40px] flex justify-center items-center font-medium rounded-full ${
                                states.size === entry &&
                                'ring-2 ring-indigo-500 text-indigo-500'
                            }`}
                            onClick={() => onUpdate('size', entry)}
                            key={i}
                        >
                            {entry || '-'}
                        </button>
                    ))}
                </div>
            </div>

            <div className='w-full'>
                <div className='font-medium mb-2'>Colors</div>

                <div className='flex flex-wrap items-center gap-4'>
                    {colors.map((entry, i) => (
                        <button
                            className={`w-[40px] h-[40px] flex justify-center items-center rounded-full ${
                                states.color === entry &&
                                'ring-2 ring-indigo-500 text-indigo-500'
                            }`}
                            style={{ backgroundColor: entry || '#1e232a' }}
                            onClick={() => onUpdate('color', entry)}
                            key={i}
                        >
                            {states.color === entry && (
                                <i className='fas fa-check text-indigo-500 text-xl'></i>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Export
export default Filter;
