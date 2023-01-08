import React, {Component} from "react";

class Register extends Component {
    render() {
        return (
            <div className="d-grid gap-2 col-6 mx-auto">
                <h2>Registro de Usuario</h2>
                <hr />
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="first_name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="first_name" name="first_name" placeholder="Tu nombre" />
                            </div>
                            <div className="mb-3">
                                <label for="last_name" className="form-label">Apellido</label>
                                <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Tu apellido" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Tu email" />
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="form-label">Teléfono</label>
                                <input type="text" className="form-control" id="phone" name="phone" placeholder="Tu teléfono" />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Tu contraseña" />
                            </div>
                            <div className="mb-3">
                                <label for="password_confirm" className="form-label">Confirmar Contraseña</label>
                                <input type="password" className="form-control" id="password_confirm" name="password_confirm" placeholder="Confirma tu contraseña" />
                            </div>
                            <div class="mb-3 form-check">
                                <input class="form-check-input" type="checkbox" value="" id="acccept_tos" />
                                <label class="form-check-label" for="acccept_tos">
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
        );
    }
}

export default Register;