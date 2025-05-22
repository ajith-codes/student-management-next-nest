'use client';

import React from 'react';
import { Input } from 'antd';

export interface CustomInputProps {
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  value = '',
  placeholder = '',
  type = 'text',
  onChange,
  required = false,
  disabled = false,
}) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && <label htmlFor={name}>{label}</label>}
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default CustomInput;
