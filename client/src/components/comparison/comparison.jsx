import { useSelector } from 'react-redux';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import SelectDropdown from '../select-dropdown/select-dropdown';

const Comparision = () => {
    const { comparisonData } = useSelector(state => state.comparison);

    const options = [
        { key: '6-months', label: '6 Months' },
        { key: '12-months', label: '12 Months' },
        { key: '24-months', label: '24 Months' }
    ];

    return (
        <div className="px-8 mt-6">
            <div className='flex justify-between mb-4'>
                <h2 className='text-xl font-bold text-gray-700'>Comparison</h2>
                <SelectDropdown options={options} />
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={comparisonData}>
                    <CartesianGrid />
                    <XAxis dataKey="month" className='text-xs' />
                    <YAxis className='text-xs' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="last_year" fill="#2563eb" />
                    <Bar dataKey="this_year" fill="#93c5fd" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Comparision;
