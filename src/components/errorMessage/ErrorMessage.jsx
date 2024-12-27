import React from 'react';
import s from './Error.module.css'

const ErrorMessage = ({ message }) => {
  return (
    <div className={s.error}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;