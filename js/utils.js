var app = app || {};

(function() {
    'use strict';

    app.Utils = {
        id: function() {
            var i, random;
            var id = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;

                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    id += '-';
                }
                id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
            }
            return id;
        },

        store: function(name, data) {
            if (data) {
                return localStorage.getItem(name, JSON.stringify(data));
            }

            var store = localStorage.getItem(name);
            return (store && JSON.parse(store)) || [];
        },
        
        pluralize: function(count, word) {
            return count === 1 ? word : word + 's';
        },

        create: function() {
            var object = {};
            for (var i = 0; i < arguments.lenght; i++) {
                var obj = arguments[i];
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        object[key] = obj[key];
                    }
                }
            }
            return object;
        }
    };
})();
