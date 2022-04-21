class celulares{
  constructor(color,peso,resPan,resCam,memoria){
    this.color = color;
    this.peso = peso;
    this.resPan = resPan; 
    this.resCam = resCam;
    this.memoria = memoria;
    this.encendido = false;
    this.info = ``;
  }

  prender(){
    if(this.encendido == false){
      alert("Celular prendido");
      this.encendido = true; 
    }
    else{
      alert("El celular ya está encendido")
    }
  }
  reiniciar(){
    if(this.encendido == false){
      alert("El celular está apagado no se puede reiniciar");
    }
    else{
      alert("El celular se está reiniciando");
      this.encendido = true;
    }
  }
  apagar(){
    if(this.encendido == false){
      alert("El celular está apagado");
    }
    else{
      alert("Apagando celular");
      this.encendido = false; 
    }
  }
  tomarFoto(){
    alert(`Tomando foto en resolución de: ${this.resCam}`);
  }
  grabarVideo(){
    alert(`Grabando video en resolución de: ${this.resCam}`);
  }

  propiedades(){
    return `Soy un celular de color <b>${this.color}</b>, peso <b>${this.peso} gramos</b>,
     tengo una resolucion de pantalla de <b>${this.resPan}</b>, una resolucion de camara 
     de <b>${this.resCam}</b> y una memoria de <b>${this.memoria} GB</b>`;
  }
}

const celular1 = new celulares("rojo",50,"100px","200px",64);
const celular2 = new celulares("azul",60,"200px","300px",32);
const celular3 = new celulares("negro",70,"300px","400px",116);

celular1.propiedades();
celular2.propiedades();
celular3.propiedades();

class altaGama extends celulares{

  constructor(color,peso,resPan,resCam,memoria,camExtra){
    super(color,peso,resPan,resCam,memoria);
    this.camExtra = camExtra;
  }

  camaraSuperLenta(){
    alert("Estas grabando en camara super lenta");
  }

  reconocimientoFacial(){
    alert("Estan iniciando la funcion de reconocimiento facial");
  }

  infoAltaGama(){
    return this.propiedades() + ` y resolucion de camara extra es <b>${this.camExtra}</b> <br><br>`;
  }
}

const celular4 = new altaGama("negro",70,"300px","400px",116, "hd");
const celular5 = new altaGama("negro",70,"300px","400px",116, "full hd");

document.write(celular4.infoAltaGama());
document.write(celular5.infoAltaGama());


class aplicacion {
  constructor(aplicacion,puntuacion,peso){
    this.aplicacion = aplicacion;
    this.puntuacion = puntuacion;
    this.peso = peso; 
    this.instalacion = false;
  }

  instalar(){
    if(this.instalacion === false){
      let resp = prompt(`La app ${this.aplicacion} tiene un peso de ${this.peso} y puntuada por la gente con ${this.puntuacion} puntos, aun desea instalar la App?`);
        
      if(resp === "si" || resp === "Si" || resp === "SI" || resp === "sI"){
           alert("Instalando aplicación"); 
           this.instalacion = true;
        }
        else{
          alert("No se iniciará la descarga");
        }
    }
    else{
      alert("La aplicación ya está instalada");
    }
  }

  desinstalar(){
    if(this.instalacion === false){
      alert("La app no está instalada");
    }
    else{
      let resp = prompt("Está seguro que desea desinstalar la aplicación?");
      if(resp === "si" || resp === "Si" || resp === "SI" || resp === "sI"){
        alert(`La aplicación ${this.aplicacion} fue desinstalada, se liberó ${this.peso} de espacio en su memoria`);
        this.instalacion = false;
      }  
      else{
        alert("La aplicación aun permanece en la memoria de su celular");
      }
    }
  }

}

const app1 = new aplicacion("JuegaConFabio",4,"2 GB");
app1.instalar();
app1.instalar();
app1.desinstalar();

