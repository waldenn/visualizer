requirejs.config({
    paths: {
        BiojsFeatureViewer: 'lib/biojs-1.0/src/main/javascript/Biojs.FeatureViewer',
        BiojsCore: 'lib/biojs-1.0/src/main/javascript/Biojs',
        BiojsMyFeatureViewer: 'modules/types/bio/feature_viewer/Biojs.MyFeatureViewer',
        BiojsDasProteinFeatureViewer: 'lib/biojs-1.0/src/main/javascript/Biojs.DasProteinFeatureViewer',
    },
    shim: {
        BiojsMyFeatureViewer: ["BiojsFeatureViewer"],
        BiojsFeatureViewer: ['BiojsCore', 'lib/biojs-1.0/src/main/resources/dependencies/jquery/jquery.tooltip',
            'lib/biojs-1.0/src/main/resources/dependencies/graphics/raphael-2.1.2',
            'lib/biojs-1.0/src/main/resources/dependencies/graphics/canvg',
            'lib/biojs-1.0/src/main/resources/dependencies/graphics/rgbcolor'],
        BiojsDasProteinFeatureViewer: ['BiojsMyFeatureViewer']
  }
});

define(['modules/default/defaultview', 'src/util/util', 'jquery-ui/slider', 'BiojsDasProteinFeatureViewer'], function(Default, Util) {
  function view() {};
  view.prototype = $.extend(true, {}, Default, {

    init: function() {
      if (! this.dom) {
        this._id = Util.getNextUniqueId();
        this.dom = $(' <div id="' + this._id + '"></div>').css('height', '100%').css('width', '100%');
        this.module.getDomContent().html(this.dom);
		    
      }
    },


    blank: {
      feature: function() {
        this.dom.empty();
      }
    },


    inDom: function() {
      this.resolveReady();
    },

    onResize: function() {
      this.dom.find('table').attr('width', this.dom.width());
    },


    update: {
      feature :function(data) {
        var self = this;
        var myPainter = new Biojs.MyFeatureViewer({
          target: this._id,
          json: data,
          imageWidth: 200
        });
        
        var dom = this.dom.find('svg').first();
        var viewbox = [0, 0, dom.attr('width'), dom.attr('height')];
        dom[0].setAttribute('viewBox', viewbox.join(' '));
        dom.attr('width', '100%');
        dom.attr('height', '100%');
        
        dom.parent().width('100%').height('100%');
      
        myPainter.onFeatureClick(function(data) {
          delete data.shape;
          self.module.controller.onFeatureClicked(data);
        });
      
        myPainter.onFeatureOn(function(data) {
          delete data.shape;
          self.module.controller.onFeatureMouseOver(data);
        });
      }
    },

    getDom: function() {
      return this.dom;
    },
  });

  return view;
});