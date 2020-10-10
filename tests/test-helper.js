import Application from 'monika-swidzinska-value-blue/app';
import config from 'monika-swidzinska-value-blue/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
