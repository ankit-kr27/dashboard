import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';

const TopProducts = () => {
    const { topProducts } = useSelector(state => state.topProducts);

    return (
        <div className='px-8'>
            <h2 className='text-xl font-bold mb-4 text-gray-700'>Top Products</h2>
            <div className="scrollbar-thin overflow-auto rounded-lg border shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="sticky top-0 table-header-group bg-blue-100">
                        <tr>
                            <th
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                scope="col"
                            >
                                Product
                            </th>
                            <th
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                scope="col"
                            >
                                Sold Amount
                            </th>
                            <th
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                scope="col"
                            >
                                Unit Price
                            </th>
                            <th
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                scope="col"
                            >
                                Revenue
                            </th>
                            <th
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                scope="col"
                            >
                                Rating
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {topProducts?.map((product, index) => (
                            <tr key={index}>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                    {product.product}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                    {product.sold_amount}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                    ${product.unit_price}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                    ${product.revenue}
                                </td>
                                <td className="flex items-center gap-2 whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                    <FaStar className="text-yellow-400" />
                                    {product.rating}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopProducts;
