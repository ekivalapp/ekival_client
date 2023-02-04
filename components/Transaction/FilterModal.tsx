import type { ModalTrigger } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function FilterModal({
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
        <div className="filterModal__container animate__animated animate__zoomIn">
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
          <h2>Apply filters to offers</h2>
          <div className="filterModalContainer__dropdownMenu">
            <h3>Location</h3>
            <div className="dropdownMenu__wrapper">
              <button className="selection">
                <span>All</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="chevron-down"
                  className="svg-inline--fa fa-chevron-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z"
                  ></path>
                </svg>
              </button>
              <ul className="dropdown">
                <li>
                  <input type="checkbox" id="Accessibility" />
                  <label>🌐 GOMA</label>
                </li>
                <li>
                  <input type="checkbox" id="TORONTO" />
                  <label>🌐 TORONTO</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="filterModalContainer__dropdownMenu">
            <h3>Transaction type</h3>
            <div className="dropdownMenu__wrapper">
              <button className="selection">
                <span>All</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="chevron-down"
                  className="svg-inline--fa fa-chevron-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z"
                  ></path>
                </svg>
              </button>
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
