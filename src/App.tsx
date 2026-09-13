import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Techs from "./components/technology/Techs";
import type { Itech } from "./types/techType";
import Footer from "./components/Footer";

const techsPromise = async():Promise<Itech[]>=>{
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {

  return (
    <>
      
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2 className="font-bold flex justify-center items-center text-3xl text-red-400">Loading.....</h2>}>
        <Techs techsPromise={techsPromise()}></Techs>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
