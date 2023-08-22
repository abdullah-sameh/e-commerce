import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from 'react-icons/ri'
import appleStore from '../assets/appleStore.png'
import googleStore from '../assets/googlePlay.png'

export default function Footer() {
  return (
    <div className='bg-blue-500'>
      <div className='container text-black'>
        <div className='grid'>
          <div className='flex justify-between py-14 border-b-[1px] border-black border-opacity-10'>
            <div className='grid gap-5'>
              <span className='font-bold text-xl pb-2'>Shopping with us</span>
              <span className='link link-hover'>Making payments</span>
              <span className='link link-hover'>Delivery options</span>
              <span className='link link-hover'>Buyer protections</span>
              <span className='link link-hover'>Shopping with us</span>
              <span className='link link-hover'>Shopping with us</span>
            </div>
            <div className='grid gap-5'>
              <span className='font-bold text-xl pb-2'>Consumer Services</span>
              <span className='link link-hover'>Help Center</span>
              <span className='link link-hover'>Terms and Conditions</span>
              <span className='link link-hover'>Consumers (Transactions)</span>
              <span className='link link-hover'>Take our feedback servey</span>
              <span className='link link-hover'>
                Transaction Services Agreement
              </span>
            </div>
            <div className='grid gap-5'>
              <span className='font-bold text-xl pb-2'>
                Collaborate with us
              </span>
              <span className='link link-hover'>Partnerships</span>
              <span className='link link-hover'>Affiliate program</span>
              <span className='link link-hover'>DS Center</span>
              <span className='link link-hover'>Take our feedback survey</span>
              <span className='link link-hover'>
                Transaction Services Agreement
              </span>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-bold text-xl pb-5'>Download our App</span>
              <div className='img-container cursor-pointer h-fit'>
                <img
                  src={appleStore}
                  alt=''
                  className='rounded-lg w-[200px] pointer-events-none select-none object-cover'
                />
              </div>
              <div className='img-container cursor-pointer h-fit'>
                <img
                  src={googleStore}
                  alt=''
                  className='rounded-lg w-[200px] pointer-events-none select-none object-cover'
                />
              </div>
            </div>
          </div>

          <div className='flex py-7 justify-between items-center'>
            <span>Copyright ©2023 E-commerce Nation. All Rights Reserved.</span>
            <div className='flex gap-2'>
              <RiInstagramLine className='link link-hover hover:scale-110 duration-200 h-[35px] w-[35px]' />
              <RiFacebookCircleLine className='link link-hover hover:scale-110 duration-200 h-[35px] w-[35px]' />
              <RiTwitterLine className='link link-hover hover:scale-110 duration-200 h-[35px] w-[35px]' />
              <RiLinkedinBoxLine className='link link-hover hover:scale-110 duration-200 h-[35px] w-[35px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
