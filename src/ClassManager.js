/**********************************************************\
|                                                          |
|                          hprose                          |
|                                                          |
| Official WebSite: http://www.hprose.com/                 |
|                   http://www.hprose.org/                 |
|                                                          |
\**********************************************************/

/**********************************************************\
 *                                                        *
 * ClassManager.js                                        *
 *                                                        *
 * hprose ClassManager for WeChat App.                    *
 *                                                        *
 * LastModified: Nov 16, 2016                             *
 * Author: Ma Bingyao <andot@hprose.com>                  *
 *                                                        *
\**********************************************************/

(function (hprose) {
    'use strict';
    var WeakMap = hprose.WeakMap;
    var classCache = Object.create(null);
    var aliasCache = new WeakMap();

    function register(cls, alias) {
        aliasCache.set(cls, alias);
        classCache[alias] = cls;
    }

    function getClassAlias(cls) {
        return aliasCache.get(cls);
    }

    function getClass(alias) {
        return classCache[alias];
    }

    hprose.ClassManager = Object.create(null, {
        register: { value: register },
        getClassAlias: { value: getClassAlias },
        getClass: { value: getClass }
    });

    hprose.register = register;

    register(Object, 'Object');

})(hprose);
