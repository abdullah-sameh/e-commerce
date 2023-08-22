import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { RiHeart2Line, RiShoppingCart2Line, RiUserLine } from 'react-icons/ri'

export default function MainNav() {
  return (
    <div className='container flex items-center justify-between py-4 gap-10'>
      <div className='start'>
        <Link to={'/'}>ecommerce</Link>
      </div>
      <div className='center flex-1'>
        <SearchBar />
      </div>
      <div className='end flex gap-1 lg:gap-2'>
        <button className='btn btn-sm lg:btn-md capitalize'>
          <RiHeart2Line className='h-[15px] w-[15px] lg:h-[25px] lg:w-[25px]' />
          <span className='hidden lg:inline'>wish list</span>
        </button>
        <button className='btn btn-sm lg:btn-md capitalize'>
          <RiShoppingCart2Line className='h-[15px] w-[15px] lg:h-[25px] lg:w-[25px]' />
          <span className='hidden lg:inline'>cart</span>
        </button>
        <button className='btn btn-sm lg:btn-md capitalize'>
          <RiUserLine className='h-[15px] w-[15px] lg:h-[25px] lg:w-[25px]' />
          <span className='hidden lg:inline'>account</span>
        </button>
      </div>
    </div>
  )
}
