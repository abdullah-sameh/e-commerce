import { Link } from 'react-router-dom'
import { customStyles } from './general'
import Select, { StylesConfig } from 'react-select'
import { useState } from 'react'
import MenuBtn from './MenuBtn'
import { twMerge } from 'tailwind-merge'

export default function SubNav() {
  const customOne: StylesConfig = {
    ...customStyles,
    control: baseStyles => ({
      baseStyles,
      ...baseStyles,
      border: '0',
      outline: 'none',
      boxShadow: 'none',
      padding: '2px',
      borderRadius: 'none',
      minHeight: 'auto',
      height: '100%',
      minWidth: 'max-content',
      backgroundColor: 'transparent',
      '&:hover': {
        outline: 'none',
      },
    }),
    singleValue: base => ({
      ...base,
      color: 'white',
    }),
    menu: base => ({
      ...base,
      color: 'black',
    }),
  }
  const options = [
    { value: 'en', label: 'EN' },
    { value: 'ar', label: 'AR' },
  ]
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='bg-blue-900 text-white py-3 relative'>
      <div className='container flex justify-between'>
        <div className='one flex gap-10 items-center'>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className='capitalize flex lg:hidden items-center'
          >
            <MenuBtn showMenu={showMenu} />
            <span>all categories</span>
          </button>
          {/* for mobile users */}
          <div
            className={twMerge(
              `h-0 lg:hidden flex flex-col gap-3 items-center duration-100 absolute left-0 bottom-0 translate-y-full bg-blue-900 w-full`,
              showMenu ? 'h-auto' : ''
            )}
          >
            <Link to='/' className='capitalize'>
              <span>today's deals</span>
            </Link>
            <Link to='/' className='capitalize'>
              <span>hot offers</span>
            </Link>
            <Link to='/' className='capitalize'>
              <span>gift cards</span>
            </Link>
            <Link to='/' className='capitalize'>
              <span>menu items</span>
            </Link>
            <Link to='/' className='capitalize'>
              <span>help</span>
            </Link>
          </div>

          <div className='hidden lg:flex gap-7 items-center'>
            <Link to='/' className='capitalize'>
              <span>today's deals</span>
            </Link>
            <Link to='/' className='capitalize'>
              <span>hot offers</span>
            </Link>
            <Link to='/' className='capitalize'>
              <span>gift cards</span>
            </Link>
            <Link to='/' className='capitalize'>
              <span>menu items</span>
            </Link>
            <Link to='/' className='capitalize'>
              <span>help</span>
            </Link>
          </div>
        </div>
        <div className='two'>
          <Select
            styles={customOne}
            isSearchable={false}
            options={options}
            value={selectedOption}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={e => setSelectedOption(e as any)}
          />
        </div>
      </div>
    </div>
  )
}
