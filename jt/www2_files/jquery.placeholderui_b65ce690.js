!function($,window,undefined){function Plugin(element,options,method){this.element=$(element),this.options=$.extend({},defaults,options),this._defaults=defaults,this._name=pluginName.toLowerCase(),this._placeholder="",this.holder=$("<div />").addClass(this._name),this.init()}var pluginName="PlaceholderUI",ie6=window.VBArray&&!window.XMLHttpRequest,document=window.document,methodHandler=["destroy","placeholder","refresh"],defaults={force:!1,relative:!0,css:null,timeout:0};Plugin.prototype.init=function(){var that=this;return that.force=!(!that.options.force&&"placeholder"in document.createElement("input")),that.force?(that.options.relative?that.holder.insertAfter(this.element):that.holder.appendTo("body"),that.options.css&&that.holder.css(that.options.css),that.element.bind("focus",function(){that.holder.css("opacity",.5)}).bind("blur",function(){that.holder.css("opacity",1)}).bind("keyup paste change _init",function(){$(this).val()?that.holder.hide():$(this).is(":visible")?that.holder.show():that.holder.hide()}),that.holder.bind("click",function(){that.element.trigger("focus")}),that.placeholder(),!that.options.relative&&$(window).bind("resize",function(){that.refresh()}),that.element.triggerHandler("_init"),that):that},Plugin.prototype._css=function(param){return parseInt(this.element.css(param).replace(/[^\d]/g,"")||0)},Plugin.prototype.placeholder=function(text){var that=this,element=that.element.get(0),placeholder=text||that.element.attr("placeholder");return"undefined"!=typeof placeholder&&placeholder!==!1||!element.attributes.placeholder||(placeholder=element.attributes.placeholder.value),that._placeholder=placeholder||"",that.options.force?that.element.removeAttr("placeholder"):that.element.attr("placeholder",that._placeholder),window.setTimeout(function(){that.refresh()},that.options.timeout),that},Plugin.prototype.refresh=function(){var that=this,position=that.options.relative?that.element.position():that.element.offset(),params={};return that.force?(that.element.is(":visible")&&!that.element.val()?that.holder.show():that.holder.hide(),params.left=position.left+that._css("border-left-width")+that._css("padding-left")+that._css("margin-left")+2,params.top=position.top+that._css("border-top-width")+that._css("padding-top")+that._css("margin-top"),params.width=that.element.width(),params["line-height"]=(that.element.is("textarea")?that._css("line-height"):that._css("height"))+"px",params["text-indent"]=that.element.css("text-indent"),that.holder.css(params).html(that._placeholder),that):that},$.fn[pluginName]=$.fn[pluginName]||function(options){var args,method,isHandler,_plugin;if("string"==typeof options){if(args=arguments,method=options,isHandler=function(){for(var i=0;i<methodHandler.length;i++)if(methodHandler[i]===method)return!0;return!1},Array.prototype.shift.call(args),"check"==method)return!!this.data("plugin_"+pluginName);if(isHandler())return($(this).is("form")?$(this).find("input:text,input:password,textarea"):$(this)).each(function(){var _plugin=$(this).data("plugin_"+pluginName);_plugin&&_plugin[method]&&_plugin[method].apply(_plugin,args)});if(_plugin=this.first().data("plugin_"+pluginName),_plugin&&_plugin[method])return _plugin[method].apply(_plugin,args);throw new TypeError(pluginName+' has no method "'+method+'"')}return this.each(function(){($(this).is("form")?$(this).find("input:text,input:password,textarea"):$(this)).each(function(){var _plugin=$(this).data("plugin_"+pluginName);_plugin||$(this).data("plugin_"+pluginName,new Plugin(this,options))}),$(this).is("form")&&$(this).data("plugin_"+pluginName,!0)})}}(jQuery,window);