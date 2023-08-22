import AddToCart from '../../../../components/AddToCart'
import DiscountTime from '../../../../components/DiscountTime'
import Rating from '../../../../components/Rating'

export default function Card() {
  return (
    <div className='shadow-xl rounded-lg flex items-center gap-5 w-fit p-5 relative border'>
      <div className='img-container border w-40 h-40'>
        <img src='' alt='' />
      </div>
      <div className='content flex flex-col gap-3'>
        <h4 className='capitalize text-2xl font-bold'>iPhone 14 pro max</h4>
        <p className='text-lg text-gray-500'>(6GB RAM+256GB Storage)</p>
        <div className='price flex gap-2'>
          <p className='text-blue-400 text-2xl font-bold'>$900</p>
          <p className='text-gray-500 text-xl line-through'>$1000</p>
        </div>

        <Rating numStar={4} numReview={425} />

        <DiscountTime days={4} from={new Date(2023, 7, 22)} />

        <AddToCart />
      </div>
    </div>
  )
}
