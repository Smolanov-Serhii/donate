(()=>{"use strict";var e={303:()=>{var e=jQuery;e(document).on("qtxLoadAdmin:edit-tags",(function(t,n){var a=function(e,t){n.addDisplayHook(t)},i=function(t){var n=e(t);n.find(".row-title, .description").each(a),n.find("td.name span.inline").css("display","none")},o=e("#the-list"),r=e("#the-list > tr").length,s=function(){var e=o.children();if(r===e.length)return!1;var t=r>e.length;if(r=e.length,t)return!1;for(var n=0;n<e.length;++n){var a=e[n];i(a)}return!1};o.each((function(t,n){e(n).bind("DOMSubtreeModified",s)})),e("#the-list > tr > td.name span.inline").css("display","none")}))},769:()=>{jQuery(document).on("qtxLoadAdmin:nav-menus",(function(e,t){var n=function(e){t.addContentHooksByClass("edit-menu-item-title",e),t.addContentHooksByClass("edit-menu-item-attr-title",e),t.addContentHooksByClass("[edit-menu-item-description",e),t.addDisplayHooksByClass("menu-item-title",e),t.addDisplayHooksByTagInClass("link-to-original","A",e)},a=function(e){for(var t,a=/id="menu-item-(\d+)"/gi;t=a.exec(e);){var i="menu-item-"+t[1],o=document.getElementById(i);o&&n(o)}};if(wpNavMenu){var i=wpNavMenu.addMenuItemToBottom;"function"==typeof i&&(wpNavMenu.addMenuItemToBottom=function(e,t){i(e,t),a(e)}),"function"==typeof wp_addMenuItemToTop&&(wpNavMenu.addMenuItemToTop=function(e){wp_addMenuItemToTop(e),a(e)})}var o=function(e){wpNavMenu&&("function"==typeof wpNavMenu.refreshKeyboardAccessibility&&wpNavMenu.refreshKeyboardAccessibility(),"function"==typeof wpNavMenu.refreshAdvancedAccessibility&&wpNavMenu.refreshAdvancedAccessibility())};o(),t.addLanguageSwitchAfterListener(o)}))},90:()=>{var e=jQuery,t=Object.freeze({QTX_URL_QUERY:1,QTX_URL_PATH:2,QTX_URL_DOMAIN:3,QTX_URL_DOMAINS:4});e(document).on("qtxLoadAdmin:post",(function(n,a){var i,o,r,s,l,d,c,u=function(e,n){switch(qTranslateConfig.url_mode){case t.QTX_URL_QUERY:e.search?e.search+="&lang="+n:e.search="?lang="+n;break;case t.QTX_URL_PATH:var a=qTranslateConfig.home_url_path,i=e.pathname;"/"!==i[0]&&(i="/"+i);var o=i.indexOf(a);o>=0&&(e.pathname=qTranslateConfig.homeinfo_path+n+i.substring(o+a.length-1));break;case t.QTX_URL_DOMAIN:e.host=n+"."+e.host;break;case t.QTX_URL_DOMAINS:e.host=qTranslateConfig.domains[n]}},g=function(n){if(!i){var a=document.getElementById("view-post-btn");if(!a||!a.children.length)return;if("A"!==(i=a.children[0]).tagName)return;o=i.href,r=qtranxj_ce("a",{}),o.search(/\?/)}r.href=o,u(r,n),i.href=r.href;var g=document.getElementById("preview-action");if(g&&g.children.length&&(g.children[0].href=r.href),qTranslateConfig.url_mode!==t.QTX_URL_QUERY){if(!s){var f=document.getElementById("sample-permalink");f&&f.offsetHeight>0&&f.childNodes.length&&(s=f.childNodes[0],l=s.nodeValue)}s&&(r.href=l,u(r,n),s.nodeValue=r.href)}else c||(e("#sample-permalink").append('<span id="sample-permalink-lang-query"></span>'),c=e("#sample-permalink-lang-query")),c&&c.text((o.search(/\?/)<0?"/?lang=":"&lang=")+n);d||(d=document.getElementById("wp-admin-bar-view")),d&&d.children.length&&(d.children[0].href=i.href)},f=e("#title"),h=e("#title-prompt-text");function v(e){for(var t={},n=("?"===e[0]?e.substr(1):e).split("&"),a=0;a<n.length;a++){var i=n[a].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]||"")}return t}for(var m in a.addCustomContentHooks(),g(a.getActiveLanguage()),a.addLanguageSwitchAfterListener(g),h&&f&&a.addLanguageSwitchAfterListener((function(e){f.val()?h.addClass("screen-reader-text"):h.removeClass("screen-reader-text")})),a.getLanguages())e("#wp-admin-bar-"+m+" a").on("click",(function(t){t.preventDefault();var n=v(window.location.search),a=e(this).attr("rel");n.lang=a,window.location=window.location.origin+window.location.pathname+"?"+e.param(n)}))}))},403:()=>{var e=jQuery;e(document).on("qtxLoadAdmin:widgets",(function(t,n){if(window.wpWidgets){jQuery(document).on("tinymce-editor-init",(function(t,a){var i=e(a.settings.selector).parents(".widget"),o=i.find(".widget-id").val(),r="widget-"+o+"-title";i.find(".text-widget-fields input[id$='_title']").each((function(e,t){n.attachContentHook(t,r)}));var s="widget-"+o+"-text";n.attachEditorHook(a,s)}));var a=function(e,t){if("text"===t.find(".id_base").val()){var a=t.find(".widget-id").val(),i=t.find(".text-widget-fields input[id$='_title']");t.find(".widget-content input[id^='widget-text-'][id$='-title']").each((function(e,t){n.refreshContentHook(t),n.attachContentHook(i[0],t.id)}));var o=t.find(".text-widget-fields textarea[id$='_text']"),r=window.tinyMCE.get(o[0].id);t.find(".widget-content textarea[id^='widget-text-'][id$='-text']").each((function(e,a){if(n.refreshContentHook(a),r){n.attachEditorHook(r,a.id);var i=t.find(".sync-input.text");o.val(i.val()+"*")}})),a in wp.textWidgets.widgetControls&&wp.textWidgets.widgetControls[a].updateFields()}else t.find(".widget-content input[id^='widget-'][id$='-title']").each((function(e,t){n.refreshContentHook(t)}));wpWidgets.appendTitle(t)};e(document).on("widget-added",(function(e,t){a(0,t),n.setupLanguageSwitch()})),e(document).on("widget-updated",a),n.addLanguageSwitchAfterListener((function(){e("#widgets-right .widget").each((function(){wpWidgets.appendTitle(this)}))}))}}))}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}(()=>{n(303),n(769),n(90),n(403);var e=function(e,t,n,a){var i=document.createElement(e);if(t)for(var o in t)i[o]=t[o];return n&&(a&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i)),i},t=window.qTranslateConfig,a=function(e){var n="(\x3c!--:lang--\x3e|\x3c!--:--\x3e|\\[:lang]|\\[:]|{:lang}|{:})".replace(/lang/g,t.lang_code_format),a=new RegExp(n,"gi");if(3==="a~b".split(/(~)/).length)return e.split(a);for(var i,o=0,r=[];null!=(i=a.exec(e));)r.push(e.slice(o,i.index)),i.length>1&&r.push(i[1]),o=a.lastIndex;return o<e.length&&r.push(e.slice(o)),o===e.length&&r.push(""),r},i=function(e){var t=a(e);return o(t)},o=function(e){var n=new Object;for(var a in t.language_config)n[a]="";if(!e||!e.length)return n;if(1===e.length){var i=e[0];for(var o in t.language_config)n[o]+=i;return n}for(var r,s=new RegExp("\x3c!--:(lang)--\x3e".replace(/lang/g,t.lang_code_format),"gi"),l=new RegExp("\\[:(lang)]".replace(/lang/g,t.lang_code_format),"gi"),d=new RegExp("{:(lang)}".replace(/lang/g,t.lang_code_format),"gi"),c=!1,u=0;u<e.length;++u){var g=e[u];if(g.length)if(r=s.exec(g),s.lastIndex=0,null==r)if(r=l.exec(g),l.lastIndex=0,null==r)if(r=d.exec(g),d.lastIndex=0,null==r)if("\x3c!--:--\x3e"!==g&&"[:]"!==g&&"{:}"!==g)if(c)n[c]?n[c]+=g:n[c]=g,c=!1;else for(var f in n)n[f]+=g;else c=!1;else c=r[1];else c=r[1];else c=r[1]}return n},r="qtranslate-xt-admin-edit-language",s=function(e){try{sessionStorage.setItem(r,e)}catch(e){console.log('Failed to store "'+r+'" with sessionStorage',e)}},l=jQuery,d=window.qTranslateConfig,c=function(t){var n=this,c={},u=[],g=[],f=!1;this.getLanguages=function(){return d.language_config},this.getFlagLocation=function(){return d.flag_location},this.isLanguageEnabled=function(e){return!!d.language_config[e]},this.getActiveLanguage=function(){return d.activeLanguage},this.hasContentHook=function(e){return c[e]},this.attachContentHook=function(e,t){var n=c[t||e.id];n&&(e.classList.add("qtranxs-translatable"),n.contentField=e)},this.addContentHook=function(t,a,o){if(!t)return!1;switch(t.tagName){case"TEXTAREA":break;case"INPUT":switch(t.type){case"button":case"checkbox":case"password":case"radio":case"submit":return!1}break;default:return!1}if(!o){if(!t.name)return console.error("Missing name in field",t),!1;o=t.name}if(t.id){if(c[t.id]){if(l.contains(document,t))return c[t.id];console.warn("No input field with id=",t.id),n.removeContentHook(t)}}else if(c[o]){var r=0;do{++r,t.id=o+r}while(c[t.id])}else t.id=o;var s,u,g,f=c[t.id]={};if(f.name=o,f.lang=d.activeLanguage,n.attachContentHook(t),a)switch(a){case"slug":s="qtranslate-slugs[";break;case"term":s="qtranslate-terms[";break;default:s="qtranslate-fields["}else a="[",s="qtranslate-fields[";f.encode=a;var h,v=f.name.indexOf("[");if(v<0)u=s+f.name+"]";else if(u=s+f.name.substring(0,v)+"]",f.name.lastIndexOf("[]")<0)u+=f.name.substring(v);else{var m=f.name.length-2;m>v&&(u+=f.name.substring(v,m)),g="[]"}if(f.fields={},!d.RAW){for(var p in h=i(t.value),t.value=h[f.lang],h){var w=h[p],y=u+"["+p+"]";g&&(y+=g);var b=e("input",{name:y,type:"hidden",className:"hidden",value:w});f.fields[p]=b,t.parentNode.insertBefore(b,t)}var C=l(t).closest("form");C.length?C.find('input[name="qtranslate-edit-language"]').length||e("input",{type:"hidden",name:"qtranslate-edit-language",value:d.activeLanguage},C[0],!0):console.error("No form found for translatable field id=",t.id)}switch(a){case"slug":case"term":d.RAW&&(h=i(t.value)),f.sepfield=e("input",{name:u+"[qtranslate-original-value]",type:"hidden",className:"hidden",value:h[d.default_language]});break;default:d.RAW||(f.sepfield=e("input",{name:u+"[qtranslate-separator]",type:"hidden",className:"hidden",value:a}))}return f.sepfield&&t.parentNode.insertBefore(f.sepfield,t),f},this.addContentHookC=function(e){return n.addContentHook(e,"[")},this.addContentHookB=function(e){return n.addContentHook(e,"[")},this.addContentHookById=function(e,t,a){return n.addContentHook(document.getElementById(e),t,a)},this.addContentHookByIdName=function(e){var t;switch(e[0]){case"<":case"[":t=e.substring(0,1),e=e.substring(1)}return n.addContentHookById(e,t)},this.addContentHookByIdC=function(e){return n.addContentHookById(e,"[")},this.addContentHookByIdB=function(e){return n.addContentHookById(e,"[")},this.addContentHooks=function(e,t,a){for(var i=0;i<e.length;++i){var o=e[i];n.addContentHook(o,t,a)}},this.addContentHooksByClass=function(e,t){var a;0!==e.indexOf("<")&&0!==e.indexOf("[")||(a=e.substring(0,1),e=e.substring(1)),function(e,t,a){t||(t=document);var i=t.getElementsByClassName(e);n.addContentHooks(i,a)}(e,t,a)},this.addContentHooksByTagInClass=function(e,t,a){for(var i=a.getElementsByClassName(e),o=0;o<i.length;++o){var r=i[o].getElementsByTagName(t);n.addContentHooks(r)}},this.removeContentHook=function(e){if(!e||!e.id)return!1;var t=c[e.id];if(!t)return!1;for(var n in t.sepfield&&l(t.sepfield).remove(),t.fields){var a=t.fields[n];l(a).remove()}if(t.mce){var i=t.mce;i.getContainer().classList.remove("qtranxs-translatable"),i.getElement().classList.remove("qtranxs-translatable")}return t.contentField.classList.remove("qtranxs-translatable"),delete c[e.id],e.classList.remove("qtranxs-translatable"),!0},this.refreshContentHook=function(e){return n.removeContentHook(e),n.addContentHook(e)};var h=function(e){if(e[d.language])return"("+d.language+") "+e[d.language];if(e[d.default_language])return"("+d.default_language+") "+e[d.default_language];for(var t in e)if(e[t])return"("+t+") "+e[t];return""},v=function(e){var t=null;for(var n in e)e[n]||(t||(t=h(e)),e[n]=t)},m=function(e){if(!e.nodeValue)return 0;var t=a(e.nodeValue);if(!t||!t.length||1===t.length)return 0;var n={};return n.nd=e,n.contents=o(t),v(n.contents),e.nodeValue=n.contents[d.activeLanguage],u.push(n),1},p=function(e,t){if(!e.hasAttribute(t))return 0;var n=e.getAttribute(t),i=a(n);if(!i||!i.length||1===i.length)return 0;var r={};return r.nd=e,r.attr=t,r.contents=o(i),v(r.contents),e.setAttribute(t,r.contents[d.activeLanguage]),g.push(r),1};this.addDisplayHook=function(e){if(!e||!e.tagName)return 0;switch(e.tagName){case"TEXTAREA":return 0;case"INPUT":return"submit"===e.type&&e.value?p(e,"value"):0}var t=0;if(e.childNodes&&e.childNodes.length)for(var a=0;a<e.childNodes.length;++a){var i=e.childNodes[a];switch(i.nodeType){case 1:t+=n.addDisplayHook(i);break;case 2:case 3:t+=m(i)}}return t},this.addDisplayHookById=function(e){return n.addDisplayHook(document.getElementById(e))};var w=function(e){var t=e.contentField.value;e.mce.settings.wpautop&&window.switchEditors&&(t=window.switchEditors.wpautop(t)),e.mce.setContent(t)},y=function(e){s(e);for(var t=u.length;--t>=0;){var n=u[t];n.nd.parentNode?n.nd.nodeValue=n.contents[e]:u.splice(t,1)}for(var i=g.length;--i>=0;){var r=g[i];r.nd.parentNode?r.nd.setAttribute(r.attr,r.contents[e]):g.splice(i,1)}if(!d.RAW)for(var f in c){var h=c[f],v=h.mce&&!h.mce.hidden;v&&h.mce.save();var m=h.contentField.value.trim(),p=a(m);if(!p||p.length<=1){h.fields[h.lang].value=m,h.lang=e;var y=h.fields[h.lang].value;h.contentField.placeholder&&""!==y&&(h.contentField.placeholder=""),h.contentField.value=y,l(h.contentField).trigger("change"),v&&w(h)}else{var b=o(p);for(var C in h.fields)h.fields[C].value=b[C];h.lang=e}}};this.addDisplayHooks=function(e){for(var t=0;t<e.length;++t){var a=e[t];n.addDisplayHook(a)}},this.addDisplayHookAttrs=function(e,t){for(var n=0;n<t.length;++n){var a=t[n];p(e,a)}},this.addDisplayHooksAttrs=function(e,t){for(var a=0;a<e.length;++a){var i=e[a];n.addDisplayHookAttrs(i,t)}},this.addDisplayHooksByClass=function(e,t){var a=t.getElementsByClassName(e);n.addDisplayHooks(a)},this.addDisplayHooksByTagInClass=function(e,t,a){for(var i=a.getElementsByClassName(e),o=0;o<i.length;++o){var r=i[o].getElementsByTagName(t);n.addDisplayHooks(r)}},this.addCustomContentHooks=function(){for(var e=0;e<d.custom_fields.length;++e){var t=d.custom_fields[e];n.addContentHookByIdName(t)}for(var a=0;a<d.custom_field_classes.length;++a){var i=d.custom_field_classes[a];n.addContentHooksByClass(i)}n.addContentHooksTinyMCE()},this.attachEditorHook=function(e,t){if(!e.id)return null;t||(t=e.id);var n=c[t];return n?(t!==e.id&&(n.contentField=document.getElementById(e.id)),n.mce||(n.mce=e,e.getContainer().classList.add("qtranxs-translatable"),e.getElement().classList.add("qtranxs-translatable")),n):null},this.addContentHooksTinyMCE=function(){if(window.tinyMCEPreInit&&!d.RAW)for(var e in c){var t=c[e];"TEXTAREA"!==t.contentField.tagName||t.mce||t.mceInit||!tinyMCEPreInit.mceInit[e]||(t.mceInit=tinyMCEPreInit.mceInit[e],tinyMCEPreInit.mceInit[e].init_instance_callback=function(e){n.attachEditorHook(e)})}},this.loadAdditionalTinyMceHooks=function(){window.tinyMCE&&tinyMCE.get().forEach((function(e){n.attachEditorHook(e)}))},this.addLanguageSwitchListener=function(e){d.onTabSwitchFunctions.push(e)},this.addLanguageSwitchBeforeListener=function(e){d.onTabSwitchFunctionsSave.push(e)},this.delLanguageSwitchBeforeListener=function(e){for(var t=0;t<d.onTabSwitchFunctionsSave.length;++t)if(d.onTabSwitchFunctionsSave[t]===e)return void d.onTabSwitchFunctionsSave.splice(t,1)},this.addLanguageSwitchAfterListener=function(e){d.onTabSwitchFunctionsLoad.push(e)},this.delLanguageSwitchAfterListener=function(e){for(var t=0;t<d.onTabSwitchFunctionsLoad.length;++t)if(d.onTabSwitchFunctionsLoad[t]===e)return void d.onTabSwitchFunctionsLoad.splice(t,1)},this.enableLanguageSwitchingButtons=function(e){var t=e?"block":"none";for(var n in d.tabSwitches){for(var a=d.tabSwitches[n],i=0;i<a.length;++i){a[i].parentElement.style.display=t;break}break}};var b=function(){for(var e=document.getElementsByClassName("wrap"),t=0;t<e.length;++t){var n=e[t].getElementsByTagName("form");if(n.length)return n[0]}var a=document.getElementsByTagName("form");if(1===a.length)return a[0];for(var i=0;i<a.length;++i){var o=a[i];if(o.getElementsByClassName("wrap").length)return o}return null};this.onLoadLanguage=function(e,t){for(var n=d.onTabSwitchFunctionsLoad,a=0;a<n.length;++a)n[a].call(d.qtx,e,t)},this.switchActiveLanguage=function(e){if(d.activeLanguage!==e){if(d.activeLanguage){for(var t=!0,a=d.onTabSwitchFunctionsSave,i=0;i<a.length;++i)!1===a[i].call(d.qtx,d.activeLanguage,e)&&(t=!1);if(!t)return;for(var o=d.tabSwitches[d.activeLanguage],r=0;r<o.length;++r)o[r].classList.remove(d.lsb_style_active_class),l(o[r]).find(".button").removeClass("active")}var s=d.activeLanguage;d.activeLanguage=e,l('input[name="qtranslate-edit-language"]').val(e);for(var c=d.tabSwitches[d.activeLanguage],u=0;u<c.length;++u)c[u].classList.add(d.lsb_style_active_class),l(c[u]).find(".button").addClass("active");for(var g=d.onTabSwitchFunctions,f=0;f<g.length;++f)g[f].call(d.qtx,e,s);n.onLoadLanguage(e,s)}},this.clickSwitchLanguage=function(){var e=l(this).hasClass("button")?this.parentNode:this,t=e.lang;t?l(".qtranxs-lang-switch-wrap").hasClass("copying")?(n.copyContentFrom(t),l(e).find(".button").blur(),l(".qtranxs-lang-switch-wrap").removeClass("copying"),l(".qtranxs-lang-copy .button").removeClass("active")):n.switchActiveLanguage(t):alert("qTranslate-XT: This should not have happened: Please, report this incident to the developers: !lang")},this.toggleCopyFrom=function(){l(".qtranxs-lang-switch-wrap").toggleClass("copying"),l(".qtranxs-lang-copy .button").toggleClass("active"),l(".qtranxs-lang-switch-wrap").hasClass("copying")?l(".qtranxs-lang-switch").each((function(){l(this).attr("orig-title",l(this).attr("title")),l(this).attr("lang")===d.activeLanguage?l(this).attr("title",d.strings.CopyFromAlt):l(this).attr("title",d.strings.CopyFrom+" [:"+l(this).attr("lang")+"]")})):l(".qtranxs-lang-switch").each((function(){l(this).attr("title",l(this).attr("orig-title"))}))},this.copyContentFrom=function(e){var t=d.activeLanguage,a=!1;for(var i in c){var o=c[i],r=o.mce&&!o.mce.hidden,s=r?o.mce.getContent():o.contentField.value;s||(s=o.fields[e].value)&&(o.contentField.value=s,r&&w(o),a=!0)}a&&n.onLoadLanguage(t,e)},this.createSetOfLSBwith=function(t){var a=e("ul",{className:"qtranxs-lang-switch-wrap "+t}),i=d.language_config;for(var o in d.tabSwitches||(d.tabSwitches={}),i){var r=i[o],s=d.flag_location,c=d.strings.ShowIn+r.admin_name+" [:"+o+"]",u=e("li",{lang:o,className:"qtranxs-lang-switch qtranxs-lang-switch-"+o,title:c,onclick:n.clickSwitchLanguage},a),g=u;"button"===d.lsb_style_subitem&&(g=e("button",{className:"button button-secondary",type:"button"},u)),e("img",{src:s+r.flag},g),e("span",{innerHTML:r.name},g),d.activeLanguage===o&&(u.classList.add(d.lsb_style_active_class),l(u).find(".button").addClass("active")),d.tabSwitches[o]||(d.tabSwitches[o]=[]),d.tabSwitches[o].push(u)}if(!d.hide_lsb_copy_content){var f=e("li",{className:"qtranxs-lang-copy"},a),h=e("button",{className:"button button-secondary",type:"button",title:d.strings.CopyFromAlt,onclick:n.toggleCopyFrom},f);e("span",{innerHTML:d.strings.CopyFrom},h)}return a},this.createSetOfLSB=function(){return n.createSetOfLSBwith(d.lsb_style_wrap_class+" widefat")},this.setupLanguageSwitch=function(){!f&&d.LSB&&(u.length||g.length||Object.keys(c).length)&&(function(){var e=document.getElementById("qtranxs-meta-box-lsb");if(e){var t=e.getElementsByClassName("inside");if(t.length){e.classList.add("closed"),l(e).find(".hndle").remove();var a=document.createElement("span");e.insertBefore(a,t[0]),a.classList.add("hndle","ui-sortable-handle");var i=n.createSetOfLSBwith(d.lsb_style_wrap_class);a.appendChild(i),l("#qtranxs-meta-box-lsb .hndle").unbind("click.postboxes")}}}(),function(){var e=[];if(d.page_config&&d.page_config.anchors)for(var a in d.page_config.anchors){var i=d.page_config.anchors[a],o=document.getElementById(a);if(o)e.push({target:o,where:i.where});else if(i.jquery)for(var r=l(i.jquery),s=0;s<r.length;++s){var c=r[s];e.push({target:c,where:i.where})}}if(!e.length){var u=t.langSwitchWrapAnchor;u||(u=b()),u&&e.push({target:u,where:"before"})}for(var g=0;g<e.length;++g){var f=e[g];if(!f.where||f.where.indexOf("before")>=0){var h=n.createSetOfLSB();f.target.parentNode.insertBefore(h,f.target)}if(f.where&&f.where.indexOf("after")>=0){var v=n.createSetOfLSB();f.target.parentNode.insertBefore(v,f.target.nextSibling)}if(f.where&&f.where.indexOf("first")>=0){var m=n.createSetOfLSB();f.target.insertBefore(m,f.target.firstChild)}if(f.where&&f.where.indexOf("last")>=0){var p=n.createSetOfLSB();f.target.insertBefore(p,null)}}}(),n.addLanguageSwitchListener(y),t.onTabSwitch&&n.addLanguageSwitchListener(t.onTabSwitch),f=!0)},d.LSB?(d.activeLanguage=sessionStorage.getItem(r),d.activeLanguage&&n.isLanguageEnabled(d.activeLanguage)||(d.activeLanguage=d.language,n.isLanguageEnabled(d.activeLanguage)?s(d.activeLanguage):d.LSB=!1)):(d.activeLanguage=d.language,s(d.activeLanguage)),d.onTabSwitchFunctions||(d.onTabSwitchFunctions=[]),d.onTabSwitchFunctionsSave||(d.onTabSwitchFunctionsSave=[]),d.onTabSwitchFunctionsLoad||(d.onTabSwitchFunctionsLoad=[]),"function"==typeof t.addContentHooks&&t.addContentHooks(n),d.page_config&&d.page_config.forms&&function(e){for(var t in e){var a=e[t],i=void 0;if(a.form){if(a.form.id)i=document.getElementById(a.form.id);else if(a.form.jquery)i=l(a.form.jquery);else if(a.form.name){var o=document.getElementsByName(a.form.name);o&&o.length&&(i=o[0])}}else i=document.getElementById(t);for(var r in i||(i=b())||(i=document),a.fields){var s=a.fields[r],d=[];if(s.container_id){var c=document.getElementById(s.container_id);c&&d.push(c)}else s.container_jquery?d=l(s.container_jquery):s.container_class?d=document.getElementsByClassName(s.container_class):d.push(i);var u=s.encode;switch(u){case"none":break;case"display":if(s.jquery)for(var g=0;g<d.length;++g){var f=d[g],h=l(f).find(s.jquery);s.attrs?n.addDisplayHooksAttrs(h,s.attrs):n.addDisplayHooks(h)}else{var v=s.id?s.id:r,m=document.getElementById(v);s.attrs?n.addDisplayHookAttrs(m,s.attrs):n.addDisplayHook(m)}break;default:if(s.jquery)for(var p=0;p<d.length;++p){var w=d[p],y=l(w).find(s.jquery);n.addContentHooks(y,u,s.name)}else{var C=s.id?s.id:r;n.addContentHookById(C,u,s.name)}}}}}(d.page_config.forms),l(".i18n-multilingual").each((function(e,t){n.addContentHook(t,"[")})),l(".i18n-multilingual-curly").each((function(e,t){n.addContentHook(t,"{")})),l(".i18n-multilingual-term").each((function(e,t){n.addContentHook(t,"term")})),l(".i18n-multilingual-slug").each((function(e,t){n.addContentHook(t,"slug")})),l(".i18n-multilingual-display").each((function(e,t){n.addDisplayHook(t)})),n.addContentHooksTinyMCE(),n.setupLanguageSwitch()};d.js.get_qtx=function(){return d.qtx||(d.qtx=new c(d.js)),d.qtx};var u=window.qTranslateConfig,g=jQuery;g(window).on("load",(function(){var e=u.js.get_qtx();e.loadAdditionalTinyMceHooks(),((u.page_config||{}).keys||[]).forEach((function(t){g(document).trigger("qtxLoadAdmin:"+t,[e])}))}))})()})();