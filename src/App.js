import React, { useState , useEffect } from 'react';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import imagen from './cryptomonedas.png'
import axios from 'axios';
import Cotizacion from './components/Cotizacion';

const Contenedor = styled.div`
  max-width: 900px;
  margin : 0 auto;
  
  @media(min-width : 992px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem;
  }
`;
const Imagen = styled.img`
  max-width:100%;
  margin-top:5rem;
`;

const Heading = styled.h1`
  font-family:'Bebas Neue' , cursive;
  color:#FFF;
  text-align:left;
  font-weight:700;
  font-size:50px;
  margin-bottom:50px;
  margin-top:80px;

  &::after{
    content:'';
    width:100px;
    height:6px;
    background-color:#66a2fe;
    display:block;
  }
`;


function App() {

  const [moneda, setmoneda] = useState('')
  const [criptomoneda, setcriptomoneda] = useState('')
  const [resultadoapi, setresultadoapi] = useState({})

  const cotizacion = async(m,cm) =>{
    let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cm}&tsyms=${m}`;
    let api = await axios.get(url);
    console.log('resultado',api.data.DISPLAY[cm][m]);
    setresultadoapi(api.data.DISPLAY[cm][m]);
  }


  useEffect(() => {
    if(moneda.trim()==='' || criptomoneda.trim()===''){

    }else{
      cotizacion(moneda,criptomoneda)
      console.log('vuelve a cotizar')
      setmoneda('');
        setcriptomoneda('');
    }
    

  }, [moneda,criptomoneda])


  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
        ></Imagen>
      </div>

      <div>
        <Heading>Cotizador de Cryptomonedas</Heading>
        <Formulario
          setmoneda={setmoneda}
          setcriptomoneda={setcriptomoneda}
        />

        <Cotizacion
          resultado={resultadoapi}
        />
      </div>

    </Contenedor>
  );
}

export default App;
