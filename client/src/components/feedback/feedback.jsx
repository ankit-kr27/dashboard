import { useSelector } from 'react-redux';

const FeedbackSummary = () => {
    const { feedback } = useSelector(state => state.feedback);

    const negative = Number(feedback.negative);
    const neutral = Number(feedback.neutral);
    const positive = Number(feedback.positive);
    
    const total = negative + neutral + positive;
    const negativePercentage = (negative / total) * 100;
    const neutralPercentage = (neutral / total) * 100;
    const positivePercentage = (positive / total) * 100;

    const maxKey = Object.keys(feedback).reduce((a, b) =>
        feedback[a] > feedback[b] ? a : b
    );

    return (
        <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
                <h2 className="text-xs font-medium">Community feedback</h2>
            </div>
            <h3 className="mb-4 font-bold text-gray-700">Mostly {maxKey}</h3>
            <div className="mb-4 flex h-2.5 items-center rounded-full">
                <div
                    className="h-2.5 rounded-full bg-red-400"
                    style={{ width: `${negativePercentage}%` }}
                ></div>
                <div
                    className="h-2.5 rounded-full bg-yellow-400"
                    style={{ width: `${neutralPercentage}%` }}
                ></div>
                <div
                    className="h-2.5 rounded-full bg-green-400"
                    style={{ width: `${positivePercentage}%` }}
                ></div>
            </div>
            <div className="flex justify-between text-sm">
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500">
                        Negative
                    </span>{' '}
                    <span className="font-bold text-gray-700">
                        {feedback.negative}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500">
                        Neutral
                    </span>{' '}
                    <span className="font-bold text-gray-700">
                        {feedback.neutral}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500">
                        Positive
                    </span>{' '}
                    <span className="font-bold text-gray-700">
                        {feedback.positive}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSummary;
