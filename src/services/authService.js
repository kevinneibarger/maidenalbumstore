
export async function login(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
    };

    console.log(authDetail);
    console.log(requestOptions);
    console.log(" ^^^^ REQUEST OPTIONS ^^^^^^");
    
    const response = await fetch(`${process.env.REACT_APP_HOST}/users`, requestOptions);
    if (!response.ok) {
        throw {message: response.statusText, status: response.status}; //eslint-disable-line
    }

    const data = await response.json();
    console.log(">> DATA When logging in! <<");
    console.log(data);

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("imid", JSON.stringify(data.user.id));
    }

    return data;
}

export async function register(authDetail) {

    const requestOptions = {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/users`, requestOptions);
    if (!response.ok) {
        throw {message: response.statusText, status: response.status}; //eslint-disable-line
    }
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("imid", JSON.stringify(data.user.id));
    }

    return data;
}

export function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("imid");
}