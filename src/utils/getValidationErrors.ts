import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  console.log(err);
  const validationErrors: Errors = {};

  err.inner.forEach(erro => {
    validationErrors[erro.path] = erro.message;
  });

  return validationErrors;
}
