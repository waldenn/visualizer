define(['modules/module'], function(Module) {

	var incrementalId = 0;
	var modules = [], definitions = [];

	return {
		getTypes: function() {
			return {
				'display_value': 'Single value',
				'grid': 'Table',
				'2d_list': '2D Grid',
				'hashmap': 'Object viewer',
				'recursive_tree': 'Recursive tree',
				'iframe': 'iFrame',
// Interactive modules	
				'button_url': 'Button URL',
				'webservice_button': 'Webservice button',
				'webservice_cron': 'Webservice cron',
				'webservice_Search': 'Webservice search',
				'editable_grid': 'Editable Table',
				'grid_selector': 'Table Selector',	
				'filelistupload': 'Files upload',	
				'object_editor': 'Object editor',
				'xyzoomnavigator': 'XY zoom navigator',	
// Science modules
				'spectra_displayer': 'Spectra displayer',
				'gcms': 'GC-MS',
				'ivstability': 'IV stability',
				'mol2d': '2D Molecule viewer',
// Statistics modules
				'dendrogram': 'Dendrogram',
				'loading_plot': 'Loading plot',
				
// Graphical modules
				'canvas_matrix': 'Matrix',
				'plot': 'Plot',
			}
		},

		newModule: function(definition) {
			var module = new Module(definition);
			module.setId(++incrementalId);
			modules.push(module);
			definitions.push(definition);
			return module;
		},

		removeModule: function(module) {
			modules.splice(modules.indexOf(module), 1);
			definitions.splice(definitions.indexOf(module.definition), 1);
		},

		getModules: function() {
			return modules;
		},

		getDefinitions: function() {
			return definitions;
		}
	}
});
