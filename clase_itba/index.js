window.onload = function(){

    mostrar()

}

const data = async () =>{

    const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const data = await response.json()

    return data

}

const mostrar = async () =>{

   const dataDolar = await data()

   console.log(dataDolar)

}