import './app.jsx';
import Beers from '../../collections/collections.js';

Template.body.onCreated(function(){
window.Beers = Beers; // Patients collection should be in the import list first.
});
