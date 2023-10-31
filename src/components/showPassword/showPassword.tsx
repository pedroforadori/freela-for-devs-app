import { InputGroup, InputRightElement } from "@chakra-ui/react";
import "./styles.scss";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { ShowPasswordType } from "../../types/showPasswordType";

const ShowPassword = ({ showPassword, handleShowPassword} : ShowPasswordType) => {
  
  return (
    <InputGroup>
        <InputRightElement>
            <a href="#" onClick={handleShowPassword} className="eyeAction">
                {showPassword 
                ? <Eye width={18} /> 
                : <EyeSlash width={18} />
                }
            </a>
        </InputRightElement>
    </InputGroup>
    )
}

export default ShowPassword;