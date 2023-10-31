import { Alert } from '@chakra-ui/react';
import { WarningCircle } from '@phosphor-icons/react';
import { ErrorType } from '../../types/ErrorType';

const Error = ({text} : ErrorType) => {
  return (
    <Alert status='error'>
        <WarningCircle size={32} />
        {text}
    </Alert>
    )
}

export default Error;