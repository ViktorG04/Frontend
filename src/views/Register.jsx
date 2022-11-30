import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Alert from "../components/alerts/Alert";
import MaxMinLength from "../components/alerts/MaxMinLength";
import Pattern from "../components/alerts/Pattern";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { password, password2, ...user } = data;

    if (password !== password2) {
     return toast.error("The passwords are not the same", {duration: 5000});
    } 
      user.password = password;
      console.log(user);
      toast.success("created Account", {duration: 5000});
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="container-Register">
      <div>
        <Toaster />
      </div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            {...register("name", {
              required: true,
              minLength: 10,
              maxLength: 30,
            })}
            autoFocus
          />
          {errors.name?.type === "required" && <Alert />}
          {errors.name?.type === "minLength" && <MaxMinLength length='Min'  number={10} />}
          {errors.name?.type === "required" && <MaxMinLength length='Max' number={30} />}
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
          />
          {errors.email?.type === "required" && <Alert />}
          {errors.email?.type === "pattern" && <Pattern message='email can only contain letters, numbers, periods, hyphens, underscores, and at sing' />}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 12,
            })}
          />
          {errors.password?.type === "required" && <Alert />}
          {errors.password?.type === "minLength" && <MaxMinLength length='Min' number={8} />}
          {errors.password?.type === "required" && <MaxMinLength length='Max' number={12} />}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("password2", {
              required: true,
              minLength: 8,
              maxLength: 12,
            })}
          />
          {errors.password2?.type === "required" && <Alert />}
          {errors.password2?.type === "minLength" && <MaxMinLength length='min' number={8} />}
          {errors.password2?.type === "required" && <MaxMinLength length='Max' number={12} />}
        </div>
        <div>
          <button type="reset" onClick={handleClick}>
            Cancel
          </button>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
