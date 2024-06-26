import {DefaultLayout} from "../layout/DefaultLayout.jsx";
import {useForm} from "../hooks/useForm.js";
import {useAuth} from "../auth/AuthProvider.jsx";
import {Navigate, useNavigate} from "react-router-dom";
import {API_URL} from "../auth/constants.js";

export const Login = () => {
    const initialForm = {seller: '', user: '', password: ''};
    const {formValues, seller, user, password, inputOnchange} = useForm(initialForm);
    const [errorResponse, setErrorResponse] = useState();
    const goTo = useNavigate()
    const auth = useAuth();
    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard"/>
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(seller, user, password);
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({seller, user, password})
            });
            if (response.ok) {
                const data = await response.json();
                console.log('login success', data);
                // save token
                goTo('/dashboard');

            } else {
                console.log('something was wrong login fail');
                const data = await response.json();
                console.log(data);
                setErrorResponse(data);
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
                {errorResponse && <div className="alert alert-danger" role="alert">   {errorResponse.message} </div>}
                <div className="mb-3">
                    <label htmlFor="seller" className="form-label">Fornecedor</label>
                    <input type="text"
                           className="form-control"
                           name="seller"
                           value={seller}
                           onChange={inputOnchange}
                           placeholder="Ex:123456"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="user" className="form-label">Utilizador</label>
                    <input type="text"
                           className="form-control"
                           name="user"
                           value={user}
                           onChange={inputOnchange}
                           placeholder="Ex:123456789012345"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password"
                           className="form-control"
                           name="password"
                           value={password}
                           onChange={inputOnchange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </DefaultLayout>
    )
}