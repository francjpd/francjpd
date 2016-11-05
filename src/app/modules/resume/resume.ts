import angular =  require('angular'); // since it has not default export!;
import ResumeCtrl from './resume.controller';

const resume = angular.module( 'cv.resume',[
                    
        ] )
    .controller('ResumeCtrl', ResumeCtrl);