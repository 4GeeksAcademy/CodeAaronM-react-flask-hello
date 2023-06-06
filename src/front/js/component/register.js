import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "../pages/loginModal";

export const Register = () => {
	return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                        <div className="card-body p-4 p-md-5">
                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Por favor, llena tus datos!</h3>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-4">

                                    <div className="form-outline">
                                        <input type="text" id="firstName" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="firstName">Nombres</label>
                                    </div>

                                    </div>
                                    <div className="col-md-6 mb-4">

                                    <div className="form-outline">
                                        <input type="text" id="lastName" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="lastName">Apellidos</label>
                                    </div>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4 d-flex align-items-center">

                                    <div className="form-outline datepicker w-100">
                                        <input type="text" className="form-control form-control-lg" id="birthdayDate" />
                                        <label htmlFor="birthdayDate" className="form-label">Fecha de Nacimiento</label>
                                    </div>

                                    </div>
                                    <div className="col-md-6 mb-4">

                                    <h6 className="mb-2 pb-1">Género: </h6>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                        value="option1" />
                                        <label className="form-check-label" htmlFor="femaleGender">Femenino</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                        value="option2" />
                                        <label className="form-check-label" htmlFor="maleGender">Masculino</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                        value="option3" />
                                        <label className="form-check-label" htmlFor="otherGender">Otro</label>
                                    </div>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4 pb-2">

                                    <div className="form-outline">
                                        <input type="email" id="emailAddress" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="emailAddress">Correo</label>
                                    </div>

                                    </div>
                                    <div className="col-md-6 mb-4 pb-2">

                                    <div className="form-outline">
                                        <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="phoneNumber">Teléfono</label>
                                    </div>

                                    </div>
                                </div>
                                <Link to="/">
                                    <div className="mt-4 pt-2">
                                        <input className="btn btn-outline-success px-5 btn-lg" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}} type="submit" value="Listo!" />
                                    </div>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <LoginModal />
        </section>
    )
}
export default Register;