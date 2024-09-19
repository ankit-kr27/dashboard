import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';

export default function AccountMenuDropdown() {
    const dispatch = useDispatch();
    return (
        <Dropdown>
            <DropdownTrigger className="focus:outline-none">
                <button className="transition-transform">
                    <IoIosArrowDropdown className="text-primary text-lg sm:text-xl sm:mt-[2px]" />
                </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" variant="flat">
                <DropdownItem key="logout" className="text-primary">
                    <button onClick={() => dispatch(logout())} className="font-semibold">Logout</button>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
