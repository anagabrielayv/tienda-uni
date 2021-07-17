export const ApiWebUrl = "https://servicios.campus.pe/";

export const usuariolocal = () => {
    if(localStorage.getItem("DatosUsuario") !== null){
        return JSON.parse(localStorage.getItem("DatosUsuario"));
    }
    else{
        return null;
    }
}