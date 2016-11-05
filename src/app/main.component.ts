import angular = require('angular');

import MainCtrl from './main.controller';

export const MainComponent = {
           template:`<app></app>
                    <header></header>
                    <div class="main">
                        <div ui-view></div>
                    </div>
                    `,
            controller:MainCtrl

    }
       

