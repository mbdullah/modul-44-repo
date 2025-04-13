import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import StudentResult from "./Components/StudentResult/StudentResult";
import TripleData from "./Components/StudentResult/TripleData";
import axios from "axios";
import MarksData from "./Components/MarksData/MarksData";

const PricingPromise = fetch('PricingData.json').then(res => res.json());

const marksPromise = axios.get('MarksData.json')

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
        <StudentResult></StudentResult>
        <TripleData></TripleData>

        <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <MarksData marksPromise = {marksPromise}></MarksData>
        </Suspense>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
