import {useState} from 'react';
import { useForm } from 'react-hook-form';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import {registerUser} from '../features/auth/Auth';

export default function Register() {
  const [error, setError] = useState(null);
  const {
    register, handleSubmit, formState: { errors, isSubmitting }, watch,
  } = useForm();
  const onSubmit = async ({email, password, firstName, lastName}) => {
    try {
      const user = await registerUser(email, password, firstName, lastName);
    } catch (error) {
      alert(error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Registro de Usuario</h3>
            <p className="mt-1 mb-4 text-sm text-gray-600">
              Completa los datos del formulario para registrarte.
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-500 p-4" role="alert">
              <p>
                <InformationCircleIcon className="h-6 w-6 text-blue-500 inline" />
                {' '}
                Todos los campos son requeridos.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      autoFocus
                      {...register('firstName', { required: 'El campo es requerido.', maxLength: { value: 100, message: 'El campo excede la longitud máxima.' } })}
                      aria-invalid={errors.firstName ? 'true' : 'false'}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs italic mt-2">{errors.firstName?.message}</p>}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="lastName"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register('lastName', { required: 'El campo es requerido.', maxLength: { value: 100, message: 'El campo excede la longitud máxima.' } })}
                      aria-invalid={errors.lastName ? 'true' : 'false'}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs italic mt-2">{errors.lastName?.message}</p>}
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register('email', { required: 'El campo es requerido.', pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Correo electrónico no válido.' }, maxLength: { value: 255, message: 'El campo excede la longitud máxima.' } })}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email?.message}</p>}
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register('password', { required: 'El campo es requerido.', minLength: { value: 8, message: 'El campo debe ser de al menos 8 caracteres.' } })}
                      aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    <p className="text-gray text-xs normal">Contraseña debe tener al menos ocho caracteres.</p>
                    {errors.password && <p className="text-red-500 text-xs italic mt-2">{errors.password?.message}</p>}
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Confirmar Contraseña
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register('password', { required: 'El campo es requerido.', validate: (value) => value === watch("password") })}
                      aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    {errors.password && <p className="text-red-500 text-xs italic mt-2">{errors.password?.message}</p>}
                  </div>
                </div>
              </div>

              {error && <div className="bg-white px-4y-3 sm:px-6">
                <div className="bg-red-100 border-l-4 border-red-500 text-red-500 p-4" role="alert">
                  <p>
                    <InformationCircleIcon className="h-6 w-6 text-red-500 inline" />
                    {' '}
                    {error}
                  </p>
                </div>
              </div>}

              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  disabled={isSubmitting}
                >
                  Registro
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
