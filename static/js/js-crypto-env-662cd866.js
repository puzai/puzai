import{r as y}from"./crypto-js-e179ec67.js";var e={};Object.defineProperty(e,"__esModule",{value:!0});e.getCrypto=e.getRootWebCrypto=e.getWebCrypto=e.getNodeCrypto=void 0;var t=function(){if(!(typeof window<"u"&&window.crypto))return typeof window>"u"&&typeof crypto<"u"?void 0:y()};e.getNodeCrypto=t;var o=function(){if(typeof window<"u"&&window.crypto)return window.crypto.subtle;if(typeof window>"u"&&typeof crypto<"u")return crypto.subtle};e.getWebCrypto=o;var d=function(){if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof window>"u"&&typeof crypto<"u")return crypto};e.getRootWebCrypto=d;var p=function(){var r=o(),n=t();return typeof n<"u"?{name:"nodeCrypto",crypto:n}:typeof r<"u"?{name:"webCrypto",crypto:r}:{name:void 0}};e.getCrypto=p;e.default={getNodeCrypto:t,getWebCrypto:o,getRootWebCrypto:d,getCrypto:p};export{e as d};