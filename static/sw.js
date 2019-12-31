/* eslint-env serviceworker */
/* eslint-disable no-restricted-globals */
/* global workbox */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0-alpha.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}