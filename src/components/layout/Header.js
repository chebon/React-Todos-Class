import React from "react";


const Header = () => {
    const headerStyle = {
        backgroundColor: "#678c89",
        color: "#fff",
        padding: "10px 15px"
    };
    return (
        <header>
            <h1 style={headerStyle}>
                Simple Todo App</h1>
        </header>
    );
};


export default Header;