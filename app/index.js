import angular from 'angular';
import { MainCtrl } from './main/MainCtrl';
var moduleName = 'app';

var app = angular.module(moduleName, []).controller('mainController', MainCtrl)
export default moduleName;