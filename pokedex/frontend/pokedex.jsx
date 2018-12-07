import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import { configureStore } from './store/store';
import { requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PokemonDetailContainer from './components/pokemon/pokemon_detail_container';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';

const Root = ({ store }) => (
  <Provider store={store}>
     <HashRouter>
      <Switch>
      <Route path="/" component={PokemonIndexContainer} />
      <Route path="/pokemon/:id" component={PokemonDetailContainer} />
      </Switch>
     </HashRouter>
  </Provider>
);
  
document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  ReactDOM.render(
    <div>
      <h1 className="title">Pokedex</h1>
      <Root store={store}/>
    </div>, rootEl);
});