define(['modules/default/defaultview'], function (Default) {

    function View() {
    }

    View.prototype = $.extend(true, {}, Default, {


        init: function () {
            this.dom = $('<iframe border="0" frameborder="none" width="100%" height="100%" />');

            var self=this;
            this.dom.load(function(event) { // we remove the loading message
                if (self.dom.attr('src')!='about:blank') {
                    if (self._loadingTimeout) clearTimeout(self._loadingTimeout);
                    else self.hideLoading();
                }
            });
            // fix scroll bar
            // see http://stackoverflow.com/a/12726445/1247233 for explanations
            this.dom.css('vertical-align', 'bottom');

            this.module.getDomContent().html(this.dom);
            this.resolveReady();
        },

        blank: {
            url: blankIframe,
            doi: blankIframe
        },

        update: {
            url: function (moduleValue) {
                if (!moduleValue)
                    return;

                var self=this;
                if (self._loadingTimeout) clearTimeout(self._loadingTimeout);
                this._loadingTimeout = setTimeout(function() {
                    self._loadingTimeout=undefined;
                    self.showLoading();
                }, 500);

                this.dom.attr('src', moduleValue.get());
            },
            doi: function (moduleValue) {
                if (!moduleValue)
                    return;

                var self=this;
                if (self._loadingTimeout) clearTimeout(self._loadingTimeout);
                this._loadingTimeout = setTimeout(function() {
                    self._loadingTimeout=undefined;
                    self.showLoading();
                }, 500);

                this.dom.attr('src', 'http://dx.doi.org/' + moduleValue.get());
            }
        }

    });

    function blankIframe() {
        this.dom.attr('src', 'about:blank');
    }

    return View;

});
