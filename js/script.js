const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

// Milestone 1
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const iconsContainer = $('#icons-container');
const arraycolored = colorIcons(icons, colors);
printIcons(arraycolored, iconsContainer);

/* ------------ FUNZIONI ------------ */

// Popola il container con le icone
//
// array icone --> array di oggetti dove ogni oggetto è un'icona
// container --> un oggetto jQuery che rappresenta l'elemento in cui si stamperanno le icone
//
// retur: vuoto
function printIcons(arrayIcone, container) {
	// ForEach per scrivere le icone nel container
	arrayIcone.forEach(element =>  {

		// Destructuring
		const {name, prefix, family, color} = element;
		let nomeMaiuscolo = name.toUpperCase();

		const iconElementHTML = `
		<div class="icon">
            <i class="${family} ${prefix}${name}" style="color: ${color};"></i>
            <div>
                ${nomeMaiuscolo}
            </div>
        </div>
		`;

		container.append(iconElementHTML);
	});
}

// Nuovo array di icone con colori
//
// arrayIconeOriginali --> array di oggetti che rappresentano le icone
// colorArray --> array di stringhe che rappresentano un colore css
//
// return: array di oggetti in cui ogni oggitti rappresenta un'icona con anche i colori
function colorIcons(arrayIconeOriginali, colorArray) {
	const iconsType = getIconsType(arrayIconeOriginali);

	const iconeConColori = arrayIconeOriginali.map((element) => {
		const newIconOBj = {
			...element
		};

		const iconTypeIndex = iconsType.indexOf(newIconOBj.type);

		if (iconTypeIndex != -1) {
			newIconOBj.color = colorArray[iconTypeIndex];
		};

		return newIconOBj;
	});

	return iconeConColori;
};

// Array con type di icons
//
// iconsArray --> array di oggetti che rappresentano le icone
//
// return: array di stringhe
function getIconsType(iconsArray) {
	const typeArray = [];

	iconsArray.forEach( (element) => {
		const elementType = element.type;

		if ( typeArray.includes(elementType) == false ) {
			typeArray.push(elementType);
		}
	});

	return typeArray;
};