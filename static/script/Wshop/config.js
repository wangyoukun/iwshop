/**
 * Desc
 * @description Holp You Do Good But Not Evil
 * @copyright   Copyright 2014-2015 <ycchen@iwshop.cn>
 * @license     LGPL (http://www.gnu.org/licenses/lgpl.html)
 * @author      Chenyong Cai <ycchen@iwshop.cn>
 * @package     Wshop
 * @link        http://www.iwshop.cn
 */
var shoproot = location.pathname.substr(0, location.pathname.lastIndexOf('/') + 1);

require.config({
    paths: {
        util: 'util',
        Spinner: 'spin.min',
        jquery: 'http://cdn.ycchen.cc/jquery/jquery-2.1.1.min',
        config: 'config',
        Cart: 'class/cart.class',
        Slider: 'class/slider.class',
        Tiping: 'class/tiping.class',
        pdCounter: 'class/pdcounter.class',
        lazyLoad: 'http://cdns.ycchen.cc/scripts/jquery.lazyload.min',
        touchSlider: 'class/jquery.touchslider.min'
    },
    shim: {
        'util': {
            exports: 'util'
        },
        'Spinner': {
            exports: 'Spinner',
            deps: ['util']
        },
        'jquery': {
            exports: '$',
            deps: ['config']
        },
        'lazyLoad': {
            deps: ['jquery']
        },
        'Cart': {
            deps: ['jquery']
        },
        'touchSlider': {
            deps: ['jquery']
        }
    },
    // urlArgs: "bust=1.5.3",
    urlArgs: "bust=" + (new Date()).getMonth().toString() + (new Date()).getDay().toString() + (new Date()).getHours().toString(),
    xhtml: true
});

define([], function () {
    var config = {};

    return config;
});