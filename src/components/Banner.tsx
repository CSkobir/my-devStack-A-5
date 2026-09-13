import Hero from "../assets/banner-stack.png"
const Banner = () => {
  return (
   <section className=" my-10">
     <div className=" flex justify-between container mx-auto items-center">
      <div className="p-4">
        <h1 className="font-bold text-5xl mb-8 ">Build Your Ideal <br /><span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h1>
        <p className="mb-8 text-slate-400">
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your <br />
           next project.
        </p>
        <button className="btn  bg-gradient-to-r from-orange-500 to-pink-600 border-0 rounded-2xl ">Explore Technologies</button>
        <button className="btn rounded-2xl ml-4">
          Learn More
        </button>
      </div>
      <div>
        <img src={Hero} alt="" />
      </div>
    </div>
   </section>
  );
};

export default Banner;
