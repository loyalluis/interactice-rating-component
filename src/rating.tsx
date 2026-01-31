import "./Rating.css";
import StarIcon from "./images/icon-star.svg";

function Rating({
  ratingData,
  ChangeRatingData,
}: {
  ratingData: string;
  ChangeRatingData: any;
}) {
  function SubmitRating() {
    if (ratingData !== "none") {
      document.getElementById("pageone")!.style.display = "none";
      document.getElementById("pagetwo")!.style.display = "block";
      document.getElementById("errormessage")!.style.top = "-40px";
    } else {
      document.getElementById("errormessage")!.style.top = "0%";
    }
  }
  return (
    <div className="header" id="pageone">
      <div className="staricon">
        <img src={StarIcon} alt="Star Icon" />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratingbuttons">
        <input
          type="radio"
          name="rating"
          className="1"
          id="1"
          onClick={ChangeRatingData}
        />
        <label
          htmlFor="1"
          id="1"
          className={ratingData == "1" ? "ratingbutton active" : "ratingbutton"}
        >
          1
        </label>
        <input
          type="radio"
          name="rating"
          className="2"
          id="2"
          onClick={ChangeRatingData}
        />
        <label
          htmlFor="2"
          id="2"
          className={ratingData == "2" ? "ratingbutton active" : "ratingbutton"}
        >
          2
        </label>
        <input
          type="radio"
          name="rating"
          className="3"
          id="3"
          onClick={ChangeRatingData}
        />
        <label
          htmlFor="3"
          id="3"
          className={ratingData == "3" ? "ratingbutton active" : "ratingbutton"}
        >
          3
        </label>
        <input
          type="radio"
          name="rating"
          className="4"
          id="4"
          onClick={ChangeRatingData}
        />
        <label
          htmlFor="4"
          id="4"
          className={ratingData == "4" ? "ratingbutton active" : "ratingbutton"}
        >
          4
        </label>
        <input
          type="radio"
          name="rating"
          className="5"
          id="5"
          onClick={ChangeRatingData}
        />
        <label
          htmlFor="5"
          id="5"
          className={ratingData == "5" ? "ratingbutton active" : "ratingbutton"}
        >
          5
        </label>
      </div>
      <button className="submitbutton" onClick={SubmitRating}>
        Submit
      </button>
    </div>
  );
}

export default Rating;
