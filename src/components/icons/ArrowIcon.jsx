/* eslint-disable react/prop-types */
export const ArrowIcon = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-arrow-right ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 12l14 0' />
      <path d='M13 18l6 -6' />
      <path d='M13 6l6 6' />
    </svg>
  )
}
