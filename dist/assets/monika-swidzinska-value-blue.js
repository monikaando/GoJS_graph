'use strict';



;define("monika-swidzinska-value-blue/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("monika-swidzinska-value-blue/app", ["exports", "ember-resolver", "ember-load-initializers", "monika-swidzinska-value-blue/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("monika-swidzinska-value-blue/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("monika-swidzinska-value-blue/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("monika-swidzinska-value-blue/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("monika-swidzinska-value-blue/helpers/app-version", ["exports", "monika-swidzinska-value-blue/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("monika-swidzinska-value-blue/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("monika-swidzinska-value-blue/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("monika-swidzinska-value-blue/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "monika-swidzinska-value-blue/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("monika-swidzinska-value-blue/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("monika-swidzinska-value-blue/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("monika-swidzinska-value-blue/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("monika-swidzinska-value-blue/initializers/export-application-global", ["exports", "monika-swidzinska-value-blue/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("monika-swidzinska-value-blue/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("monika-swidzinska-value-blue/router", ["exports", "monika-swidzinska-value-blue/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('diagram', {
      path: '/'
    });
  });
});
;define("monika-swidzinska-value-blue/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("monika-swidzinska-value-blue/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("monika-swidzinska-value-blue/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("monika-swidzinska-value-blue/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("monika-swidzinska-value-blue/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zngyUCIe",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "monika-swidzinska-value-blue/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("monika-swidzinska-value-blue/templates/diagram", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "kIWQU5zS",
    "block": "{\"symbols\":[],\"statements\":[[10,\"script\"],[12],[2,\"\\n\\n    function init() {\\n        var $ = go.GraphObject.make;\\n        myDiagram = $(go.Diagram, \\\"myDiagramDiv\\\",\\n            {\\n                \\\"undoManager.isEnabled\\\": true,\\n                \\\"ModelChanged\\\": function saving(e) {\\n                    if (e.isTransactionFinished) {\\n                        document.getElementById('icon').className = \\\"fa fa-refresh\\\"\\n                        document.getElementById('p').innerText = \\\"Saving\\\";\\n                        setTimeout(function () {\\n                            document.getElementById('icon').className = \\\"fa fa-check-circle\\\";\\n                            document.getElementById('p').innerText = \\\"Saved\\\";\\n                        }, 5000);\\n                    }\\n                }\\n            });\\n\\n        var nodeDataArray = [\\n            { key: \\\"Apple\\\", color: \\\"red\\\", loc: \\\"0 0\\\" },\\n            { key: \\\"Banana\\\", color: \\\"yellow\\\", loc: \\\"200 0\\\" },\\n            { key: \\\"Orange\\\", color: \\\"orange\\\", loc: \\\"450 0\\\" },\\n            { key: \\\"Pear\\\", color: \\\"green\\\", loc: \\\"50 200\\\" },\\n            { key: \\\"Plum\\\", color: \\\"violet\\\", loc: \\\"400 150\\\" },\\n        ];\\n        var linkDataArray = [\\n            { from: \\\"Apple\\\", to: \\\"Banana\\\", color: \\\"turquoise\\\", text: \\\"eat\\\" },\\n            { from: \\\"Banana\\\", to: \\\"Orange\\\", color: \\\"turquoise\\\", text: \\\"fruits\\\" },\\n            { from: \\\"Orange\\\", to: \\\"Plum\\\", color: \\\"turquoise\\\", text: \\\"they\\\" },\\n            { from: \\\"Plum\\\", to: \\\"Pear\\\", color: \\\"turquoise\\\", text: \\\"are\\\" },\\n            { from: \\\"Pear\\\", to: \\\"Apple\\\", color: \\\"turquoise\\\", text: \\\"healthy\\\" },\\n        ];\\n        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);\\n\\n        function changeNodeFontSize(e, obj) {\\n            myDiagram.commit(function (d) {\\n                var nodedata = obj.part.data;\\n                var newfontsize = \\\"bold 24pt serif\\\";\\n                d.model.set(nodedata, \\\"font\\\", newfontsize);\\n            }, \\\"changed font size\\\");\\n        };\\n        function changeLabelFontSize(e, obj) {\\n            myDiagram.commit(function (d) {\\n                debugger\\n                var linkdata = obj.part.data;\\n                var newfontsize = \\\"bold 6pt serif\\\";\\n                d.model.set(linkdata, \\\"font\\\", newfontsize);\\n            }, \\\"changed font size\\\");\\n        };\\n\\n        myDiagram.nodeTemplate =\\n            $(go.Node, \\\"Auto\\\",\\n                new go.Binding(\\\"position\\\", \\\"loc\\\", go.Point.parse).makeTwoWay(go.Point.stringify),\\n                $(go.Shape, \\\"Ellipse\\\", { fill: \\\"white\\\", portId: \\\"\\\", fromLinkable: true, toLinkable: true },\\n                    new go.Binding(\\\"fill\\\", \\\"color\\\")\\n                ),\\n                $(go.TextBlock, \\\"text\\\", { margin: 15, font: \\\"bold 12px Georgia, Serif\\\" },\\n                    new go.Binding(\\\"text\\\", \\\"key\\\"),\\n                    new go.Binding(\\\"font\\\", \\\"font\\\"),\\n                ),\\n                {\\n                    contextMenu:\\n                        $(\\\"ContextMenu\\\",\\n                            $(\\\"ContextMenuButton\\\",\\n                                $(go.TextBlock, \\\"Change the font size\\\"),\\n                                { click: changeNodeFontSize }),\\n                        )\\n                },\\n            );\\n        myDiagram.linkTemplate =\\n            $(go.Link,\\n                {\\n                    routing: go.Link.AvoidsNodes,\\n                    corner: 10,\\n                    reshapable: true,\\n                    resegmentable: true,\\n                    relinkableFrom: true,\\n                    relinkableTo: true,\\n                    adjusting: go.Link.Stretch\\n                },\\n                $(go.Shape, { strokeWidth: 2 },\\n                    new go.Binding(\\\"stroke\\\", \\\"color\\\")\\n                ),\\n                $(go.Shape, { toArrow: \\\"Standard\\\", stroke: null },\\n                    new go.Binding(\\\"fill\\\", \\\"color\\\")\\n                ),\\n                $(go.Panel, \\\"Auto\\\",\\n                    { _isLinkLabel: true, segmentIndex: NaN, segmentFraction: .5 },\\n                    $(go.Shape, \\\"RoundedRectangle\\\", { fill: \\\"lightblue\\\", stroke: \\\"gray\\\" }),\\n                    $(go.TextBlock, \\\"new link\\\", { margin: 3 },\\n                        new go.Binding(\\\"text\\\", \\\"text\\\"),\\n                        new go.Binding(\\\"font\\\", \\\"font\\\")),\\n                    new go.Binding(\\\"segmentFraction\\\").makeTwoWay()\\n                ),\\n                {\\n                    contextMenu:\\n                        $(\\\"ContextMenu\\\",\\n                            $(\\\"ContextMenuButton\\\",\\n                                $(go.TextBlock, \\\"Change the font size\\\"),\\n                                { click: changeLabelFontSize }),\\n                        )\\n                },\\n            );\\n\\n        myDiagram.linkingTool =\\n            $(go.Link,\\n                $(go.Shape, { strokeWidth: 2 }),\\n                $(go.Shape, { toArrow: \\\"OpenTriangle\\\" }),\\n            )\\n    }\\n\\n\"],[13],[2,\"\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "monika-swidzinska-value-blue/templates/diagram.hbs"
    }
  });

  _exports.default = _default;
});
;define("monika-swidzinska-value-blue/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("monika-swidzinska-value-blue/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("monika-swidzinska-value-blue/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("monika-swidzinska-value-blue/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('monika-swidzinska-value-blue/config/environment', [], function() {
  var prefix = 'monika-swidzinska-value-blue';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("monika-swidzinska-value-blue/app")["default"].create({"name":"monika-swidzinska-value-blue","version":"0.0.0+04764b1c"});
          }
        
//# sourceMappingURL=monika-swidzinska-value-blue.map
