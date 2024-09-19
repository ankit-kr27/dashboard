import { Chip } from '@nextui-org/react';
import { IoTrendingDownOutline, IoTrendingUpOutline } from "react-icons/io5";

const StatCard = ({ title, valueString, growthType, growthValue }) => {
    return (
        <div className="border px-6 py-4 rounded-lg">
            <p className="text-sm text-gray-500">{title}</p>
            <div className='flex gap-4 items-center'>
                <p className='text-gray-800 font-bold text-xl'>{valueString}</p>
                <Chip
                    size='sm'
                    endContent={
                        growthType === 'success' ? (
                            <IoTrendingUpOutline />
                        ) : (
                            <IoTrendingDownOutline />
                        )
                    }
                    variant="faded"
                    color={growthType === 'success' ? 'success' : 'danger'}
                    className={`${growthType === 'success' ? "bg-green-50 border-green-400" : "bg-red-50 border-red-400"} pr-2`}
                >
                    {growthValue}
                </Chip>
            </div>
        </div>
    );
};

export default StatCard;
