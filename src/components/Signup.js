import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, "Este campo deve ter no máximo 15 caracteres!")
            .required("Preencha o campo acima!"),
        lastName: Yup.string()
            .max(20, "Este campo deve ter no máximo 20 caracteres!")
            .required("Preencha o campo acima!"),
        email: Yup.string()
            .email("Email inválido!")
            .required("Preencha o campo acima!"),
        password: Yup.string()
            .min(6, "Este campo deve ter pelo menos 6 dígitos!")
            .required("Preencha o campo acima!"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Digite a mesma senha!")
            .required("Confirme a sua senha!"),
    });
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">
                        Inscreva-se
                    </h1>
                    {console.log(formik)}
                    <Form>
                        <TextField
                            label="Primeiro nome:"
                            name="firstName"
                            type="text"
                        />
                        <TextField
                            label="Sobrenome:"
                            name="lastName"
                            type="text"
                        />
                        <TextField label="Email:" name="email" type="email" />
                        <TextField
                            label="Senha:"
                            name="password"
                            type="password"
                        />
                        <TextField
                            label="Confirme a sua senha:"
                            name="confirmPassword"
                            type="password"
                        />
                        <button type="submit" className="btn btn-dark mt-3">
                            Inscrever
                        </button>
                        <button
                            className="btn btn-danger mx-3 mt-3"
                            type="reset"
                        >
                            Resetar
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default Signup;
