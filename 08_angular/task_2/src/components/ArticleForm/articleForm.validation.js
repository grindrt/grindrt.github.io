export default function articleFormValidation() {
    return {
        require: 'ngModel',
        link: function (scope, element, attributes, control) {
            control.$validators.articleFormValidation = function (modelValue) {
                return control.$isEmpty(modelValue) || modelValue.length >= 20;
            };
        }
    };
}