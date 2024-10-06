import { NavLink } from 'react-router-dom';
import {assets} from '../assets/assets';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img  src={assets.logo} alt=''/>

      <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>
        <NavLink className='flex flex-col items-center gap-1' >
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>

        </NavLink>

      </ul>
    </div>
  )
}

export default Navbar
