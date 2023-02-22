
export const Black = ({size = 'sm', children}) => {
  if (size === 'sm') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 text-black`}>
        {children}
      </svg>
  
    )
  }

  if (size === 'md') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-10 h-10 text-black`}>
        {children}
      </svg>
  
    )
  }

  if (size === 'lg') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-16 h-16 text-black`}>
        {children}
      </svg>
  
    )
  }

  if (size === 'xl') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-20 h-20 text-black`}>
        {children}
      </svg>
  
    )
  }
}
