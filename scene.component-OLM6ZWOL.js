import {
  AU_TO_KM,
  ActivatedRoute,
  COMPASS_TITLE_I18N_KEY,
  CdkDrag,
  CdkDragHandle,
  CelestialBodyType,
  DEG_TO_RAD,
  DecimalPipe,
  EARTH,
  HAS_SYMBOL,
  JUPITER,
  KG_TO_POUND,
  KM_TO_MILE,
  LAGRANGE_POINT_I18N_KEY,
  LAGRANGE_POINT_TYPES,
  LagrangePointType,
  MARS,
  MAT_DIALOG_DATA,
  MERCURY,
  MISSING_PICTURES,
  MatDialog,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatIcon,
  MatIconButton,
  NEPTUNE,
  NgClass,
  OrbitsSetting,
  RING_I18N_KEY,
  SATURN,
  SOLAR_SYSTEM,
  SUN,
  SearchPanelService,
  SettingsService,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  URANUS,
  VENUS,
  formatNumber,
  from,
  fromEvent,
  inject,
  throttleTime,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction6,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XSJNW6TU.js";

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? {
    space: namespaces_default[prefix],
    local: name
  } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x2) {
  return x2 == null ? [] : Array.isArray(x2) ? x2 : Array.from(x2);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function") value = constant_default(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare) compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this) ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {
      type: t,
      name
    };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {
      type: typename.type,
      name: typename.name,
      value,
      listener,
      options
    };
    if (!on) this.__on = [o];
    else on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type2, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type2, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function dispatch_default(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point2 = svg.createSVGPoint();
      point2.x = event.clientX, point2.y = event.clientY;
      point2 = point2.matrixTransform(node.getScreenCTM().inverse());
      return [point2.x, point2.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// node_modules/d3-selection/src/selectAll.js
function selectAll_default2(selector) {
  return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([array(selector)], root);
}

// node_modules/d3-shape/src/constant.js
function constant_default2(x2) {
  return function constant() {
    return x2;
  };
}

// node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon = 1e-6;
var tauEpsilon = tau - epsilon;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x2, y2) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x2, y2) {
    this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  quadraticCurveTo(x1, y1, x2, y2) {
    this._append`Q${+x1},${+y1},${this._x1 = +x2},${this._y1 = +y2}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x3, y3) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x0},${y0}`;
    }
    if (!r) return;
    if (da < 0) da = da % tau + tau;
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x2 - dx},${y2 - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da > epsilon) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x2 + r * Math.cos(a1)},${this._y1 = y2 + r * Math.sin(a1)}`;
    }
  }
  rect(x2, y2, w, h) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;

// node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}

// node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;
function array_default(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

// node_modules/d3-shape/src/line.js
function line_default(x2, y2) {
  var defined = constant_default2(true), context = null, curve = linear_default, output = null, path2 = withPath(line);
  x2 = typeof x2 === "function" ? x2 : x2 === void 0 ? x : constant_default2(x2);
  y2 = typeof y2 === "function" ? y2 : y2 === void 0 ? y : constant_default2(y2);
  function line(data) {
    var i, n = (data = array_default(data)).length, d, defined0 = false, buffer;
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x2(d, i, data), +y2(d, i, data));
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default2(+_), line) : x2;
  };
  line.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default2(+_), line) : y2;
  };
  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default2(!!_), line) : defined;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}

// node_modules/d3-shape/src/noop.js
function noop_default() {
}

// node_modules/d3-shape/src/curve/cardinal.js
function point(that, x2, y2) {
  that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x2), that._y2 + that._k * (that._y1 - y2), that._x2, that._y2);
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        this._x1 = x2, this._y1 = y2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        point(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinal_default = function custom(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinalClosed_default = function custom2(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-dispatch/src/dispatch.js
var noop = {
  value: () => {
  }
};
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames2(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {
      type: t,
      name
    };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames2(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type2, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
    for (t = this._[type2], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
    for (var t = this._[type2], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};
function get(type2, name) {
  for (var i = 0, n = type2.length, c; i < n; ++i) {
    if ((c = type2[i]).name === name) {
      return c.value;
    }
  }
}
function set(type2, name, callback) {
  for (var i = 0, n = type2.length; i < n; ++i) {
    if (type2[i].name === name) {
      type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
      break;
    }
  }
  if (callback != null) type2.push({
    name,
    value: callback
  });
  return type2;
}
var dispatch_default2 = dispatch;

// node_modules/d3-drag/src/noevent.js
var nonpassivecapture = {
  capture: true,
  passive: false
};
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h = NaN, s = max2 - min2, l = (max2 + min2) / 2;
  if (s) {
    if (r === max2) h = (g - b) / s + (g < b) * 6;
    else if (g === max2) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default3 = (x2) => () => x2;

// node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y2) {
  return a = Math.pow(a, y2), b = Math.pow(b, y2) - a, y2 = 1 / y2, function(t) {
    return Math.pow(a + t * b, y2);
  };
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y2) : constant_default3(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default3(isNaN(a) ? b : a);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y2) {
  var color2 = gamma(y2);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/number.js
function number_default(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({
        i,
        x: number_default(am, bm)
      });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({
        i: i - 4,
        x: number_default(xa, xb)
      }, {
        i: i - 2,
        x: number_default(ya, yb)
      });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;
      else if (b - a > 180) a += 360;
      q.push({
        i: s.push(pop(s) + "rotate(", null, degParen) - 2,
        x: number_default(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({
        i: s.push(pop(s) + "skewX(", null, degParen) - 2,
        x: number_default(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: number_default(xa, xb)
      }, {
        i: i - 2,
        x: number_default(ya, yb)
      });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x2) {
  return ((x2 = Math.exp(x2)) + 1 / x2) / 2;
}
function sinh(x2) {
  return ((x2 = Math.exp(x2)) - 1 / x2) / 2;
}
function tanh(x2) {
  return ((x2 = Math.exp(2 * x2)) - 1) / (x2 + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default2("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create(node, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;
      if (o.state === STARTED) return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2) delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {
        name,
        value
      }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a, b) {
  var c;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set2(this, id2).ease = v;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {
      value: reject
    }, end = {
      value: function() {
        if (--size === 0) resolve();
      }
    };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0) resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default3,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-zoom/src/constant.js
var constant_default4 = (x2) => () => x2;

// node_modules/d3-zoom/src/event.js
function ZoomEvent(type2, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: {
      value: type2,
      enumerable: true,
      configurable: true
    },
    sourceEvent: {
      value: sourceEvent,
      enumerable: true,
      configurable: true
    },
    target: {
      value: target,
      enumerable: true,
      configurable: true
    },
    transform: {
      value: transform2,
      enumerable: true,
      configurable: true
    },
    _: {
      value: dispatch2
    }
  });
}

// node_modules/d3-zoom/src/transform.js
function Transform(k, x2, y2) {
  this.k = k;
  this.x = x2;
  this.y = y2;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x2, y2) {
    return x2 === 0 & y2 === 0 ? this : new Transform(this.k, this.x + this.k * x2, this.y + this.k * y2);
  },
  apply: function(point2) {
    return [point2[0] * this.k + this.x, point2[1] * this.k + this.y];
  },
  applyX: function(x2) {
    return x2 * this.k + this.x;
  },
  applyY: function(y2) {
    return y2 * this.k + this.y;
  },
  invert: function(location2) {
    return [(location2[0] - this.x) / this.k, (location2[1] - this.y) / this.k];
  },
  invertX: function(x2) {
    return (x2 - this.x) / this.k;
  },
  invertY: function(y2) {
    return (y2 - this.y) / this.k;
  },
  rescaleX: function(x2) {
    return x2.copy().domain(x2.range().map(this.invertX, this).map(x2.invert, x2));
  },
  rescaleY: function(y2) {
    return y2.copy().domain(y2.range().map(this.invertY, this).map(y2.invert, y2));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
  return node.__zoom;
}

// node_modules/d3-zoom/src/noevent.js
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent_default2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-zoom/src/zoom.js
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity2;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function zoom_default2() {
  var filter2 = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default2("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, {
      passive: false
    }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point2, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point2, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k, p, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom.scaleTo = function(selection2, k, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom.translateBy = function(selection2, x2, y2, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(typeof x2 === "function" ? x2.apply(this, arguments) : x2, typeof y2 === "function" ? y2.apply(this, arguments) : y2), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x2, y2, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity2.translate(p0[0], p0[1]).scale(t.k).translate(typeof x2 === "function" ? -x2.apply(this, arguments) : -x2, typeof y2 === "function" ? -y2.apply(this, arguments) : -y2), e, translateExtent);
    }, p, event);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p0, p1) {
    var x2 = p0[0] - p1[0] * transform2.k, y2 = p0[1] - p1[1] * transform2.k;
    return x2 === transform2.x && y2 === transform2.y ? transform2 : new Transform(transform2.k, x2, y2);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point2, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point2 == null ? centroid(e) : typeof point2 === "function" ? point2.apply(that, args) : point2, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type2) {
      var d = select_default2(this.that).datum();
      listeners.call(type2, this.that, new ZoomEvent(type2, {
        sourceEvent: this.sourceEvent,
        target: zoom,
        type: type2,
        transform: this.that.__zoom,
        dispatch: listeners
      }), d);
    }
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer_default(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k) return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g.start();
    }
    noevent_default2(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments)) return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    nodrag_default(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g.start();
    function mousemoved(event2) {
      noevent_default2(event2);
      if (!g.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g.moved);
      noevent_default2(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent_default2(event);
    if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select_default2(this).call(zoom.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt_default(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer_default(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select_default2(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant_default4(+_), zoom) : wheelDelta;
  };
  zoom.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : filter2;
  };
  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : touchable;
  };
  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };
  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };
  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };
  return zoom;
}

// node_modules/d3-array/src/range.js
function range(start2, stop, step) {
  start2 = +start2, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start2, start2 = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start2) / step)) | 0, range2 = new Array(n);
  while (++i < n) {
    range2[i] = start2 + i * step;
  }
  return range2;
}

// node_modules/d3-brush/src/brush.js
var {
  abs,
  max,
  min
} = Math;
function number1(e) {
  return [+e[0], +e[1]];
}
function number2(e) {
  return [number1(e[0]), number1(e[1])];
}
var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x2, e) {
    return x2 == null ? null : [[+x2[0], e[0][1]], [+x2[1], e[1][1]]];
  },
  output: function(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y2, e) {
    return y2 == null ? null : [[e[0][0], +y2[0]], [e[1][0], +y2[1]]];
  },
  output: function(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) {
    return xy == null ? null : number2(xy);
  },
  output: function(xy) {
    return xy;
  }
};
function type(t) {
  return {
    type: t
  };
}

// src/app/scene/scene.service.ts
var SOLAR_SYSTEM_SIZE = 80 * AU_TO_KM;
var SceneService = class _SceneService {
  constructor() {
    SOLAR_SYSTEM.filter((body) => body.id !== "sun").forEach((body) => {
      body.trueAnomaly = body.meanAnomaly;
      body.position = this.getPositionForTrueAnomaly(body, body.trueAnomaly);
    });
  }
  /**
   * In px, relative to the sun at (0, 0)
   */
  getOrbitEllipse(body, scale) {
    return {
      cx: body.orbitBody.position.x / scale - body.eccentricity * body.semiMajorAxis / scale,
      cy: body.orbitBody.position.y / scale,
      rx: body.semiMajorAxis / scale,
      ry: Math.sqrt(body.semiMajorAxis ** 2 * (1 - body.eccentricity ** 2)) / scale
    };
  }
  /**
   * Positions in px, relative to the sun at (0, 0)
   */
  getOrbitPath(body, nbPoints, scale) {
    const result = range(0, 360, 360 / nbPoints).map((trueAnomaly) => {
      const point2 = this.getPositionForTrueAnomaly(body, trueAnomaly);
      return {
        trueAnomaly,
        x: point2.x / scale,
        y: point2.y / scale
      };
    });
    result.push({
      trueAnomaly: body.trueAnomaly,
      x: body.position.x / scale,
      y: body.position.y / scale
    });
    return result.sort((p1, p2) => p1.trueAnomaly - p2.trueAnomaly);
  }
  /**
   * in km, relative to the sun at (0, 0)
   */
  getPositionForTrueAnomaly(body, trueAnomaly) {
    const d = this.getDistanceToFocusPoint(body, trueAnomaly);
    const yKm = -d * Math.sin(trueAnomaly * DEG_TO_RAD);
    const xKm = d * Math.cos(trueAnomaly * DEG_TO_RAD);
    return {
      x: xKm + body.orbitBody.position.x,
      y: yKm + body.orbitBody.position.y
    };
  }
  /**
   * https://en.wikipedia.org/wiki/Kepler_orbit#Development_of_the_laws
   * Focus point = the orbited body
   * @returns number distance the orbited body in km
   */
  getDistanceToFocusPoint(body, trueAnomaly) {
    return body.semiMajorAxis * (1 - body.eccentricity ** 2) / (1 + body.eccentricity * Math.cos(trueAnomaly * DEG_TO_RAD));
  }
  /**
   * https://en.wikipedia.org/wiki/Lagrange_point#Physical_and_mathematical_details
   * @returns LagrangePoints the 5 Lagrange points for the earth and sun (positions in px from the sun)
   */
  getEarthLagrangePoints(scale) {
    const earthPos = {
      x: EARTH.position.x / scale,
      y: EARTH.position.y / scale
    };
    const distance = Math.sqrt(earthPos.x ** 2 + earthPos.y ** 2);
    let r = distance * Math.cbrt(EARTH.mass / (3 * SUN.mass));
    const l1 = {
      x: earthPos.x * (distance - r) / distance,
      y: earthPos.y * (distance - r) / distance,
      type: LagrangePointType.L1
    };
    const l2 = {
      x: earthPos.x * (distance + r) / distance,
      y: earthPos.y * (distance + r) / distance,
      type: LagrangePointType.L2
    };
    r = distance * (7 * EARTH.mass / (12 * SUN.mass));
    const l3 = {
      x: -(earthPos.x * (distance - r)) / distance,
      y: -(earthPos.y * (distance - r)) / distance,
      type: LagrangePointType.L3
    };
    const l4 = {
      x: earthPos.x * Math.cos(60 * DEG_TO_RAD) + earthPos.y * Math.sin(60 * DEG_TO_RAD),
      y: -(earthPos.x * Math.sin(60 * DEG_TO_RAD)) + earthPos.y * Math.cos(60 * DEG_TO_RAD),
      type: LagrangePointType.L4
    };
    const l5 = {
      x: earthPos.x * Math.cos(-60 * DEG_TO_RAD) + earthPos.y * Math.sin(-60 * DEG_TO_RAD),
      y: -(earthPos.x * Math.sin(-60 * DEG_TO_RAD)) + earthPos.y * Math.cos(-60 * DEG_TO_RAD),
      type: LagrangePointType.L5
    };
    return [l1, l2, l3, l4, l5];
  }
  static {
    this.\u0275fac = function SceneService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SceneService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SceneService, factory: _SceneService.\u0275fac, providedIn: "root" });
  }
};

// src/app/scene/celestial-body-dialog/celestial-body-dialog.component.ts
var _c0 = (a0) => ({ PLANET: a0 });
var _c1 = () => ({ suffix: "e" });
var _c2 = (a0) => ({ NB: a0 });
var _c3 = () => ({ suffix: "" });
function CelestialBodyDialogComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 1);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", "assets/symbols/" + ctx_r0.body.id + ".svg", \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, ctx_r0.body.id));
  }
}
function CelestialBodyDialogComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "star"), " ");
  }
}
function CelestialBodyDialogComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "planet"), " ");
  }
}
function CelestialBodyDialogComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "dwarf planet"), " ");
  }
}
function CelestialBodyDialogComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, "satellite of PLANET", \u0275\u0275pureFunction1(6, _c0, \u0275\u0275pipeBind1(1, 1, ctx_r0.body.orbitBody.id))), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "picture");
    \u0275\u0275element(1, "source", 5)(2, "source", 6)(3, "img", 7);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("srcset", ctx_r0.getImagePath(ctx_r0.body, "avif"));
    \u0275\u0275advance();
    \u0275\u0275property("srcset", ctx_r0.getImagePath(ctx_r0.body, "jpg"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getImagePath(ctx_r0.body, "jpg"), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(4, 4, ctx_r0.body.id));
  }
}
function CelestialBodyDialogComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "unknown", \u0275\u0275pureFunction0(4, _c1)), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 5, "NB kg", \u0275\u0275pureFunction1(8, _c2, \u0275\u0275pipeBind3(1, 1, ctx_r0.body.mass, "1.0-3", ctx_r0.lang))), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 5, "NB lb", \u0275\u0275pureFunction1(8, _c2, \u0275\u0275pipeBind3(1, 1, ctx_r0.body.mass * ctx_r0.KG_TO_POUND, "1.0-3", ctx_r0.lang))), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CelestialBodyDialogComponent_Conditional_21_Conditional_0_Template, 3, 10)(1, CelestialBodyDialogComponent_Conditional_21_Conditional_1_Template, 3, 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isMetric ? 0 : 1);
  }
}
function CelestialBodyDialogComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "unknown", \u0275\u0275pureFunction0(4, _c3)), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_30_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 5, "NB km", \u0275\u0275pureFunction1(8, _c2, \u0275\u0275pipeBind3(1, 1, ctx_r0.body.radius, "1.0-0", ctx_r0.lang))), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 5, "NB mi", \u0275\u0275pureFunction1(8, _c2, \u0275\u0275pipeBind3(1, 1, ctx_r0.body.radius * ctx_r0.KM_TO_MILE, "1.0-0", ctx_r0.lang))), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CelestialBodyDialogComponent_Conditional_30_Conditional_0_Template, 3, 10)(1, CelestialBodyDialogComponent_Conditional_30_Conditional_1_Template, 3, 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isMetric ? 0 : 1);
  }
}
function CelestialBodyDialogComponent_Conditional_31_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "unknown", \u0275\u0275pureFunction0(4, _c3)), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_31_Conditional_29_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 5, "NB km", \u0275\u0275pureFunction1(8, _c2, \u0275\u0275pipeBind3(1, 1, ctx_r0.body.semiMajorAxis, "1.0-0", ctx_r0.lang))), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_31_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 5, "NB mi", \u0275\u0275pureFunction1(8, _c2, \u0275\u0275pipeBind3(1, 1, ctx_r0.body.semiMajorAxis * ctx_r0.KM_TO_MILE, "1.0-0", ctx_r0.lang))), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_31_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CelestialBodyDialogComponent_Conditional_31_Conditional_29_Conditional_0_Template, 3, 10)(1, CelestialBodyDialogComponent_Conditional_31_Conditional_29_Conditional_1_Template, 3, 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.isMetric ? 0 : 1);
  }
}
function CelestialBodyDialogComponent_Conditional_31_Conditional_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "unknown", \u0275\u0275pureFunction0(4, _c1)), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_31_Conditional_30_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 5, "NB km/s", \u0275\u0275pureFunction1(8, _c2, \u0275\u0275pipeBind3(1, 1, ctx_r0.body.speed, "1.0-0", ctx_r0.lang))), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_31_Conditional_30_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 5, "NB mi/s", \u0275\u0275pureFunction1(8, _c2, \u0275\u0275pipeBind3(1, 1, ctx_r0.body.speed * ctx_r0.KM_TO_MILE, "1.0-0", ctx_r0.lang))), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_31_Conditional_30_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CelestialBodyDialogComponent_Conditional_31_Conditional_30_Conditional_8_Conditional_0_Template, 3, 10)(1, CelestialBodyDialogComponent_Conditional_31_Conditional_30_Conditional_8_Conditional_1_Template, 3, 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r0.isMetric ? 0 : 1);
  }
}
function CelestialBodyDialogComponent_Conditional_31_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span")(2, "a", 4);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275template(7, CelestialBodyDialogComponent_Conditional_31_Conditional_30_Conditional_7_Template, 2, 5)(8, CelestialBodyDialogComponent_Conditional_31_Conditional_30_Conditional_8_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind1(3, 3, "https://en.wikipedia.org/wiki/Orbital_speed"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "Average orbital speed"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.body.unknownData == null ? null : ctx_r0.body.unknownData.speed) ? 7 : 8);
  }
}
function CelestialBodyDialogComponent_Conditional_31_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span")(2, "a", 4);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "number");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind1(3, 3, "https://en.wikipedia.org/wiki/Longitude_of_the_ascending_node"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "Longitude of the ascending node"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.body.unknownData == null ? null : ctx_r0.body.unknownData.longitudeOfAscendingNode) ? \u0275\u0275pipeBind2(8, 7, "unknown", \u0275\u0275pureFunction0(17, _c1)) : \u0275\u0275pipeBind2(10, 14, "NB\xB0", \u0275\u0275pureFunction1(18, _c2, \u0275\u0275pipeBind3(9, 10, ctx_r0.body.longitudeOfAscendingNode, "1.0-0", ctx_r0.lang))), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_31_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span")(2, "a", 4);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind1(3, 3, "https://en.wikipedia.org/wiki/Natural_satellite"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "Satellites"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.body.satellites.length > 0 ? \u0275\u0275pipeBind3(8, 7, ctx_r0.body.satellites.length, "1.0-0", ctx_r0.lang) : \u0275\u0275pipeBind1(9, 11, "none"), " ");
  }
}
function CelestialBodyDialogComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span")(2, "a", 4);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "number");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li")(12, "span")(13, "a", 4);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "span")(23, "a", 4);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275template(28, CelestialBodyDialogComponent_Conditional_31_Conditional_28_Template, 2, 5)(29, CelestialBodyDialogComponent_Conditional_31_Conditional_29_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, CelestialBodyDialogComponent_Conditional_31_Conditional_30_Template, 9, 7, "li")(31, CelestialBodyDialogComponent_Conditional_31_Conditional_31_Template, 11, 20, "li")(32, CelestialBodyDialogComponent_Conditional_31_Conditional_32_Template, 10, 13, "li");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind1(3, 12, "https://en.wikipedia.org/wiki/Mean_anomaly"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 14, "Mean anomaly"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.body.unknownData == null ? null : ctx_r0.body.unknownData.meanAnomaly) ? \u0275\u0275pipeBind2(8, 16, "unknown", \u0275\u0275pureFunction0(41, _c1)) : \u0275\u0275pipeBind2(10, 23, "NB\xB0", \u0275\u0275pureFunction1(42, _c2, \u0275\u0275pipeBind3(9, 19, ctx_r0.body.meanAnomaly, "1.0-0", ctx_r0.lang))), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("href", \u0275\u0275pipeBind1(14, 26, "https://en.wikipedia.org/wiki/Orbital_eccentricity"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 28, "Eccentricity"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.body.unknownData == null ? null : ctx_r0.body.unknownData.eccentricity) ? \u0275\u0275pipeBind2(19, 30, "unknown", \u0275\u0275pureFunction0(44, _c1)) : \u0275\u0275pipeBind3(20, 33, ctx_r0.body.eccentricity, "1.1-10", ctx_r0.lang), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("href", \u0275\u0275pipeBind1(24, 37, "https://en.wikipedia.org/wiki/Semi-major_and_semi-minor_axes"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 39, "Semi-major axis"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.body.unknownData == null ? null : ctx_r0.body.unknownData.semiMajorAxis) ? 28 : 29);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.body.speed ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.body.longitudeOfAscendingNode ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.body.type === ctx_r0.CelestialBodyType.PLANET || ctx_r0.body.type === ctx_r0.CelestialBodyType.DWARF_PLANET ? 32 : -1);
  }
}
var CelestialBodyDialogComponent = class _CelestialBodyDialogComponent {
  get lang() {
    return this.translate.currentLang;
  }
  get isMetric() {
    return this.settings.metric;
  }
  constructor() {
    this.SUN = SUN;
    this.CelestialBodyType = CelestialBodyType;
    this.MISSING_PICTURES = MISSING_PICTURES;
    this.HAS_SYMBOL = HAS_SYMBOL;
    this.KM_TO_MILE = KM_TO_MILE;
    this.KG_TO_POUND = KG_TO_POUND;
    this.translate = inject(TranslateService);
    this.settings = inject(SettingsService);
    const data = inject(MAT_DIALOG_DATA);
    this.body = data.body;
  }
  getImagePath(body, format) {
    let path2 = "assets/celestial_bodies/";
    if (body.type === CelestialBodyType.PLANET || body.type === CelestialBodyType.DWARF_PLANET) {
      path2 += body.id + "/";
    } else if (body.type === CelestialBodyType.SATELLITE) {
      path2 += body.orbitBody.id + "/";
    }
    return path2 + body.id + "_small." + format;
  }
  static {
    this.\u0275fac = function CelestialBodyDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CelestialBodyDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CelestialBodyDialogComponent, selectors: [["app-celestial-body-dialog"]], decls: 32, vars: 22, consts: [["mat-dialog-title", "", "cdkDrag", "", "cdkDragRootElement", ".cdk-overlay-pane", "cdkDragHandle", ""], [1, "symbol", 3, "src", "alt"], ["mat-icon-button", "", "aria-label", "close", 1, "close-button", 3, "mat-dialog-close"], ["fontIcon", "close"], ["target", "_blank", 3, "href"], ["type", "image/avif", 3, "srcset"], ["type", "image/jpeg", 3, "srcset"], ["width", "100%", 3, "src", "alt"]], template: function CelestialBodyDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, CelestialBodyDialogComponent_Conditional_1_Template, 2, 4, "img", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275template(4, CelestialBodyDialogComponent_Case_4_Template, 2, 3)(5, CelestialBodyDialogComponent_Case_5_Template, 2, 3)(6, CelestialBodyDialogComponent_Case_6_Template, 2, 3)(7, CelestialBodyDialogComponent_Case_7_Template, 3, 8);
        \u0275\u0275elementStart(8, "button", 2);
        \u0275\u0275element(9, "mat-icon", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-dialog-content");
        \u0275\u0275template(11, CelestialBodyDialogComponent_Conditional_11_Template, 5, 6, "picture");
        \u0275\u0275elementStart(12, "ul")(13, "li")(14, "span")(15, "a", 4);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275template(20, CelestialBodyDialogComponent_Conditional_20_Template, 2, 5)(21, CelestialBodyDialogComponent_Conditional_21_Template, 2, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "li")(23, "span")(24, "a", 4);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "span");
        \u0275\u0275template(29, CelestialBodyDialogComponent_Conditional_29_Template, 2, 5)(30, CelestialBodyDialogComponent_Conditional_30_Template, 2, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, CelestialBodyDialogComponent_Conditional_31_Template, 33, 45);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.HAS_SYMBOL.includes(ctx.body) ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, ctx.body.id), ", ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_2_0 = ctx.body.type) === ctx.CelestialBodyType.STAR ? 4 : tmp_2_0 === ctx.CelestialBodyType.PLANET ? 5 : tmp_2_0 === ctx.CelestialBodyType.DWARF_PLANET ? 6 : tmp_2_0 === ctx.CelestialBodyType.SATELLITE ? 7 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("mat-dialog-close", true);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.MISSING_PICTURES.includes(ctx.body) ? 11 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("href", \u0275\u0275pipeBind1(16, 14, "https://en.wikipedia.org/wiki/Mass"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 16, "Mass"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional((ctx.body.unknownData == null ? null : ctx.body.unknownData.mass) ? 20 : 21);
        \u0275\u0275advance(4);
        \u0275\u0275property("href", \u0275\u0275pipeBind1(25, 18, "https://en.wikipedia.org/wiki/Radius"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 20, "Mean radius"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional((ctx.body.unknownData == null ? null : ctx.body.unknownData.radius) ? 29 : 30);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.body !== ctx.SUN ? 31 : -1);
      }
    }, dependencies: [
      MatDialogTitle,
      CdkDrag,
      CdkDragHandle,
      MatIconButton,
      MatDialogClose,
      MatIcon,
      MatDialogContent,
      DecimalPipe,
      TranslateModule,
      TranslatePipe
    ], styles: [`

