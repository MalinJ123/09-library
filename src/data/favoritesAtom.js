import {atom} from 'recoil'

const favoritesAtom = atom ({
	key: 'favorites',
	default: [] 
})

//array med bok objekt, 
//[{ id, title, author}]

export {favoritesAtom}