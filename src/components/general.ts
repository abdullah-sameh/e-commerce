import { StylesConfig, ThemeConfig } from 'react-select'

export const customStyles: StylesConfig = {
  control: baseStyles => ({
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
  }),
  option: base =>
    base.color === 'hsl(0, 0%, 80%)'
      ? {
          ...base,
          color: 'white',
          backgroundColor: 'red',
          cursor: 'not-allowed',
        }
      : base,
  multiValue(base) {
    return {
      ...base,
      backgroundColor: 'hsl(var(--bc)/1)',
      color: 'hsl(var(--b1)/1)',
    }
  },
  multiValueLabel(base) {
    return { ...base, color: 'hsl(var(--b1)/1)' }
  },
}

export const customTheme: ThemeConfig = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: 'hsl(var(--bc) / 0.1)',
    neutral0: 'hsl(var(--b1) / var(--tw-bg-opacity, 1))',
    neutral80: 'hsl(var(--bc) / var(--tw-text-opacity, 1))',
  },
})
