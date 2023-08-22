import Title from '../../../components/Title'
import Card from './hot/Card'

export default function Popular() {
  return (
    <div className='flex flex-col gap-10 mb-10'>
      <Title text='popular items' />
      <div className='content px-10 md:px-0 grid gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
