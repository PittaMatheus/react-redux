import { createStore } from 'redux';
// Variavel global que armazena as infos

import rootReduccer from './reducers'

const store = createStore(rootReduccer);

export default store;

