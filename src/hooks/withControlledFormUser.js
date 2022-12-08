import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const withControlledFormUser = (Component) =>{
    const WrappedComponent = ({config, defaultValues}) =>{
        const { register, handleSubmit, getValues, formState: { errors }, } = useForm({defaultValues});

        const navigate = useNavigate();

        const handleClick = () => {
            navigate(`${config.route}`);
          };

         const formProps = {
            register,
            handleSubmit,
            errors,
            handleClick,
            navigate,
            getValues,
            config,
         } 
         
        return <Component formProps={formProps}/>
    };
    return WrappedComponent;
};

export default withControlledFormUser;