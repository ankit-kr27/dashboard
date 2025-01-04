import { NavLink } from 'react-router-dom';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { Tooltip } from '@nextui-org/react';
import { MdOutlineDashboard } from 'react-icons/md';
// import { useSelector } from 'react-redux';

const items = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: <MdOutlineDashboard />,
    },
];

function SidePanel() {
    // const { username } = useSelector(state => state.auth)

    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`sticky top-0 ${isOpen ? 'w-72' : 'w-20'} z-50 h-[100vh] p-6 pr-0 shadow-md shadow-gray-400 duration-300`}
        >
            <div className="mb-4 ml-4 w-fit">
                <button className="text-2xl text-primary" onClick={toggleMenu}>
                    {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
                </button>
            </div>
            {items.map((item, index) => (
                <Tooltip
                    key={index}
                    content={item.name}
                    isDisabled={isOpen}
                    placement="right"
                    showArrow={true}
                >
                    <NavLink
                        className={({ isActive }) =>
                            `flex cursor-pointer items-center gap-4 rounded-s-lg p-4 text-primary transition duration-300 focus:bg-primary ${isActive ? 'bg-primary text-white' : 'hover:bg-primary/90 hover:text-white'}`
                        }
                        to={item.path}
                    >
                        <div className={`text-xl`}>{item.icon}</div>
                        <span
                            className={`${!isOpen && 'hidden'} ml-2 text-nowrap text-sm`}
                        >
                            {item.name}
                        </span>
                    </NavLink>
                </Tooltip>
            ))}

            {/* <div className="mt-[70vh]  flex items-center bg-white border border-primary py-2 px-6 rounded-full justify-center w-fit">
                <div className="flex justify-between gap-1 sm:gap-2">
                    <div>
                        <h6 className="text-[14px] font-semibold text-gray-700 sm:text-[18px]">
                            { username }
                        </h6>
                    </div>
                    <AccountMenuDropdown />
                </div>
            </div> */}
        </div>
    );
}

export default SidePanel;
