import { lista_Usuario } from "/datos/usuarios.js";
import { lista_Roles } from "/datos/roles.js";

$(".finit").on('click', function () {
    //debugger
    if (validarFormulario()) {
        let aux_Usuario = $("#ID_Usuario").val().trim();
        let aux_Contrasenia = $("#ID_Contrasenia").val();
        let respuestaUsuario = validarUsaurio(aux_Usuario, aux_Contrasenia);
        if (respuestaUsuario.existe && respuestaUsuario.contrasenia) {

            console.log(respuestaUsuario);

            $("#ID_MsjError").hide();
            iniciarAPP(respuestaUsuario);
        } else {
            console.log(respuestaUsuario);
            $("#ID_MsjError").show();
        }
    } else {
        $("#ID_MsjError").show();
    }
});


function validarFormulario() {
    let tokenVal;
    let aux_Usuario = $("#ID_Usuario").val().trim();
    let aux_Contrasenia = $("#ID_Contrasenia").val();

    if (aux_Usuario.length > 0 && aux_Usuario != undefined &&
        aux_Contrasenia.length > 0 && aux_Contrasenia != undefined) {
        tokenVal = true;
    } else {
        tokenVal = false;
    }
    return tokenVal;
}

function iniciarAPP(usuarioLogged){
    let userAux = usuarioLogged.usuario.usuario
    // Agregamos un item al localstorage para evitar que usuarios no authenticados ingresen por la URL
    localStorage.setItem("user", userAux)
    window.location = "./modulos/programas/bandeja.html?usuario="+userAux;
}

function validarUsaurio(usuario, contrasenia) {

    let objetoValidado;

    let usuarioRecuperado = lista_Usuario.find(x => x.usuario == usuario);

    try {
        if (usuarioRecuperado.usuario.length > 0 && usuarioRecuperado != undefined && usuarioRecuperado != null) {

            if (usuarioRecuperado.contrasenia === contrasenia) {

                let userRol = lista_Roles.find(r => r.id == usuarioRecuperado.id_rol);

                objetoValidado = {
                    existe: true,
                    contrasenia: true,
                    usuario: {
                        nombres: usuarioRecuperado.nombres,
                        correo: usuarioRecuperado.correo,
                        dni: usuarioRecuperado.dni,
                        telefono: usuarioRecuperado.telefono,
                        usuario: usuarioRecuperado.usuario,
                        rol: {
                            nombre: userRol.nombre,
                            cod: userRol.cod
                        }
                    }
                }

            } else {
                objetoValidado = {
                    existe: true,
                    contrasenia: false,
                    usuario: null
                }
            }

        } else {
            objetoValidado = {
                existe: false,
                contrasenia: false,
                usuario: null
            }
        }

    } catch (error) {
        console.log(error);
        objetoValidado = {
            existe: false,
            contrasenia: false,
            usuario: null
        }
    }


    return objetoValidado;

}
