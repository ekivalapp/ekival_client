export default function RequestFormModal() {
  return (
    <>
      <div
        role="presentation"
        className="MuiModal-root delegateModal__modal css-8ndowl transaction-form"
      >
        <div
          aria-hidden="true"
          className="MuiBackdrop-root css-919eu4"
          style={{
            opacity: 1,
            transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}
        ></div>
        <div data-test="sentinelStart"></div>
        <div className="delegateModal__spacer">
          <div className="delegateModal__container ">
            <button className="close">
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
            <div className="delegateModal__banner d-flex justify-content-center align-items-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALZJREFUWEdjbJ516j8DEvi1XxOZy8DmeB2FTyqHkHmMow4YDYHREBjwEKiN/IxSDhDK5zKpz/EqeTJbkpARKPKMow4Y8BCYue8WShpAj0P0ukBMRQBvHL+68wFFHr0uQE9DjKMOGPAQIFQQoccZoXxOSD16miLYHiBkIHqKJKR+1AGjITAaAgRDAD1bEWrXU6oeoxyg1EBSHTzqAIwmGXpRil6/k9TgY2BgQG8/oNclow4Y8BAAACmeNShnUhH7AAAAAElFTkSuQmCC"
                alt="Delegate Banner"
              />
              <h2>Fund the Ekival Contract</h2>
            </div>
            <div className="delegateModal__body container p-4 pt-2 m-0">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label className="fw-semibold form-label">REGION</label>
                    <select
                      placeholder="Select the region"
                      className="form-select"
                    >
                      <option className="py-1 rounded-none"></option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label className="fw-semibold form-label">
                      PAYMENT METHOD
                    </label>
                    <select className="form-select">
                      <option className="py-1 rounded-none">cash</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fw-semibold form-label">
                      VALIDITY IN DAYS
                    </label>
                    <div className="input-group">
                      <input
                        placeholder="Validity in days"
                        className="form-control"
                      />
                      <span className="input-group-text">/days</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fw-semibold form-label">
                      MINIMUM AMOUNT (USD)
                    </label>
                    <div className="input-group">
                      <input
                        placeholder="Minimum amount"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="divider line one-line fw-semibold text-xs">
                    CONTACT INFOS
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="fw-semibold form-label">NAME</label>
                    <div className="input-group">
                      <input
                        placeholder="Contact name"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="fw-semibold form-label">EMAIL</label>
                    <div className="input-group">
                      <input
                        placeholder="Contact email"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="fw-semibold form-label">NAME</label>
                    <div className="input-group">
                      <input
                        placeholder="Contact name"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="divider line one-line fw-semibold text-xs">
                    AMOUNT TO SEND
                  </p>
                  <div className="native-transaction__from">
                    <div className="native-transaction__input-container m-0">
                      <input
                        name="amountInUsd"
                        type="number"
                        placeholder="0.0"
                        min="1"
                        max="1000"
                      />
                      <div className="asset-picker__container">
                        <button className="asset-picker__select-btn">
                          <span>USD</span>
                        </button>
                      </div>
                    </div>
                    <span className="invalid-feedback">
                      That amount is not valid.
                    </span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <button className="optimism-button__container m-0">
                    Lock
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="optimism-button__container optimism-button__secondary m-0">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
