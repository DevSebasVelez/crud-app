/**
 * @returns {Object}
 */
const fetchQuote = async( ) => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();


    console.log(res);  //Objeto que recibimos de la petición
    console.log(data); //Arreglo del body del objeto, revisar posiciones del arreglo
    return data;
}



/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async (element) => {

    document.querySelector('#app-tittle').innerHTML = 'Breaking Bad';
    element.innerHTML = 'Loading...'

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteLabel = document.createElement('button');
    nextQuoteLabel.innerHTML = 'Next Quote';

    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.slice(0)[0].quote;;
        authorLabel.innerHTML = data.slice(0)[0].author;
        element.replaceChildren( quoteLabel, authorLabel, nextQuoteLabel );
    }

    // Add Listener
    nextQuoteLabel.addEventListener('click', () => {
        element.innerHTML = 'Loading...'
        fetchQuote()
            .then( (data) => renderQuote(data) )
    })

    fetchQuote()
        .then( (data) => renderQuote(data) )
}