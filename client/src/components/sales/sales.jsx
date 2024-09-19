import { useSelector } from 'react-redux';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Sales = () => {
    const { salesData } = useSelector(state => state.sales);

    const calculateGrowth = (current, initial) => {
        if (initial === 0) return 0; // Avoid division by zero
        return ((current - initial) / initial) * 100;
    };

    const initialWebSales = salesData.length > 0 ? salesData[0].web_sales : 0;
    const initialOfflineSales = salesData.length > 0 ? salesData[0].offline_sales : 0;

    const latestWebSales = salesData.length > 0 ? salesData[salesData.length - 1].web_sales : 0;
    const latestOfflineSales = salesData.length > 0 ? salesData[salesData.length - 1].offline_sales : 0;

    const webSalesGrowth = calculateGrowth(latestWebSales, initialWebSales);
    const offlineSalesGrowth = calculateGrowth(latestOfflineSales, initialOfflineSales);

    return (
        <div className="mt-6 px-8">
            <h2 className="mb-4 text-lg font-bold text-gray-700">Comparison</h2>
            <ResponsiveContainer width="100%" height={150}>
                <LineChart data={salesData} >
                    <XAxis className="" tick={false} />
                    <YAxis className="text-xs" />
                    <Line
                        type="monotone"
                        dataKey="web_sales"
                        dot={false}
                        stroke="#2563eb"
                    />
                    <Line
                        type="monotone"
                        dataKey="offline_sales"
                        dot={false}
                        stroke="#93c5fd "
                    />
                </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-between text-xs text-gray-500">
                <div>
                    <p className="flex items-center gap-2">
                        Web sales{' '}
                        <div className="h-3 w-3 rounded-sm bg-blue-600"></div>
                    </p>
                    <div className='text-gray-700 font-bold'>{`${webSalesGrowth.toFixed(2)}%`}</div>
                </div>
                <div>
                    <p className="flex items-center gap-2">
                        Offline Selling{' '}
                        <div className="h-3 w-3 rounded-sm bg-blue-300"></div>
                    </p>
                    <div className='text-gray-700 font-bold'>{`${offlineSalesGrowth.toFixed(2)}%`}</div>
                </div>
            </div>
        </div>
    );
};

export default Sales;
