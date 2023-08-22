import { Link } from 'react-router-dom'

export default function Title({
  text,
  to = '/',
}: {
  text: string
  to?: string
}) {
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-2xl md:text-5xl font-bold capitalize'>{text}</h2>
      <Link to={to} className='text-blue-500 capitalize text-md md:text-xl'>
        view more
      </Link>
    </div>
  )
}
