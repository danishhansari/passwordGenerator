const Banner = () => {
  return <>
    <div className="hidden md:flex items-center md:flex-row md:text-left md:justify-between max-w-[800px] mx-2 md:mx-auto bg-[#c2eaff] md:px-8 py-4 md:py-12 rounded my-12 flex-col justify-center text-center gap-4">
        <div>
            <h2 className="text-2xl leading-6">Your passwords, wherever you are</h2>
            <p className="leading-4 my-2">Store your new password in 1Password so you can fill it from any device.</p>
        </div>
        <button className="bg-[#0572ec] text-white px-4 py-2 font-normal rounded-full">
            Try FREE for 14 days
        </button>
    </div>

    <div className="mx-auto text-white">
        <h1 className="text-2xl md:text-4xl w-full md:w-[40%] mx-auto text-center">Need a password? Try the 1Password Strong Password Generator</h1>
        <p className="text-center mt-2 text-sm mx-auto md:text-xl">Generate secure, random passwords to stay safe online.</p>
    </div>
  </>;
};

export default Banner;
