import angular = require('angular');

import MainCtrl from './main.controller';

export const MainComponent = {
           template:`
                    <div class="container">
                        <header></header>
                        <div class="main">
                            <div ui-view></div>
                        </div>
                    </div>
                    `,
            controller:MainCtrl

    }
       

