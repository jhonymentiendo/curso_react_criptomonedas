import React, {useEffect,useState} from 'react'
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import axios from 'axios';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error';
import PropTypes from 'prop-types'

const Boton = styled.input`
    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color:#66a2fe;
    border:none;
    width:100%;
    color:#FFF;
    transition:background-color .3s ease;

    &:hover{
        background-color:#326ac0;
        cursor:pointer;
    }
`;


const Formulario = ({setmoneda,setcriptomoneda}) => {

    const [error, seterror] = useState(false)
    const [listadocripto, setlistadocripto] = useState([]);
    const MONEDAS = [
        {codigo:'',nombre:'------selecciona una opccion------'},
        {codigo:'USD',nombre:'Dolar Americano'},
        {codigo:'MXN',nombre:'Peso Mexicano'},
        {codigo:'EUR',nombre:'Euro'},
        {codigo:'GBP',nombre:'Libra Esterlina'},
    ];

    const [estadoMoneda,SeleccionarMoneda,setEstadoMoneda] = useMoneda('Elije Moneda','',MONEDAS);
    const [estadoCriptoMoneda,SeleccionarCriptoMoneda,setEstadoCriptoMoneda] = useCriptomoneda('Elije Cripto Moneda','',listadocripto);


    const consultacripto = async (estm) =>{
        let topl = 10;
        let url=`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${topl}&tsym=${estm}`
        let api = await axios.get(url);
        //console.log('consulta',api.data.Data);
        setlistadocripto(api.data.Data);
        //return api.json();
    }

    useEffect(() => {
        consultacripto(estadoMoneda);
    }, [estadoMoneda])

    //cuendo el usuario haga submit
    const handledSubmit = e => {
        e.preventDefault();
        if(estadoMoneda.trim()==='' || estadoCriptoMoneda.trim()===''){
            seterror(true);
            return;
        }
        seterror(false);
        
        setmoneda(estadoMoneda);
        setcriptomoneda(estadoCriptoMoneda);
        console.log('vuelve a setear');
    }


    return (
        <form>

            {error?<Error mensaje="Elije ambos campos"></Error>:null}

            <SeleccionarMoneda></SeleccionarMoneda>
            <SeleccionarCriptoMoneda></SeleccionarCriptoMoneda>

            <Boton 
            onClick={handledSubmit}
            type="submit"
            value="Calcular"
            />
        </form>
    )
}

Formulario.propTypes = {
    setmoneda : PropTypes.func.isRequired,
    setcriptomoneda : PropTypes.func.isRequired
}


export default Formulario
