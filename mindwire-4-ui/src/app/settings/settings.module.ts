import * as angular from 'angular';
import settingsComponent from './settings';
import moreSettingsComponent from './moresettings.controller';
import { routes } from './settings.routes';

export default angular.module('settings', [])
    .config(routes)
    .component("settings", settingsComponent)
    .component("moresettings", moreSettingsComponent)
    .name;