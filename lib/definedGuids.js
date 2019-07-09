'use strict';

const map = {};

add('36fc9e60-c465-11cf-8056-444553540000', 'device//usb-controller');

function add(guid, descriptor, owner) {
    map[guid.toLowerCase()] = {descriptor: descriptor};
}