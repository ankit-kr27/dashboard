import SelectDropdown from '../select-dropdown/select-dropdown';

const Header = () => {
    const options = [{ key: 'last-year', label: 'Last Year' }];
    return (
        <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <SelectDropdown options={options} />
        </div>
    );
};

export default Header;
