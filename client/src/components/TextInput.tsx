import React from 'react';
import { InputProps } from '../types/Elements';
import { StyledInput } from '../styles/SearchBar';

const TextInput = (props: InputProps) => <StyledInput {...props.bind} />;
export default TextInput;
