import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";

const PricingPromise = fetch('PricingData.json').then(res => res.json());

function App() {
  return (
    <>
      <header className="max-w-[1440px] mx-auto">
        <Navbar></Navbar>
      </header>
      <p className="border-b-2 border-gray-200"></p>
      <main className="max-w-7xl mx-auto mt-10 md:mt-20"> 
        <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
          <PricingOptions PricingPromise = {PricingPromise}></PricingOptions>
        </Suspense>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
