export default function HomeAndOutDoor() {
  return (
    <div className='flex rounded-md mb-[50px] overflow-hidden'>
      <div className='img-container grid bg-black pl-8 bg-opacity-30 content-center gap-5'>
        <span className='font-bold text-4xl text-white'>
          Home and <p>Outdoor</p>
        </span>
        <button
          type='button'
          className='btn btn-warning rounded-full w-fit btn-md text-xl font-normal capitalize text-white px-5'
        >
          shop now
        </button>
      </div>
      <div className='content flex-1 grid grid-cols-4'>
        <div className='grid items-center justify-center text-center border'>
          <img src='' alt='' className='w-[150px] h-[150px]' />
          <span>leisure chair</span>
        </div>
        <div className='grid items-center justify-center text-center border'>
          <img src='' alt='' className='w-[150px] h-[150px]' />
          <span>leisure chair</span>
        </div>
        <div className='grid items-center justify-center text-center border'>
          <img src='' alt='' className='w-[150px] h-[150px]' />
          <span>leisure chair</span>
        </div>
        <div className='grid items-center justify-center text-center border'>
          <img src='' alt='' className='w-[150px] h-[150px]' />
          <span>leisure chair</span>
        </div>
        <div className='grid items-center justify-center text-center border'>
          <img src='' alt='' className='w-[150px] h-[150px]' />
          <span>leisure chair</span>
        </div>
      </div>
    </div>
  )
}
