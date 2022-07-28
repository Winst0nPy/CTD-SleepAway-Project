import Swal from "sweetalert2";

export const validationDate = (startDate, endDate) => {
    return startDate === endDate ? Swal.fire({
      title: "Debes seleccionar una fecha de inicio y una de fin",
      icon: "error",
      confirmButtonText: "Ok"
    }) : false;
};
export const validationHours = (horario) => {
    return horario === "" ? Swal.fire({
      title: "Debes seleccionar una hora de llegada dentro del rango del Check-in proporcionado por el alojamiento",
      icon: "error",
      confirmButtonText: "Ok"
    }) : false;
};

export const handleBookingResponse = (response, navigate, product) =>
    response.status === 201
        ? navigate(`/successful?prevPath=/product/${product.id}/booking`)
        : console.log("error");