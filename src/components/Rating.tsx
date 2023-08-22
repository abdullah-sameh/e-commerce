import { RiStarFill } from 'react-icons/ri'

export default function Rating({
  numStar,
  numReview,
}: {
  numStar: number
  numReview: number
}) {
  return (
    <div className='rating'>
      {[...Array(numStar)].map((_, i) => (
        <RiStarFill key={i} className='text-warning h-[25px] w-[25px]' />
      ))}
      {[...Array(5 - numStar)].map((_, i) => (
        <RiStarFill key={i} className='text-gray-300 h-[25px] w-[25px]' />
      ))}
      <p className='pl-2 font-bold text-xl'>({numReview})</p>
    </div>
  )
}
