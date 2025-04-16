/* Me Component Manager/Factory :
   
*/

FACTORY.Register("Me", function MeObjFactory() {
	var MeInst = function (config) {
		var self = this;
        var obj = config.resolveName(), _form = obj.InstForm, _ctrl = obj.Control;
      	var doc = document;
      
      	function resolveName(fn, ctrl) {
          return {dlg: _form, ctrl: ctrl || ''};
        }
      	
      	self.target = function(id) {
          var obj;
          
          if (!id) {
            return _form;
          } else { 
            obj = id.resolveName();
            _form = obj.InstForm;
            _ctrl = obj.Control;
            
            self._elem = doc.getElementById(id);
          }
        };
		
      	// PicClip, Tab, Class, Menu & List Control custom methods.
      	// Parameter Format: (dlg, ctrl, p1, p2, p3, p4, p5, p6)
      	// NOTE: Most methods only use p1 - p3.
      	["picclip.setrows", "picclip.getrows", "picclip.setcols", "picclip.getcols", "picclip.setgraphiccell", 
         "picclip.getgraphiccell", "picclip.getcellcount", "picclip.resetcellsize", "picclip.setcellsize",
         "picclip.getcellsize", "picclip.getcellwidth", "picclip.getcellheight",
        
         "list.item", "list.addlist", "list.addchild", "list.add", "list.insert", "list.remove", "list.removeselected", 
         "list.clear", "list.clearnode", "list.listindex", "list.listcount", "list.selectvalue", "list.selectcaption", 
         "list.selectindex", "list.selectcheck", "list.gettext", "list.settext", "list.getvalue", "list.getitemdata", 
         "list.setitemdata", "list.selected", "list.setselected", "list.selecteditem", "list.selectedcaption", 
         "list.getallselected", "list.getallvalues", "list.getallchecked", "list.getallcaptions", "list.getitemname", 
         "list.getitemparent", "list.getitemcaption", "list.exists", "list.find", "list.findexact",
         
 		 "tab.create", "tab.page", "tab.pages", "tab.select", "tab.add", 
         "tab.remove", "tab.position", "tab.tabscroll", "tab.elem",
        
         "menu.additem", "menu.removeitem", "menu.hide", "menu.unload", "menu.open", "menu.show", "menu.closeall",
         
         "class.get", "class.set", "class.add", "class.toggle", "class.remove", "class.swap",
         "class.invert", "class.list", "class.exists"].forEach(function(fn) {
          	var type = fn.split('.');
          	if (!self[type[0]]) { self[type[0]] = {}; }

			self[type[0]][type[1]] = function(ctrl, p1, p2, p3, p4, p5, p6) {
				var obj = resolveName(type[1], ctrl);
				return $f[type[0]][type[1]](obj.dlg, (obj.ctrl || _ctrl), p1, p2, p3, p4, p5, p6);
			};
        });

      	// Parameter Format: Add(dlg, ctrl, type, fld, l, t, w, h)
      	// add, addwidget, attachevents, make.
   		['add', 'addwidget', 'attachevents', 'make'].forEach(function(fn) {
			self[fn] = function(ctrl, type, fld, l, t, w, h) {
				var obj = resolveName(ctrl);
              	return $f[fn](obj.dlg, (obj.ctrl || _ctrl), type, fld, l, t, w, h);
			};
        });

      	// Parameter Format: (dlg, ctrl, p1, p2)
		['prop', 'style', 'setevent', 'addevent', 'removeevent', 'size',
         'pos', 'center', 'fadein', 'fadeout', 'flip', 'min', 'restore'].forEach(function(fn) {
			self[fn] = function(ctrl, p1, p2) {
				var obj = resolveName(fn, ctrl);

				if (typeof(p1) == 'string' && typeof(p2) == 'undefined') {
					return $f['get' + fn] ? $f['get' + fn](obj.dlg, (obj.ctrl || _ctrl), p1) : $f[fn](obj.dlg, (obj.ctrl || _ctrl), p1);
				} else {
					return $f['set' + fn] ? $f['set' + fn](obj.dlg, (obj.ctrl || _ctrl), p1, p2) : $f[fn](obj.dlg, (obj.ctrl || _ctrl), p1, p2);
				}
			};
		});

      	// Parameter Format: (dlg, ctrl, p1)
		['value', 'checked', 'text', 'caption', 'scale', 'translate',
         'dockleft', 'docktop', 'dockbottom', 'dockright',
         'origin', 'rotate', 'width', 'left', 'top', 'height'].forEach(function(fn) {
			self[fn] = function(ctrl, p1) {
				var obj = resolveName(fn, ctrl);

				if (typeof(p1) == 'undefined') {
					return $f['get' + fn] ? $f['get' + fn](obj.dlg, (obj.ctrl || _ctrl)) : $f[fn](obj.dlg, (obj.ctrl || _ctrl));
				} else {
					return $f['set' + fn] ? $f['set' + fn](obj.dlg, (obj.ctrl || _ctrl), p1) : $f[fn](obj.dlg, (obj.ctrl || _ctrl), p1);
				}
			};
		});

      	// Parameter Format: (dlg, ctrl)
		['unload', 'show', 'type', 'hide', 'enable', 'refresh', 'disable', 'isvisible', 
		 'isenabled', 'iswidget', 'setfocus', 'elem', 'ctrl', 'find', 'buildname',
         'children', 'issliding', 'isfading', 'isloading', 'getcoords', 'getscreencoords',
         'getpos', 'getscreenpos', 'vcenter', 'hcenter', 'getcenter', 'disablecontent'].forEach(function(fn) {
			self[fn] = function(ctrl) {
				var obj = resolveName(fn, ctrl);
				return $f[fn](obj.dlg, (obj.ctrl || _ctrl));
			};
		});

      	// Parameter Format: (dlg, p1)
		['zorder', 'zindex', 'title', 'max', 'full', 'fullscreen', 
         'eachform', 'eachcontrol', 'push'].forEach(function(fn) {
			self[fn] = function(p1) {
				var obj = resolveName(fn);
				if (typeof(p1) == 'undefined') {
					return $f['get' + fn] ? $f['get' + fn](obj.dlg) : $f[fn](obj.dlg, p1);
				} else {
					return $f['set' + fn] ? $f['set' + fn](obj.dlg, p1) : $f[fn](obj.dlg, p1);
				}
			};
		});

      	// Parameter Format: (dlg)
 		['pull', 'forms', 'state', 'controls', 'widgets'].forEach(function(fn) {
			self[fn] = function() {
				var obj = resolveName(fn);
				return $f[fn](obj.dlg);
			};
        });

		
		self['switch'] = function(newdlg, p1, p2) {
			var obj = resolveName('switch');
			return $f['switch'](obj.dlg, newdlg, p1, p2);
		};
      
     	// Additional custom methods to align with v5 Property panel.
      	// 
        var fnMap = {
          "font": { fn: "style" },
          "border": { fn: "style" },
          "borderwidth": { fn: "style", "style": "border-width" },
          "borderstyle": { fn: "style", "style": "border-style" },
          "bordercolor": { fn: "style", "style": "border-color" },
          "borderradius": { fn: "style", "style": "border-radius" },
          "fontname": { fn: "style", "style": "font-family" },
          "fontbold": { fn: "style","style": "font-weight", "value": {"true": "bold", "false": "normal"} },
          "fontsize": { fn: "style", "style": "font-size" },
          "fontitalic": { fn: "style", "style": "font-style", "value": {"true": "italic", "false": "normal"} },
          "fontunderline": { fn: "style", "style": "text-decoration", "value": {"true": "underline", "false": ""} },
          "fontstrikethru": { fn: "style", "style": "text-decoration",  "value": {"true": "line-through", "false": ""}},
          "forecolor": { fn: "style", "style": "color" },
          "backcolor": { fn: "style", "style": "background-color" },
          "tooltip": { fn: "prop", "style": "title" }
        };
      	['font', 'fontname', 'fontbold', 'fontsize', 'fontitalic', 'fontunderline', 'fontstrikethru', 
         'borderradius', 'borderwidth', 'borderstyle', 'bordercolor', 'forecolor', 'backcolor', 'border', 'tooltip'].forEach(function(fx) {
			self[fx] = function(ctrl, p1) {
				var fn, pval, style, obj = resolveName(fx, ctrl);

              	if (fnMap[fx]) {
                  fn = fnMap[fx].fn;
                  style = fnMap[fx].style || fx;

                  if (fn) {
                    if (typeof(p1) == 'undefined') {
                        return $f['get' + fn](obj.dlg, (obj.ctrl || _ctrl), style);
                    } else {
                        p1 = (p1.toString().toLowerCase() == 'true') ? 'true' :
                            (p1.toString().toLowerCase() == 'false') ? 'false' : p1;

                        // if text decoration make sure you concatenate or remove value.
                        if (fnMap[fx].value && style == 'text-decoration') {
                          pval = $f.getstyle(obj.dlg, (obj.ctrl || _ctrl), style);
                          pval = pval.replace(fnMap[fx].value['true'], '');
                          p1 = (fnMap[fx].value[p1]) ? pval.trim() + ' ' + fnMap[fx].value[p1] : pval;
                        } else {
                          p1 = fnMap[fx].value ? fnMap[fx].value[p1] || p1 : p1;
                        }

                        $f['set' + fn](obj.dlg, (obj.ctrl || _ctrl), style, p1);
                    }
                  }
                }
			};
        });
      
      	self.select = function(ctrl) {
      	  var obj = resolveName(obj.dlg, ctrl);
          var elem = $f.ctrl(obj.dlg, (obj.ctrl || _ctrl));
          if (elem && elem.select) elem.select();
        };
      	self.destroy = function() {
          // Clear methods.
          function remove(obj) {
            Object.keys(obj).forEach(function(fn) {
              if (fn != 'destroy' && typeof(obj[fn]) == 'function') {
                obj[fn] = null;
                delete obj[fn];
              }
            });
          }
          
          remove(self.list);
          remove(self.tab);
          remove(self.picclip);
          remove(self);
          $me = null;
        };
	};

  	MeInst.prototype._type = function () {
		return "MeInst";
	};
	MeInst.prototype._toDto = function () {
		var self = this;
		return { };
	};
	return MeInst;
});
