/// <reference types="angular"/>

import angular = require('angular');

import resumeModule from './resume/resume.module';
import poleoEffectModule from './poleo-effect/poleoeffect.module'; 
import menuModule from './menu/menu.module';
import loadingModule from './loading/loading.module';
import ratingModule from  './rating/rating.module';


let bundle:Array<string> = [poleoEffectModule,
                                resumeModule,
                                menuModule,
                                loadingModule,
                                ratingModule];

const components:string = angular
        .module('components',bundle)
        .name;

export default components;

