import { useSelector } from 'react-redux';
import { Button, CircularProgress, Divider } from '@nextui-org/react';

const Score = () => {
    const { score, title, message } = useSelector(state => state.score);

    return (
        <div className="p-4 flex flex-col justify-between items-center">
            <CircularProgress
                classNames={{
                    svg: 'w-28 h-28 drop-shadow-md',
                    indicator: 'stroke-primary',
                    track: 'stroke-primary/10',
                    value: 'text-3xl font-semibold text-primary',
                }}
                value={score}
                strokeWidth={2}
                showValueLabel={true}
            />
            <h3 className='text-sm text-gray-500 mb-3'>{score} of 100 points</h3>
            <Divider />
            <div className=" mt-2">
                <p className='font-bold mb-2 text-gray-700'>{title}</p>
                <p className='text-xs'>{message}</p>
                <Button variant='bordered' size='sm' color='primary' className='rounded-full font-semibold mt-4'>Improve your score</Button>
            </div>
        </div>
    );
};

export default Score;
