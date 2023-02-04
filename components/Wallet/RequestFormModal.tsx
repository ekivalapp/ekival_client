import type { ModalTrigger, Region, TransactionRequest } from "../../types";
import { useForm } from "react-hook-form";
import useAxios from "axios-hooks";
import { useMemo, useState } from "react";
import { apiUrl } from "../../config/env";
import { useRate } from "../../hooks/useRate";
import { useTransaction } from "../../hooks/useTransaction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import type { SubmitHandler } from "react-hook-form";
import { showSwalMessage, showDialogMessage } from "./../../utils/ui-utils";

export default function RequestFormModal({
  closeModal,
}: {
  closeModal: ModalTrigger;
}) {
  const {
    watch,
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionRequest>({
    defaultValues: {
      currency: "USD",
      paymentMethod: "CASH",
      exchangeRate: 0,
    },
  });

  const [rate] = useRate();
  const { processing, submitTransaction } = useTransaction();

  const [{ data }] = useAxios(`${apiUrl}/regions`);

  const amountInAda = watch("amountInAda", 0);

  const regions = useMemo<Region[]>(() => data?.data || [], [data]);

  function updateAdaAmount({ target }: { target: Readonly<HTMLInputElement> }) {
    const val = parseFloat((Number.parseFloat(target.value) / rate).toFixed(3));
    setValue("amountInAda", val);
    setValue("exchangeRate", rate);
  }

  const submitForm: SubmitHandler<TransactionRequest> = async (
    formData: TransactionRequest
  ) => {
    try {
      const txHash = await submitTransaction(formData);

      console.log("txHash", txHash);

      showDialogMessage(
        () => {
          closeModal(false);
        },
        {
          title: "Your transaction have been locked to Ekival",
          message: `Hash: ${txHash}`,
        }
      );
    } catch (error) {
      console.log("error", error);
      showSwalMessage(
        "Transaction cancelled",
        "You have declined to sign the transaction !",
        "error"
      );
    }
  };

  return (
    <>
      <div
        role="presentation"
        className="MuiModal-root delegateModal__modal css-8ndowl transaction-form"
      >
        <div
          onClick={() => closeModal(false)}
          aria-hidden="true"
          className="MuiBackdrop-root css-919eu4"
          style={{
            opacity: 1,
            transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}
        ></div>
        <div data-test="sentinelStart"></div>
        <div className="delegateModal__spacer">
          <div className="delegateModal__container  animate__animated animate__zoomIn">
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
            <div className="delegateModal__banner d-flex justify-content-center align-items-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALZJREFUWEdjbJ516j8DEvi1XxOZy8DmeB2FTyqHkHmMow4YDYHREBjwEKiN/IxSDhDK5zKpz/EqeTJbkpARKPKMow4Y8BCYue8WShpAj0P0ukBMRQBvHL+68wFFHr0uQE9DjKMOGPAQIFQQoccZoXxOSD16miLYHiBkIHqKJKR+1AGjITAaAgRDAD1bEWrXU6oeoxyg1EBSHTzqAIwmGXpRil6/k9TgY2BgQG8/oNclow4Y8BAAACmeNShnUhH7AAAAAElFTkSuQmCC"
                alt="Delegate Banner"
              />
              <h2>Fund the Ekival Contract</h2>
            </div>
            <div className="delegateModal__body container p-4 pt-2 m-0">
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div className="form-group">
                      <label className="fw-semibold form-label">REGION</label>
                      <select
                        {...register("location", {
                          required: true,
                        })}
                        placeholder="Select the region"
                        className="form-select"
                      >
                        {regions.map((region, i) => {
                          return (
                            <option
                              key={i}
                              value={region.designation}
                              className="py-1 rounded-none"
                            >
                              {region.designation}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-group">
                      <label className="fw-semibold form-label">
                        PAYMENT METHOD
                      </label>
                      <select
                        {...register("paymentMethod", {
                          required: true,
                        })}
                        className="form-select"
                      >
                        <option value="CASH" className="py-1 rounded-none">
                          CASH
                        </option>
                      </select>
                      {errors.paymentMethod && (
                        <span className="invalid-feedback">
                          {errors.paymentMethod?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="fw-semibold form-label">
                        VALIDITY IN DAYS
                      </label>
                      <div className="input-group">
                        <input
                          {...register("validityInDays", {
                            required: true,
                          })}
                          placeholder="Validity in days"
                          type="number"
                          className={
                            errors.validityInDays
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                        />
                        <span className="input-group-text">/days</span>
                      </div>
                      {errors.validityInDays && (
                        <span className="invalid-feedback">
                          {errors.validityInDays?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="fw-semibold form-label">
                        MINIMUM AMOUNT (USD)
                      </label>
                      <div className="input-group">
                        <input
                          {...register("minimum", {
                            required: true,
                          })}
                          type="number"
                          placeholder="Minimum amount"
                          className={
                            errors.minimum
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                        />
                      </div>
                      {errors.minimum && (
                        <span className="invalid-feedback">
                          {errors.minimum?.message}
                        </span>
                      )}
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
                          {...register("contactName", {
                            required: true,
                          })}
                          placeholder="Contact name"
                          className={
                            errors.contactName
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                        />
                      </div>
                      {errors.contactName && (
                        <span className="invalid-feedback">
                          {errors.contactName?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="fw-semibold form-label">EMAIL</label>
                      <div className="input-group">
                        <input
                          {...register("contactEmail", {
                            required: true,
                          })}
                          placeholder="Contact email"
                          className={
                            errors.contactEmail
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                        />
                      </div>
                      {errors.contactEmail && (
                        <span className="invalid-feedback">
                          {errors.contactEmail?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="fw-semibold form-label">PHONE</label>
                      <div className="input-group">
                        <input
                          {...register("contactPhone", {
                            required: true,
                          })}
                          placeholder="Contact phone"
                          className={
                            errors.contactPhone
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                        />
                      </div>
                      {errors.contactPhone && (
                        <span className="invalid-feedback">
                          {errors.contactPhone?.message}
                        </span>
                      )}
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
                          {...register("amount", {
                            required: true,
                            onChange: updateAdaAmount,
                          })}
                          name="amount"
                          type="number"
                          placeholder="0.0"
                          min="1"
                          max="1000"
                          className={
                            errors.amount
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                        />
                        <div className="asset-picker__container">
                          <span className="asset-picker__select-btn">
                            {`${amountInAda} ADA`}
                          </span>
                        </div>
                      </div>
                      {errors.amount && (
                        <span className="invalid-feedback">
                          {errors.amount?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <button
                      type="submit"
                      className={
                        processing
                          ? "optimism-button__container m-0 disabled"
                          : "optimism-button__container m-0"
                      }
                      {...(processing && { disabled: true })}
                    >
                      {processing ? "Processing..." : "Lock"} &nbsp;
                      {processing && <FontAwesomeIcon icon={faSpinner} spin />}
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      onClick={() => closeModal(false)}
                      type="reset"
                      className="optimism-button__container optimism-button__secondary m-0"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
