import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

export default function fireErrorAlert(message) {
    MySwal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: message || "Please try again later.",
    });
}