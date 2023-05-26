import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Title from "./Title";
import './style.css';

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />

        </>
    )
};

