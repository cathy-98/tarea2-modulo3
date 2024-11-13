console.log('Cargando el script del equipo-medico'); // mostrar en la consola

//areglo de doctores []
let doctores = [ // Objeto {}
    {
        image: "img/doctor1.webp", //  Atributo image
        nombre: "Dr. Juan Pérez", //  Atributo nombre
        especialidad: "Especialista en Cardiología", //  Atributo especialidad
        descripcion: "El Dr. Juan Pérez cuenta con más de 20 años de experiencia en cardiología.",
        genero:"m",
    },
    {
        image: "img/doctora2.webp", //  Atributo image
        nombre: "Dra. María López", //  Atributo nombre
        especialidad: "Especialista en Consultas Médicas", //  Atributo especialidad
        descripcion: "La Dra. María López es reconocida por su trabajo en consultas generales.",
        genero:"f",
    },
    {
        image: "img/doctor3.webp", //  Atributo image
        nombre: "Dr. Carlos Martínez", //  Atributo nombre
        especialidad: "Especialista en Hospitalización", //  Atributo especialidad
        descripcion: "El Dr. Carlos Martínez se especializa en atención hospitalaria.",
        genero:"m",
    },
    {
        image: "img/doctora4.webp", //  Atributo image
        nombre: "Dra. Elena García", //  Atributo nombre
        especialidad: "Especialista en Hospitalización.", //  Atributo especialidad
        descripcion: "Habitaciones confortables para tu recuperación.",
        genero:"f",
    },
    {
        image: "img/doctor1.webp", //  Atributo image
        nombre: "Dr. Juan Pérez", //  Atributo nombre
        especialidad: "Especialista en Cardiología", //  Atributo especialidad
        descripcion: "El Dr. Juan Pérez cuenta con más de 20 años de experiencia en cardiología.",
        genero:"m",
    },
    {
        image: "img/doctora2.webp", //  Atributo image
        nombre: "Dra. María López", //  Atributo nombre
        especialidad: "Especialista en Consultas Médicas", //  Atributo especialidad
        descripcion: "La Dra. María López es reconocida por su trabajo en consultas generales.",
        genero:"f",
    },
    {
        image: "img/doctor3.webp", //  Atributo image
        nombre: "Dr. Carlos Martínez", //  Atributo nombre
        especialidad: "Especialista en Hospitalización", //  Atributo especialidad
        descripcion: "El Dr. Carlos Martínez se especializa en atención hospitalaria.",
        genero:"m",
    },
    {
        image: "img/doctora4.webp", //  Atributo image
        nombre: "Dra. Elena García", //  Atributo nombre
        especialidad: "Especialista en Hospitalización.", //  Atributo especialidad
        descripcion: "Habitaciones confortables para tu recuperación.",
        genero:"f",
    },
];

let listadoDoctores = document.getElementById("listado-doctores");
let contenido = "";

for (let doctor of doctores) {
    console.log(doctor);
    contenido = contenido + `
        <div class="team-section__card">
            <img src="${doctor.image}" alt="Foto de Dr" class="team-section__card-image">
            <div class="team-section__card-body">
                <h3 class="team-section__card-title">${doctor.nombre}</h3>
                <p class="team-section__card-specialty">${doctor.especialidad}</p>
                <p class="team-section__card-description">${doctor.descripcion}</p>
            </div>
        </div>`; //para soportar saltos de linea ``
}

listadoDoctores.innerHTML = contenido;

let botonFiltrar = document.getElementById("filtrar-genero"); // Buscar en el dom este ID

botonFiltrar.addEventListener('click', function(event) {
    let genero = prompt("Ingrese el género a filtrar (m/f):"); // Pedir al usuario un valor

    if (genero === 'm' || genero === 'f') {
        let doctoresFiltrados = doctores.filter(function(doctor) {
            return doctor.genero === genero
        });

        let contenidoNuevo = "";

        for (let doctor of doctoresFiltrados) {
            contenidoNuevo = contenidoNuevo + `
                <div class="team-section__card">
                    <img src="${doctor.image}" alt="Foto de Dr" class="team-section__card-image">
                    <div class="team-section__card-body">
                        <h3 class="team-section__card-title">${doctor.nombre}</h3>
                        <p class="team-section__card-specialty">${doctor.especialidad}</p>
                        <p class="team-section__card-description">${doctor.descripcion}</p>
                    </div>
                </div>`; //para soportar saltos de linea ``
        }

        listadoDoctores.innerHTML = contenidoNuevo;
    } else {
        alert('el dato no es correcto');
    }
});