import { Link } from "react-router-dom"
import "../styles/navbar.css"

export default function NavBar() {

    return (
    <>
    <h1 className="title"> Puppy Bowl </h1>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Add New Player</Link>
    </nav>
    </>
    )
}