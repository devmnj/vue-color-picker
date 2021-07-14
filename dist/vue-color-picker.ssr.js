'use strict';function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "ColPicker",
  created: function created() {},
  data: function data() {
    return {
      selC: ''
    };
  },
  props: {
    selColor: {
      type: String,
      default: "#FF1100"
    }
  },
  methods: {
    getCol: function getCol(e) {
      this.selColor = e.target.style.background;
      this.$emit('colPicked', this.selColor);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<div class=\"colorPicker\" data-v-e8f4aac2><div class=\"arrow\" data-v-e8f4aac2></div> <div class=\"arrowWhite\" data-v-e8f4aac2></div> <div class=\"colorList\" data-v-e8f4aac2><div title=\"#FF6900\" class=\"colorContainer\" style=\"background: rgb(255, 105, 0)\" data-v-e8f4aac2></div> <div title=\"#FF6900\" class=\"colorContainer\" style=\"background: rgb(252, 185, 0)\" data-v-e8f4aac2></div> <div title=\"#FF6900\" class=\"colorContainer\" style=\"background: rgb(123, 220, 181)\" data-v-e8f4aac2></div> <div title=\"#FF6900\" class=\"colorContainer\" style=\"background: rgb(0, 208, 132)\" data-v-e8f4aac2></div> <div title=\"#FF6900\" class=\"colorContainer\" style=\"background: rgb(142, 209, 252)\" data-v-e8f4aac2></div> <div title=\"#FF6900\" class=\"colorContainer\" style=\"background: rgb(6, 147, 227)\" data-v-e8f4aac2></div> <div title=\"#FF6900\" class=\"colorContainer\" style=\"background: rgb(171, 184, 195)\" data-v-e8f4aac2></div> <div title=\"#FF6900\" class=\"colorContainer\" style=\"background: rgb(235, 20, 76)\" data-v-e8f4aac2></div> <div title=\"#FF6900\" class=\"colorContainer\" style=\"background: rgb(247, 141, 167)\" data-v-e8f4aac2></div> <div title=\"#FF6900\" class=\"colorContainer\" style=\"background: rgb(153, 0, 239)\" data-v-e8f4aac2></div> <div class=\"hexIcon\" data-v-e8f4aac2>#</div> <div class=\"inputContainer\" data-v-e8f4aac2><input value placeholder=\"ff691f\" maxlength=\"6\" data-v-e8f4aac2></div> <div style=\"clear: both\" data-v-e8f4aac2></div></div></div>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-e8f4aac2_0", {
    source: ".main-background[data-v-e8f4aac2]{width:100vw;height:100vh}.center[data-v-e8f4aac2]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.colorPicker[data-v-e8f4aac2]{width:276px;background:#fff;border:0 solid rgba(0,0,0,.247059);box-shadow:rgba(0,0,0,.247059) 0 1px 4px;border-radius:4px;position:relative}.colorPicker .arrow[data-v-e8f4aac2]{width:0;height:0;border-style:solid;border-width:0 9px 10px;border-color:transparent transparent rgba(0,0,0,.0980392);position:absolute;top:-11px;right:12px}.colorPicker .colorList[data-v-e8f4aac2]{padding:15px 9px 9px 15px}.colorPicker .colorContainer[data-v-e8f4aac2]{height:30px;width:30px;cursor:pointer;float:left;border-radius:4px;margin:0 6px 6px 0}.colorPicker .hexIcon[data-v-e8f4aac2]{background:#f0f0f0;height:30px;width:30px;border-radius:4px 0 0 4px;float:left;color:#98a1a4;display:flex;align-items:center;justify-content:center}.colorPicker .inputContainer[data-v-e8f4aac2]{position:relative}.colorPicker .inputContainer input[data-v-e8f4aac2]{width:100px;font-size:14px;color:#666;border:0;outline:0;height:28px;box-shadow:#f0f0f0 0 0 0 1px inset;border-radius:0 4px 4px 0;float:left;padding-left:8px}.arrowWhite[data-v-e8f4aac2]{width:0;height:0;border-style:solid;border-width:0 9px 10px;border-color:transparent transparent #fff;position:absolute;top:-10px;right:12px}.activeColor[data-v-e8f4aac2]{box-shadow:0 0 6px 2px #607d8b}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-e8f4aac2";
/* module identifier */

var __vue_module_identifier__ = "data-v-e8f4aac2";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = function (Vue) {
    Vue.component('VueColorPicker', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;