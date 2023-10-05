import { lista_Usuario } from '/datos/usuarios.js';
import { listaCursos } from '/datos/cursos.js';
import { programas } from '/datos/programas.js';

$(document).ready(function () {
    let table = $('#tablaProgramas').DataTable({
        lengthMenu: [3, 5],
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
        },
    });

    obtenerProgramas.forEach(programa => {
        table.row.add([
            programa.Cod_Programa,
            programa.Nombre_Programa,
            programa.cursos.length,
            programa.Fecha_inicio,
            programa.Fecha_Fin,
            `<button type="button" class="btn btn-primary btn-ver" data-toggle="modal" data-target="#exampleModal" data-programa="${programa.Cod_Programa}">Ver detalles</button>`
        ]).draw(true);
    })

    $('#exampleModal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let codigoPrograma = button.data('programa');

        let programa = programas.find(function (p) {
            return p.Cod_Programa === codigoPrograma;
        });

        if (programa) {
            $('#list-tab').empty();
            $('#nav-tabContent').empty();

            programa.cursos.forEach(function (codigoCurso) {
                let curso = listaCursos.find(function (curso) {
                    return curso.Cod_Curso === codigoCurso;
                });
                if (curso) {
                    let listItem = $('<a>').addClass('list-group-item list-group-item-action')
                        .attr({
                            'id': 'list-' + curso.Cod_Curso + '-list',
                            'data-toggle': 'list',
                            'href': '#list-' + curso.Cod_Curso,
                            'role': 'tab',
                            'aria-controls': curso.Cod_Curso
                        })
                        .text(curso.Nombre_Curso);
                    $('#list-tab').append(listItem);

                    let tabPane = $('<div>').addClass('tab-pane fade')
                        .attr({
                            'id': 'list-' + curso.Cod_Curso,
                            'role': 'tabpanel',
                            'aria-labelledby': 'list-' + curso.Cod_Curso + '-list'
                        });

                    tabPane.html('<strong>' + curso.Cod_Curso + '</strong><br>' +
                        'Duración: ' + curso.Duracion + ' ' + curso.Tiempo + '<br> <br><strong>Descripción:</strong> <br>' + curso.Descripcion +
                        `<br>
                        <br>
                        <ul class="list-group" style="margin-top: 10px">
                        </ul>
                    `);

                    let listaTemas = tabPane.find('.list-group');
                    curso.Temas.forEach(function (tema) {
                        let temaItem = $('<li>').addClass('list-group-item')
                            .text(tema.Cod_Tema + ' - ' + tema.Nombre_Tema);
                        listaTemas.append(temaItem);
                    });

                    $('#nav-tabContent').append(tabPane);
                }
            });
        }

        $('.modal-title').text('Cursos del Programa ' + codigoPrograma);
    });

    $('#btn-logout').on('click', function () {
        localStorage.removeItem('user');
  
        window.location.href = '/';
    });
});

const params = new URLSearchParams(document.location.search);
const usuario = params.get('usuario');

const obtenerProgramas = programas.filter(programa => {
    return programa.MtM.includes(usuario);
});

const obtenerDatosUsuario = lista_Usuario.filter(data => {
    return data.usuario.includes(usuario);
});

obtenerDatosUsuario.forEach(data => {
    document.querySelector('#datos-usuario').innerHTML = 
    `
        <button class="btn btn-primary">Usuario: ${data.usuario}</button>
        <button class="btn btn-primary">Correo: ${data.correo}</button>
        <button class="btn btn-primary">DNI: ${data.dni}</button>
        <button class="btn btn-primary">Telefono: ${data.telefono}</button>
        <br>
        <br>
        
    `
    document.querySelector('#showUsuario').textContent = data.nombres;

    /**
     * <strong>Usuario: </strong> ${data.usuario}<br>
        <strong>Correo: </strong> ${data.correo}<br>
        <strong>DNI: </strong> ${data.dni}<br>
        <strong>Telefono: </strong> ${data.telefono}<br>
        <br>
     */
})

if (!obtenerProgramas || localStorage.getItem('user') != usuario) {
    window.location.href = '/'
}