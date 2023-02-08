
export const AlertErrorAuth = ({show = false}) => {
  return (
    <div className={`w-full h-11 bg-red-200 border border-red-600 text-red-600 flex justify-center items-center ${show ? 'block' : 'hidden'}`}>
      <h4>The email and/or password are wrong</h4>
    </div>
  )
}
