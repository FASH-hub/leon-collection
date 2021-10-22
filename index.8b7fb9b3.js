// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cSv3F":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "21352e468b7fb9b3";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3auaO":[function(require,module,exports) {
var _display = require("./display");
var _data = require("./data");
_display.cardsDisplay(_data.sport);

},{"./display":"bNtsY","./data":"lKWCw"}],"bNtsY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cardsDisplay", ()=>cardsDisplay
);
let cardsDisplay = (sport)=>{
    let div = document.querySelector('div');
    let main = document.createElement('main');
    //loops on object "sport" containing sport celebreties.
    for (const elt of sport){
        let section = document.createElement('section');
        let image = document.createElement('img');
        image.src = elt.picture;
        section.appendChild(image);
        let title = document.createElement('h1');
        title.innerText = elt.name;
        section.appendChild(title);
        let para = document.createElement('p');
        let birthDetails = document.createTextNode(' Was born on ' + elt.birthDate + ' in ' + elt.birthPlace + ' , ' + elt.country + '. ');
        let family = document.createTextNode(elt.name + ' is ' + elt.spouse + ' and has ' + elt.children + '. ');
        let profession = document.createTextNode(elt.name + elt.competitionLeague + ' for ' + elt.Team + ' and has ' + elt.championships);
        para.append(birthDetails, family, profession);
        section.appendChild(para);
        let aside = document.createElement('aside');
        let asideLink = document.createElement('a');
        asideLink.setAttribute("href", elt.biography);
        asideLink.innerHTML = 'Full biography';
        aside.appendChild(asideLink);
        section.appendChild(aside);
        main.appendChild(section);
        console.log(main);
    }
    div.appendChild(main);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lKWCw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sport", ()=>sport
);
var _lewisJpg = require("../images/Lewis.jpg");
var _lewisJpgDefault = parcelHelpers.interopDefault(_lewisJpg);
var _boltJpg = require("../images/bolt.jpg");
var _boltJpgDefault = parcelHelpers.interopDefault(_boltJpg);
var _bryantJpg = require("../images/bryant.jpg");
var _bryantJpgDefault = parcelHelpers.interopDefault(_bryantJpg);
var _cr7Jpg = require("../images/cr7.jpg");
var _cr7JpgDefault = parcelHelpers.interopDefault(_cr7Jpg);
var _elfenomenoJpg = require("../images/elfenomeno.jpg");
var _elfenomenoJpgDefault = parcelHelpers.interopDefault(_elfenomenoJpg);
var _federerJpg = require("../images/federer.jpg");
var _federerJpgDefault = parcelHelpers.interopDefault(_federerJpg);
var _lebronJpg = require("../images/lebron.jpg");
var _lebronJpgDefault = parcelHelpers.interopDefault(_lebronJpg);
var _williamsWebp = require("../images/williams.webp");
var _williamsWebpDefault = parcelHelpers.interopDefault(_williamsWebp);
var _lionelJpeg = require("../images/lionel.jpeg");
var _lionelJpegDefault = parcelHelpers.interopDefault(_lionelJpeg);
var _zizouJpg = require("../images/zizou.jpg");
var _zizouJpgDefault = parcelHelpers.interopDefault(_zizouJpg);
var _nadalJpg = require("../images/nadal.jpg");
var _nadalJpgDefault = parcelHelpers.interopDefault(_nadalJpg);
var _ronaldinhoJpg = require("../images/ronaldinho.jpg");
var _ronaldinhoJpgDefault = parcelHelpers.interopDefault(_ronaldinhoJpg);
const sport = [
    {
        name: "Lewis Hamilton",
        picture: _lewisJpgDefault.default,
        biography: 'https://en.wikipedia.org/wiki/Lewis_Hamilton',
        gender: 'H',
        birthDate: '07/01/1985',
        birthPlace: 'Stevenage ',
        country: 'England',
        spouse: " not married ",
        children: " no children",
        competitionLeague: ' drives Formula1',
        Team: 'Merceds AMG Patronas',
        championships: ' 7 championships ',
        retired: false
    },
    {
        name: "Kobe Bryant",
        picture: _bryantJpgDefault.default,
        biography: 'https://en.wikipedia.org/wiki/Kobe_Bryant',
        gender: 'H',
        birthDate: '23/08/1978',
        birthPlace: 'Philadelphie, Pennsylvanie',
        country: 'United States of America',
        spouse: " was married with Vanessa Bryant",
        children: " four children :  Gianna Maria-Onore Bryant Natalia Diamante Bryant , Bianka Bella Bryant , Capri Kobe Bryant ,",
        competitionLeague: ' played in NBA',
        Team: ' Los Angeles Lakers ',
        championships: ' 5 NBA championships ',
        retired: true
    },
    {
        name: 'Cristiano Ronaldo',
        picture: _cr7JpgDefault.default,
        biography: 'https://en.wikipedia.org/wiki/Cristiano_Ronaldo',
        gender: 'H',
        birthDate: '05/02/1985',
        birthPlace: 'Hospital Dr. Nélio Mendonça, Funchal',
        country: 'Portugal',
        spouse: ' in relation with Georgina Rodriguez',
        children: " four children :  Cristiano Jr Alana Martina dos Santos Aveiro , Eva Maria Dos Santos , Mateo Ronaldo ,",
        competitionLeague: 'plays in Premier League',
        Team: ' Manchester United ',
        championships: [
            ' 5 golden ball ',
            ' 6 championships ',
            ' 5 uefa cl ',
            ' 1 european champion ',
            ' 1 european nations league champion '
        ],
        retired: false
    },
    {
        name: 'Serena Williams',
        picture: _williamsWebpDefault.default,
        biography: 'https://en.wikipedia.org/wiki/Serena_Williams',
        gender: 'F',
        birthDate: '26/09/1981',
        birthPlace: 'Saginaw, Michigan',
        country: 'United States of America',
        spouse: ' married with Alexis Ohanian',
        children: ' one child :  Alexis Olympia Ohanian Jr',
        competitionLeague: 'plays Tennis',
        Team: ' herself ',
        championships: '23 Grand Chelem',
        retired: false
    },
    {
        name: 'Lionel Messi',
        picture: _lionelJpegDefault.default,
        biography: 'https://en.wikipedia.org/wiki/Lionel_Messi',
        gender: 'H',
        birthDate: '24/06/1987',
        birthPlace: ' Rosario ',
        country: ' Argentina ',
        spouse: ' married with Antonella Roccuzzo ',
        children: " three children :  Mateo Messi Roccuzzo  Ciro Messi Roccuzzo , Thiago Messi,",
        competitionLeague: ' plays in Ligue 1 ',
        Team: ' Paris Saint Germain ',
        championships: [
            ' 6 golden balls ',
            ' 10 championships ',
            ' 4 uefa cl ',
            ' 1 South American championship '
        ],
        retired: false
    },
    {
        name: 'Usain Bolt',
        picture: _boltJpgDefault.default,
        biography: 'https://en.wikipedia.org/wiki/Usain_Bolt',
        gender: 'H',
        birthDate: '21/08/1986',
        birthPlace: 'Sherwood Content',
        country: 'Jamaica .',
        spouse: ' in relation with Kasi Bennett',
        children: " three children : Olympia Lightning BoltThunder Bolt,Saint Leo Bolt,",
        competitionLeague: ' did Athletisme, sprint',
        Team: 'for himself and Jamaican National Team',
        championships: '8 olympic gold medals',
        retired: true
    },
    {
        name: 'Roger Federer',
        picture: _federerJpgDefault.default,
        biography: 'https://en.wikipedia.org/wiki/Roger_Federer',
        gender: 'H',
        birthDate: '21/08/1981',
        birthPlace: 'Bâle',
        country: 'Switzeland',
        spouse: ' married with Miroslava Vavrinec ',
        children: " four children :  Myla Rose Federer  Lennart Federer , Leo Federer, Charlene Riva Federer ,",
        competitionLeague: ' plays Tennis',
        Team: 'himself',
        championships: ' 20 Grand Chelem ',
        retired: false
    },
    {
        name: "Lebron James",
        picture: _lebronJpgDefault.default,
        biography: 'https://en.wikipedia.org/wiki/LeBron_James',
        gender: 'H',
        birthDate: '30/12/1984',
        birthPlace: ' Akron, Ohio',
        country: 'United States of America',
        spouse: " married with Savannah James ",
        children: " three children :  LeBron James Jr.Bryce Maximus James,Zhuri James,",
        competitionLeague: ' plays in NBA',
        Team: 'Los Angeles Lakers',
        championships: '4 NBA chamionships',
        retired: false
    },
    {
        name: 'Ronaldinho',
        picture: _ronaldinhoJpgDefault.default,
        biography: 'https://en.wikipedia.org/wiki/Ronaldinho',
        gender: 'H',
        birthDate: '21/03/1980',
        birthPlace: 'Porto Alegre, Rio Grande do Sul',
        country: 'Brazil',
        spouse: ' not married ',
        children: ' one child João de Assis Moreira',
        competitionLeague: ' played in Ligue 1 and La Liga ',
        Team: 'Paris Saint Germain and Fc Barcelona',
        championships: [
            '1 golden ball ',
            ' 2 championships ',
            ' 2 uefa cl ',
            ' 1 South American championship ',
            ' and 1 world cup champion'
        ],
        retired: true
    },
    {
        name: 'Rafael Nadal',
        picture: _nadalJpgDefault.default,
        biography: 'https://en.wikipedia.org/wiki/Rafael_Nadal',
        gender: 'H',
        birthDate: '03/06/1986',
        birthPlace: 'Manacor',
        country: 'Spain',
        spouse: ' married with Xisca Perello',
        children: ' no children ',
        competitionLeague: 'plays Tennis',
        Team: 'himself',
        championships: '20 Grand Chelem',
        retired: false
    },
    {
        name: 'Zinedine Zidane',
        picture: _zizouJpgDefault.default,
        biography: 'https://en.wikipedia.org/wiki/Zinedine_Zidane',
        gender: 'H',
        birthDate: '23/06/1972',
        birthPlace: 'Marseille',
        country: 'France',
        spouse: ' married with Véronique Fernández',
        children: " four children :  Enzo Zidane Fern\xe1ndez Luca Zidane Fern\xe1ndez,Theo Zidane Fern\xe1ndez,Elyaz Zidane Fern\xe1ndez ,",
        competitionLeague: ' played in Ligue 1, Serie A and La Liga ',
        Team: ' Cannes, Juventus, Real Madrid and for Les Bleus (French National Team) ',
        championships: ' won multiple titles as you will discover in his full biography ',
        retired: true
    },
    {
        name: 'Ronaldo Luís Nazário de Lima',
        picture: _elfenomenoJpgDefault.default,
        biography: 'https://en.wikipedia.org/wiki/Ronaldo_(Brazilian_footballer)',
        gender: 'H',
        birthDate: '18/09/1976',
        birthPlace: 'Rio de Janeiro',
        country: 'Brazil',
        spouse: ' not married ',
        children: " four children :  Ronald Naz\xe1rio de Lima  Alexander Naz\xe1rio de Lima , Maria Sofia Naz\xe1rio de Lima , Maria Alice Naz\xe1rio de Lima ,",
        competitionLeague: 'played in La Liga, Serie A and Eredivisie ',
        Team: ' Barcelona, Inter Milan, Real Madrid and for La Seleção (Brazilian National Team) ',
        championships: ' won multiple titles as you will discover in his full biography ',
        retired: true
    }, 
];

},{"../images/Lewis.jpg":"4zoUq","../images/bolt.jpg":"kWV3l","../images/bryant.jpg":"6onUg","../images/cr7.jpg":"6UeEC","../images/elfenomeno.jpg":"k9URB","../images/federer.jpg":"1OoiC","../images/lebron.jpg":"jLaRv","../images/williams.webp":"1wDmL","../images/lionel.jpeg":"363Cd","../images/zizou.jpg":"9ZLud","../images/nadal.jpg":"jOfSY","../images/ronaldinho.jpg":"fjr0R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4zoUq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "Lewis.524e4142.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"kWV3l":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "bolt.a6288a46.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6onUg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "bryant.615a0b28.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6UeEC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "cr7.9a6e0a1d.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"k9URB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "elfenomeno.59e8e3bd.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"1OoiC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "federer.57ffbf98.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jLaRv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "lebron.195114bf.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"1wDmL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "williams.15c10dd6.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"363Cd":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "lionel.cdba178f.jpeg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"9ZLud":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "zizou.73428564.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jOfSY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "nadal.19c7d087.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"fjr0R":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "ronaldinho.49a75c52.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}]},["cSv3F","3auaO"], "3auaO", "parcelRequirea101")

//# sourceMappingURL=index.8b7fb9b3.js.map
