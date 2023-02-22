import { Black, White } from "./colors"


export const Icon = ({size = 'sm', color = 'black', children}) => {

  if (color === 'black') return <Black size={size}>{children}</Black>
  if (color === 'white') return <White size={size}>{children}</White>

}
