import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const withControlledForm = (Component, root) =>{
    const WrappedComponent = () =>{
        const { register, handleSubmit, formState: { errors }, } = useForm();

        const navigate = useNavigate();
        
        const handleClick = () => {
            navigate(`${root}`);
          };

         const hookFormProps = {
            register,
            handleSubmit,
            errors,
            handleClick,
            navigate
         } 
         
        return <Component hookFormProps={hookFormProps}/>
    };
    return WrappedComponent;
};

export default withControlledForm;