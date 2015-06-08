import Ember from 'ember';
import { mdRemarkable } from 'add-test/helpers/md-remarkable';

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.Handlebars.helper('md', mdRemarkable)
}

export default {
  name: 'add-test',
  initialize: initialize
};
