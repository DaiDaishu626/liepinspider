!function(N,undefined){if(!N||!N._tpls)return!1;var PATH=N._getCurrentScript();N._tpls[PATH]=N._tpls[PATH]||{main:function($DATA,guid){var css="",dguid=N.dguid(),template={init:function(){this.v8=!!"".trim,this.result=this.v8?"":[]},push:function(str){this.v8?this.result+=str:this.result.push(str)},html:function(){return this.v8?this.result:this.result.join("")}};return guid=guid||N.guid(),template.init(),css+="",css+="#"+guid+" .closed-ad{      position: relative;    }",css+="#"+guid+" .closed-ad .detail-infor{      position: absolute;      left: 155px;      top: 72px;      border-color: #ff6d1e;      color: #ff6d1e;      background-color: rgba(0,0,0,0);      line-height: 28px;      height: 28px;      padding: 0 30px;    }",css+="#"+guid+" .opend-ad a{      position: absolute;      top: 0;      right: 0;      width: 40px;      height: 40px;      line-height: 30px;      font-size: 50px;      background-color: #383838;      text-align: center;      color: #000;      text-decoration: none;    }",css+="#"+guid+" img{      display: block;    }",N.ie6?N._fixcss(css):template.push("<style>"+css+"</style>"),template.push('<div id="'+guid+'">\n    <div class="closed-ad">\n      <img src="//concat.lietou-static.com/dev/job/pc/revs/v1/images/pages/slide-ad/closed-img_07950345.jpg"/>\n      <a class="btn detail-infor" data-selector="detail-info" href="javascript:;">查看详情</a>\n    </div>\n    <div class="opend-ad hide">\n      <img src="//concat.lietou-static.com/dev/job/pc/revs/v1/images/pages/slide-ad/opend-img_0e23f7f0.jpg"/>\n      <a href="javascript:;" data-selector="closed-btn">&times;</a>\n    </div>\n    \n  </div>'),template.push("<script>"),template.push("(function(window, document, undefined){\n"),template.push('  var $ROOT = $("#'+guid+'");\n'),template.push('  var $TPLS = NodeTpl._tpls["'+PATH+'"];\n'),template.push('  var $DATA = NodeTpl._data["'+dguid+'"];\n'),template.push("var closedArea = $ROOT.find('.closed-ad'),\n"),template.push("        opendArea = $ROOT.find('.opend-ad');\n"),template.push("      $ROOT.on('click', '[data-selector=\"detail-info\"]', function() {\n"),template.push("        closedArea.animate({\n"),template.push("          height: 290,\n"),template.push("          opacity: 0\n"),template.push("        }, 500, function() {\n"),template.push("          closedArea.hide();\n"),template.push("          opendArea.height(290).fadeIn(0).animate({\n"),template.push("            opacity: 1\n"),template.push("          }, 300);\n"),template.push("        });\n"),template.push("      });\n"),template.push("      $ROOT.on('click', '[data-selector=\"closed-btn\"]', function() {\n"),template.push("        opendArea.animate({\n"),template.push("          height: 120,\n"),template.push("          opacity: 0\n"),template.push("        }, 500, function() {\n"),template.push("          opendArea.hide();\n"),template.push("          closedArea.height(120).fadeIn(0).animate({\n"),template.push("            opacity: 1\n"),template.push("          }, 300);\n"),template.push("        });\n"),template.push("      });\n"),template.push("})(window, document);\n"),template.push('delete NodeTpl._data["'+dguid+'"];\n'),template.push("</script>\n"),$DATA&&(N._data[dguid]=$DATA),template.html()}}}(window.NodeTpl);