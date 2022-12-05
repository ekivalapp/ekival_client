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
      // showCancelButton: false,
      // confirmButtonText: "OK!",
    });
  }
};
