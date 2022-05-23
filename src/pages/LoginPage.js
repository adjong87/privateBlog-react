import React from 'react';

function LoginPage({isAuthenticated, toggleIsAuthenticated}) {

    function handleClick() {
        toggleIsAuthenticated(!isAuthenticated)
    }

    return (
        <>
            <h1>{isAuthenticated === true ? "Je bent nu ingelogd" : "Je bent momenteel niet ingelogd"}</h1>

            <button type="button" onClick={handleClick}>
                {isAuthenticated === true ? "Uitloggen" : "Inloggen"}
            </button>

            <p>{isAuthenticated === true ? "Gegevens voor ingelogde menschen" : "Je mag dit niet zien want je bent niet ingelogd"}</p>
        </>

    );
}

export default LoginPage;