import { useEffect } from 'react';
import Comparision from '../comparison/comparison';
import Feedback from '../feedback/feedback';
import Header from '../header/header';
import Sales from '../sales/sales';
import Score from '../score/score';
import Stats from '../stats/stats';
import TopProducts from '../top-products/top-products';
import { useDispatch } from 'react-redux'
import { getStats } from '../../features/statsSlice';
import { getComparisonData } from '../../features/comparisonSlice';
import { getTopProductsData } from '../../features/topProductsSlice';
import { getScoreData } from '../../features/scoreSlice';
import { getFeedbackData } from '../../features/feedbackSlice';
import { getSalesData } from '../../features/salesSlice';

const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStats());
        dispatch(getComparisonData());
        dispatch(getTopProductsData());
        dispatch(getScoreData());
        dispatch(getFeedbackData());
        dispatch(getSalesData());
    }, [dispatch])

    return (
        <div className="grid h-full grid-cols-8 grid-rows-8 gap-4">
            <div className="col-span-6 row-span-8 rounded-xl shadow-md shadow-gray-400">
                <Header />
                <Stats />
                <Comparision />
                <TopProducts />
            </div>
            <div className="col-span-2 col-start-7 row-span-3 rounded-xl shadow-md shadow-gray-400">
                <Score />
            </div>
            <div className="col-span-2 col-start-7 row-span-3 row-start-4 rounded-xl shadow-md shadow-gray-400">
                <Sales />
            </div>
            <div className="col-span-2 col-start-7 row-span-2 row-start-7 rounded-xl shadow-md shadow-gray-400">
                <Feedback />
            </div>
        </div>
    );
};

export default Dashboard;
