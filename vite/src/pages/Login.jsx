
import { useForm } from "react-hook-form";
import { signIn } from "../features/auth/Auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InformationCircleIcon } from '@heroicons/react/24/solid';

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const onSubmit = async ({email, password}) => {
        try {
            const user = await signIn(email, password);
            navigate('/');
        } catch (error) {
            // Estoy devolviendo el mismo mensaje para ambos casos. Pienso que no debo dar pistas sobre cual
            // cual de las componentes de las credenciales esta fallando.
            const errors = {
                "auth/wrong-password": 'Credenciales Incorrectas.',
                "auth/invalid-email": 'Credenciales Incorrectas.',
            };

            setError(errors[error.code] || 'Ocurrió un error inesperado.');
        }
    }

    return (
        <div className="grid min-h-full place-items-center py-12 px-6 sm:py-12 lg:px-8">
            <h1 className="text-center text-2xl mb-8">
                Login
            </h1>
            <div className="overflow-hidden shadow sm:rounded-md w-1/2">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register('email', { required: 'El campo es requerido.', pattern: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Correo electrónico no válido.'}, maxLength: {value: 255, message: 'El campo excede la longitud máxima.'} })}
                                aria-invalid={errors.email ? 'true' : 'false'}
                            />
                            {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email?.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register('password', { required: 'El campo es requerido.'})}
                                aria-invalid={errors.password ? 'true' : 'false'}
                            />
                        </div>
                        {error && <div className="bg-white px-4y-3 sm:px-0">
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-500 p-4" role="alert">
                            <p>
                                <InformationCircleIcon className="h-6 w-6 text-red-500 inline" />
                                {' '}
                                {error}
                            </p>
                            </div>
                        </div>}
                        <button
                            type="submit"
                            className="mt-2 w-full inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
