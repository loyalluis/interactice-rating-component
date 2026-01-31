import "./App.css";
import { useState } from "react";
import Rating from "./rating.tsx";
import Thankyou from "./Thankyou.tsx";
import Footer from "./Footer.tsx";
import Error from "./Error.tsx";

function App() {
  const [ratingData, setRatingData] = useState("none");

  const ChangeRatingData = (e: React.MouseEvent<HTMLInputElement>) => {
    setRatingData(e.currentTarget.className);
  };

  return (
    <>
      <Error />
      <div className="maincard">
        <Rating ratingData={ratingData} ChangeRatingData={ChangeRatingData} />
        <Thankyou ratingData={ratingData} />
      </div>
      <Footer />
    </>
  );
}

export default App;
