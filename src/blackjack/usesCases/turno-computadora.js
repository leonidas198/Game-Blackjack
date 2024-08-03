import { crearCartaHtml, pedirCarta, valorCarta } from './';



/**
 * 
 * @param {Number} puntosMinimos puntos que la computadora necesita para ganar
 * @param {HtmlElement} puntosHTML HTML para mostrar los puntos
 * @param {HtmlElement} divCartasComputadora HTML para mostrar los puntos
 * @param {Array<String>} deck 
 * 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('Son necesarios los puntos minimos');
    
    if ( !puntosHTML ) throw new Error('Son necesarios los puntosHTML');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}