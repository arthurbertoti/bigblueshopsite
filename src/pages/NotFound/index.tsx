import { useNavigate } from "react-router-dom"
export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>404 - Página não encontrada</h1>
            <button onClick={() => navigate(-1)}>
                {"<"}
            </button>
        </div>
    )
}