import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled';

const ResutladoDiv = styled.div`
    color:#FFF;
`;
const Info = styled.p`
    font-size:18px;
    span{

        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size:30px;
    span{

font-weight:bold;
}
`;

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length===0)return null;

    return (
        <ResutladoDiv>
            <Precio>el precio es de: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio mas ALTO del dia: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio mas BAJO del dia: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variacion de las ultimas 24 hrs: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ResutladoDiv>
    )
}

Cotizacion.propTypes = {
    resultado : PropTypes.object.isRequired
}

export default Cotizacion
