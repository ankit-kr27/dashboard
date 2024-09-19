import { Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';

const SelectDropdown = ({ options, label }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].key);

    const handleSelectChange = e => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="flex items-center gap-2">
            <p className="whitespace-nowrap text-gray-700">{label}</p>

            <div className="inline-flex">
                <Select
                    variant="bordered"
                    radius="full"
                    className="min-w-32"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    defaultSelectedKeys={[options[0].key]}
                    size='sm'
                >
                    {options.map(option => (
                        <SelectItem key={option.key} value={option.key}>
                            {option.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default SelectDropdown;
