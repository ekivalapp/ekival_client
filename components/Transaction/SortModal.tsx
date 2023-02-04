import type { ModalTrigger } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function SortModal({
  closeModal,
}: {
  closeModal: ModalTrigger;
}) {
  return (
    <>
      <div role="presentation" className="MuiModal-root css-8ndowl">
        <div
          aria-hidden="true"
          className="MuiBackdrop-root css-919eu4"
          style={{
            opacity: 1,
            transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}
        ></div>
        <div data-test="sentinelStart"></div>
        <div className="sortModal__container animate__animated animate__zoomIn">
          <button onClick={() => closeModal(false)} className="close">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="xmark"
              className="svg-inline--fa fa-xmark"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z"
              ></path>
            </svg>
          </button>
          <h2>Sort By</h2>
          <div className="sortModal__radioGroup">
            <div>
              <input
                type="radio"
                id="weight"
                name="sort"
                value="weighted"
                checked={true}
              />
              <label>Date latest</label>
            </div>
            <div>
              <input type="radio" id="shuffle" name="sort" value="shuffle" />
              <label>Price</label>
            </div>
          </div>
          <div className="buttonWrapper">
            <button
              onClick={() => closeModal(false)}
              className="optimism-button__container optimism-button__secondary undefined"
            >
              Cancel
            </button>
            <button
              onClick={() => closeModal(false)}
              className="optimism-button__container undefined"
            >
              Apply &nbsp; &nbsp;
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </div>
        </div>
        <div data-test="sentinelEnd"></div>
      </div>
    </>
  );
}
