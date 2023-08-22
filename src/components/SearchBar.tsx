import Select from 'react-select'
import { customStyles } from './general'
import { StylesConfig } from 'react-select'

export default function SearchBar() {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
  ]
  const customOne: StylesConfig = {
    ...customStyles,
    control: baseStyles => ({
      baseStyles,
      ...baseStyles,
      '--tw-border-opacity': 0.2,
      borderColor: 'hsl(var(--bc) / var(--tw-border-opacity)) ',
      outline: 'none',
      boxShadow: 'none',
      padding: '2px',
      borderRadius: 'none',
      minHeight: 'auto',
      height: '100%',
      minWidth: 'max-content',
      '&:hover': {
        outline: 'none',
      },
      borderWidth: '0',
      borderRightWidth: '1px',
      borderTopLeftRadius: '99px',
      borderBottomLeftRadius: '99px',
    }),
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        console.log('search words')
      }}
      className='border-2 rounded-full border-warning hidden lg:grid'
      style={{ gridTemplateColumns: 'auto 1fr auto' }}
    >
      <Select styles={customOne} value={options[0]} options={options} />
      <input
        type='text'
        placeholder='apple phone...'
        className='input max-w-xs rounded-none'
      />
      <button
        type='submit'
        className='btn btn-warning text-white rounded-l-none rounded-r-full'
      >
        search
      </button>
    </form>
  )
}
