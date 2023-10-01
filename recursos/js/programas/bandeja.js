$(document).ready(function () {
    $('#myTable').DataTable({
        data: obtenerProgramas,
        columns: [
            { data: 'Cod_Programa' },
            { data: 'Nombre_Programa' },
            { data: 'Nro_Cursos' },
            { data: 'Fecha_inicio' },
            { data: 'Fecha_Fin' }
        ],
        lengthMenu: [3, 5],
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
        },
    });
});


let params = new URLSearchParams(document.location.search);
let usuario = params.get("usuario");

document.querySelector("#showUsuario").textContent = usuario;


const programas = [
    {
        MtM: ["alejandro"],
        Cod_Programa: 'P001',
        Nombre_Programa: 'Programa de Desarrollo Web',
        Nro_Cursos: 5,
        Fecha_inicio: '2023-01-15',
        Fecha_Fin: '2023-06-30',
    },
    {
        MtM: ["kenyi"],
        Cod_Programa: 'P002',
        Nombre_Programa: 'Programa de Marketing Digital',
        Nro_Cursos: 4,
        Fecha_inicio: '2023-02-10',
        Fecha_Fin: '2023-07-20',
    },
    {
        MtM: ["rodolfo"],
        Cod_Programa: 'P003',
        Nombre_Programa: 'Programa de Ciencia de Datos',
        Nro_Cursos: 6,
        Fecha_inicio: '2023-03-05',
        Fecha_Fin: '2023-08-15',
    },
    {
        MtM: ["david"],
        Cod_Programa: 'P004',
        Nombre_Programa: 'Programa de Seguridad Informática',
        Nro_Cursos: 7,
        Fecha_inicio: '2023-04-20',
        Fecha_Fin: '2023-09-30',
    },
    {
        MtM: ["alejandro"],
        Cod_Programa: 'P005',
        Nombre_Programa: 'Programa de Redes de Computadoras',
        Nro_Cursos: 4,
        Fecha_inicio: '2023-05-10',
        Fecha_Fin: '2023-10-25',
    },
    {
        MtM: ["kenyi"],
        Cod_Programa: 'P006',
        Nombre_Programa: 'Programa de Desarrollo de Videojuegos',
        Nro_Cursos: 5,
        Fecha_inicio: '2023-06-15',
        Fecha_Fin: '2023-11-30',
    },
    {
        MtM: ["rodolfo"],
        Cod_Programa: 'P007',
        Nombre_Programa: 'Programa de Inteligencia Artificial',
        Nro_Cursos: 6,
        Fecha_inicio: '2023-07-05',
        Fecha_Fin: '2024-01-15',
    },
    {
        MtM: ["david"],
        Cod_Programa: 'P008',
        Nombre_Programa: 'Programa de Big Data',
        Nro_Cursos: 7,
        Fecha_inicio: '2023-08-20',
        Fecha_Fin: '2024-02-28',
    },
    {
        MtM: ["alejandro"],
        Cod_Programa: 'P009',
        Nombre_Programa: 'Programa de Cloud Computing',
        Nro_Cursos: 4,
        Fecha_inicio: '2023-09-10',
        Fecha_Fin: '2024-03-10',
    },
    {
        MtM: ["kenyi"],
        Cod_Programa: 'P010',
        Nombre_Programa: 'Programa de Ciberseguridad',
        Nro_Cursos: 5,
        Fecha_inicio: '2023-10-15',
        Fecha_Fin: '2024-04-20',
    },
    {
        MtM: ["rodolfo", "wilson"],
        Cod_Programa: 'P011',
        Nombre_Programa: 'Programa de Desarrollo de Aplicaciones Móviles',
        Nro_Cursos: 6,
        Fecha_inicio: '2023-11-05',
        Fecha_Fin: '2024-05-15',
    },
    {
        MtM: ["david"],
        Cod_Programa: 'P012',
        Nombre_Programa: 'Programa de Robótica',
        Nro_Cursos: 7,
        Fecha_inicio: '2023-12-20',
        Fecha_Fin: '2024-06-30',
    },
    {
        MtM: ["alejandro"],
        Cod_Programa: 'P013',
        Nombre_Programa: 'Programa de Machine Learning',
        Nro_Cursos: 4,
        Fecha_inicio: '2024-01-10',
        Fecha_Fin: '2024-07-10',
    },
    {
        MtM: ["kenyi"],
        Cod_Programa: 'P014',
        Nombre_Programa: 'Programa de Realidad Virtual',
        Nro_Cursos: 5,
        Fecha_inicio: '2024-02-15',
        Fecha_Fin: '2024-08-20',
    },
    {
        MtM: ["rodolfo"],
        Cod_Programa: 'P015',
        Nombre_Programa: 'Programa de DevOps',
        Nro_Cursos: 6,
        Fecha_inicio: '2024-03-05',
        Fecha_Fin: '2024-09-15',
    },
    {
        MtM: ["david"],
        Cod_Programa: 'P016',
        Nombre_Programa: 'Programa de Blockchain',
        Nro_Cursos: 7,
        Fecha_inicio: '2024-04-20',
        Fecha_Fin: '2024-10-30',
    },
    {
        MtM: ["alejandro"],
        Cod_Programa: 'P017',
        Nombre_Programa: 'Programa de Desarrollo Frontend',
        Nro_Cursos: 4,
        Fecha_inicio: '2024-05-10',
        Fecha_Fin: '2024-11-10',
    },
    {
        MtM: ["kenyi"],
        Cod_Programa: 'P018',
        Nombre_Programa: 'Programa de Desarrollo Backend',
        Nro_Cursos: 5,
        Fecha_inicio: '2024-06-15',
        Fecha_Fin: '2024-12-20',
    },
    {
        MtM: ["rodolfo"],
        Cod_Programa: 'P019',
        Nombre_Programa: 'Programa de Automatización de Pruebas',
        Nro_Cursos: 6,
        Fecha_inicio: '2024-07-05',
        Fecha_Fin: '2025-01-15',
    },
    {
        MtM: ["david", "wilson"],
        Cod_Programa: 'P020',
        Nombre_Programa: 'Programa de Seguridad en la Web',
        Nro_Cursos: 7,
        Fecha_inicio: '2024-08-20',
        Fecha_Fin: '2025-02-28',
    },
    {
        MtM: ["wilson"],
        Cod_Programa: 'P021',
        Nombre_Programa: 'Programa de Inteligencia de Negocios',
        Nro_Cursos: 5,
        Fecha_inicio: '2024-09-10',
        Fecha_Fin: '2025-03-10',
    },
    {
        MtM: ["alejandro"],
        Cod_Programa: 'P022',
        Nombre_Programa: 'Programa de Realidad Aumentada',
        Nro_Cursos: 4,
        Fecha_inicio: '2024-10-15',
        Fecha_Fin: '2025-04-20',
    },
    {
        MtM: ["kenyi"],
        Cod_Programa: 'P023',
        Nombre_Programa: 'Programa de Gestión de Proyectos',
        Nro_Cursos: 5,
        Fecha_inicio: '2024-11-05',
        Fecha_Fin: '2025-05-15',
    },
    {
        MtM: ["rodolfo", "wilson"],
        Cod_Programa: 'P024',
        Nombre_Programa: 'Programa de Desarrollo de Software',
        Nro_Cursos: 6,
        Fecha_inicio: '2024-12-20',
        Fecha_Fin: '2025-06-30',
    }
];
    
const obtenerProgramas = programas.filter(programa => {
    return programa.MtM.includes(usuario);
});

if (obtenerProgramas == "") {
    window.location.href = "/index.html"
}