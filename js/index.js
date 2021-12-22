const opcionesCriptomoneda = async () => {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD";

    const respuesta = await fetch(url)
    const resultado = await respuesta.json();

    // console.log(resultado)
    let selectCripto = document.querySelector("#criptomoneda")
    let opcionesHTML = `<option disabled selected value="">- Seleccione -</option>`;
    
    resultado.Data.map(opcion =>{
        opcionesHTML += `<option value="${opcion.CoinInfo.Name}">${opcion.CoinInfo.FullName}</option>`;
    });
    selectCripto.innerHTML = opcionesHTML;
}

const cotizarMoneda = () => {

    let divError = document.getElementById("msj-error")
    const moneda = document.querySelector("#moneda").value;
    const cripto = document.querySelector("#criptomoneda").value;

    //Encaso de agregar un select activar validacion.

    // if (moneda === '' || cripto === '') {
    //     divError.style.display = 'block';
    //     return;
    // } else{
    //     divError.style.display = 'none';
    // }


    cotizar(moneda, cripto)
}

const cotizar = async(moneda = "USD", cripto="BTC") => {
    
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
    //console.log(url)
    const respuesta = await fetch(url)
    let resultado = await respuesta.json();

    //console.log(resultado.DISPLAY[cripto][moneda])

    resultado = resultado.DISPLAY[cripto][moneda];
    let divResultado = document.querySelector("#divResultado")
    let divAlto = document.querySelector("#divMasAlto")
    let divBajo = document.querySelector("#divMasBajo")
    let divVar = document.querySelector("#divVariacion")
    let divAct = document.querySelector("#divActualizacion")



        divResultado.innerHTML = "El precio es " + resultado.PRICE
        divAlto.innerHTML = "El precio mas alto del dia es: " + resultado.HIGHDAY
        divBajo.innerHTML = "El precio mas bajo del dia: " + resultado.LOWDAY
        divVar.innerHTML = "Variacion Ultimas 24hs: " + resultado.CHANGEPCT24HOUR
        divAct.innerHTML = "Ultima actualizacion: " + resultado.LASTUPDATE

}


