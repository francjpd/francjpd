import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import ratingComponent from './rating.component';
import './rating.scss';
const ratingModule:string = 
        angular
            .module('rating',[])
            .component('rating',ratingComponent.getInstance())
            .name;

export default ratingModule;

