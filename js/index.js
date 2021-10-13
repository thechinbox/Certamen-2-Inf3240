"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var datos = ["María Perez", "11111111-1", "922115544", "maria.perez@gmail.com", "Ninguno", "2016/05/12",
    "Valparaiso", "Valparaiso", "Av.Siempre Viva 1541"];
var nivel = ["Primaria", "Secundaria"];
var curso = 4;
var regiones = ["Valparaiso", "Santiago"];
var comunas = [["Algarrobo", "Cabildo", "Calera", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Con Con",
        "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", "La Cruz", "La Ligua",
        "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", "Panquehue", "Papudo", "Petorca",
        "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada", "San Antonio", "San Esteban",
        "San Felipe", "Santa Maria", "Santo Domingo", "Valparaiso", "Villa Alemana", "Viña del Mar", "Zapallar"],
    ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque",
        "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida",
        "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul",
        "Maipú", "Maria Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén",
        "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo",
        "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Tiltil", "Vitacura"]
];
var asignatura = [["Matematicas", "Comprension", "6.0"], ["Fisica", "Lógica", "7.0"], ["Español", "Gramática", "7.0"]];
var regl = document.querySelector("#region");
function rutCheck() {
    var rutEx = new RegExp('^[0-9]+-[0-9kK]{1}');
    var rut = $("#RUT");
    if (rutEx.test(rut.val())) {
        return true;
    }
    return false;
}
function numbCheck() {
    var telEx = new RegExp('^[0-9]{9}');
    var tel = $("#telefono");
    if (telEx.test(tel.val())) {
        return true;
    }
    return false;
}
function acuCheck() {
    var acu = $("#acudientes").val;
    if (acu.length > 5 && acu.strip() != "") {
        return true;
    }
    return false;
}
function dirCheck() {
    var acu = $("#direccion").val;
    if (acu.length > 5 && acu.strip() != "") {
        return true;
    }
    return false;
}
function emailCheck() {
    var emailEx = new RegExp('^[A-Z0-9+_.-]+@[A-Z0-9.-]+$');
    var email = $("#telefono");
    if (emailEx.test(email.val())) {
        return true;
    }
    return false;
}
regl.addEventListener("change", function () {
    for (var i = 0; i < regiones.length; i++) {
        if (regiones[i] = $("#region option:selected").text()) {
            var scom = document.getElementById("comuna");
            scom.innerHTML = "";
            for (var j = 0; j < comunas[i].length; j++) {
                var opcion = document.createElement('option');
                opcion.value = comunas[i][j];
                opcion.innerHTML = comunas[i][j];
                scom.appendChild(opcion);
            }
            break;
        }
    }
});
window.addEventListener("load", function () {
    $("#cursoCh").hide();
    $("#act").hide();
    $("#addclase").hide();
    $(".form-select").prop("disabled", true);
    $("#RUT").val(datos[1]);
    $("#telefono").val(datos[2]);
    $("#correo").val(datos[3]);
    $("#acudientes").val(datos[4]);
    var f = new Date(datos[5]);
    $("#fechan").val(f.getDay().toString() + "/" + f.getMonth() + "/" + f.getFullYear().toString());
    $("#direccion").val(datos[8]);
    $(".ch").prop("readonly", true);
    var asig = document.getElementById("asg");
    var objet = document.getElementById("obj");
    var nota = document.getElementById("nta");
    var del = document.getElementById("delete");
    for (var i = 0; i < asignatura.length; i++) {
        var space = this.document.createElement("p");
        var nomas = this.document.createElement("p");
        var descob = this.document.createElement("p");
        var valnt = this.document.createElement("p");
        var deli = this.document.createElement("button");
        var icon = this.document.createElement("span");
        icon.innerHTML = "delete";
        icon.className = "material-icons";
        nomas.innerHTML = asignatura[i][0];
        descob.innerHTML = asignatura[i][1];
        valnt.innerHTML = asignatura[i][2];
        deli.className = "buttonic";
        deli.id = i.toString();
        deli.appendChild(icon);
        space.className = "w-100 mb-3";
        asig.appendChild(nomas);
        objet.appendChild(descob);
        nota.appendChild(valnt);
        del.appendChild(deli);
        del.appendChild(space);
    }
    var cursoconst = this.document.getElementById('cursoConst');
    cursoconst.innerHTML = "<span>" + curso.toString() + " de " + nivel[0] + "</span>";
    var estudiante = this.document.getElementById('nombre');
    estudiante.innerHTML = '<span id="nombre">' + datos[0] + '</span>';
});
function checkup() {
}
$("#editar").on("click", function () {
    $(".form-select").prop("disabled", false);
    $(".form-control").prop("readonly", false);
    $("#fechaNG").hide();
    var sreg = document.getElementById("region");
    sreg.innerHTML = "";
    for (var i = 0; i < regiones.length; i++) {
        var opcion = document.createElement('option');
        opcion.value = regiones[i];
        opcion.innerHTML = regiones[i];
        sreg.appendChild(opcion);
    }
    $("#editar").hide();
    $("#act").show();
});
$("#act").on("click", function () {
    if (rutCheck() && numbCheck && acuCheck && emailCheck && dirCheck) {
        datos[1] = $("#RUT").val();
        datos[2] = $("#telefono").val();
        datos[3] = $("#correo").val();
        datos[5] = $("#acudientes").val();
        datos[6] = $("#region:selected").text;
        datos[7] = $("#comuna:selected").text;
        datos[8] = $("#direccion").val;
        $("#RUT").val(datos[1]);
        $("#telefono").val(datos[2]);
        $("#correo").val(datos[3]);
        $("#acudientes").val(datos[4]);
        $("#direccion").val(datos[8]);
        $(".ch").prop("readonly", true);
        $(".form-select").prop("disabled", true);
        $("#editar").show();
        $("#act").hide();
    }
});
$("#baddc").on("click", function () {
    $("#addclase").show();
});
$("#crearasg").on("click", function () {
    if ($("#asgN").val() != "" && $("#obje").val() != "" && $("#notaN").val() != "") {
    }
});
