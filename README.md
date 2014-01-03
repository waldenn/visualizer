Visualizer
==========

The visualizer is a tool developped by the cheminformatics department of the Swiss Federal Institute of Technology. It aims at the visualization of all sort of complex scientific data generated in JSON format. The visualization is started by by passing three URLs in the browser adress bar.

The visualizer works by modules which have the task to render one specific kind of information (table, chart, values, ...) to the screen, while being able to send out event and actions to other modules through the user interaction.
Modules may be added, moved, duplicated, resized and removed. Each module can be configured with built-in options to allow customization of your visualizer page.


Visualizer your data
==========

To get started, you need three json files located anywhere accessible by XHR requests.

* view.json
* data.json
* config.json

view.json
---------

The view.json file contains essentially the configuration of your visualization instance. You will define essentially which modules should be displayed and where. In addition, the entry variables will be defined. The entry variables will define which data from the data.json file will be readily available to the modules.

The view.json file can be empty as the visualizer can be manually configured. You may then copy your view.json file that the visualizer generated and store it manually or through CouchDB.

Here's an example of how you may create a module litterally

```JSON
{
		"url": "./modules/types/canvas_matrix/",
		"title": "Distance matrix",
		"position": {
			"left": 0,
			"right": 1,
			"top": 0
		},
		"size": { // In grid unit
			"width": 66,
			"height": 56
		},
		"configuration": {
			
		},
		"bgColor": [
			255,
			255,
			255,
			0
		],
		"displayWrapper": true,
		"id": 1,
		"vars_in": [
			{
				"rel": "matrix",
				"name": "distanceMatrix"
			}
		],
		"actions_in": [
			{}
		],
		"vars_out": [
			{
				"event": "onPixelHover",
				"rel": "row",
				"jpath": "element.jcamp",
				"name": "row"
			}
		],
		"actions_out": [
			{}
		]
	}
```
	
A module is defined by the following parameters

* *url* : The URL of the module. It should be a folder which contains view.js, model.js and controller.js (more on that later). This may be a relative URL pointing to a built-in module or you may use your own module
* *title* : The displayed title of your module
* *position* : Position in grid units. Top represents the z-index of the module
* *size* : Size of the module in grid units.
* *configuration* : The is an automatically created json file that contains the specific configuration of the module. Usually it is generated by the visualizer only.
* *bgColor* : the RGBA colors of the background of the module
* *displayWrapper* : If the borders of the module should be displayed
* *id* : A unique ID of the module (within the view.json file). If absent, it will be automatically generated
* *vars_in* : An array of variables that the visualizer accepts, paired with what the variable represents in the scope of the module (more on this on variable inputs)
* *vars_out* : An array of variables that the module can send. Paired with an event name, a reference (to access the data itself), a jpath (access to a subelement of the data) and a variable name.
* *actions_out* : An array of actions that the module sends on specific events (more on that later)

data.json
---------

. You may chose your own file structure, however to display certain kind of specific information, your object need to have a type. You will then be responsible that the type matches the data structure.



Data structure
---------

Example

```JSON
{
  "type": "chemicalMF",
  "value": "C6H12O6"
}

```

is a simple definition of a chemical formula. The formula could also be specified as a string however you would not have access to specific features of the chemicalMF type, such as appropriate rendering of text (subscript, superscript) or tools to play with the formula.

Another, more complex example could be the definition of a distance matrix :

```JSON
{
	"type" : "matrix",
	"yLabel" : [
		{
			"Subclass":"Nylon6",
			"code":"84A0210"
		},
		{
			"Subclass":"Nylon6",
			"code":"87A0422",
		}
	],

	"xLabel" : [
		{
			"Subclass":"Nylon6",
			"code":"84A0210"
		},
		{
			"Subclass":"Nylon6",
			"code":"87A0422",
		}
	],

	"data": [
		[ 1, 0.97807 ],
		[ 0.97807, 1 ]
	]
}
```

which will be suitable to be displayed by the matrix module.

