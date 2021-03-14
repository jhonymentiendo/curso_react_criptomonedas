import React, { Fragment,useState } from 'react';
import styled from '@emotion/styled';

const Etiqueta = styled.label`
    font-family: 'Bebas Neue',cursive;
    color:#FFF;
    text-transform:uppercase;
    font-weight:bold;
    font-size:2.4rem;
    margin-top:2rem;
    display:block;
`;

const Select = styled.select`
    width:100%;
    display:block;
    padding:1rem;
    -webkit-appearance:none;
    border-radius:10px;
    border:none;
    font-size:1.2rem;
`;

const useMoneda = (titulo,stateInicial,arreglo) => {
    
    const [valorEstado, setvalorEstado] = useState(stateInicial);

    const regresaopciones = (arr) =>{
       return arr.map(
            opciones =>(
            <option 
                key={opciones.codigo} 
                value={opciones.codigo}>
                    {opciones.nombre}
            </option>
            )
        )
    }

    const handleChange = e =>{
        //e.preventDefault();

        setvalorEstado(e.target.value);

        //console.log(valorEstado);


    }

    const Seleccionar = () =>(
        <Fragment>
            <Etiqueta>{titulo}</Etiqueta>
            <Select onChange={handleChange}
            value={valorEstado}>
                {regresaopciones(arreglo)}
            </Select>
        </Fragment>
    );
    return [valorEstado,Seleccionar, setvalorEstado];
}

export default useMoneda
