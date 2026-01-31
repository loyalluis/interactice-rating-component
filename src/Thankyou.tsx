import "./Thankyou.css";
import ThankYouIllustration from "./images/illustration-thank-you.svg";

function Thankyou({ ratingData }: { ratingData: string }) {
  return (
    <>
      <div className="thankyoupage" id="pagetwo">
        <img src={ThankYouIllustration} alt="Thank You! Illustration" />
        <div className="result">
          <p>You selected {ratingData} out of 5</p>
        </div>

        <div className="textbox">
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </>
  );
}

export default Thankyou;
