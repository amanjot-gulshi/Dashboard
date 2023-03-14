import React from "react";

const year = new Date().getFullYear();

function Footer() {
    return (

        <footer className="footer" id="footer">
            <p>&copy;{year} Dashboard App</p>
        </footer>


    )
}

export default Footer; 