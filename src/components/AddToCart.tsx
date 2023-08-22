import { LiaCartPlusSolid } from 'react-icons/lia'
import { BsCartCheck } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

export default function AddToCart() {
  const [added, setAdded] = useState(false)
  return (
    <button
      type='button'
      className={twMerge(
        'btn-circle btn-neutral duration-600 lg:btn-lg flex justify-center items-center absolute right-0 top-0 translate-x-1/2 -translate-y-1/2',
        added ? 'btn-success' : ''
      )}
      onClick={() => {
        setAdded(!added)
      }}
    >
      {added ? (
        <BsCartCheck
          size={'30px'}
          className={'animate__animated animate__rubberBand'}
        />
      ) : (
        <LiaCartPlusSolid size={'30px'} />
      )}
    </button>
  )
}
