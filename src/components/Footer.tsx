import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between container mx-auto border border-gray-100 p-4 rounded-xl">
        <div className="my-10">
          <img src={Logo} alt="" className="mb-4" />
          <p className="my-4 text-slate-400">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <span className="mr-4 ">GitHub</span>
          <span className="m-4">Twitter</span>
          <span className="ml-4">Linkedin</span>
        </div>
        <div className="my-10">
          <h1 className="my-4 font-bold text-slate-600">PRODUCT</h1>
          <h3 className="my-4 text-slate-400">Home</h3>
          <h3 className="my-4 text-slate-400">Technologies</h3>
          <h3 className="text-slate-400">Projects</h3>
        </div>
        <div className="my-10">
          <h1 className="m-4 font-bold text-slate-600">COMPANY</h1>
          <h3 className="m-4 text-slate-400">About</h3>
          <h3 className="m-4 text-slate-400">Contact</h3>
          <h3 className="text-slate-400 m-4">Careers</h3>
        </div>
        <div className="my-10">
          <h1 className="my-4 font-bold text-slate-600">LEGAL</h1>
          <h3 className="my-4 text-slate-400">Privacy Policy</h3>
          <h3 className="text-slate-400">Terms of Service</h3>
          <h3></h3>
        </div>
      </div>
      <div className="flex justify-between container mx-auto m-10">
        <div className="text-slate-400">&copy; 2026 Dev Stack. All rights reserved.</div>
        <div>
            <span className="text-slate-400 mr-4">Privacy</span>
            <span className="text-slate-400">Terms</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
