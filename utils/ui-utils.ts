import Swal from "sweetalert2";

export const showSwalMessage = (
  title = "Confirmation",
  text = "",
  icon = "success"
) => {
  if (text !== "") {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Swal.fire({
      title,
      text,
      icon,
    });
  }
};

type DialogMessageParams = {
  title?: string;
  message?: string;
  showCancel?: boolean;
  yes?: string;
  no?: string;
};

export const showDialogMessage = (
  callback: Function,
  params: DialogMessageParams = {}
) => {
  return Swal.fire({
    title: params.title || "Effectué",
    text: params.message || "Message .?",
    icon: "question",
    showCancelButton: params.showCancel || false,
    confirmButtonText: params.yes || "OK!",
    cancelButtonText: params.no || "Non!",
  }).then(
    function (isConfirm) {
      callback(isConfirm.value);
    },
    () => {}
  );
};
