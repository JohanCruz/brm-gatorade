export function validations(data, callException){
    // validación de existencia de datos
    if (!data || data === null || data.usuarios == null || data.bodegas == null 
        ||  data.productos == null ||  data.inventarios == null ){                
        callException.message("Insufficient data !!");  
    }

    // validacion de tipo de datos
    if (typeof data.usuarios !== typeof  1 || typeof data.bodegas !== typeof  1 
        || typeof  data.productos !== typeof  1  || typeof data.inventarios !== typeof  1 ){                
        callException.message("Incorrect data !!");  
    }

    // validacion de rangos de creación
    function ranges(item) {
        return item <= 0 || item > 100 ? true: false           
    }
    if (ranges(data.usuarios) || ranges(data.bodegas) || ranges(data.productos)  || ranges(data.inventarios)){
        callException.message("Incorrect range of any data !!");
    }
}