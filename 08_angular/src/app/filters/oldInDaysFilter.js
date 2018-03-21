import angular from 'angular';

angular.module('toDo')
    .filter('oldInDaysFilter', ()=>(date)=>{
        const ms = Date.now() - new Date(date);
        const daysAmount = Math.floor(ms / (1000 * 60 * 60 * 24));

        return daysAmount > 0 ? daysAmount : 0.5;
    })