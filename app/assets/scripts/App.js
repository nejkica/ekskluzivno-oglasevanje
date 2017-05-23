/*jshint esversion: 6 */

import MobileMenu from './modules/MobileMenu';
// import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import PozdravnaCrta from './modules/PozdravnaCrta';

var mobileMenu = new MobileMenu();
// new RevealOnScroll($(".feature-item"), "85%");
// new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
var pozdravnaCrta = new PozdravnaCrta();

// console.log('delam');