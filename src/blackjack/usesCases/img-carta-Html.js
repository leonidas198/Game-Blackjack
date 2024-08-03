
/**
 * @param {String} imgCarta crea la imagen por defecto de cada carta
 * @returns {HTMLImageElement}
 */
export const crearCartaHtml = ( carta ) => {

    if ( !carta ) throw new Error('La carta es obligatoria');
    
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');    

    return imgCarta;
}

