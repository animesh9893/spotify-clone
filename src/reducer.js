export const initialState={
	user:null,
	playlists:[],
	playing:false,
	item:null,
	// token: 'BQC4aRw0vtdZFSCUmEkWjgDeFX35L_YSgt6D_-D3IyMU-1A7bTaw88OiUt54cvLlwjjv4h7ISDPdLLmeWg3IhAqk6WW1vxcOjrZhOg0nAUfDViyYDVgGP5R34USqR5x4hMZObZcLv1cxNJblXHZHthk99KZLE7fvpmqvoAZ3pHZJugNYejXO',
	token: null,

}

const reducer = (state,action) =>{
	console.log(action);
	switch(action.type){
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			}
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			}
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			}
		default:
			return state;
	}
}

export default reducer