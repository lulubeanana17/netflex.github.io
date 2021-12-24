import { useParams, Navigate } from "react-router-dom";

function Interchange() {
    let { id } = useParams();
    return (
        <div>
            {id === 0 ? (
                <Navigate to={`/`}></Navigate>
            ) : (
                <Navigate to={`/movie/${id}`}></Navigate>
            )}
        </div>
    )
}

export default Interchange;