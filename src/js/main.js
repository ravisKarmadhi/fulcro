import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';
import 'select2/dist/js/select2.min.js';


import { App } from './parts/app.js'
import { Plugins } from './parts/plugins.js'
import { Parts } from './parts/parts.js'
import { Filter } from './parts/filter.js'
import { Project } from './parts/project.js'
import { Privacy } from './parts/privacy.js';
import { Select } from './parts/select.js';


// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {

  window.windowWidth = $(window).width();
  window.windowHeight = $(window).height();

  window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
  window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
  window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');

  //Functions List Below

  window.app = new App();
  window.app.init();

  window.plugins = new Plugins();
  window.plugins.init();

  window.parts = new Parts();
  window.parts.init();

  window.filter = new Filter();
  window.filter.init();

  window.project = new Project();
  window.project.init();
  window.privacy = new Privacy();
  window.privacy.init();

  window.select = new Select();
  window.select.init();
});

// ===========================================================================

$(document).ready(function () {
  if (windowWidth >= 0 && windowWidth <= 992) {
    $('.project-details-res ').insertAfter('.single-product-slider');
  }
});