'use strict';

define([
    'jquery',
    'modules/default/defaultview',
    'lib/twigjs/twig',
    'src/util/debug'
], function ($, Default, Twig, Debug) {

    function View() {
    }

    $.extend(true, View.prototype, Default, {
        init: function () {

            this.dom = $('<div>').css({
                height: '100%',
                width: '100%',
                'user-select': this.module.getConfigurationCheckbox('selectable', 'yes') ? 'initial' : 'none'
            });

            this._values = new DataObject();
            this.template = Twig.twig({
                data: this.module.getConfiguration('template')
            });
        },
        blank: {
            value: function () {
                this.dom.empty();
            },
            tpl: function () {
                this.template = Twig.twig({
                    data: ''
                });
            }
        },
        inDom: function () {
            this.module.getDomContent().html(this.dom);
            this.resolveReady();
            this.render();
        },
        update: {
            value: function (value, name) {
                /*
                 Convert special DataObjects
                 (twig does some check depending on the filter used
                 and the values need to be native)
                 */
                this._values[name] = value.resurrect();
                this.render();
            },
            tpl: function (value) {
                var tpl = value.get().toString();
                try {
                    this.template = Twig.twig({
                        data: tpl
                    });
                    this.render();
                } catch (e) {
                    Debug.info('Problem with template: ' + e);
                }
            }
        },
        render: function () {
            var that = this;
            var render = this.template.renderAsync(this._values);
            this.dom.html(render.html);
            render.render().then(function () {
                that.module.controller.onRendered(that.dom.html());
            });
        }
    });

    return View;

});
