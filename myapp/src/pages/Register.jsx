
function Register() {
    return (
        <div className="row">
            <div className="col">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <h2>Registro de Usuario</h2>
                    <hr />
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="first_name" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="first_name" name="first_name" placeholder="Tu nombre" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="last_name" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Tu apellido" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Tu email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Teléfono</label>
                                    <input type="text" className="form-control" id="phone" name="phone" placeholder="Tu teléfono" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Tu contraseña" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password_confirm" className="form-label">Confirmar Contraseña</label>
                                    <input type="password" className="form-control" id="password_confirm" name="password_confirm" placeholder="Confirma tu contraseña" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="acccept_tos" />
                                    <label className="form-check-label" htmlFor="acccept_tos">
                                        Acepto haber leído los términos y condiciones.
                                    </label>
                                </div>

                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary btn-block" title="Registrarse">Registrarse</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
