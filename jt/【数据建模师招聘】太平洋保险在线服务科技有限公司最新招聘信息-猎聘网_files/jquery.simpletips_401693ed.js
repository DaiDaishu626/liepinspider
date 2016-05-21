!function($,window,undefined){function Plugin(element,options){this.element=$(element),this.options=$.extend({},defaults,options),this.inited=!1,this._defaults=defaults,this._name=pluginName,this.init()}var pluginName="SimpleTips",document=window.document,methodHandler=["destroy","refresh"],defaults={type:!1,position:"t",content:"",offset:!1,size:"medium",theme:"success",close:function(){},zindex:10,margin:10,width:"auto",autoClose:!1,duration:3e3,parentClass:""};Plugin.prototype.init=function(){var that=this;"hover"===that.options.type?that.element.bind("mouseenter",function(){that.inited||that.preinit(),that.content(function(){that.show()})}).bind("mouseleave",function(){that.simpleTips.removeAttr("data-active"),window.setTimeout(function(){that.inited&&!that.simpleTips.attr("data-active")&&that.hide()},200)}):that.options.type?that.element.bind(that.options.type,function(event){that.inited||that.preinit(),that.content(function(){that.show()}),"click"===that.options.type&&event.stopPropagation()}):(that.inited||that.preinit(),that.content(function(){that.show()})),that.options.autoClose&&setTimeout(function(){that.hide()},that.options.duration),"click"===that.options.type&&$(document).bind("click",function(){that.inited&&that.simpleTips.attr("data-active")&&that.hide()})},Plugin.prototype.preinit=function(){var that=this,parentNode=that.options.offset?$("body"):that.element.offsetParent();return that.simpleTips=$('<div class="simple-tips"><div class="simple-tips-theme"><div class="simple-tips-content"><i class="simple-tips-icon"></i><span class="content-info"></span></div></div></div>').css("z-index",that.options.zindex).appendTo(parentNode),that.options.parentClass&&that.simpleTips.addClass(that.options.parentClass),"auto"!==that.options.width&&that.simpleTips.css("width",that.options.width),that.simpleTpsContent=that.simpleTips.find(".content-info"),that.theme=that.simpleTips.find(".simple-tips-theme").addClass("simple-tips-"+that.options.theme),that.simpleTips.bind("mouseenter",function(){$(this).attr("data-active",!0)}).bind("mouseleave",function(){"hover"===that.options.type&&that.hide()}).bind("click",function(event){event.stopPropagation()}),that.inited=!0,that},Plugin.prototype.content=function(){var content,callback,i,that=this;for(i=0;i<arguments.length;i++)"function"==typeof arguments[i]?callback=arguments[i]:content=arguments[i];return content=content||that.options.content,content&&(that.simpleTpsContent.html(content),that.position(),callback&&callback.call(that)),that},Plugin.prototype.position=function(position){var that=this,offset=that.options.offset?that.element.offset():that.element.position(),getPix=function(ele,css){return parseInt(ele.css(css).replace(/[^\d\.]/gi,"")||"0")},elementProp={size:{width:that.element.outerWidth(),height:that.element.outerHeight()},margin:{top:getPix(that.element,"margin-top"),right:getPix(that.element,"margin-right"),bottom:getPix(that.element,"margin-bottom"),left:getPix(that.element,"margin-left")}},bubbleProp={size:{width:that.simpleTips.outerWidth(),height:that.simpleTips.outerHeight()},border:{width:getPix(that.simpleTips,"border-left-width")}};switch(position||(position=that.options.position),position){case"t":that.simpleTips.css({left:offset.left+(elementProp.size.width-bubbleProp.size.width)/2+bubbleProp.border.width+elementProp.margin.left,top:offset.top-bubbleProp.size.height+elementProp.margin.top-that.options.margin});break;case"b":that.simpleTips.css({left:offset.left+(elementProp.size.width-bubbleProp.size.width)/2+bubbleProp.border.width+elementProp.margin.left,top:offset.top+elementProp.size.height+elementProp.margin.top+that.options.margin})}return that},Plugin.prototype.show=function(){return this.simpleTips.attr("data-active",!0).show(),this},Plugin.prototype.hide=function(){return this.simpleTips.removeAttr("data-active").hide(),this.options.close(),this},Plugin.prototype.destroy=function(){this.simpleTips.remove(),this.element.removeData("plugin_"+pluginName)},$.fn[pluginName]=function(options){var args,method,isHandler,_plugin;if("string"==typeof options){if(args=arguments,method=options,isHandler=function(){for(var i=0;i<methodHandler.length;i++)if(methodHandler[i]===method)return!0;return!1},Array.prototype.shift.call(args),"check"==method)return!!this.data("plugin_"+pluginName);if(isHandler())return this.each(function(){var _plugin=$(this).data("plugin_"+pluginName);_plugin&&_plugin[method]&&_plugin[method].apply(_plugin,args)});if(_plugin=this.first().data("plugin_"+pluginName),_plugin&&_plugin[method])return _plugin[method].apply(_plugin,args);throw new TypeError(pluginName+' has no method "'+method+'"')}return this.each(function(){var _plugin=$(this).data("plugin_"+pluginName);_plugin?(_plugin.destroy(),$(this).data("plugin_"+pluginName,new Plugin(this,options))):$(this).data("plugin_"+pluginName,new Plugin(this,options))})},$.SimpleTips=function(options){var options=$.extend({},{follow:"",content:""},options);options.follow&&options.content&&$(options.follow).SimpleTips(options)},$.SimpleTips.error=function(options){var options=$.extend({},{follow:"",content:"",theme:"error"},options);options.follow&&options.content&&$(options.follow).SimpleTips(options)},$.SimpleTips.success=function(options){var options=$.extend({},{follow:"",content:"",theme:"success"},options);options.follow&&options.content&&$(options.follow).SimpleTips(options)}}(jQuery,window);