import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		results: [],
		details: []
	},
	getters: {
		results(state) {
		    return state.results.map(item => {
		    	item.poster_path = 'https://image.tmdb.org/t/p/w500/' + item.poster_path;
		    	item.backdrop_path = 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path;
		    	return item
		    })
		},
		details(state) {
			return state.details.map(item => {
				item.key = 'https://youtube.com/embed/' + item.key;
				return item;
			})
		}
	},
	mutations: {
		getmovies(state, {type, items}) {
			state[type] = items
		},
		getdetails(state, {type, items}) {
			state[type] = items
		}
	},
	actions: {
		search({ commit }, query) {

			const API_KEY = '38ba154e5240230789a406d6d21913e4';
            var url = `https://api.themoviedb.org/3/search/movie?api_key=38ba154e5240230789a406d6d21913e4&query=${query}&language=ru-Ru`
            
          
            Vue.axios.get(url).then((response) => {
            	var results = response.data.results;
                commit('getmovies',{ type: 'results', items: results });
            })

		},
		details({ commit }, id) {
			 var url_video = `http://api.themoviedb.org/3/movie/${id}/videos?api_key=38ba154e5240230789a406d6d21913e4`;

			 Vue.axios.get(url_video).then(response => {
			 	 var details = response.data.results;
			 	 console.log(details);
			 	 commit('getdetails', {type: 'details', items: details});
			 });
		}
		
	}
});


export default store;
