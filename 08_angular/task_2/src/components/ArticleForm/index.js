import uirouter from 'angular-ui-router';

import articleFormRouting from './articleForm.routing';
import articleFormController from './articleForm.controller';

let articleForm = angular.module('articleForm', [uirouter])
    .config(articleFormRouting)
    .controller('articleFormController', articleFormController)
    .name;

export default articleForm;