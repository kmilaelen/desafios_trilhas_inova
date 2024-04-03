listaFrascos=[12, 5, 23, 17, 8, 14, 3, 19];
function ordenaFrascos(listaFrascos){
    let lista=listaFrascos;
    for(let indice=0;indice<lista.length; indice++){
for(let indice2=0; indice2<lista.length-indice-1; indice2++){
if (lista[indice2]>lista[indice2+1]){
    let auxiliar=lista[indice2];
    lista[indice2]=lista[indice2+1];
    lista[indice2+1]=auxiliar;

}
    }
}
return lista;
}

console.log("A ordem dos números é"+ordenaFrascos(listaFrascos));