.mat-elevation-z0[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z0[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-0, none);
}
.mat-elevation-z1[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z1[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-1, none);
}
.mat-elevation-z2[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z2[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-2, none);
}
.mat-elevation-z3[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z3[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-3, none);
}
.mat-elevation-z4[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z4[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-4, none);
}
.mat-elevation-z5[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z5[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-5, none);
}
.mat-elevation-z6[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z6[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-6, none);
}
.mat-elevation-z7[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z7[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-7, none);
}
.mat-elevation-z8[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z8[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-8, none);
}
.mat-elevation-z9[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z9[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-9, none);
}
.mat-elevation-z10[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z10[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-10, none);
}
.mat-elevation-z11[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z11[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-11, none);
}
.mat-elevation-z12[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z12[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-12, none);
}
.mat-elevation-z13[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z13[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-13, none);
}
.mat-elevation-z14[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z14[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-14, none);
}
.mat-elevation-z15[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z15[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-15, none);
}
.mat-elevation-z16[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z16[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-16, none);
}
.mat-elevation-z17[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z17[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-17, none);
}
.mat-elevation-z18[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z18[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-18, none);
}
.mat-elevation-z19[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z19[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-19, none);
}
.mat-elevation-z20[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z20[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-20, none);
}
.mat-elevation-z21[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z21[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-21, none);
}
.mat-elevation-z22[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z22[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-22, none);
}
.mat-elevation-z23[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z23[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-23, none);
}
.mat-elevation-z24[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z24[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-24, none);
}
html[_ngcontent-%COMP%] {
  --mat-sys-on-surface: initial;
}
.mat-app-background[_ngcontent-%COMP%] {
  background-color: var(--mat-app-background-color, var(--mat-sys-background, transparent));
  color: var(--mat-app-text-color, var(--mat-sys-on-background, inherit));
}
.mat-elevation-z0[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z0[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-0, none);
}
.mat-elevation-z1[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z1[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-1, none);
}
.mat-elevation-z2[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z2[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-2, none);
}
.mat-elevation-z3[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z3[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-3, none);
}
.mat-elevation-z4[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z4[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-4, none);
}
.mat-elevation-z5[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z5[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-5, none);
}
.mat-elevation-z6[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z6[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-6, none);
}
.mat-elevation-z7[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z7[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-7, none);
}
.mat-elevation-z8[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z8[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-8, none);
}
.mat-elevation-z9[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z9[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-9, none);
}
.mat-elevation-z10[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z10[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-10, none);
}
.mat-elevation-z11[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z11[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-11, none);
}
.mat-elevation-z12[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z12[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-12, none);
}
.mat-elevation-z13[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z13[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-13, none);
}
.mat-elevation-z14[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z14[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-14, none);
}
.mat-elevation-z15[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z15[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-15, none);
}
.mat-elevation-z16[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z16[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-16, none);
}
.mat-elevation-z17[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z17[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-17, none);
}
.mat-elevation-z18[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z18[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-18, none);
}
.mat-elevation-z19[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z19[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-19, none);
}
.mat-elevation-z20[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z20[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-20, none);
}
.mat-elevation-z21[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z21[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-21, none);
}
.mat-elevation-z22[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z22[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-22, none);
}
.mat-elevation-z23[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z23[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-23, none);
}
.mat-elevation-z24[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z24[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-24, none);
}
html[_ngcontent-%COMP%]   html[_ngcontent-%COMP%] {
  --mat-sys-on-surface: initial;
}
.mat-app-background[_ngcontent-%COMP%] {
  background-color: var(--mat-app-background-color, var(--mat-sys-background, transparent));
  color: var(--mat-app-text-color, var(--mat-sys-on-background, inherit));
}
html[_ngcontent-%COMP%] {
  --mat-toolbar-container-background-color: #121316;
  --mat-toolbar-container-text-color: #e2e2e6;
  --mat-toolbar-title-text-font: "Exo 2", sans-serif;
  --mat-toolbar-title-text-line-height: 1.75rem;
  --mat-toolbar-title-text-size: 1.375rem;
  --mat-toolbar-title-text-tracking: 0;
  --mat-toolbar-title-text-weight: 400;
  --mat-toolbar-standard-height: 64px;
  --mat-toolbar-mobile-height: 56px;
}
html[_ngcontent-%COMP%] {
  --mdc-icon-button-icon-color: #dfe2eb;
  --mdc-icon-button-disabled-icon-color: rgba(226, 226, 230, 0.38);
  --mdc-icon-button-state-layer-size: 40px;
  --mdc-icon-button-icon-size: 24px;
}
html[_ngcontent-%COMP%] {
  --mat-icon-button-state-layer-color: #dfe2eb;
  --mat-icon-button-disabled-state-layer-color: #dfe2eb;
  --mat-icon-button-ripple-color: rgba(223, 226, 235, 0.12);
  --mat-icon-button-hover-state-layer-opacity: 0.08;
  --mat-icon-button-focus-state-layer-opacity: 0.12;
  --mat-icon-button-pressed-state-layer-opacity: 0.12;
  --mat-icon-button-touch-target-display: block;
}
html[_ngcontent-%COMP%] {
  --mdc-text-button-label-text-color: #9ecaff;
  --mdc-text-button-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-text-button-label-text-font: "Exo 2", sans-serif;
  --mdc-text-button-label-text-size: 0.875rem;
  --mdc-text-button-label-text-tracking: 0.006rem;
  --mdc-text-button-label-text-weight: 500;
  --mdc-text-button-container-height: 40px;
  --mdc-text-button-container-shape: 9999px;
}
html[_ngcontent-%COMP%] {
  --mdc-protected-button-container-elevation-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  --mdc-protected-button-disabled-container-elevation-shadow:
    0px 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px 0px rgba(0, 0, 0, 0.14),
    0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  --mdc-protected-button-focus-container-elevation-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  --mdc-protected-button-hover-container-elevation-shadow:
    0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14),
    0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  --mdc-protected-button-pressed-container-elevation-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  --mdc-protected-button-container-color: #121316;
  --mdc-protected-button-label-text-color: #9ecaff;
  --mdc-protected-button-disabled-container-color: rgba(226, 226, 230, 0.12);
  --mdc-protected-button-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-protected-button-label-text-font: "Exo 2", sans-serif;
  --mdc-protected-button-label-text-size: 0.875rem;
  --mdc-protected-button-label-text-tracking: 0.006rem;
  --mdc-protected-button-label-text-weight: 500;
  --mdc-protected-button-container-height: 40px;
  --mdc-protected-button-container-shape: 9999px;
}
html[_ngcontent-%COMP%] {
  --mdc-filled-button-container-color: #9ecaff;
  --mdc-filled-button-label-text-color: #003258;
  --mdc-filled-button-disabled-container-color: rgba(226, 226, 230, 0.12);
  --mdc-filled-button-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-filled-button-label-text-font: "Exo 2", sans-serif;
  --mdc-filled-button-label-text-size: 0.875rem;
  --mdc-filled-button-label-text-tracking: 0.006rem;
  --mdc-filled-button-label-text-weight: 500;
  --mdc-filled-button-container-height: 40px;
  --mdc-filled-button-container-shape: 9999px;
}
html[_ngcontent-%COMP%] {
  --mdc-outlined-button-disabled-outline-color: rgba(226, 226, 230, 0.12);
  --mdc-outlined-button-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-outlined-button-label-text-color: #9ecaff;
  --mdc-outlined-button-outline-color: #8d9199;
  --mdc-outlined-button-label-text-font: "Exo 2", sans-serif;
  --mdc-outlined-button-label-text-size: 0.875rem;
  --mdc-outlined-button-label-text-tracking: 0.006rem;
  --mdc-outlined-button-label-text-weight: 500;
  --mdc-outlined-button-container-height: 40px;
  --mdc-outlined-button-outline-width: 1px;
  --mdc-outlined-button-container-shape: 9999px;
}
html[_ngcontent-%COMP%] {
  --mat-text-button-state-layer-color: #9ecaff;
  --mat-text-button-disabled-state-layer-color: #dfe2eb;
  --mat-text-button-ripple-color: rgba(158, 202, 255, 0.12);
  --mat-text-button-hover-state-layer-opacity: 0.08;
  --mat-text-button-focus-state-layer-opacity: 0.12;
  --mat-text-button-pressed-state-layer-opacity: 0.12;
  --mat-text-button-touch-target-display: block;
  --mat-text-button-horizontal-padding: 12px;
  --mat-text-button-with-icon-horizontal-padding: 16px;
  --mat-text-button-icon-spacing: 8px;
  --mat-text-button-icon-offset: -4px;
}
html[_ngcontent-%COMP%] {
  --mat-protected-button-state-layer-color: #9ecaff;
  --mat-protected-button-disabled-state-layer-color: #dfe2eb;
  --mat-protected-button-ripple-color: rgba(158, 202, 255, 0.12);
  --mat-protected-button-hover-state-layer-opacity: 0.08;
  --mat-protected-button-focus-state-layer-opacity: 0.12;
  --mat-protected-button-pressed-state-layer-opacity: 0.12;
  --mat-protected-button-touch-target-display: block;
  --mat-protected-button-horizontal-padding: 24px;
  --mat-protected-button-icon-spacing: 8px;
  --mat-protected-button-icon-offset: -8px;
}
html[_ngcontent-%COMP%] {
  --mat-filled-button-state-layer-color: #003258;
  --mat-filled-button-disabled-state-layer-color: #dfe2eb;
  --mat-filled-button-ripple-color: rgba(0, 50, 88, 0.12);
  --mat-filled-button-hover-state-layer-opacity: 0.08;
  --mat-filled-button-focus-state-layer-opacity: 0.12;
  --mat-filled-button-pressed-state-layer-opacity: 0.12;
  --mat-filled-button-touch-target-display: block;
  --mat-filled-button-horizontal-padding: 24px;
  --mat-filled-button-icon-spacing: 8px;
  --mat-filled-button-icon-offset: -8px;
}
html[_ngcontent-%COMP%] {
  --mat-outlined-button-state-layer-color: #9ecaff;
  --mat-outlined-button-disabled-state-layer-color: #dfe2eb;
  --mat-outlined-button-ripple-color: rgba(158, 202, 255, 0.12);
  --mat-outlined-button-hover-state-layer-opacity: 0.08;
  --mat-outlined-button-focus-state-layer-opacity: 0.12;
  --mat-outlined-button-pressed-state-layer-opacity: 0.12;
  --mat-outlined-button-touch-target-display: block;
  --mat-outlined-button-horizontal-padding: 24px;
  --mat-outlined-button-icon-spacing: 8px;
  --mat-outlined-button-icon-offset: -8px;
}
html[_ngcontent-%COMP%] {
  --mat-divider-color: #8d9199;
  --mat-divider-width: 1px;
}
html[_ngcontent-%COMP%] {
  --mat-expansion-container-background-color: #121316;
  --mat-expansion-container-text-color: #e2e2e6;
  --mat-expansion-actions-divider-color: #8d9199;
  --mat-expansion-header-hover-state-layer-color: rgba(226, 226, 230, 0.08);
  --mat-expansion-header-focus-state-layer-color: rgba(226, 226, 230, 0.12);
  --mat-expansion-header-disabled-state-text-color: rgba(226, 226, 230, 0.38);
  --mat-expansion-header-text-color: #e2e2e6;
  --mat-expansion-header-description-color: #dfe2eb;
  --mat-expansion-header-indicator-color: #dfe2eb;
  --mat-expansion-header-text-font: "Exo 2", sans-serif;
  --mat-expansion-header-text-size: 1rem;
  --mat-expansion-header-text-weight: 500;
  --mat-expansion-header-text-line-height: 1.5rem;
  --mat-expansion-header-text-tracking: 0.009rem;
  --mat-expansion-container-text-font: "Exo 2", sans-serif;
  --mat-expansion-container-text-line-height: 1.5rem;
  --mat-expansion-container-text-size: 1rem;
  --mat-expansion-container-text-tracking: 0.031rem;
  --mat-expansion-container-text-weight: 400;
  --mat-expansion-header-collapsed-state-height: 48px;
  --mat-expansion-header-expanded-state-height: 64px;
  --mat-expansion-container-shape: 12px;
  --mat-expansion-legacy-header-indicator-display: none;
  --mat-expansion-header-indicator-display: inline-block;
}
html[_ngcontent-%COMP%] {
  --mat-grid-list-tile-header-primary-text-size: 400 1rem / 1.5rem "Exo 2", sans-serif;
  --mat-grid-list-tile-header-secondary-text-size: 400 0.875rem / 1.25rem "Exo 2", sans-serif;
  --mat-grid-list-tile-footer-primary-text-size: 400 1rem / 1.5rem "Exo 2", sans-serif;
  --mat-grid-list-tile-footer-secondary-text-size: 400 0.875rem / 1.25rem "Exo 2", sans-serif;
}
html[_ngcontent-%COMP%] {
  --mdc-dialog-container-color: #121316;
  --mdc-dialog-subhead-color: #e2e2e6;
  --mdc-dialog-supporting-text-color: #dfe2eb;
  --mdc-dialog-subhead-font: "Exo 2", sans-serif;
  --mdc-dialog-subhead-line-height: 2rem;
  --mdc-dialog-subhead-size: 1.5rem;
  --mdc-dialog-subhead-weight: 400;
  --mdc-dialog-subhead-tracking: 0;
  --mdc-dialog-supporting-text-font: "Exo 2", sans-serif;
  --mdc-dialog-supporting-text-line-height: 1.25rem;
  --mdc-dialog-supporting-text-size: 0.875rem;
  --mdc-dialog-supporting-text-weight: 400;
  --mdc-dialog-supporting-text-tracking: 0.016rem;
  --mdc-dialog-container-shape: 28px;
}
html[_ngcontent-%COMP%] {
  --mat-dialog-container-elevation-shadow: none;
  --mat-dialog-container-max-width: 560px;
  --mat-dialog-container-small-max-width: calc(100vw - 32px);
  --mat-dialog-container-min-width: 280px;
  --mat-dialog-actions-alignment: flex-end;
  --mat-dialog-actions-padding: 16px 24px;
  --mat-dialog-content-padding: 20px 24px;
  --mat-dialog-with-actions-content-padding: 20px 24px 0;
  --mat-dialog-headline-padding: 6px 24px 13px;
}
html[_ngcontent-%COMP%] {
  --mat-sidenav-container-background-color: #121316;
  --mat-sidenav-container-text-color: #dfe2eb;
  --mat-sidenav-content-background-color: #121316;
  --mat-sidenav-content-text-color: #e2e2e6;
  --mat-sidenav-scrim-color: rgba(44, 49, 55, 0.4);
  --mat-sidenav-container-shape: 16px;
  --mat-sidenav-container-elevation-shadow: none;
  --mat-sidenav-container-width: 360px;
  --mat-sidenav-container-divider-color: transparent;
}
html[_ngcontent-%COMP%] {
  --mdc-list-list-item-container-color: transparent;
  --mdc-list-list-item-leading-avatar-color: #00497d;
  --mdc-list-list-item-disabled-state-layer-color: #e2e2e6;
  --mdc-list-list-item-disabled-state-layer-opacity: 0.12;
  --mdc-list-list-item-label-text-color: #e2e2e6;
  --mdc-list-list-item-supporting-text-color: #dfe2eb;
  --mdc-list-list-item-leading-icon-color: #dfe2eb;
  --mdc-list-list-item-trailing-supporting-text-color: #dfe2eb;
  --mdc-list-list-item-trailing-icon-color: #dfe2eb;
  --mdc-list-list-item-selected-trailing-icon-color: #9ecaff;
  --mdc-list-list-item-disabled-label-text-color: #e2e2e6;
  --mdc-list-list-item-disabled-leading-icon-color: #e2e2e6;
  --mdc-list-list-item-disabled-trailing-icon-color: #e2e2e6;
  --mdc-list-list-item-hover-label-text-color: #e2e2e6;
  --mdc-list-list-item-focus-label-text-color: #e2e2e6;
  --mdc-list-list-item-hover-state-layer-color: #e2e2e6;
  --mdc-list-list-item-hover-state-layer-opacity: 0.08;
  --mdc-list-list-item-focus-state-layer-color: #e2e2e6;
  --mdc-list-list-item-focus-state-layer-opacity: 0.12;
  --mdc-list-list-item-label-text-font: "Exo 2", sans-serif;
  --mdc-list-list-item-label-text-line-height: 1.5rem;
  --mdc-list-list-item-label-text-size: 1rem;
  --mdc-list-list-item-label-text-tracking: 0.031rem;
  --mdc-list-list-item-label-text-weight: 400;
  --mdc-list-list-item-supporting-text-font: "Exo 2", sans-serif;
  --mdc-list-list-item-supporting-text-line-height: 1.25rem;
  --mdc-list-list-item-supporting-text-size: 0.875rem;
  --mdc-list-list-item-supporting-text-tracking: 0.016rem;
  --mdc-list-list-item-supporting-text-weight: 400;
  --mdc-list-list-item-trailing-supporting-text-font: "Exo 2", sans-serif;
  --mdc-list-list-item-trailing-supporting-text-line-height: 1rem;
  --mdc-list-list-item-trailing-supporting-text-size: 0.688rem;
  --mdc-list-list-item-trailing-supporting-text-tracking: 0.031rem;
  --mdc-list-list-item-trailing-supporting-text-weight: 500;
  --mdc-list-list-item-one-line-container-height: 48px;
  --mdc-list-list-item-two-line-container-height: 64px;
  --mdc-list-list-item-three-line-container-height: 88px;
  --mdc-list-list-item-container-shape: 0;
  --mdc-list-list-item-leading-avatar-shape: 9999px;
  --mdc-list-list-item-leading-icon-size: 24px;
  --mdc-list-list-item-leading-avatar-size: 40px;
  --mdc-list-list-item-trailing-icon-size: 24px;
  --mdc-list-list-item-disabled-label-text-opacity: 0.3;
  --mdc-list-list-item-disabled-leading-icon-opacity: 0.38;
  --mdc-list-list-item-disabled-trailing-icon-opacity: 0.38;
}
html[_ngcontent-%COMP%] {
  --mat-list-active-indicator-color: #004e59;
  --mat-list-list-item-leading-icon-start-space: 16px;
  --mat-list-list-item-leading-icon-end-space: 16px;
  --mat-list-active-indicator-shape: 9999px;
}
html[_ngcontent-%COMP%] {
  --mat-standard-button-toggle-hover-state-layer-opacity: 0.08;
  --mat-standard-button-toggle-focus-state-layer-opacity: 0.12;
  --mat-standard-button-toggle-text-color: #e2e2e6;
  --mat-standard-button-toggle-state-layer-color: #e2e2e6;
  --mat-standard-button-toggle-selected-state-background-color: #004e59;
  --mat-standard-button-toggle-selected-state-text-color: #a1efff;
  --mat-standard-button-toggle-disabled-state-text-color: rgba(226, 226, 230, 0.38);
  --mat-standard-button-toggle-disabled-selected-state-text-color: rgba(226, 226, 230, 0.38);
  --mat-standard-button-toggle-disabled-selected-state-background-color: rgba(226, 226, 230, 0.12);
  --mat-standard-button-toggle-divider-color: #8d9199;
  --mat-standard-button-toggle-label-text-font: "Exo 2", sans-serif;
  --mat-standard-button-toggle-label-text-line-height: 1.25rem;
  --mat-standard-button-toggle-label-text-size: 0.875rem;
  --mat-standard-button-toggle-label-text-tracking: 0.006rem;
  --mat-standard-button-toggle-label-text-weight: 500;
  --mat-standard-button-toggle-height: 40px;
  --mat-standard-button-toggle-shape: 9999px;
  --mat-standard-button-toggle-background-color: transparent;
  --mat-standard-button-toggle-disabled-state-background-color: transparent;
}
html[_ngcontent-%COMP%] {
  --mat-menu-item-label-text-color: #e2e2e6;
  --mat-menu-item-icon-color: #dfe2eb;
  --mat-menu-item-hover-state-layer-color: rgba(226, 226, 230, 0.08);
  --mat-menu-item-focus-state-layer-color: rgba(226, 226, 230, 0.12);
  --mat-menu-container-color: #1e2022;
  --mat-menu-divider-color: #43474e;
  --mat-menu-item-label-text-font: "Exo 2", sans-serif;
  --mat-menu-item-label-text-size: 0.875rem;
  --mat-menu-item-label-text-tracking: 0.006rem;
  --mat-menu-item-label-text-line-height: 1.25rem;
  --mat-menu-item-label-text-weight: 500;
  --mat-menu-container-shape: 4px;
  --mat-menu-divider-bottom-spacing: 8px;
  --mat-menu-divider-top-spacing: 8px;
  --mat-menu-item-spacing: 12px;
  --mat-menu-item-icon-size: 24px;
  --mat-menu-item-leading-spacing: 12px;
  --mat-menu-item-trailing-spacing: 12px;
  --mat-menu-item-with-icon-leading-spacing: 12px;
  --mat-menu-item-with-icon-trailing-spacing: 12px;
  --mat-menu-container-elevation-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
html[_ngcontent-%COMP%] {
  --mdc-filled-text-field-caret-color: #9ecaff;
  --mdc-filled-text-field-focus-active-indicator-color: #9ecaff;
  --mdc-filled-text-field-focus-label-text-color: #9ecaff;
  --mdc-filled-text-field-container-color: #43474e;
  --mdc-filled-text-field-disabled-container-color: rgba(226, 226, 230, 0.04);
  --mdc-filled-text-field-label-text-color: #dfe2eb;
  --mdc-filled-text-field-hover-label-text-color: #dfe2eb;
  --mdc-filled-text-field-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-filled-text-field-input-text-color: #e2e2e6;
  --mdc-filled-text-field-disabled-input-text-color: rgba(226, 226, 230, 0.38);
  --mdc-filled-text-field-input-text-placeholder-color: #dfe2eb;
  --mdc-filled-text-field-error-hover-label-text-color: #ffdad6;
  --mdc-filled-text-field-error-focus-label-text-color: #ffb4ab;
  --mdc-filled-text-field-error-label-text-color: #ffb4ab;
  --mdc-filled-text-field-active-indicator-color: #dfe2eb;
  --mdc-filled-text-field-disabled-active-indicator-color: rgba(226, 226, 230, 0.38);
  --mdc-filled-text-field-hover-active-indicator-color: #e2e2e6;
  --mdc-filled-text-field-error-active-indicator-color: #ffb4ab;
  --mdc-filled-text-field-error-focus-active-indicator-color: #ffb4ab;
  --mdc-filled-text-field-error-hover-active-indicator-color: #ffdad6;
  --mdc-filled-text-field-label-text-font: "Exo 2", sans-serif;
  --mdc-filled-text-field-label-text-size: 1rem;
  --mdc-filled-text-field-label-text-tracking: 0.031rem;
  --mdc-filled-text-field-label-text-weight: 400;
  --mdc-filled-text-field-active-indicator-height: 1px;
  --mdc-filled-text-field-focus-active-indicator-height: 2px;
  --mdc-filled-text-field-container-shape: 4px;
}
html[_ngcontent-%COMP%] {
  --mdc-outlined-text-field-caret-color: #9ecaff;
  --mdc-outlined-text-field-focus-outline-color: #9ecaff;
  --mdc-outlined-text-field-focus-label-text-color: #9ecaff;
  --mdc-outlined-text-field-label-text-color: #dfe2eb;
  --mdc-outlined-text-field-hover-label-text-color: #e2e2e6;
  --mdc-outlined-text-field-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-outlined-text-field-input-text-color: #e2e2e6;
  --mdc-outlined-text-field-disabled-input-text-color: rgba(226, 226, 230, 0.38);
  --mdc-outlined-text-field-input-text-placeholder-color: #dfe2eb;
  --mdc-outlined-text-field-error-focus-label-text-color: #ffb4ab;
  --mdc-outlined-text-field-error-label-text-color: #ffb4ab;
  --mdc-outlined-text-field-error-hover-label-text-color: #ffdad6;
  --mdc-outlined-text-field-outline-color: #8d9199;
  --mdc-outlined-text-field-disabled-outline-color: rgba(226, 226, 230, 0.12);
  --mdc-outlined-text-field-hover-outline-color: #e2e2e6;
  --mdc-outlined-text-field-error-focus-outline-color: #ffb4ab;
  --mdc-outlined-text-field-error-hover-outline-color: #ffdad6;
  --mdc-outlined-text-field-error-outline-color: #ffb4ab;
  --mdc-outlined-text-field-label-text-font: "Exo 2", sans-serif;
  --mdc-outlined-text-field-label-text-size: 1rem;
  --mdc-outlined-text-field-label-text-tracking: 0.031rem;
  --mdc-outlined-text-field-label-text-weight: 400;
  --mdc-outlined-text-field-outline-width: 1px;
  --mdc-outlined-text-field-focus-outline-width: 2px;
  --mdc-outlined-text-field-container-shape: 4px;
}
html[_ngcontent-%COMP%] {
  --mat-form-field-focus-select-arrow-color: #9ecaff;
  --mat-form-field-disabled-input-text-placeholder-color: rgba(226, 226, 230, 0.38);
  --mat-form-field-state-layer-color: #e2e2e6;
  --mat-form-field-error-text-color: #ffb4ab;
  --mat-form-field-select-option-text-color: #1a1c1e;
  --mat-form-field-select-disabled-option-text-color: rgba(26, 28, 30, 0.38);
  --mat-form-field-leading-icon-color: #dfe2eb;
  --mat-form-field-disabled-leading-icon-color: rgba(226, 226, 230, 0.38);
  --mat-form-field-trailing-icon-color: #dfe2eb;
  --mat-form-field-disabled-trailing-icon-color: rgba(226, 226, 230, 0.38);
  --mat-form-field-error-focus-trailing-icon-color: #ffb4ab;
  --mat-form-field-error-hover-trailing-icon-color: #ffdad6;
  --mat-form-field-error-trailing-icon-color: #ffb4ab;
  --mat-form-field-enabled-select-arrow-color: #dfe2eb;
  --mat-form-field-disabled-select-arrow-color: rgba(226, 226, 230, 0.38);
  --mat-form-field-hover-state-layer-opacity: 0.08;
  --mat-form-field-container-text-font: "Exo 2", sans-serif;
  --mat-form-field-container-text-line-height: 1.5rem;
  --mat-form-field-container-text-size: 1rem;
  --mat-form-field-container-text-tracking: 0.031rem;
  --mat-form-field-container-text-weight: 400;
  --mat-form-field-subscript-text-font: "Exo 2", sans-serif;
  --mat-form-field-subscript-text-line-height: 1rem;
  --mat-form-field-subscript-text-size: 0.75rem;
  --mat-form-field-subscript-text-tracking: 0.025rem;
  --mat-form-field-subscript-text-weight: 400;
  --mat-form-field-container-height: 56px;
  --mat-form-field-filled-label-display: block;
  --mat-form-field-container-vertical-padding: 16px;
  --mat-form-field-filled-with-label-container-padding-top: 24px;
  --mat-form-field-filled-with-label-container-padding-bottom: 8px;
  --mat-form-field-focus-state-layer-opacity: 0;
}
html[_ngcontent-%COMP%] {
  --mdc-dialog-container-shape: 6px;
  --mat-dialog-container-max-width: 100vw;
  --mat-standard-button-toggle-shape: 5px;
  --mdc-outlined-button-container-shape: 6px;
  --mat-expansion-container-background-color: transparent;
}
.mat-mdc-menu-panel[_ngcontent-%COMP%] {
  background: hsl(0, 0%, 40%);
}
@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .mat-mdc-menu-panel[_ngcontent-%COMP%] {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.3) !important;
  }
}
.mat-mdc-menu-item[_ngcontent-%COMP%] {
  color: white;
  min-width: 150px;
  padding-left: 30px;
}
.mat-mdc-menu-item[_ngcontent-%COMP%]:hover:not([disabled]) {
  background: rgba(0, 0, 0, 0.09);
}
  .mat-mdc-dialog-container .mat-mdc-dialog-title, 
  .mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: white !important;
}
  .mat-mdc-dialog-container .mat-mdc-dialog-title {
  padding-top: 10px !important;
  padding-right: 10px !important;
  cursor: move !important;
  margin-bottom: 0 !important;
  display: flex !important;
  align-items: center !important;
}
  .mat-mdc-dialog-container .mat-mdc-dialog-content {
  max-height: 90vh;
}
  .mat-mdc-dialog-container .mat-mdc-dialog-title .close-button {
  margin-left: auto !important;
  font-size: 20px !important;
  color: rgba(196, 196, 196, 0.6) !important;
}
  .mat-mdc-dialog-container .mat-mdc-dialog-title .close-button:hover {
  color: rgba(196, 196, 196, 0.8) !important;
}
  .mat-mdc-dialog-container .mat-mdc-dialog-surface {
  background: hsl(0, 0%, 40%) !important;
}
@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    .mat-mdc-dialog-container .mat-mdc-dialog-surface {
    -webkit-backdrop-filter: blur(10px) !important;
    backdrop-filter: blur(10px) !important;
    background-color: hsla(0, 0%, 100%, 0.15) !important;
  }
}
@media only screen and (max-width: 800px) {
    .celestial-body-dialog-panel, 
     .settings-dialog-panel, 
     .contact-dialog-panel, 
     .about-dialog-panel, 
     .legals-dialog-panel {
    min-width: unset !important;
    max-width: unset !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
  }
    .mat-mdc-dialog-content {
    max-height: 100% !important;
  }
}
[_nghost-%COMP%] {
  display: block;
}
.symbol[_ngcontent-%COMP%] {
  filter: saturate(0%) brightness(0%) invert(100%) opacity(1);
  filter: url('data:image/svg+xml;utf8,  <svg xmlns="http://www.w3.org/2000/svg">    <filter id="recolor" color-interpolation-filters="sRGB">      <feColorMatrix type="matrix" values="       0 0 0 0 1       0 0 0 0 1       0 0 0 0 1       0 0 0 1 0      "/>    </filter>  </svg>  #recolor');
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
mat-dialog-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  display: block;
  margin: auto;
  padding-bottom: 30px;
}
mat-dialog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  padding: 0;
  margin: 0;
}
mat-dialog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  margin: 6px;
}
mat-dialog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {
  padding-right: 7px;
  order: 1;
}
mat-dialog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {
  padding-left: 7px;
  order: 3;
}
mat-dialog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {
  background-image:
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.5px);
  background-position: bottom;
  background-size: 1ex 4.5px;
  background-repeat: space no-repeat;
  content: "";
  flex-grow: 1;
  height: 1em;
  order: 2;
}
/*# sourceMappingURL=https://lebesnec.github.io/solar-system-develop/celestial-body-dialog.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CelestialBodyDialogComponent, { className: "CelestialBodyDialogComponent", filePath: "src/app/scene/celestial-body-dialog/celestial-body-dialog.component.ts", lineNumber: 30 });
})();

// src/app/scene/scene.component.ts
var _c02 = (a0, a1, a2, a3, a4, a5) => ({ "scene": true, "hide-reticule": a0, "hide-orbits": a1, "hide-orbits-satellites": a2, "hide-labels": a3, "hide-scale": a4, "hide-milkyway": a5 });
var TOOLBAR_HEIGHT = 65;
var RETICULE_SIZE = 30;
var RETICULE_SPACING = 300;
var ORBIT_SEMI_MAJOR_AXIS_ELLIPSE_THRESHOLD = 1e5;
var NB_POINTS_ORBIT = 180;
var LAGRANGE_POINTS_WIDTH = 6;
var SYMBOL_SIZE = 18;
var LABEL_SPACING = 15;
var LABEL_DISTANCE_TO_BODY = { x: 20, y: 10 };
var LABEL_TRANSITION_MS = 50;
var LABEL_PATH_MARGIN = 4;
var ZOOM_TRANSITION_MS = 500;
var SCALE_POSSIBLE_VALUES = [
  { max: 500, tickInterval: 10 },
  { max: 100, tickInterval: 10 },
  { max: 50, tickInterval: 10 },
  { max: 10, tickInterval: 1 },
  { max: 5, tickInterval: 1 },
  { max: 3, tickInterval: 1 },
  { max: 2, tickInterval: 1 },
  { max: 1, tickInterval: 1 },
  { max: 0.5, tickInterval: 0.1 },
  { max: 0.1, tickInterval: 0.01 },
  { max: 0.01, tickInterval: 1e-3 },
  { max: 1e-3, tickInterval: 1e-4 },
  { max: 1e-4, tickInterval: 1e-5 }
];
var SCALE_LARGE_TICK_STEP = 5;
var SCALE_TEXT_PADDING = 10;
var SCALE_HEIGHT_LARGE_TICK = 10;
var SCALE_HEIGHT_SMALL_TICK = 6;
var SCALE_TEXT_KEY = "NB AU";
var SCALE_TITLE_KEY = "NB_AU Astronomical Unit = NB_KM km";
var SCALE_TITLE_PLURAL_KEY = "NB_AU Astronomical Units = NB_KM km";
var COMPAS_WIDTH = 35;
var ZOOM_EXTENT = [25e-5, 200];
var SceneComponent = class _SceneComponent {
  get scaleSetting() {
    return this.settingsService.scale;
  }
  get reticuleSetting() {
    return this.settingsService.reticule;
  }
  get orbitsSetting() {
    return this.settingsService.orbits;
  }
  get labelsSetting() {
    return this.settingsService.labels;
  }
  get milkyWaySetting() {
    return this.settingsService.milkyWay;
  }
  get center() {
    return {
      x: window.innerWidth / 2,
      // px
      y: window.innerHeight / 2
      // px
    };
  }
  constructor() {
    this.OrbitsSetting = OrbitsSetting;
    this.bodiesLabels = {};
    this.scale = 1e5;
    this.dialog = inject(MatDialog);
    this.sceneService = inject(SceneService);
    this.searchPanelService = inject(SearchPanelService);
    this.settingsService = inject(SettingsService);
    this.translateService = inject(TranslateService);
    this.route = inject(ActivatedRoute);
    window.addEventListener("wheel", (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    }, { passive: false });
  }
  ngOnInit() {
    this.searchPanelService.onBodySelected.subscribe((body) => {
      if (body) {
        this.zoomToCelestialBody(body, true).subscribe({
          complete: () => this.select(body)
        });
      } else {
        this.deselectAll();
        this.deZoom();
      }
    });
    this.searchPanelService.onLagrangePointSelected.subscribe((type2) => this.zoomToLagrangePoint(type2));
    fromEvent(window, "resize").pipe(throttleTime(300, void 0, { trailing: true })).subscribe(() => this.onWindowResize());
  }
  ngAfterViewInit() {
    this.svgSelection = select_default2(".scene").on("click", () => {
      this.deselectAll();
    });
    this.groupBackgroundSelection = this.svgSelection.append("g");
    this.groupZoomSelection = this.svgSelection.append("g");
    this.groupForegroundSelection = this.svgSelection.append("g");
    this.initReticule();
    this.initOrbits();
    this.initCelestialBodies();
    this.initZoom();
    this.translateService.onLangChange.subscribe(() => this.onLangChange());
    this.onLangChange();
    this.route.queryParams.subscribe((params) => {
      if (params.goto) {
        this.handleParamId(params.goto);
      }
    });
  }
  onLangChange() {
    this.translateService.get(SOLAR_SYSTEM.map((b) => b.id)).subscribe((bodiesLabels) => {
      this.groupForegroundSelection.selectAll(".group-label").remove();
      this.bodiesLabels = bodiesLabels;
      this.initLabels();
    });
    this.initScale();
    this.initRings();
    this.initLagrangePoints();
  }
  handleParamId(id2) {
    const body = SOLAR_SYSTEM.find((b) => b.id === id2);
    if (body) {
      this.zoomToCelestialBody(body, true).subscribe({
        complete: () => this.select(body)
      });
    } else {
      const lagrangePointType = LAGRANGE_POINT_TYPES.find((t) => t === id2);
      if (lagrangePointType) {
        this.translateService.get(LAGRANGE_POINT_I18N_KEY + lagrangePointType).subscribe(() => {
          this.zoomToLagrangePoint(lagrangePointType);
        });
      }
    }
  }
  onWindowResize() {
    this.initReticule();
    this.initScale();
  }
  initZoom() {
    this.d3Zoom = zoom_default2().scaleExtent(ZOOM_EXTENT).on("zoom", (e) => {
      const isPan = this.transform?.k === e.transform.k;
      this.transform = e.transform;
      this.groupZoomSelection.attr("transform", e.transform);
      this.initLabels();
      if (!isPan) {
        this.initScale();
        this.initLagrangePoints();
      }
    });
    this.svgSelection.call(this.d3Zoom);
    this.transform = identity2.translate(this.center.x, this.center.y).scale(Math.min(this.center.x * 2, this.center.y * 2) / (SOLAR_SYSTEM_SIZE / this.scale));
    this.svgSelection.call(this.d3Zoom.transform, this.transform);
  }
  initReticule() {
    const rangeX = range(0, window.innerWidth, RETICULE_SPACING);
    const rangeY = range(TOOLBAR_HEIGHT, window.innerHeight + TOOLBAR_HEIGHT, RETICULE_SPACING);
    const data = [];
    rangeX.forEach((x2) => {
      rangeY.forEach((y2) => {
        data.push({ x: x2, y: y2 });
      });
    });
    this.groupBackgroundSelection.selectAll(".reticuleV").data(data, (d) => "reticuleV_" + d.x + "_" + d.y).join((enter) => enter.append("path").attr("id", (d) => "reticuleV_" + d.x + "_" + d.y).attr("class", "reticuleV").attr("shape-rendering", "crispEdges").attr("d", (d) => `M ${d.x} ${d.y - RETICULE_SIZE / 2 - 1} L ${d.x} ${d.y + RETICULE_SIZE / 2}`), (update) => update.attr("x", (d) => d.x).attr("y", (d) => d.y));
    this.groupBackgroundSelection.selectAll(".reticuleH").data(data, (d) => "reticuleH_" + d.x + "_" + d.y).join((enter) => enter.append("path").attr("id", (d) => "reticuleH_" + d.x + "_" + d.y).attr("class", "reticuleH").attr("shape-rendering", "crispEdges").attr("d", (d) => `M ${d.x - RETICULE_SIZE / 2 - 1} ${d.y} L ${d.x + RETICULE_SIZE / 2} ${d.y}`), (update) => update.attr("x", (d) => d.x).attr("y", (d) => d.y));
  }
  initCelestialBodies() {
    this.groupZoomSelection.selectAll(".celestial-body").data(SOLAR_SYSTEM, (d) => d.id).join((enter) => enter.append("circle").attr("class", (body) => "celestial-body " + body.type + " " + body.id).attr("r", (body) => body.radius / this.scale).attr("cx", (body) => body.position.x / this.scale).attr("cy", (body) => body.position.y / this.scale).attr("transform", (body) => this.getRotationForLongitudeOfAscendingNode(body)).on("click", (event, d) => {
      this.select(d);
      event.stopPropagation();
    }));
  }
  initRings() {
    const ringsData = SOLAR_SYSTEM.reduce((result, body) => {
      const rings = body.rings ?? [];
      return result.concat(rings.map((ring) => ({ ring, body })));
    }, []);
    this.translateService.get(ringsData.map((d) => d.ring.id + RING_I18N_KEY)).subscribe((translations) => {
      this.groupZoomSelection.selectAll(".ring").remove();
      this.groupZoomSelection.selectAll(".ring").data(ringsData, (d) => d.ring.id).join((enter) => enter.append("path").attr("class", (d) => "ring " + d.ring.id).attr("d", (d) => this.getRingPath(d)).attr("transform", (d) => this.getRotationForLongitudeOfAscendingNode(d.body)).append("title").html((d) => translations[d.ring.id + RING_I18N_KEY]));
    });
  }
  getRingPath(data) {
    const position = {
      x: data.body.position.x / this.scale,
      y: data.body.position.y / this.scale
    };
    let outerRadius = data.ring.radius + data.ring.width;
    let innerRadius = data.ring.radius;
    const overlappingRings = data.body.rings.filter((r) => r.id !== data.ring.id && innerRadius >= r.radius && innerRadius < r.radius + r.width && outerRadius > r.radius + r.width).sort((r1, r2) => r1.radius - r2.radius);
    if (overlappingRings.length > 0) {
      innerRadius = overlappingRings[0].radius + overlappingRings[0].width;
    }
    innerRadius = innerRadius / this.scale;
    outerRadius = outerRadius / this.scale;
    return `M ${position.x} ${position.y - outerRadius}
            A ${outerRadius} ${outerRadius} 0 1 0 ${position.x} ${position.y + outerRadius}
            A ${outerRadius} ${outerRadius} 0 1 0 ${position.x} ${position.y - outerRadius}
            Z
            M ${position.x} ${position.y - innerRadius}
            A ${innerRadius} ${innerRadius} 0 1 1 ${position.x} ${position.y + innerRadius}
            A ${innerRadius} ${innerRadius} 0 1 1 ${position.x} ${position.y - innerRadius}
            Z`;
  }
  initLagrangePoints() {
    const lagrangePoints = this.sceneService.getEarthLagrangePoints(this.scale);
    this.translateService.get(lagrangePoints.map((p) => LAGRANGE_POINT_I18N_KEY + p.type)).subscribe((translations) => {
      this.groupZoomSelection.selectAll(".lagrange-point").remove();
      this.groupZoomSelection.selectAll(".lagrange-point").data(lagrangePoints, (d) => d.type).join((enter) => {
        const g = enter.append("g").attr("class", (p) => "lagrange-point lagrange-point-" + p.type);
        const halfWidth = LAGRANGE_POINTS_WIDTH / (2 * this.transform.k);
        g.append("path").attr("d", (p) => `M ${p.x - halfWidth} ${p.y - halfWidth} L ${p.x + halfWidth} ${p.y + halfWidth}`);
        g.append("path").attr("d", (p) => `M ${p.x - halfWidth} ${p.y + halfWidth} L ${p.x + halfWidth} ${p.y - halfWidth}`);
        g.append("title").html((p) => translations[LAGRANGE_POINT_I18N_KEY + p.type]);
      });
    });
  }
  initOrbits() {
    const smallOrbitsData = SOLAR_SYSTEM.filter((body) => body.id !== "sun" && body.semiMajorAxis <= ORBIT_SEMI_MAJOR_AXIS_ELLIPSE_THRESHOLD).map((body) => ({
      body,
      orbit: this.sceneService.getOrbitEllipse(body, this.scale)
    }));
    this.groupZoomSelection.selectAll(".orbit-ellipse").data(smallOrbitsData, (d) => d.body.id).join((enter) => enter.append("ellipse").attr("class", (d) => "orbit-ellipse orbit orbit-" + d.body.type + " orbit-" + d.body.id).attr("cx", (d) => d.orbit.cx).attr("cy", (d) => d.orbit.cy).attr("rx", (d) => d.orbit.rx).attr("ry", (d) => d.orbit.ry).attr("transform", (d) => this.getRotationForLongitudeOfAscendingNode(d.body)));
    const lineFn = line_default((p) => p.x, (p) => p.y).curve(cardinalClosed_default.tension(1));
    const largeOrbitsData = SOLAR_SYSTEM.filter((body) => body.id !== "sun" && body.semiMajorAxis > ORBIT_SEMI_MAJOR_AXIS_ELLIPSE_THRESHOLD).map((body) => ({
      body,
      orbit: lineFn(this.sceneService.getOrbitPath(body, NB_POINTS_ORBIT, this.scale))
    }));
    this.groupZoomSelection.selectAll(".orbit-path").data(largeOrbitsData, (d) => d.body.id).join((enter) => enter.append("path").attr("class", (d) => "orbit-path orbit orbit-" + d.body.type + " orbit-" + d.body.id).attr("d", (d) => d.orbit).attr("transform", (d) => this.getRotationForLongitudeOfAscendingNode(d.body)));
  }
  getRotationForLongitudeOfAscendingNode(body) {
    if (body.longitudeOfAscendingNode && body.orbitBody) {
      return `rotate(${-body.longitudeOfAscendingNode}, ${body.orbitBody.position.x / this.scale}, ${body.orbitBody.position.y / this.scale})`;
    } else if (body.orbitBody) {
      return this.getRotationForLongitudeOfAscendingNode(body.orbitBody);
    } else {
      return null;
    }
  }
  initLabels() {
    const allLabelsData = SOLAR_SYSTEM.map((body) => {
      return {
        body,
        boundingBox: select_default2("." + body.id).node().getBoundingClientRect(),
        visible: true,
        hasSymbol: HAS_SYMBOL.includes(body)
      };
    });
    allLabelsData.forEach((data) => {
      data.visible = allLabelsData.every((otherData) => {
        if (otherData.visible && data.body !== otherData.body && data.body.radius < otherData.body.radius) {
          return !(data.boundingBox.left - LABEL_SPACING < otherData.boundingBox.right + LABEL_SPACING && data.boundingBox.right + LABEL_SPACING > otherData.boundingBox.left - LABEL_SPACING && data.boundingBox.top - LABEL_SPACING < otherData.boundingBox.bottom + LABEL_SPACING && data.boundingBox.bottom + LABEL_SPACING > otherData.boundingBox.top - LABEL_SPACING);
        } else {
          return true;
        }
      });
    });
    const labelsData = allLabelsData.filter((data) => data.visible);
    if (this.labelsPath) {
      this.labelsPath.remove();
    }
    this.labelsPath = this.groupForegroundSelection.append("path").attr("class", "label-path").style("opacity", 0);
    const groupLabelsSelection = this.groupForegroundSelection.selectAll(".group-label").data(labelsData, (d) => d.body.id).join((enter) => enter.append("g").attr("class", "group-label").on("mouseover", (event, d) => {
      const textBoundingBox = event.currentTarget.getBoundingClientRect();
      this.labelsPath.attr("d", `M ${d.boundingBox.x + d.boundingBox.width / 2} ${d.boundingBox.y + d.boundingBox.height / 2}
                                                                                   L ${textBoundingBox.x - LABEL_PATH_MARGIN} ${textBoundingBox.bottom + LABEL_PATH_MARGIN}
                                                                                   L ${textBoundingBox.x + textBoundingBox.width + LABEL_PATH_MARGIN} ${textBoundingBox.bottom + LABEL_PATH_MARGIN}`).transition().duration(LABEL_TRANSITION_MS).style("opacity", 1);
      select_default2(".orbit-" + d.body.id).classed("hovered", true);
    }).on("mouseout", (event, d) => {
      this.labelsPath.transition().duration(LABEL_TRANSITION_MS).style("opacity", 0);
      select_default2(".orbit-" + d.body.id).classed("hovered", false);
    }).on("mousedown", () => {
      this.labelsPath.style("opacity", 0);
    }).on("click", (event, d) => {
      this.select(d.body);
      this.zoomToCelestialBody(d.body, false);
      event.stopPropagation();
    }));
    groupLabelsSelection.selectAll(".label").data((d) => [d], (d) => d.body.id).join((enter) => enter.append("text").attr("class", (d) => "label label-" + d.body.type + " label-" + d.body.id).attr("dominant-baseline", "central").text((d) => this.bodiesLabels[d.body.id]).attr("x", (d) => d.boundingBox.right + LABEL_DISTANCE_TO_BODY.x + (d.hasSymbol ? 1.2 * SYMBOL_SIZE : 0)).attr("y", (d) => d.boundingBox.bottom + LABEL_DISTANCE_TO_BODY.y), (update) => update.attr("x", (d) => d.boundingBox.right + LABEL_DISTANCE_TO_BODY.x + (d.hasSymbol ? 1.2 * SYMBOL_SIZE : 0)).attr("y", (d) => d.boundingBox.bottom + LABEL_DISTANCE_TO_BODY.y));
    groupLabelsSelection.selectAll(".label-symbol").data((d) => d.body !== SUN && d.hasSymbol ? [d] : [], (d) => d.body.id).join((enter) => enter.append("image").attr("class", (d) => "label-symbol label-symbol-" + d.body.type + " label-symbol-" + d.body.id).attr("href", (d) => "assets/symbols/" + d.body.id + ".svg").attr("width", SYMBOL_SIZE).attr("height", SYMBOL_SIZE).attr("x", (d) => d.boundingBox.right + LABEL_DISTANCE_TO_BODY.x).attr("y", (d) => d.boundingBox.bottom + LABEL_DISTANCE_TO_BODY.y - SYMBOL_SIZE / 2), (update) => update.attr("x", (d) => d.boundingBox.right + LABEL_DISTANCE_TO_BODY.x).attr("y", (d) => d.boundingBox.bottom + LABEL_DISTANCE_TO_BODY.y - SYMBOL_SIZE / 2));
  }
  initScale() {
    const paddingX = window.innerWidth <= 400 ? 20 : 50;
    const paddingY = window.innerWidth <= 400 ? 40 : 50;
    const averageScaleWidth = Math.min(200, window.innerWidth - paddingX - COMPAS_WIDTH - 200);
    const scaleSizeAU = averageScaleWidth / (AU_TO_KM / this.scale * this.transform.k);
    const scale = SCALE_POSSIBLE_VALUES.sort((a, b) => Math.abs(scaleSizeAU - a.max) - Math.abs(scaleSizeAU - b.max))[0];
    const scaleWidth = scale.max * AU_TO_KM / this.scale * this.transform.k;
    const scaleSizeKm = Math.round(scale.max * AU_TO_KM);
    this.groupForegroundSelection.select(".scale").remove();
    const groupScaleSelection = this.groupForegroundSelection.append("g").attr("class", "scale");
    groupScaleSelection.append("path").attr("shape-rendering", "crispEdges").attr("d", `M ${paddingX + COMPAS_WIDTH} ${window.innerHeight - paddingY} L ${paddingX + COMPAS_WIDTH + scaleWidth} ${window.innerHeight - paddingY}`);
    for (let i = 0; i < scale.max; i = i + scale.tickInterval) {
      const nbPx = i * AU_TO_KM / this.scale * this.transform.k;
      const height = i % (SCALE_LARGE_TICK_STEP * scale.tickInterval) === 0 || i === scale.max ? SCALE_HEIGHT_LARGE_TICK : SCALE_HEIGHT_SMALL_TICK;
      groupScaleSelection.append("path").attr("shape-rendering", "crispEdges").attr("d", `M ${paddingX + COMPAS_WIDTH + nbPx} ${window.innerHeight - paddingY - height / 2} L ${paddingX + COMPAS_WIDTH + nbPx} ${window.innerHeight - paddingY + height / 2}`);
    }
    const nbPxLastTick = scale.max * AU_TO_KM / this.scale * this.transform.k;
    groupScaleSelection.append("path").attr("shape-rendering", "crispEdges").attr("d", `M ${paddingX + COMPAS_WIDTH + nbPxLastTick} ${window.innerHeight - paddingY - SCALE_HEIGHT_LARGE_TICK / 2} L ${paddingX + COMPAS_WIDTH + nbPxLastTick} ${window.innerHeight - paddingY + SCALE_HEIGHT_LARGE_TICK / 2}`);
    const translationParams = {
      NB_AU: formatNumber(scale.max, this.translateService.currentLang, "1.0-4"),
      NB_KM: formatNumber(scaleSizeKm, this.translateService.currentLang, "1.0-4")
    };
    const translationsKeys = [
      SCALE_TEXT_KEY,
      SCALE_TITLE_KEY,
      SCALE_TITLE_PLURAL_KEY,
      COMPASS_TITLE_I18N_KEY
    ];
    this.translateService.get(translationsKeys, translationParams).subscribe((translations) => {
      groupScaleSelection.append("text").text(translations[SCALE_TEXT_KEY]).attr("dominant-baseline", "central").attr("x", paddingX + COMPAS_WIDTH + scaleWidth + SCALE_TEXT_PADDING).attr("y", window.innerHeight - paddingY).append("title").html(scale.max > 1 ? translations[SCALE_TITLE_PLURAL_KEY] : translations[SCALE_TITLE_KEY]);
      this.groupForegroundSelection.select(".compass").remove();
      const groupCompassSelection = this.groupForegroundSelection.append("g").attr("class", "compass");
      groupCompassSelection.append("text").html("\u25B2").attr("dominant-baseline", "central").attr("x", paddingX).attr("y", window.innerHeight - paddingY - SCALE_HEIGHT_LARGE_TICK / 2 - SCALE_TEXT_PADDING / 4).attr("class", "compass").append("title").html(translations[COMPASS_TITLE_I18N_KEY]);
      groupCompassSelection.append("text").html("\u0264").attr("dominant-baseline", "central").attr("x", paddingX).attr("y", window.innerHeight - paddingY + SCALE_HEIGHT_LARGE_TICK / 2 + SCALE_TEXT_PADDING / 4).attr("class", "compass").append("title").html(translations[COMPASS_TITLE_I18N_KEY]);
    });
  }
  zoomToCelestialBody(body, forceZoom) {
    const bbox = this.getBoundingBox(body);
    let scale = this.getScale(body);
    if (!forceZoom && scale < this.transform.k) {
      scale = this.transform.k;
    }
    return this.zoomTo(bbox, scale);
  }
  zoomToLagrangePoint(type2) {
    const element = select_default2(".lagrange-point-" + type2).node();
    return this.zoomTo(element.getBBox(), ZOOM_EXTENT[1]);
  }
  zoomTo(bbox, scale) {
    const zoomTo = identity2.translate(this.center.x + (-bbox.x - bbox.width / 2) * scale, this.center.y + (-bbox.y - bbox.height / 2) * scale).scale(scale);
    const transition2 = this.svgSelection.transition().duration(ZOOM_TRANSITION_MS).call(this.d3Zoom.transform, zoomTo);
    return from(transition2.end());
  }
  /**
   * SVG insanity: getBBox() does not take into account rotation of the element,
   * so we have to wrap the element into a group, get the bbox, and remove the group.
   */
  getBoundingBox(body) {
    const element = select_default2("." + body.id).node();
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    element.parentNode.appendChild(group);
    group.appendChild(element);
    const bBox = group.getBBox();
    group.parentNode.appendChild(element);
    group.remove();
    return new DOMRect(bBox.x, bBox.y, bBox.width, bBox.height);
  }
  deZoom() {
    const zoomTo = identity2.translate(this.center.x, this.center.y).scale(Math.min(this.center.x * 2, this.center.y * 2) / (SOLAR_SYSTEM_SIZE / this.scale));
    this.svgSelection.transition().duration(ZOOM_TRANSITION_MS).call(this.d3Zoom.transform, zoomTo);
  }
  getScale(body) {
    const max2 = ZOOM_EXTENT[1];
    switch (body) {
      case SUN:
        return 5;
      case MERCURY:
      case VENUS:
        return max2;
      case EARTH:
        return 100;
      case MARS:
        return max2;
      case JUPITER:
        return 1.3;
      case SATURN:
        return 1.5;
      case URANUS:
        return 2;
      case NEPTUNE:
        return 0.6;
      default:
        if (body.type === CelestialBodyType.DWARF_PLANET) {
          return max2;
        } else {
          return this.getScale(body.orbitBody);
        }
    }
  }
  deselectAll() {
    selectAll_default2(".selected").classed("selected", false);
  }
  select(body) {
    this.deselectAll();
    select_default2(".label-" + body.id).classed("selected", true);
    select_default2(".label-symbol-" + body.id).classed("selected", true);
    select_default2(".orbit-" + body.id).classed("selected", true);
    if (this.celestialBodyDialogRef) {
      this.celestialBodyDialogRef.componentInstance.body = body;
    } else {
      this.celestialBodyDialogRef = this.dialog.open(CelestialBodyDialogComponent, {
        width: "500px",
        maxHeight: "100vh",
        panelClass: "celestial-body-dialog-panel",
        closeOnNavigation: true,
        autoFocus: false,
        position: {
          bottom: "50px",
          right: "50px"
        },
        hasBackdrop: false,
        data: { body }
      });
      this.celestialBodyDialogRef.afterClosed().subscribe(() => {
        this.celestialBodyDialogRef = null;
      });
    }
    const url = new URL(location.href);
    url.searchParams.set("goto", body.id);
    history.pushState(null, "", url);
  }
  static {
    this.\u0275fac = function SceneComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SceneComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SceneComponent, selectors: [["app-scene"]], decls: 1, vars: 8, consts: [[3, "ngClass"]], template: function SceneComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275element(0, "svg", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(1, _c02, !ctx.reticuleSetting, ctx.orbitsSetting === ctx.OrbitsSetting.NONE, ctx.orbitsSetting === ctx.OrbitsSetting.PLANET, !ctx.labelsSetting, !ctx.scaleSetting, !ctx.milkyWaySetting));
      }
    }, dependencies: [NgClass], styles: [`

.mat-elevation-z0[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z0[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-0, none);
}
.mat-elevation-z1[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z1[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-1, none);
}
.mat-elevation-z2[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z2[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-2, none);
}
.mat-elevation-z3[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z3[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-3, none);
}
.mat-elevation-z4[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z4[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-4, none);
}
.mat-elevation-z5[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z5[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-5, none);
}
.mat-elevation-z6[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z6[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-6, none);
}
.mat-elevation-z7[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z7[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-7, none);
}
.mat-elevation-z8[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z8[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-8, none);
}
.mat-elevation-z9[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z9[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-9, none);
}
.mat-elevation-z10[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z10[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-10, none);
}
.mat-elevation-z11[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z11[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-11, none);
}
.mat-elevation-z12[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z12[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-12, none);
}
.mat-elevation-z13[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z13[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-13, none);
}
.mat-elevation-z14[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z14[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-14, none);
}
.mat-elevation-z15[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z15[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-15, none);
}
.mat-elevation-z16[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z16[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-16, none);
}
.mat-elevation-z17[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z17[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-17, none);
}
.mat-elevation-z18[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z18[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-18, none);
}
.mat-elevation-z19[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z19[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-19, none);
}
.mat-elevation-z20[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z20[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-20, none);
}
.mat-elevation-z21[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z21[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-21, none);
}
.mat-elevation-z22[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z22[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-22, none);
}
.mat-elevation-z23[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z23[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-23, none);
}
.mat-elevation-z24[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z24[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-24, none);
}
html[_ngcontent-%COMP%] {
  --mat-sys-on-surface: initial;
}
.mat-app-background[_ngcontent-%COMP%] {
  background-color: var(--mat-app-background-color, var(--mat-sys-background, transparent));
  color: var(--mat-app-text-color, var(--mat-sys-on-background, inherit));
}
.mat-elevation-z0[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z0[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-0, none);
}
.mat-elevation-z1[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z1[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-1, none);
}
.mat-elevation-z2[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z2[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-2, none);
}
.mat-elevation-z3[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z3[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-3, none);
}
.mat-elevation-z4[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z4[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-4, none);
}
.mat-elevation-z5[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z5[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-5, none);
}
.mat-elevation-z6[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z6[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-6, none);
}
.mat-elevation-z7[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z7[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-7, none);
}
.mat-elevation-z8[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z8[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-8, none);
}
.mat-elevation-z9[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z9[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-9, none);
}
.mat-elevation-z10[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z10[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-10, none);
}
.mat-elevation-z11[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z11[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-11, none);
}
.mat-elevation-z12[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z12[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-12, none);
}
.mat-elevation-z13[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z13[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-13, none);
}
.mat-elevation-z14[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z14[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-14, none);
}
.mat-elevation-z15[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z15[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-15, none);
}
.mat-elevation-z16[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z16[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-16, none);
}
.mat-elevation-z17[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z17[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-17, none);
}
.mat-elevation-z18[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z18[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-18, none);
}
.mat-elevation-z19[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z19[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-19, none);
}
.mat-elevation-z20[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z20[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-20, none);
}
.mat-elevation-z21[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z21[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-21, none);
}
.mat-elevation-z22[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z22[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-22, none);
}
.mat-elevation-z23[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z23[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-23, none);
}
.mat-elevation-z24[_ngcontent-%COMP%], 
.mat-mdc-elevation-specific.mat-elevation-z24[_ngcontent-%COMP%] {
  box-shadow: var(--mat-app-elevation-shadow-level-24, none);
}
html[_ngcontent-%COMP%]   html[_ngcontent-%COMP%] {
  --mat-sys-on-surface: initial;
}
.mat-app-background[_ngcontent-%COMP%] {
  background-color: var(--mat-app-background-color, var(--mat-sys-background, transparent));
  color: var(--mat-app-text-color, var(--mat-sys-on-background, inherit));
}
html[_ngcontent-%COMP%] {
  --mat-toolbar-container-background-color: #121316;
  --mat-toolbar-container-text-color: #e2e2e6;
  --mat-toolbar-title-text-font: "Exo 2", sans-serif;
  --mat-toolbar-title-text-line-height: 1.75rem;
  --mat-toolbar-title-text-size: 1.375rem;
  --mat-toolbar-title-text-tracking: 0;
  --mat-toolbar-title-text-weight: 400;
  --mat-toolbar-standard-height: 64px;
  --mat-toolbar-mobile-height: 56px;
}
html[_ngcontent-%COMP%] {
  --mdc-icon-button-icon-color: #dfe2eb;
  --mdc-icon-button-disabled-icon-color: rgba(226, 226, 230, 0.38);
  --mdc-icon-button-state-layer-size: 40px;
  --mdc-icon-button-icon-size: 24px;
}
html[_ngcontent-%COMP%] {
  --mat-icon-button-state-layer-color: #dfe2eb;
  --mat-icon-button-disabled-state-layer-color: #dfe2eb;
  --mat-icon-button-ripple-color: rgba(223, 226, 235, 0.12);
  --mat-icon-button-hover-state-layer-opacity: 0.08;
  --mat-icon-button-focus-state-layer-opacity: 0.12;
  --mat-icon-button-pressed-state-layer-opacity: 0.12;
  --mat-icon-button-touch-target-display: block;
}
html[_ngcontent-%COMP%] {
  --mdc-text-button-label-text-color: #9ecaff;
  --mdc-text-button-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-text-button-label-text-font: "Exo 2", sans-serif;
  --mdc-text-button-label-text-size: 0.875rem;
  --mdc-text-button-label-text-tracking: 0.006rem;
  --mdc-text-button-label-text-weight: 500;
  --mdc-text-button-container-height: 40px;
  --mdc-text-button-container-shape: 9999px;
}
html[_ngcontent-%COMP%] {
  --mdc-protected-button-container-elevation-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  --mdc-protected-button-disabled-container-elevation-shadow:
    0px 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px 0px rgba(0, 0, 0, 0.14),
    0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  --mdc-protected-button-focus-container-elevation-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  --mdc-protected-button-hover-container-elevation-shadow:
    0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14),
    0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  --mdc-protected-button-pressed-container-elevation-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  --mdc-protected-button-container-color: #121316;
  --mdc-protected-button-label-text-color: #9ecaff;
  --mdc-protected-button-disabled-container-color: rgba(226, 226, 230, 0.12);
  --mdc-protected-button-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-protected-button-label-text-font: "Exo 2", sans-serif;
  --mdc-protected-button-label-text-size: 0.875rem;
  --mdc-protected-button-label-text-tracking: 0.006rem;
  --mdc-protected-button-label-text-weight: 500;
  --mdc-protected-button-container-height: 40px;
  --mdc-protected-button-container-shape: 9999px;
}
html[_ngcontent-%COMP%] {
  --mdc-filled-button-container-color: #9ecaff;
  --mdc-filled-button-label-text-color: #003258;
  --mdc-filled-button-disabled-container-color: rgba(226, 226, 230, 0.12);
  --mdc-filled-button-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-filled-button-label-text-font: "Exo 2", sans-serif;
  --mdc-filled-button-label-text-size: 0.875rem;
  --mdc-filled-button-label-text-tracking: 0.006rem;
  --mdc-filled-button-label-text-weight: 500;
  --mdc-filled-button-container-height: 40px;
  --mdc-filled-button-container-shape: 9999px;
}
html[_ngcontent-%COMP%] {
  --mdc-outlined-button-disabled-outline-color: rgba(226, 226, 230, 0.12);
  --mdc-outlined-button-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-outlined-button-label-text-color: #9ecaff;
  --mdc-outlined-button-outline-color: #8d9199;
  --mdc-outlined-button-label-text-font: "Exo 2", sans-serif;
  --mdc-outlined-button-label-text-size: 0.875rem;
  --mdc-outlined-button-label-text-tracking: 0.006rem;
  --mdc-outlined-button-label-text-weight: 500;
  --mdc-outlined-button-container-height: 40px;
  --mdc-outlined-button-outline-width: 1px;
  --mdc-outlined-button-container-shape: 9999px;
}
html[_ngcontent-%COMP%] {
  --mat-text-button-state-layer-color: #9ecaff;
  --mat-text-button-disabled-state-layer-color: #dfe2eb;
  --mat-text-button-ripple-color: rgba(158, 202, 255, 0.12);
  --mat-text-button-hover-state-layer-opacity: 0.08;
  --mat-text-button-focus-state-layer-opacity: 0.12;
  --mat-text-button-pressed-state-layer-opacity: 0.12;
  --mat-text-button-touch-target-display: block;
  --mat-text-button-horizontal-padding: 12px;
  --mat-text-button-with-icon-horizontal-padding: 16px;
  --mat-text-button-icon-spacing: 8px;
  --mat-text-button-icon-offset: -4px;
}
html[_ngcontent-%COMP%] {
  --mat-protected-button-state-layer-color: #9ecaff;
  --mat-protected-button-disabled-state-layer-color: #dfe2eb;
  --mat-protected-button-ripple-color: rgba(158, 202, 255, 0.12);
  --mat-protected-button-hover-state-layer-opacity: 0.08;
  --mat-protected-button-focus-state-layer-opacity: 0.12;
  --mat-protected-button-pressed-state-layer-opacity: 0.12;
  --mat-protected-button-touch-target-display: block;
  --mat-protected-button-horizontal-padding: 24px;
  --mat-protected-button-icon-spacing: 8px;
  --mat-protected-button-icon-offset: -8px;
}
html[_ngcontent-%COMP%] {
  --mat-filled-button-state-layer-color: #003258;
  --mat-filled-button-disabled-state-layer-color: #dfe2eb;
  --mat-filled-button-ripple-color: rgba(0, 50, 88, 0.12);
  --mat-filled-button-hover-state-layer-opacity: 0.08;
  --mat-filled-button-focus-state-layer-opacity: 0.12;
  --mat-filled-button-pressed-state-layer-opacity: 0.12;
  --mat-filled-button-touch-target-display: block;
  --mat-filled-button-horizontal-padding: 24px;
  --mat-filled-button-icon-spacing: 8px;
  --mat-filled-button-icon-offset: -8px;
}
html[_ngcontent-%COMP%] {
  --mat-outlined-button-state-layer-color: #9ecaff;
  --mat-outlined-button-disabled-state-layer-color: #dfe2eb;
  --mat-outlined-button-ripple-color: rgba(158, 202, 255, 0.12);
  --mat-outlined-button-hover-state-layer-opacity: 0.08;
  --mat-outlined-button-focus-state-layer-opacity: 0.12;
  --mat-outlined-button-pressed-state-layer-opacity: 0.12;
  --mat-outlined-button-touch-target-display: block;
  --mat-outlined-button-horizontal-padding: 24px;
  --mat-outlined-button-icon-spacing: 8px;
  --mat-outlined-button-icon-offset: -8px;
}
html[_ngcontent-%COMP%] {
  --mat-divider-color: #8d9199;
  --mat-divider-width: 1px;
}
html[_ngcontent-%COMP%] {
  --mat-expansion-container-background-color: #121316;
  --mat-expansion-container-text-color: #e2e2e6;
  --mat-expansion-actions-divider-color: #8d9199;
  --mat-expansion-header-hover-state-layer-color: rgba(226, 226, 230, 0.08);
  --mat-expansion-header-focus-state-layer-color: rgba(226, 226, 230, 0.12);
  --mat-expansion-header-disabled-state-text-color: rgba(226, 226, 230, 0.38);
  --mat-expansion-header-text-color: #e2e2e6;
  --mat-expansion-header-description-color: #dfe2eb;
  --mat-expansion-header-indicator-color: #dfe2eb;
  --mat-expansion-header-text-font: "Exo 2", sans-serif;
  --mat-expansion-header-text-size: 1rem;
  --mat-expansion-header-text-weight: 500;
  --mat-expansion-header-text-line-height: 1.5rem;
  --mat-expansion-header-text-tracking: 0.009rem;
  --mat-expansion-container-text-font: "Exo 2", sans-serif;
  --mat-expansion-container-text-line-height: 1.5rem;
  --mat-expansion-container-text-size: 1rem;
  --mat-expansion-container-text-tracking: 0.031rem;
  --mat-expansion-container-text-weight: 400;
  --mat-expansion-header-collapsed-state-height: 48px;
  --mat-expansion-header-expanded-state-height: 64px;
  --mat-expansion-container-shape: 12px;
  --mat-expansion-legacy-header-indicator-display: none;
  --mat-expansion-header-indicator-display: inline-block;
}
html[_ngcontent-%COMP%] {
  --mat-grid-list-tile-header-primary-text-size: 400 1rem / 1.5rem "Exo 2", sans-serif;
  --mat-grid-list-tile-header-secondary-text-size: 400 0.875rem / 1.25rem "Exo 2", sans-serif;
  --mat-grid-list-tile-footer-primary-text-size: 400 1rem / 1.5rem "Exo 2", sans-serif;
  --mat-grid-list-tile-footer-secondary-text-size: 400 0.875rem / 1.25rem "Exo 2", sans-serif;
}
html[_ngcontent-%COMP%] {
  --mdc-dialog-container-color: #121316;
  --mdc-dialog-subhead-color: #e2e2e6;
  --mdc-dialog-supporting-text-color: #dfe2eb;
  --mdc-dialog-subhead-font: "Exo 2", sans-serif;
  --mdc-dialog-subhead-line-height: 2rem;
  --mdc-dialog-subhead-size: 1.5rem;
  --mdc-dialog-subhead-weight: 400;
  --mdc-dialog-subhead-tracking: 0;
  --mdc-dialog-supporting-text-font: "Exo 2", sans-serif;
  --mdc-dialog-supporting-text-line-height: 1.25rem;
  --mdc-dialog-supporting-text-size: 0.875rem;
  --mdc-dialog-supporting-text-weight: 400;
  --mdc-dialog-supporting-text-tracking: 0.016rem;
  --mdc-dialog-container-shape: 28px;
}
html[_ngcontent-%COMP%] {
  --mat-dialog-container-elevation-shadow: none;
  --mat-dialog-container-max-width: 560px;
  --mat-dialog-container-small-max-width: calc(100vw - 32px);
  --mat-dialog-container-min-width: 280px;
  --mat-dialog-actions-alignment: flex-end;
  --mat-dialog-actions-padding: 16px 24px;
  --mat-dialog-content-padding: 20px 24px;
  --mat-dialog-with-actions-content-padding: 20px 24px 0;
  --mat-dialog-headline-padding: 6px 24px 13px;
}
html[_ngcontent-%COMP%] {
  --mat-sidenav-container-background-color: #121316;
  --mat-sidenav-container-text-color: #dfe2eb;
  --mat-sidenav-content-background-color: #121316;
  --mat-sidenav-content-text-color: #e2e2e6;
  --mat-sidenav-scrim-color: rgba(44, 49, 55, 0.4);
  --mat-sidenav-container-shape: 16px;
  --mat-sidenav-container-elevation-shadow: none;
  --mat-sidenav-container-width: 360px;
  --mat-sidenav-container-divider-color: transparent;
}
html[_ngcontent-%COMP%] {
  --mdc-list-list-item-container-color: transparent;
  --mdc-list-list-item-leading-avatar-color: #00497d;
  --mdc-list-list-item-disabled-state-layer-color: #e2e2e6;
  --mdc-list-list-item-disabled-state-layer-opacity: 0.12;
  --mdc-list-list-item-label-text-color: #e2e2e6;
  --mdc-list-list-item-supporting-text-color: #dfe2eb;
  --mdc-list-list-item-leading-icon-color: #dfe2eb;
  --mdc-list-list-item-trailing-supporting-text-color: #dfe2eb;
  --mdc-list-list-item-trailing-icon-color: #dfe2eb;
  --mdc-list-list-item-selected-trailing-icon-color: #9ecaff;
  --mdc-list-list-item-disabled-label-text-color: #e2e2e6;
  --mdc-list-list-item-disabled-leading-icon-color: #e2e2e6;
  --mdc-list-list-item-disabled-trailing-icon-color: #e2e2e6;
  --mdc-list-list-item-hover-label-text-color: #e2e2e6;
  --mdc-list-list-item-focus-label-text-color: #e2e2e6;
  --mdc-list-list-item-hover-state-layer-color: #e2e2e6;
  --mdc-list-list-item-hover-state-layer-opacity: 0.08;
  --mdc-list-list-item-focus-state-layer-color: #e2e2e6;
  --mdc-list-list-item-focus-state-layer-opacity: 0.12;
  --mdc-list-list-item-label-text-font: "Exo 2", sans-serif;
  --mdc-list-list-item-label-text-line-height: 1.5rem;
  --mdc-list-list-item-label-text-size: 1rem;
  --mdc-list-list-item-label-text-tracking: 0.031rem;
  --mdc-list-list-item-label-text-weight: 400;
  --mdc-list-list-item-supporting-text-font: "Exo 2", sans-serif;
  --mdc-list-list-item-supporting-text-line-height: 1.25rem;
  --mdc-list-list-item-supporting-text-size: 0.875rem;
  --mdc-list-list-item-supporting-text-tracking: 0.016rem;
  --mdc-list-list-item-supporting-text-weight: 400;
  --mdc-list-list-item-trailing-supporting-text-font: "Exo 2", sans-serif;
  --mdc-list-list-item-trailing-supporting-text-line-height: 1rem;
  --mdc-list-list-item-trailing-supporting-text-size: 0.688rem;
  --mdc-list-list-item-trailing-supporting-text-tracking: 0.031rem;
  --mdc-list-list-item-trailing-supporting-text-weight: 500;
  --mdc-list-list-item-one-line-container-height: 48px;
  --mdc-list-list-item-two-line-container-height: 64px;
  --mdc-list-list-item-three-line-container-height: 88px;
  --mdc-list-list-item-container-shape: 0;
  --mdc-list-list-item-leading-avatar-shape: 9999px;
  --mdc-list-list-item-leading-icon-size: 24px;
  --mdc-list-list-item-leading-avatar-size: 40px;
  --mdc-list-list-item-trailing-icon-size: 24px;
  --mdc-list-list-item-disabled-label-text-opacity: 0.3;
  --mdc-list-list-item-disabled-leading-icon-opacity: 0.38;
  --mdc-list-list-item-disabled-trailing-icon-opacity: 0.38;
}
html[_ngcontent-%COMP%] {
  --mat-list-active-indicator-color: #004e59;
  --mat-list-list-item-leading-icon-start-space: 16px;
  --mat-list-list-item-leading-icon-end-space: 16px;
  --mat-list-active-indicator-shape: 9999px;
}
html[_ngcontent-%COMP%] {
  --mat-standard-button-toggle-hover-state-layer-opacity: 0.08;
  --mat-standard-button-toggle-focus-state-layer-opacity: 0.12;
  --mat-standard-button-toggle-text-color: #e2e2e6;
  --mat-standard-button-toggle-state-layer-color: #e2e2e6;
  --mat-standard-button-toggle-selected-state-background-color: #004e59;
  --mat-standard-button-toggle-selected-state-text-color: #a1efff;
  --mat-standard-button-toggle-disabled-state-text-color: rgba(226, 226, 230, 0.38);
  --mat-standard-button-toggle-disabled-selected-state-text-color: rgba(226, 226, 230, 0.38);
  --mat-standard-button-toggle-disabled-selected-state-background-color: rgba(226, 226, 230, 0.12);
  --mat-standard-button-toggle-divider-color: #8d9199;
  --mat-standard-button-toggle-label-text-font: "Exo 2", sans-serif;
  --mat-standard-button-toggle-label-text-line-height: 1.25rem;
  --mat-standard-button-toggle-label-text-size: 0.875rem;
  --mat-standard-button-toggle-label-text-tracking: 0.006rem;
  --mat-standard-button-toggle-label-text-weight: 500;
  --mat-standard-button-toggle-height: 40px;
  --mat-standard-button-toggle-shape: 9999px;
  --mat-standard-button-toggle-background-color: transparent;
  --mat-standard-button-toggle-disabled-state-background-color: transparent;
}
html[_ngcontent-%COMP%] {
  --mat-menu-item-label-text-color: #e2e2e6;
  --mat-menu-item-icon-color: #dfe2eb;
  --mat-menu-item-hover-state-layer-color: rgba(226, 226, 230, 0.08);
  --mat-menu-item-focus-state-layer-color: rgba(226, 226, 230, 0.12);
  --mat-menu-container-color: #1e2022;
  --mat-menu-divider-color: #43474e;
  --mat-menu-item-label-text-font: "Exo 2", sans-serif;
  --mat-menu-item-label-text-size: 0.875rem;
  --mat-menu-item-label-text-tracking: 0.006rem;
  --mat-menu-item-label-text-line-height: 1.25rem;
  --mat-menu-item-label-text-weight: 500;
  --mat-menu-container-shape: 4px;
  --mat-menu-divider-bottom-spacing: 8px;
  --mat-menu-divider-top-spacing: 8px;
  --mat-menu-item-spacing: 12px;
  --mat-menu-item-icon-size: 24px;
  --mat-menu-item-leading-spacing: 12px;
  --mat-menu-item-trailing-spacing: 12px;
  --mat-menu-item-with-icon-leading-spacing: 12px;
  --mat-menu-item-with-icon-trailing-spacing: 12px;
  --mat-menu-container-elevation-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
html[_ngcontent-%COMP%] {
  --mdc-filled-text-field-caret-color: #9ecaff;
  --mdc-filled-text-field-focus-active-indicator-color: #9ecaff;
  --mdc-filled-text-field-focus-label-text-color: #9ecaff;
  --mdc-filled-text-field-container-color: #43474e;
  --mdc-filled-text-field-disabled-container-color: rgba(226, 226, 230, 0.04);
  --mdc-filled-text-field-label-text-color: #dfe2eb;
  --mdc-filled-text-field-hover-label-text-color: #dfe2eb;
  --mdc-filled-text-field-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-filled-text-field-input-text-color: #e2e2e6;
  --mdc-filled-text-field-disabled-input-text-color: rgba(226, 226, 230, 0.38);
  --mdc-filled-text-field-input-text-placeholder-color: #dfe2eb;
  --mdc-filled-text-field-error-hover-label-text-color: #ffdad6;
  --mdc-filled-text-field-error-focus-label-text-color: #ffb4ab;
  --mdc-filled-text-field-error-label-text-color: #ffb4ab;
  --mdc-filled-text-field-active-indicator-color: #dfe2eb;
  --mdc-filled-text-field-disabled-active-indicator-color: rgba(226, 226, 230, 0.38);
  --mdc-filled-text-field-hover-active-indicator-color: #e2e2e6;
  --mdc-filled-text-field-error-active-indicator-color: #ffb4ab;
  --mdc-filled-text-field-error-focus-active-indicator-color: #ffb4ab;
  --mdc-filled-text-field-error-hover-active-indicator-color: #ffdad6;
  --mdc-filled-text-field-label-text-font: "Exo 2", sans-serif;
  --mdc-filled-text-field-label-text-size: 1rem;
  --mdc-filled-text-field-label-text-tracking: 0.031rem;
  --mdc-filled-text-field-label-text-weight: 400;
  --mdc-filled-text-field-active-indicator-height: 1px;
  --mdc-filled-text-field-focus-active-indicator-height: 2px;
  --mdc-filled-text-field-container-shape: 4px;
}
html[_ngcontent-%COMP%] {
  --mdc-outlined-text-field-caret-color: #9ecaff;
  --mdc-outlined-text-field-focus-outline-color: #9ecaff;
  --mdc-outlined-text-field-focus-label-text-color: #9ecaff;
  --mdc-outlined-text-field-label-text-color: #dfe2eb;
  --mdc-outlined-text-field-hover-label-text-color: #e2e2e6;
  --mdc-outlined-text-field-disabled-label-text-color: rgba(226, 226, 230, 0.38);
  --mdc-outlined-text-field-input-text-color: #e2e2e6;
  --mdc-outlined-text-field-disabled-input-text-color: rgba(226, 226, 230, 0.38);
  --mdc-outlined-text-field-input-text-placeholder-color: #dfe2eb;
  --mdc-outlined-text-field-error-focus-label-text-color: #ffb4ab;
  --mdc-outlined-text-field-error-label-text-color: #ffb4ab;
  --mdc-outlined-text-field-error-hover-label-text-color: #ffdad6;
  --mdc-outlined-text-field-outline-color: #8d9199;
  --mdc-outlined-text-field-disabled-outline-color: rgba(226, 226, 230, 0.12);
  --mdc-outlined-text-field-hover-outline-color: #e2e2e6;
  --mdc-outlined-text-field-error-focus-outline-color: #ffb4ab;
  --mdc-outlined-text-field-error-hover-outline-color: #ffdad6;
  --mdc-outlined-text-field-error-outline-color: #ffb4ab;
  --mdc-outlined-text-field-label-text-font: "Exo 2", sans-serif;
  --mdc-outlined-text-field-label-text-size: 1rem;
  --mdc-outlined-text-field-label-text-tracking: 0.031rem;
  --mdc-outlined-text-field-label-text-weight: 400;
  --mdc-outlined-text-field-outline-width: 1px;
  --mdc-outlined-text-field-focus-outline-width: 2px;
  --mdc-outlined-text-field-container-shape: 4px;
}
html[_ngcontent-%COMP%] {
  --mat-form-field-focus-select-arrow-color: #9ecaff;
  --mat-form-field-disabled-input-text-placeholder-color: rgba(226, 226, 230, 0.38);
  --mat-form-field-state-layer-color: #e2e2e6;
  --mat-form-field-error-text-color: #ffb4ab;
  --mat-form-field-select-option-text-color: #1a1c1e;
  --mat-form-field-select-disabled-option-text-color: rgba(26, 28, 30, 0.38);
  --mat-form-field-leading-icon-color: #dfe2eb;
  --mat-form-field-disabled-leading-icon-color: rgba(226, 226, 230, 0.38);
  --mat-form-field-trailing-icon-color: #dfe2eb;
  --mat-form-field-disabled-trailing-icon-color: rgba(226, 226, 230, 0.38);
  --mat-form-field-error-focus-trailing-icon-color: #ffb4ab;
  --mat-form-field-error-hover-trailing-icon-color: #ffdad6;
  --mat-form-field-error-trailing-icon-color: #ffb4ab;
  --mat-form-field-enabled-select-arrow-color: #dfe2eb;
  --mat-form-field-disabled-select-arrow-color: rgba(226, 226, 230, 0.38);
  --mat-form-field-hover-state-layer-opacity: 0.08;
  --mat-form-field-container-text-font: "Exo 2", sans-serif;
  --mat-form-field-container-text-line-height: 1.5rem;
  --mat-form-field-container-text-size: 1rem;
  --mat-form-field-container-text-tracking: 0.031rem;
  --mat-form-field-container-text-weight: 400;
  --mat-form-field-subscript-text-font: "Exo 2", sans-serif;
  --mat-form-field-subscript-text-line-height: 1rem;
  --mat-form-field-subscript-text-size: 0.75rem;
  --mat-form-field-subscript-text-tracking: 0.025rem;
  --mat-form-field-subscript-text-weight: 400;
  --mat-form-field-container-height: 56px;
  --mat-form-field-filled-label-display: block;
  --mat-form-field-container-vertical-padding: 16px;
  --mat-form-field-filled-with-label-container-padding-top: 24px;
  --mat-form-field-filled-with-label-container-padding-bottom: 8px;
  --mat-form-field-focus-state-layer-opacity: 0;
}
html[_ngcontent-%COMP%] {
  --mdc-dialog-container-shape: 6px;
  --mat-dialog-container-max-width: 100vw;
  --mat-standard-button-toggle-shape: 5px;
  --mdc-outlined-button-container-shape: 6px;
  --mat-expansion-container-background-color: transparent;
}
.mat-mdc-menu-panel[_ngcontent-%COMP%] {
  background: hsl(0, 0%, 40%);
}
@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .mat-mdc-menu-panel[_ngcontent-%COMP%] {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.3) !important;
  }
}
.mat-mdc-menu-item[_ngcontent-%COMP%] {
  color: white;
  min-width: 150px;
  padding-left: 30px;
}
.mat-mdc-menu-item[_ngcontent-%COMP%]:hover:not([disabled]) {
  background: rgba(0, 0, 0, 0.09);
}
  .mat-mdc-dialog-container .mat-mdc-dialog-title, 
  .mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: white !important;
}
  .mat-mdc-dialog-container .mat-mdc-dialog-title {
  padding-top: 10px !important;
  padding-right: 10px !important;
  cursor: move !important;
  margin-bottom: 0 !important;
  display: flex !important;
  align-items: center !important;
}
  .mat-mdc-dialog-container .mat-mdc-dialog-content {
  max-height: 90vh;
}
  .mat-mdc-dialog-container .mat-mdc-dialog-title .close-button {
  margin-left: auto !important;
  font-size: 20px !important;
  color: rgba(196, 196, 196, 0.6) !important;
}
  .mat-mdc-dialog-container .mat-mdc-dialog-title .close-button:hover {
  color: rgba(196, 196, 196, 0.8) !important;
}
  .mat-mdc-dialog-container .mat-mdc-dialog-surface {
  background: hsl(0, 0%, 40%) !important;
}
@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    .mat-mdc-dialog-container .mat-mdc-dialog-surface {
    -webkit-backdrop-filter: blur(10px) !important;
    backdrop-filter: blur(10px) !important;
    background-color: hsla(0, 0%, 100%, 0.15) !important;
  }
}
@media only screen and (max-width: 800px) {
    .celestial-body-dialog-panel, 
     .settings-dialog-panel, 
     .contact-dialog-panel, 
     .about-dialog-panel, 
     .legals-dialog-panel {
    min-width: unset !important;
    max-width: unset !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
  }
    .mat-mdc-dialog-content {
    max-height: 100% !important;
  }
}
[_nghost-%COMP%] {
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgb(31, 31, 31);
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.scene[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
}
[_nghost-%COMP%]     .hide-scale .scale, 
[_nghost-%COMP%]     .hide-scale .compass {
  display: none;
}
[_nghost-%COMP%]     .hide-reticule .reticuleV, 
[_nghost-%COMP%]     .hide-reticule .reticuleH {
  display: none;
}
[_nghost-%COMP%]     .hide-labels .label-path, 
[_nghost-%COMP%]     .hide-labels .label, 
[_nghost-%COMP%]     .hide-labels .label-symbol {
  display: none;
}
[_nghost-%COMP%]     .hide-orbits .orbit {
  display: none;
}
[_nghost-%COMP%]     .hide-orbits-satellites .orbit-satellite {
  display: none;
}
[_nghost-%COMP%]     svg:not(.hide-milkyway) {
  background-image: url("https://lebesnec.github.io/solar-system-develop/media/milky-way.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
[_nghost-%COMP%]     .reticuleV, 
[_nghost-%COMP%]     .reticuleH {
  stroke: #383838;
  stroke-width: 1px;
  fill: transparent;
}
[_nghost-%COMP%]     .celestial-body {
  vector-effect: non-scaling-stroke;
  stroke: rgb(90, 90, 90);
  stroke-width: 1;
  fill: rgb(43, 43, 43);
  cursor: pointer;
}
[_nghost-%COMP%]     .ring {
  vector-effect: non-scaling-stroke;
  stroke-width: 1px;
  stroke: rgba(255, 250, 241, 0.15);
  fill: rgba(255, 210, 142, 0.15);
}
[_nghost-%COMP%]     .celestial-body.satellite {
  stroke-width: 0;
  vector-effect: none;
  fill: rgb(101, 101, 101);
}
[_nghost-%COMP%]     .celestial-body.dwarf_planet {
  stroke-width: 0;
  vector-effect: none;
}
[_nghost-%COMP%]     .celestial-body.sun {
  stroke: rgb(168, 160, 114);
  stroke-width: 1;
  fill: rgb(185, 167, 0);
}
[_nghost-%COMP%]     .celestial-body.venus {
  stroke: #ffe1ad;
  stroke-width: 1;
  fill: #f1e5c8;
}
[_nghost-%COMP%]     .celestial-body.earth {
  stroke: #213e70;
  stroke-width: 1;
  fill: #3B74D6;
}
[_nghost-%COMP%]     .celestial-body.mars {
  stroke: #633725;
  stroke-width: 1;
  fill: #DB7755;
}
[_nghost-%COMP%]     .celestial-body.jupiter {
  stroke: #BF8936;
  stroke-width: 1;
  fill: #CDC095;
}
[_nghost-%COMP%]     .celestial-body.saturn {
  stroke: #BF8936;
  stroke-width: 1;
  fill: #CDC095;
}
[_nghost-%COMP%]     .celestial-body.uranus {
  stroke: #628288;
  stroke-width: 1;
  fill: #A3D9E2;
}
[_nghost-%COMP%]     .celestial-body.neptune {
  stroke: #02334b;
  stroke-width: 1;
  fill: #0276A5;
}
[_nghost-%COMP%]     .celestial-body.pluto {
  fill: #d5b89f;
}
[_nghost-%COMP%]     .celestial-body.io {
  stroke: #D6C251;
}
[_nghost-%COMP%]     .celestial-body.europa {
  fill: #E5C36C;
}
[_nghost-%COMP%]     .celestial-body.titan {
  fill: #DEC863;
}
[_nghost-%COMP%]     .label {
  fill: white;
  cursor: pointer;
  font-weight: 300;
}
[_nghost-%COMP%]     .label.selected {
  fill: #9ecaff;
}
[_nghost-%COMP%]     .label-path {
  stroke: #63b0ff;
  stroke-width: 1;
  fill: transparent;
}
[_nghost-%COMP%]     .label-symbol {
  cursor: pointer;
  filter: saturate(0%) brightness(0%) invert(100%) opacity(1);
  filter: url('data:image/svg+xml;utf8,  <svg xmlns="http://www.w3.org/2000/svg">    <filter id="recolor" color-interpolation-filters="sRGB">      <feColorMatrix type="matrix" values="       0 0 0 0 1       0 0 0 0 1       0 0 0 0 1       0 0 0 1 0      "/>    </filter>  </svg>  #recolor');
}
[_nghost-%COMP%]     .label-symbol.selected {
  filter: saturate(0%) brightness(0%) invert(80.9803921569%) opacity(1);
  filter: url('data:image/svg+xml;utf8,  <svg xmlns="http://www.w3.org/2000/svg">    <filter id="recolor" color-interpolation-filters="sRGB">      <feColorMatrix type="matrix" values="       0 0 0 0 0.6196078431       0 0 0 0 0.7921568627       0 0 0 0 1       0 0 0 1 0      "/>    </filter>  </svg>  #recolor');
}
[_nghost-%COMP%]     .group-label:hover .label {
  fill: #63b0ff;
}
[_nghost-%COMP%]     .group-label:hover .label-symbol {
  filter: saturate(0%) brightness(0%) invert(69.4117647059%) opacity(1);
  filter: url('data:image/svg+xml;utf8,  <svg xmlns="http://www.w3.org/2000/svg">    <filter id="recolor" color-interpolation-filters="sRGB">      <feColorMatrix type="matrix" values="       0 0 0 0 0.3882352941       0 0 0 0 0.6901960784       0 0 0 0 1       0 0 0 1 0      "/>    </filter>  </svg>  #recolor');
}
[_nghost-%COMP%]     .orbit {
  stroke: rgb(255, 255, 255);
  stroke-width: 0.5;
  shape-rendering: auto;
  vector-effect: non-scaling-stroke;
  fill: none;
}
[_nghost-%COMP%]     .orbit.hovered {
  stroke: #9ecaff;
  stroke-width: 1;
}
[_nghost-%COMP%]     .orbit.selected {
  stroke: #9ecaff;
  stroke-width: 1;
}
[_nghost-%COMP%]     .lagrange-point {
  pointer-events: bounding-box;
}
[_nghost-%COMP%]     .lagrange-point path {
  vector-effect: non-scaling-stroke;
  stroke-width: 1;
  stroke: rgba(255, 255, 255, 0.68);
}
[_nghost-%COMP%]     .lagrange-point:hover path {
  stroke: #9ecaff;
}
[_nghost-%COMP%]     .hidden {
  display: none;
}
[_nghost-%COMP%]     .scale path {
  stroke: rgb(255, 255, 255);
  stroke-width: 1px;
  fill: none;
}
[_nghost-%COMP%]     .scale text {
  fill: rgb(255, 255, 255);
}
[_nghost-%COMP%]     .compass text {
  fill: rgb(255, 255, 255);
}
[_nghost-%COMP%]     .compass text:last-child {
  font-size: 25px;
}
/*# sourceMappingURL=https://lebesnec.github.io/solar-system-develop/scene.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SceneComponent, { className: "SceneComponent", filePath: "src/app/scene/scene.component.ts", lineNumber: 90 });
})();
export {
  SceneComponent
};
//# sourceMappingURL=scene.component-OLM6ZWOL.js.map
