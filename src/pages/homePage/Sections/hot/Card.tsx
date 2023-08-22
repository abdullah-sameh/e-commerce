import { RiStarFill } from 'react-icons/ri'
import AddToCart from '../../../../components/AddToCart'

export default function Card() {
  return (
    <div className='relative border rounded-lg'>
      <AddToCart />

      <div className='img-container rounded-t-lg border'>
        <img src='' alt='' className='min-h-[250px]' />
      </div>

      <div className='content px-5 py-7 flex flex-col gap-4'>
        <header className='flex justify-between font-bold text-2xl'>
          <span>Hagibis USB C Hub</span>
          <span>$245</span>
        </header>

        <p className='two-line-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos
          consequuntur animi minima cum sequi sapiente est nihil neque commodi.
        </p>

        <footer className='flex gap-3 capitalize text-xl'>
          <span className='text-blue-400'>225 sold</span>
          <div className='flex items-center gap-1'>
            <RiStarFill className='text-warning' />
            <span>4.5</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
