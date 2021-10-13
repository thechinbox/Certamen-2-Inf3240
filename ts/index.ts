import jquery=require('jquery');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let datos:any= ["María Perez", "11111111-1", "922115544", "maria.perez@gmail.com", "Ninguno",  "2016/05/12",
                 "Valparaiso" ,"Valparaiso", "Av.Siempre Viva 1541"];
let nivel = ["Primaria", "Secundaria"];
let curso = 4;

let regiones = ["Valparaiso", "Santiago"]

let comunas=[   ["Algarrobo", "Cabildo", "Calera", "Calle Larga", "Cartagena", "Casablanca", "Catemu","Con Con",
                "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", "La Cruz", "La Ligua", 
                "Limache","Llaillay", "Los Andes", "Nogales", "Olmué", "Panquehue", "Papudo", "Petorca", 
                "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada","San Antonio","San Esteban",
                "San Felipe", "Santa Maria", "Santo Domingo", "Valparaiso", "Villa Alemana", "Viña del Mar", "Zapallar" ],

                ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia","Colina", "Conchalí", "Curacaví","El Bosque", 
                "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida",
                "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul",
                "Maipú", "Maria Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén",
                "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo",
                "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Tiltil", "Vitacura"]
            ]

let asignatura = [["Matematicas","Comprension","6.0"], ["Fisica", "Lógica", "7.0"],["Español", "Gramática", "7.0"]]
let regl:any = document.querySelector("#region")

function rutCheck(){
    let rutEx = new RegExp('^[0-9]+-[0-9kK]{1}')
    let rut:any = $("#RUT")
    if(rutEx.test(rut.val())){
      return true
    }
    return false
}
function numbCheck(){
    let telEx = new RegExp('^[0-9]{9}')
    let tel:any = $("#telefono")
    if(telEx.test(tel.val())){
      return true
    }
    return false
}

function acuCheck(){
    let acu:any = $("#acudientes").val
    if(acu.length > 5 && acu.strip() != ""){
      return true
    }
    return false
}

function dirCheck(){
    let acu:any = $("#direccion").val
    if(acu.length > 5 && acu.strip() != ""){
      return true
    }
    return false
}

function emailCheck(){
    let emailEx = new RegExp('^[A-Z0-9+_.-]+@[A-Z0-9.-]+$')
    let email:any = $("#telefono")
    if(emailEx.test(email.val())){
      return true
    }
    return false
    
}

regl.addEventListener("change", function(){
    for(let i=0; i< regiones.length; i++){
        if(regiones[i] = $("#region option:selected").text()){
            let scom:any = document.getElementById("comuna")
            scom.innerHTML = "";
            for(let j=0; j< comunas[i].length; j++){
                let opcion  = document.createElement('option')
                opcion.value = comunas[i][j];
                opcion.innerHTML = comunas[i][j];
                scom.appendChild(opcion);
            }   
            break;
        }
    } 
})

window.addEventListener("load", function(){
    $("#cursoCh").hide();
    $("#act").hide()
    $("#addclase").hide()
    $(".form-select").prop("disabled", true);
    
    $("#RUT").val(datos[1])
    $("#telefono").val(datos[2])
    $("#correo").val(datos[3])
    $("#acudientes").val(datos[4])
    let f = new Date(datos[5]);   
    $("#fechan").val(f.getDay().toString()+"/" + f.getMonth()+"/" + f.getFullYear().toString())
    $("#direccion").val(datos[8])
    $(".ch").prop("readonly", true);
    let asig:any = document.getElementById("asg") 
    let objet:any  = document.getElementById("obj") 
    let nota:any  = document.getElementById("nta") 
    let del:any  = document.getElementById("delete") 
    for(let i=0; i < asignatura.length; i++ ){
        let space= this.document.createElement("p") 
        let nomas = this.document.createElement("p")        
        let descob = this.document.createElement("p")   
        let valnt = this.document.createElement("p") 
        let deli = this.document.createElement("button")
        let icon = this.document.createElement("span")
        icon.innerHTML="delete"
        icon.className="material-icons"
        nomas.innerHTML=asignatura[i][0] 
        descob.innerHTML=asignatura[i][1] 
        valnt.innerHTML=asignatura[i][2] 
        deli.className = "buttonic"
        deli.id= i.toString()
        deli.appendChild(icon)
        space.className = "w-100 mb-3"
        asig.appendChild(nomas)
        objet.appendChild(descob)
        nota.appendChild(valnt)
        del.appendChild(deli)
        del.appendChild(space)
    }

    
    let cursoconst:any = this.document.getElementById('cursoConst');
    cursoconst.innerHTML="<span>" + curso.toString() + " de " + nivel[0]+"</span>"

    let estudiante:any = this.document.getElementById('nombre');
    estudiante.innerHTML='<span id="nombre">' + datos[0]+'</span>';
})

function checkup(){
    
}

$("#editar").on("click",function(){
    $(".form-select").prop("disabled", false); 
    $(".form-control").prop("readonly", false);
    $("#fechaNG").hide();
    let sreg:any = document.getElementById("region")
    sreg.innerHTML = "";
    for(let i=0; i< regiones.length; i++){
        let opcion  = document.createElement('option')
        opcion.value = regiones[i];
        opcion.innerHTML = regiones[i];
        sreg.appendChild(opcion);
    }   
    $("#editar").hide()
    $("#act").show()
});

$("#act").on("click", function(){
    if(rutCheck()&& numbCheck && acuCheck && emailCheck && dirCheck){
        datos[1]=$("#RUT").val()
        datos[2]=$("#telefono").val()
        datos[3]=$("#correo").val()
        datos[5]=$("#acudientes").val()
        datos[6]=$("#region:selected").text
        datos[7]=$("#comuna:selected").text
        datos[8]=$("#direccion").val

        $("#RUT").val(datos[1])
        $("#telefono").val(datos[2])
        $("#correo").val(datos[3])
        $("#acudientes").val(datos[4])
        $("#direccion").val(datos[8])
        $(".ch").prop("readonly", true);

        $(".form-select").prop("disabled", true);
        $("#editar").show()
        $("#act").hide()
    }
})
$("#baddc").on("click", function(){
    $("#addclase").show()
})


$("#crearasg").on("click", function(){   
    if($("#asgN").val() != "" && $("#obje").val() != "" && $("#notaN").val() != ""){
        
    }
    
})
