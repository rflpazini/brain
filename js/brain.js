var app = app || {};

(function() {
    'use strict';

    var Utils = app.Utils;

    app.Brain = function(key) {
        this.key = key;
        this.list = Utils.store(key);
        this.changes = [];
    };

    app.Brain.prototype.subscribe = function(onChange) {
        this.changes.push(onChange);
    };

    app.Brain.prototype.inform = function() {
        Utils.store(this.key, this.list);
        this.changes.forEach(function(cb) {
            cb();
        });
    };

    app.Brain.prototype.addTodo = function(title) {
        this.list = this.list.concat({
            id: Utils.id(),
            title: title,
            completed: false
        });

        this.inform();
    };

    app.Brain.prototype.toogleChecked = function(checked) {
        this.list = this.list.map(function(todo) {
            return Utils.create({}, todo, {
                completed: checked
            });
        });
        this.inform();
    };

    app.Brain.prototype.toggle = function(toToggle) {
        this.list = this.list.map(function(todo) {
            return todo !== toToggle ?
                todo :
                Utils.create({}, todo, {
                    completed: !todo.completed
                });
        });
        this.inform();
    };

    app.Brain.prototype.destroy = function(todo) {
        this.list = this.list.filter(function(candidate) {
            return candidate !== todo;
        });
        this.inform();
    };

    app.Brain.prototype.save = function(toSave, text) {
        this.list = this.list.map(function(todo) {
            return todo !== toSave ? todo : Utils.create({}, todo, {
                title: text
            });
        });
        this.inform();
    };

    app.Brain.prototype.clear = function() {
        this.list = this.list.filter(function(todo) {
            return !todo.complete;
        });
        this.inform();
    };

})();
