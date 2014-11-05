'use strict';

define([ require, '../../field', 'src/util/util', 'jquery-ui', 'components/farbtastic/src/farbtastic', 'components/spectrum/spectrum' ], function (require, FieldDefaultConstructor, Util, ui, spectrum) {

    var felement = null;

    function FieldConstructor(name) {
        var self = this;

        Util.loadCss('./components/spectrum/spectrum.css');
        this.name = name;
        this.domExpander = $('<div></div>');
        this.domExpander.append('<div><input type="text" /></div>');
        $(this.domExpander).children('div').css('float', 'left').addClass('form-spectrum');
        $(this.domExpander).find('input').spectrum({
            color: '#ffffff',
            cancelText: '',
            showInitial: true,
            showInput: true,
            flat: true,
            clickoutFiresChange: true,
            showAlpha: true,
            showPalette: true,
            showSelectionPalette: true,
            palette: [ ],
            localStorageKey: 'visualizer-spectrum',
            change: function (color) {
                var rgb = color.toRgb();
                self.getElementExpanded().value = felement.value = [ rgb['r'], rgb['g'], rgb['b'], rgb['a'] ];
                // self.form.hideExpander();
                felement.toggleSelect();
            }
        });

        $('<div />').addClass('clear').appendTo(this.domExpander);
    }

    FieldConstructor.prototype = new FieldDefaultConstructor();

    FieldConstructor.prototype.getOptions = function (fieldElement) {

        return fieldElement.getOptions() || this.options.options
    };

    FieldConstructor.prototype.showExpander = function (fieldElement) {
        felement = fieldElement;
        this._showExpander(fieldElement);
        var value = fieldElement.value || [0, 0, 0, 1];
        this.domExpander.find('.form-spectrum').spectrum('set', 'rgba(' + value.join(',') + ')');
    };

    return FieldConstructor;

});