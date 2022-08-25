const transcripcion = document.querySelector(".transcripcion")
const mensaje = document.querySelector(".mensaje")

/*-----------------encriptar -----------------------------*/

function encriptar(frase){
  let Matriz= [["u","ufat"] , ["o","ober"] , ["a","ai"] , ["i","imes"] , ["e","enter"]]
  frase = frase.toLowerCase();

    for (let i = 0; i < Matriz.length; i++ ){
      if(frase.includes( Matriz[i][0] )){
          frase = frase.replaceAll(Matriz[i][0], Matriz[i][1] )
    }
  }
  return frase;
}

function btnEncripctar(){
  const textoEncriptado = encriptar(transcripcion.value)
  mensaje.value = textoEncriptado;    
}
/*-------------------desencriptar-------------------------*/

function desencriptar(fraseDesencriptada){
  let Matriz= [["u","ufat"] , ["o","ober"] , ["a","ai"] , ["i","imes"] , ["e","enter"]]
  fraseDesencriptada = fraseDesencriptada.toLowerCase();

    for (let i = 0; i < Matriz.length; i++ ){
      if(fraseDesencriptada.includes( Matriz[i][0] )){
          fraseDesencriptada =fraseDesencriptada.replaceAll(Matriz[i][1], Matriz[i][0] )
    }
  }
  return fraseDesencriptada;
}

function btnDesencriptar(){
  const textoDesencriptado = desencriptar (transcripcion.value)
  mensaje.value = textoDesencriptado; 

}
/*---------------copiar-----------------*/

function copiar(){
  mensaje.select()
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = ""
  alert("mensaje copiado")
}