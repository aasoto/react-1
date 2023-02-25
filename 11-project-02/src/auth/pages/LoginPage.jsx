
export const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-blue-300 to-transparent">
      <div className="bg-white rounded-md shadow-md py-5">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="w-72 px-10 pb-4 flex justify-center items-center border-b border-gray-400">
            <h1 className="text-2xl font-bold text-black">Iniciar sesión</h1>
          </div>
          <form className="px-5 flex flex-col gap-5 justify-center items-center">
            <input 
              type="email" 
              className="border border-gray-400 rounded-md px-5 py-2 w-72 placeholder:text-gray-400"
              placeholder="Correo electronico"
            />
            <input 
              type="password" 
              className="border border-gray-400 rounded-md px-5 py-2 w-72 placeholder:text-gray-400"
              placeholder="Contraseña"
            />
            <hr className="border[0.5px] border-gray-400 w-72"/>
            <button type="submit" className="bg-black text-white font-bold w-72 px-5 py-2 rounded-md">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
