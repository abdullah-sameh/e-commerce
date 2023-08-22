import Categories from './Sections/Categories'
import Offer from './Sections/Offer'
import Hot from './Sections/hot/Hot'
import Popular from './Sections/Popular'
import Today from './Sections/today/Today'
import HomeAndOutDoor from './Sections/HomeAndOutDoor'

export default function HomePage() {
  return (
    <div className='container mt-10 flex flex-col gap-[50px]'>
      <Categories />
      <Today />
      <Hot />
      <Offer />
      <Popular />
      <HomeAndOutDoor />
    </div>
  )
}
