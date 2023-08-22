/* eslint-disable @typescript-eslint/no-explicit-any */
import Title from '../../../../components/Title'
import Card from './Card'

export default function Today() {
  return (
    <div className='flex flex-col gap-10 mb-10'>
      <Title text="today's deals" />
      <div className='data'>
        <Card />
      </div>
    </div>
  )
}
