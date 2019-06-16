var nombre = '';
var arreglo = ['Carlos','Erick','Juan', 'Estuardo', 'Jaime', 'Christian'];
var arregloEstatico = []
var a = 1;
var x = 1;


function agregar(){
	nombre = document.getElementById('nombre').value;
	console.log(nombre);
	arreglo.push(nombre);
	console.log("Agregado Correctamente");
	document.getElementById('nombre').value = '';
}

function imprimir(){
	arreglo.forEach(element => {
		console.log(element)
	});	
	arregloEstatico = arreglo;
	arregloEstatico.forEach(element => {
		var table = document.getElementById("miTabla");
		var row = table.insertRow(a);
		var numero = row.insertCell(0);
		var nom = row.insertCell(1);
		nom.innerHTML = element;
		numero.innerHTML = a; 
		a++;
	});	
}
function filtrar(){
	borrar();
	arregloEstatico.forEach(element => {
		var table = document.getElementById("miTabla");
		var row = table.insertRow(x);
		var numero = row.insertCell(0);
		var nom = row.insertCell(1);
		nom.innerHTML = element;
		numero.innerHTML = x; 
		x++;
	});	
}

function buscar(){
	arregloEstatico = arreglo;
	const list = []
	var parametro = document.getElementById('buscador').value;
	console.log(parametro);
	if(parametro !== ''){
		for (const elemento of arregloEstatico) {
			if (elemento.toLowerCase().indexOf(parametro.toLowerCase()) > -1){
				list.push(elemento);
				this.arregloEstatico = list;
			}else{
				if(list.length == 0){
					this.arregloEstatico = [];
				}
			}
		}
		filtrar();
	}
}

function borrar(){
	var table = document.getElementById("miTabla");
	var count = $("#miTabla td").closest("tr").length;
	for(let i =1; i <= count; i++){
		table.deleteRow(1);
		a =1;
		x =1;
	}
	
}
