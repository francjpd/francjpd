///<reference types="angular"/>

import angular = require('angular');

import Experience from '../../../common/model/experience';

export default class ExperienceCtrl implements ng.IComponentController {


    experience: Experience[];

    constructor() {

    }
    $onChanges() {


    }
    showExperience(card, $event): void {


        let element: JQuery = angular.element($event.target);
        if (!element.hasClass('material-icons')) {

            this.experience.forEach((exp) => {
                exp.hideme = !exp.hideme;
            });
            card.showExperience = !card.showExperience;
            card.hideme = false;
           


            let parentEl: JQuery = (this.findDaddy(element));
            parentEl.css('width', parentEl.width());
            parentEl.css('height', parentEl.height());
            $event.stopPropagation();
            setTimeout(() => {
                parentEl.css('width', '100%');
                parentEl.css('height', '100%');
            }, 100)

        }
    }

    findDaddy(element: JQuery): JQuery {
        let result: HTMLElement;
        if (angular.element(element).hasClass('card')) {
            return element;
        } else {
            return this.findDaddy(element.parent());
        }
    }
}