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
//
var script = {
  name: "ColPicker",

  created() {},

  data() {
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
    getCol(e) {
      this.selColor = e.target.style.background;
      this.$emit('colPicked', this.selColor);
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('div', {
    staticClass: "colorPicker"
  }, [_c('div', {
    staticClass: "arrow"
  }), _vm._v(" "), _c('div', {
    staticClass: "arrowWhite"
  }), _vm._v(" "), _c('div', {
    staticClass: "colorList"
  }, [_c('div', {
    staticClass: "colorContainer",
    staticStyle: {
      "background": "rgb(255, 105, 0)"
    },
    attrs: {
      "title": "#FF6900"
    },
    on: {
      "click": _vm.getCol
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "colorContainer",
    staticStyle: {
      "background": "rgb(252, 185, 0)"
    },
    attrs: {
      "title": "#FF6900"
    },
    on: {
      "click": _vm.getCol
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "colorContainer",
    staticStyle: {
      "background": "rgb(123, 220, 181)"
    },
    attrs: {
      "title": "#FF6900"
    },
    on: {
      "click": _vm.getCol
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "colorContainer",
    staticStyle: {
      "background": "rgb(0, 208, 132)"
    },
    attrs: {
      "title": "#FF6900"
    },
    on: {
      "click": _vm.getCol
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "colorContainer",
    staticStyle: {
      "background": "rgb(142, 209, 252)"
    },
    attrs: {
      "title": "#FF6900"
    },
    on: {
      "click": _vm.getCol
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "colorContainer",
    staticStyle: {
      "background": "rgb(6, 147, 227)"
    },
    attrs: {
      "title": "#FF6900"
    },
    on: {
      "click": _vm.getCol
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "colorContainer",
    staticStyle: {
      "background": "rgb(171, 184, 195)"
    },
    attrs: {
      "title": "#FF6900"
    },
    on: {
      "click": _vm.getCol
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "colorContainer",
    staticStyle: {
      "background": "rgb(235, 20, 76)"
    },
    attrs: {
      "title": "#FF6900"
    },
    on: {
      "click": _vm.getCol
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "colorContainer",
    staticStyle: {
      "background": "rgb(247, 141, 167)"
    },
    attrs: {
      "title": "#FF6900"
    },
    on: {
      "click": _vm.getCol
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "colorContainer",
    staticStyle: {
      "background": "rgb(153, 0, 239)"
    },
    attrs: {
      "title": "#FF6900"
    },
    on: {
      "click": _vm.getCol
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "hexIcon"
  }, [_vm._v("#")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })])])]);
};

var __vue_staticRenderFns__ = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "inputContainer"
  }, [_c('input', {
    attrs: {
      "value": "",
      "placeholder": "ff691f",
      "maxlength": "6"
    }
  })]);
}];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-e8f4aac2_0", {
    source: ".main-background[data-v-e8f4aac2]{width:100vw;height:100vh}.center[data-v-e8f4aac2]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.colorPicker[data-v-e8f4aac2]{width:276px;background:#fff;border:0 solid rgba(0,0,0,.247059);box-shadow:rgba(0,0,0,.247059) 0 1px 4px;border-radius:4px;position:relative}.colorPicker .arrow[data-v-e8f4aac2]{width:0;height:0;border-style:solid;border-width:0 9px 10px;border-color:transparent transparent rgba(0,0,0,.0980392);position:absolute;top:-11px;right:12px}.colorPicker .colorList[data-v-e8f4aac2]{padding:15px 9px 9px 15px}.colorPicker .colorContainer[data-v-e8f4aac2]{height:30px;width:30px;cursor:pointer;float:left;border-radius:4px;margin:0 6px 6px 0}.colorPicker .hexIcon[data-v-e8f4aac2]{background:#f0f0f0;height:30px;width:30px;border-radius:4px 0 0 4px;float:left;color:#98a1a4;display:flex;align-items:center;justify-content:center}.colorPicker .inputContainer[data-v-e8f4aac2]{position:relative}.colorPicker .inputContainer input[data-v-e8f4aac2]{width:100px;font-size:14px;color:#666;border:0;outline:0;height:28px;box-shadow:#f0f0f0 0 0 0 1px inset;border-radius:0 4px 4px 0;float:left;padding-left:8px}.arrowWhite[data-v-e8f4aac2]{width:0;height:0;border-style:solid;border-width:0 9px 10px;border-color:transparent transparent #fff;position:absolute;top:-10px;right:12px}.activeColor[data-v-e8f4aac2]{box-shadow:0 0 6px 2px #607d8b}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-e8f4aac2";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = Vue => {
    Vue.component('VueColorPicker', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
