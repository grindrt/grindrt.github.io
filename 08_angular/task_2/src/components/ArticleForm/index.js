import uirouter from 'angular-ui-router';

import articleFormRouting from './articleForm.routing';
import articleFormController from './articleForm.controller';
import articleFormValidation from './articleForm.validation';

let articleForm = angular.module('articleForm', [uirouter])
    .directive('articleFormValidation', articleFormValidation)
    .config(articleFormRouting)
    .controller('articleFormController', articleFormController)
    .name;

export default articleForm;