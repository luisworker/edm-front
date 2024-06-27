import {DefaultLayout} from "../layout/DefaultLayout.jsx";
import {useForm} from "../hooks/useForm.js";
import {useAuth} from "../auth/AuthProvider.jsx";
import {Navigate, useNavigate} from "react-router-dom";
import {API_URL} from "../auth/constants.js";
import {useState} from "react";
import {dtoUserResponse} from "../dto/dtoUserResponse.js";

export const Login = () => {
    const initialForm = {seller: '', user: '', password: ''};
    const {formValues, seller, user, password, inputOnchange} = useForm(initialForm);
    const [errorResponse, setErrorResponse] = useState('');
    const goTo = useNavigate()
    const auth = useAuth();
    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard"/>
    }

    const fetchGetUser = async (accessToken) => {
        try {
            const response = await fetch(`${API_URL}/venLogin/1.0.1/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    idVendor: seller,
                    codUser: user,
                    currentPwd: password
                })

            })
            const data = await response.json()
            if (!response.ok) {
                const {error_description, error} = data;
                console.log(data, 'data');
                setErrorResponse(error);

            } else {
              auth.saveUserLogin(dtoUserResponse(data))
                console.log('finding userLogin',auth.getUserLogin())

            }



            // setUserLogin(data)
        } catch (error) {
            throw new Error(error);
        }
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const username = `${seller}#${user}`;

            const response = await fetch(`${API_URL}/oauth2/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'Authorization': 'Basic dzYxVzBpZXZQQ0d2anU4QnpGUlFPZjV1QVE4YTpyX3FYS0hRdzNGdVdvT2ZEdHk1aG9BbDVmZndh'
                },

                body:`grant_type=password&username=${username}&password=${password}&scope=token_public token_private`
            });
            if (response.ok) {
                const data = await response.json();
                console.log('login success', data);

                const {access_token, refresh_token} = data;
                if (access_token && refresh_token) {
                    auth.saveUser({accessToken:access_token, refreshToken:refresh_token});
                }
                await fetchGetUser(access_token);
                // save token
                goTo('/dashboard');

            } else {
                console.log('something was wrong login fail');
                const data = await response.json();
                console.log(data);
                const {error_description, error} = data;
                 error && setErrorResponse('credenciais inválidas');
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <DefaultLayout>
            <form className="w-50 max-w-xxl form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <h2>Login</h2>
                    <hr/>
                </div>
                {errorResponse && <div className="alert alert-danger" role="alert">   {errorResponse} </div>}
                <div className="mb-3">
                    <label htmlFor="seller" className="form-label">Fornecedor</label>
                    <input type="text"
                           className="form-control"
                           name="seller"
                           value={seller}
                           required={true}
                           onChange={inputOnchange}
                           placeholder="Ex:123456"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="user" className="form-label">Utilizador</label>
                    <input type="text"
                           className="form-control"
                           name="user"
                           required={true}
                           value={user}
                           onChange={inputOnchange}
                           placeholder="Ex:123456789012345"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password"
                           className="form-control"
                           name="password"
                           required={true}
                           value={password}
                           onChange={inputOnchange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </DefaultLayout>
    )
}