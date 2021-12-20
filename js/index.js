const opcionesCriptomoneda = async () => {
    debugger;
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    const respuesta = await fetch(url)
    const resultado = await respuesta.json();

    // console.log(resultado)
    let select = document.querySelector("#Criptomoneda")
    let opcionesHTML = `<option value=""> -Selecciona- </option>`;
    
    resultado.Data.map(opcion =>{
        opcionesHTML += `<option value="${opcion.CoinInfo.Name}">${opcion.CoinInfo.FullName}</option>`;
    } );
    let selectCripto = ""
    selectCripto.innertHTML = opcionesHTML;
}