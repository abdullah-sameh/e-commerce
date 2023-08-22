import {
  RiComputerLine,
  RiFootballLine,
  RiPrinterLine,
  RiShirtLine,
  RiShoppingBagLine,
  RiToolsLine,
} from 'react-icons/ri'
import { PiDressLight, PiArrowRightThin } from 'react-icons/pi'
import { GiBigDiamondRing } from 'react-icons/gi'
import { LuArmchair } from 'react-icons/lu'

export default function Categories() {
  const catigories = [
    {
      icon: (className: string) => <RiShirtLine className={className} />,
      name: "men's fashion",
    },
    {
      icon: (className: string) => <PiDressLight className={className} />,
      name: "women's fashion",
    },
    {
      icon: (className: string) => <RiShoppingBagLine className={className} />,
      name: 'bags & shoes',
    },
    {
      icon: (className: string) => <GiBigDiamondRing className={className} />,
      name: 'jewelry & watches',
    },
    {
      icon: (className: string) => <RiPrinterLine className={className} />,
      name: 'consumer electronics',
    },
    {
      icon: (className: string) => <RiComputerLine className={className} />,
      name: 'computer, office & security',
    },
    {
      icon: (className: string) => <RiToolsLine className={className} />,
      name: 'tools & home improvement',
    },
    {
      icon: (className: string) => <LuArmchair className={className} />,
      name: 'home, pet & appliances',
    },
    {
      icon: (className: string) => <RiFootballLine className={className} />,
      name: 'outdoor fun & sports',
    },
  ]

  return (
    <div className='rounded-3xl border p-5 flex gap-5'>
      <div className='flex flex-col gap-5'>
        {catigories.map(catigory => (
          <div key={catigory.name} className='flex gap-3 items-center'>
            {catigory.icon('h-[20px] w-[20px] lg:h-[25px] lg:w-[25px]')}
            <span className='capitalize'>{catigory.name}</span>
          </div>
        ))}
      </div>

      <div className='flex-1 grid grid-cols-3 gap-5'>
        <div className='rounded-3xl border p-2 relative'>
          <span className='absolute bg-base-300 top-4 left-5 py-1 px-4 rounded-full font-bold text-lg'>
            Trending
          </span>
          <img src='' alt='' className='rounded-3xl bg-blue-500' />
        </div>

        <div className='flex flex-col justify-between'>
          <button className='btn btn-warning rounded-full text-white capitalize btn-lg font-normal'>
            <span>shop now</span>
            <PiArrowRightThin size={'30px'} />
          </button>
          <button className='btn btn-outline rounded-full btn-warning capitalize btn-lg text-black'>
            explore more products
          </button>
          <div className='img-container'>
            <img src='' alt='' className='rounded-full' />
          </div>
        </div>

        <div className='rounded-3xl border p-2'>
          <img src='' alt='' className='rounded-3xl bg-blue-500' />
        </div>
      </div>
    </div>
  )
}
