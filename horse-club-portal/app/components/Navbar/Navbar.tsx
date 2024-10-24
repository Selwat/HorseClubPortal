'use client';
import MenuIcon from '@rsuite/icons/Menu';


const Navbar =() =>{
    return (
        <div className="flex w-full h-[70px] bg-red-100">
            <div className="md:hidden">
                <MenuIcon />
            </div>
            <div className="hidden md:flex">
                123
            </div>
        </div>
    )
}

export default Navbar