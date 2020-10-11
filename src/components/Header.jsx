import { getAllByPlaceholderText } from '@testing-library/react';
import React from 'react';

function Header({titulo}){
    return(
    <h1 className="encabezado">{titulo}</h1>       
    )
}
export default Header;