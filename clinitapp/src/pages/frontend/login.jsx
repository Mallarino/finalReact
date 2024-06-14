import './../../assets/sb-admin-2.min.css'
import LoginData from '../../components/frontend/LoginData'
import { useForm } from 'react-hook-form'

export default function Login() {

  let {register, handleSubmit, formState: {errors}} = useForm();
  let sendDataForm = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <>
      <div className="container">
        <div classNameName="row justify-content-center">
          <div classNameName="col-xl-10 col-lg-12 col-md-9">

            <div classNameName="card o-hidden border-0 shadow-lg my-5">
              <div classNameName="card-body p-0">

                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form onSubmit={ sendDataForm } className="user">
                        <div className="form-group">
                          <input type="text" {...register("username", {required: true})} className="form-control form-control-user"
                            id="usuarioForm" placeholder="Enter User..."/>
                            <span className='text-danger'> { errors.username && "El usuario es requerido" } </span>
                        </div>
                        <div className="form-group">
                          <input type="password" {...register("password", {required: true})} className="form-control form-control-user"
                            id="contraForm" placeholder="Password"/>
                             <span className='text-danger'> { errors.password && "La contraseña es requerida" } </span>
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck"/>
                              <label className="custom-control-label" for="customCheck">Remember
                                Me</label>
                          </div>
                        </div>
                        <button type="submit" className="btnLogin btn btn-primary btn-user btn-block">
                          Login
                        </button>
                        <hr/>
                          <a href="index.html" className="btn btn-google btn-user btn-block">
                            <i className="fab fa-google fa-fw"></i> Login with Google
                          </a>
                          <a href="index.html" className="btn btn-facebook btn-user btn-block">
                            <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                          </a>
                      </form>
                      <hr/>
                        <div className="text-center">
                          <a className="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                          <a className="small" href="register.html">Create an Account!</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
      )
}
