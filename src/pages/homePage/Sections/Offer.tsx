export default function Offer() {
  return (
    <div className='bg-blue-400 rounded-md py-10 flex gap-10 justify-center'>
      <div className='img-container'>
        <img src='' alt='' className='w-[300px] h-[400px]' />
      </div>
      <div className='content max-w-3xl flex flex-col gap-10 justify-center'>
        <h2 className='capitalize text-xl'>limited offer</h2>
        <p className='text-[50px] font-bold'>
          30% off for perfume products only this Friday and get special gift
        </p>
        <button
          type='button'
          className='btn btn-warning w-fit rounded-full text-white capitalize btn-lg text-xl'
        >
          Shop Now
        </button>
      </div>
    </div>
  )
}
