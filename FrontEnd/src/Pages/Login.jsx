import React, { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthContext1.jsx";
import { useLogin } from "../../hooks/user.hook.js";
import { IoMailSharp, IoLockClosed } from "react-icons/io5";
import { GoEye, GoEyeClosed } from 'react-icons/go'; // Asegúrate de importar estos íconos
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@nextui-org/react';
import { useMutation, QueryCache } from 'react-query';
import toast, { Toaster } from "react-hot-toast";
import { LoadingPage } from './loadingPage.jsx';
import fondo from '../assets/fondo3.png';

const Login = () => {
  // Crear una instancia para usarla global
  const auth = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onTouched" });

  // Definir estados
  const [showPassword, setShowPassword] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  const loginMutation = useMutation(useLogin, {
    onSuccess: (data) => {
      auth.login(data.data.token, data.data.username);
      setShowLoading(false);
      navigate("/Dashboard"); // Navega a Dashboard cuando se inicia sesión correctamente
    },
    onError: (error) => {
      if (error.message === "Credenciales Invalidas") {
        setShowLoading(false);
        toast.error("Credenciales Incorrectas");
      } else {
        setShowLoading(false);
        console.error("Error Inesperado", error);
      }
    },
    onMutate: () => {
      setShowLoading(true);
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  const handleHome = () => {
    navigate("/PrincipalPage");
  };

  return (
    <>
      {showLoading && <LoadingPage label="Iniciando Sesion..." />}
      {!showLoading && (
        <div className="text-white h-[100vh] flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${fondo})` }}>
          <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 relative">
            <h1 className="text-4xl font-bold text-center mb-6">INICIAR SESIÓN</h1>
            <form className="max-w-xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <div className="relative my-4">
                <Input
                  type="text"
                  name="username"
                  label="Usuario"
                  variant="bordered"
                  {...register("username", { required: "El campo es obligatorio" })}
                  size="lg"
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                  startContent={<IoMailSharp className="flex-shrink-0 text-2xl pointer-events-none text-sky-700" />}
                />
                <label className="absolute text-sm duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-50 peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Usuario
                </label>
              </div>
              <div className="relative my-4">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Contraseña"
                  variant="bordered"
                  size="lg"
                  {...register("password", { required: "El campo es obligatorio" })}
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                  startContent={<IoLockClosed className="flex-shrink-0 text-2xl pointer-events-none text-sky-700" />}
                  endContent={
                    <div className="my-auto cursor-pointer focus:outline-none" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <GoEyeClosed className="text-2xl text-default-400" /> : <GoEye className="text-2xl text-default-400" />}
                    </div>
                  }
                />
                <label className="absolute text-sm duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-50 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Contraseña
                </label>
              </div>
              <div className="mt-3 text-end mb-14">
                <a href="/forgotpassword" className="text-xl font-bold text-sky-700">
                  ¿Olvidó su contraseña?
                </a>
              </div>
              <div className="text-center">
                <Button
                  size="lg"
                  type="submit"
                  className="w-full py-2 text-[18px] font-medium text-white transition shadow-lg bg-blue-500 hover:bg-blue-600 hover:scale-110"
                  isDisabled={!isValid}
                >
                  Iniciar Sesión
                </Button>
              </div>
              <p className="mt-6 text-xl font-semibold text-center">
                Registrándose en nuestros{" "}
                <span className="text-sky-700">Términos y Condiciones</span>
              </p>
            </form>
          </div>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default Login;
