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

const useCriptomoneda = (titulo,stateInicial,arreglo) => {
    
    const [valorEstado, setvalorEstado] = useState(stateInicial);

    const regresaopciones = (arr) =>{
        if (arr.length === undefined || arr.length === 0 ) { return; }
        return arr.map(opcion => (
            <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
        ))
    }
    const handleChange = e =>{
        setvalorEstado(e.target.value);
    }
    const Seleccionar = () =>(
        <Fragment>
            <Etiqueta>{titulo}</Etiqueta>
            <Select onChange={handleChange}
            value={valorEstado}>
                <option value="">------seleccione------</option>
                {regresaopciones(arreglo)}
            </Select>
        </Fragment>
    );
    return [valorEstado,Seleccionar, setvalorEstado];
}

export default useCriptomoneda
