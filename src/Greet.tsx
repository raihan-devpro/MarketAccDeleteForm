

function Greet() {
  return (
    <div className="flex flex-col items-center justify-center  text-center">
      {/* Image */}
      <img
        src="/vite.svg" // Replace this with the path to your image
        alt="Benchbee Logo"
        className="w-32 h-32 mb-4"
      />
      {/* Message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to <span className="text-pink-600">Benchbee!!</span></h1>
      <p className="text-gray-600">Benchbee is collecting honey to serve you !! </p>
    </div>
  )
}

export default Greet