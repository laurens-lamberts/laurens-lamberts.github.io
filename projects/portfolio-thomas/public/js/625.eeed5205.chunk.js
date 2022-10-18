/*! For license information please see 625.eeed5205.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkLandalParkApp=self.webpackChunkLandalParkApp||[]).push([[625],{19625:function(n,e,r){r.r(e),r.d(e,{addPlugin:function(){return b}});JSON.parse;var t=JSON.stringify,i=(Object.keys,String),o="string",c="object",u=function(n,e){return e},a=function(n,e,r){var t=i(e.push(r)-1);return n.set(r,t),t},s=function(n,e,r){for(var i=e&&typeof e===c?function(n,r){return""===n||-1<e.indexOf(n)?r:void 0}:e||u,s=new Map,f=[],d=[],l=+a(s,f,i.call({"":n},"",n)),p=!l;l<f.length;)p=!0,d[l]=t(f[l++],v,r);return"["+d.join(",")+"]";function v(n,e){if(p)return p=!p,e;var r=i.call(this,n,e);switch(typeof r){case c:if(null===r)return r;case o:return s.get(r)||a(s,f,r)}return r}},f=r(15671),d=r(43144),l=r(4942),p=r(94826),v=r(26629),h=p.Z.Flipper,y={},g={};function k(n){if(void 0===n||Array.isArray(n)||n&&"object"===typeof n)return!0;throw new Error("Flipper: Expected serializable (undefined, an array or an object). Got: "+n)}var w=function(){function n(e){(0,f.Z)(this,n),(0,l.Z)(this,"connected",void 0),(0,l.Z)(this,"pluginId",void 0),this.connected=!1,this.pluginId=e}return(0,d.Z)(n,[{key:"send",value:function(n,e){if(!this.connected)throw new Error("Cannot send data, not connected");k(e),h.send(this.pluginId,n,JSON.stringify(e))}},{key:"reportErrorWithMetadata",value:function(n,e){h.reportErrorWithMetadata(this.pluginId,""+n,""+e)}},{key:"reportError",value:function(n){h.reportError(this.pluginId,""+n)}},{key:"receive",value:function(n,e){if(!this.connected)throw new Error("Cannot receive data, not connected");y[this.pluginId+"#"+n]=e,h.subscribe(this.pluginId,n)}}]),n}(),I=function(){function n(e){(0,f.Z)(this,n),(0,l.Z)(this,"responderId",void 0),this.responderId=e}return(0,d.Z)(n,[{key:"success",value:function(n){k(n),h.respondSuccess(this.responderId,null==n?null:JSON.stringify(n))}},{key:"error",value:function(n){k(n),h.respondError(this.responderId,JSON.stringify(n))}}]),n}();function E(){"undefined"!==typeof __DEV__&&__DEV__&&console.warn("The native module for Flipper seems unavailable. Please verify that `react-native-flipper` is installed as yarn dependency to your project and, for iOS, that `pod install` is run in the `ios` directory.")}function b(n){var e,r=n.queryClient,t=r.getQueryCache();function i(){return t.getAll()}function o(n){return i().find((function(e){return e.queryHash===n}))}!function(n){if(h){if(!n||"object"!==typeof n)throw new Error("Expected plugin, got "+n);["getId","onConnect","onDisconnect"].forEach((function(e){if("function"!==typeof n[e])throw new Error("Plugin misses an implementation for '".concat(e,"'"))}));var e="function"===typeof n.runInBackground&&!!n.runInBackground(),r=n.getId();n._connection=new w(r),g[r]=n,h.registerPlugin(r,e,(function(n){"noflipper"===n&&E()}))}else E()}({getId:function(){return"flipper-plugin-react-query-native-devtools"},onConnect:function(n){n.send("queries",function(){var n=i();return{queries:s(n)}}()),e=t.subscribe(function(n){return function(e){n.send("queryCacheEvent",{cashEvent:s(e)})}}(n)),n.receive("queryRefetch",(function(n,e){var r;null==(r=o(n.queryHash))||r.fetch(),e.success({ack:!0})})),n.receive("queryRemove",(function(n,e){var t=o(n.queryHash);t&&r.removeQueries(t.queryKey,{exact:!0}),e.success({ack:!0})}))},onDisconnect:function(){e&&(e(),e=void 0)},runInBackground:function(){return!0}})}h&&function(){var n=new v.Z(h);n.addListener("react-native-flipper-plugin-connect",(function(n){var e=n.plugin;if(g[e]){var r=g[e];r._connection.connected=!0,r.onConnect(r._connection)}})),n.addListener("react-native-flipper-plugin-disconnect",(function(n){var e=n.plugin;if(g[e]){var r=g[e];r._connection.connected=!1,r.onDisconnect()}})),n.addListener("react-native-flipper-receive-event",(function(n){var e=n.plugin,r=n.method,t=n.params,i=n.responderId,o=e+"#"+r;if(y[o]){var c=null!=i?new I(i):void 0;y[o](JSON.parse(t),c)}}))}()}}]);
//# sourceMappingURL=625.eeed5205.chunk.js.map