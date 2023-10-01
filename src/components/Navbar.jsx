const Navbar = () => {
  return (
    <>
    <div className="flex max-w-[1600px] w-full mx-auto justify-between items-center p-4">
        <ul className="flex items-center gap-6 text-white">
            <li className="text-2xl">1Password</li>
            <li className="text-xl hidden md:block">Product</li>
            <li className="text-xl hidden md:block">Resources</li>
            <li className="text-xl hidden md:block">Support</li>
            <li className="text-xl hidden md:block">Pricing</li>
        </ul>
        <ul className="flex items-center gap-6 text-xl text-white">
            <li className="hidden md:block">Sign in</li>
            <li className="hidden md:block">Talk to sales</li>
            <button className="text-blue-500 bg-white text-md py-1 px-2 md:py-2 md:px-4 border rounded-full">Try 1Password Free</button>
        </ul>
    </div>
    </>
  )
}

export default Navbar