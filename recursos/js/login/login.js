

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


var lista_Usuario = [
    {
        nombres: "Soy el Admin",
        correo: "admin@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "admin",
        contrasenia: "admin123456",
        id_rol: 1
    },
    {
        nombres: "Soy el Docente",
        correo: "docentet@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "docente",
        contrasenia: "docente123456",
        id_rol: 2
    },
    {
        nombres: "Soy el Alumno",
        correo: "alumno@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "alumno",
        contrasenia: "alumno123456",
        id_rol: 3
    },
    {
        nombres: "Kenyi Muñoz",
        correo: "alumno@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "kenyi",
        contrasenia: "kenyi123456",
        id_rol: 3
    },
    {
        nombres: "Alejandro Plasencia",
        correo: "alumno@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "alejandro",
        contrasenia: "alejandro123456",
        id_rol: 3
    },
    {
        nombres: "Rodolfo Huachillo",
        correo: "alumno@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "rodolfo",
        contrasenia: "rodolfo123456",
        id_rol: 3
    },
    {
        nombres: "David Mendoza",
        correo: "alumno@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "david",
        contrasenia: "david123456",
        id_rol: 3
    },
    {
        nombres: "Wilson Cueva",
        correo: "alumno@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "wilson",
        contrasenia: "wilson123456",
        id_rol: 3
    }
]

var lista_Roles = [
    {
        id: 1,
        nombre: "Administrador",
        cod: "ADM"
    },
    {
        id: 2,
        nombre: "Docente",
        cod: "DOC"
    },
    {
        id: 3,
        nombre: "Alumno",
        cod: "ALU"
    }
]