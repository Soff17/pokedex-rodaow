import React from 'react';

interface ErrorMessageProps {
  message: string; // Mensaje de error personalizado
  // Aquí puedes añadir más props como `icon`, `className`, etc., para personalizar aún más tu mensaje de error.
}

const StatusCard: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-600 text-white p-4 rounded-md shadow-md">
      <p>{message}</p>
    </div>
  );
};

export default StatusCard;
