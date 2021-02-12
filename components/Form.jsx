import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  Button,
} from "@chakra-ui/react";
import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";

const FormContext = createContext({ register: () => {} });

const Form = ({ children, onSubmit = () => {} }) => {
  const { register, handleSubmit } = useForm();

  return (
    <FormContext.Provider value={{ register }}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormContext.Provider>
  );
};

Form.Input = ({
  type = "text",
  id,
  label,
  placeholder = "",
  hint,
  required = false,
}) => {
  const { register } = useContext(FormContext);
  return (
    <FormControl id={id} isRequired>
      <FormLabel>{label}</FormLabel>
      <ChackraInput
        name={id}
        id={id}
        type={type}
        ref={register({ required })}
        placeholder={placeholder}
      />
      {hint && <FormHelperText>{hint}</FormHelperText>}
    </FormControl>
  );
};

Form.Button = ({ children, ...props }) => (
  <Button type="submit" {...props}>
    {children}
  </Button>
);

export default Form;
