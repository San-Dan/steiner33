!function(){"use strict";var e,t={945:function(){var e=window.wp.element;const{registerBlockType:t}=wp.blocks,{InspectorControls:r,RichText:n,MediaUpload:o,MediaUploadCheck:a,useBlockProps:l,BlockControls:c,AlignmentToolbar:i}=wp.blockEditor,{PanelBody:u,Button:s}=wp.components;t("create-block/hero",{title:"Hero",description:"Hero block",icon:"cover-image",category:"layout",attributes:{coverImageId:{type:"number",default:0},coverImageUrl:{type:"string",source:"attribute",selector:"img",attribute:"src"},contentImageId:{type:"number",default:0},contentImageUrl:{type:"string",source:"attribute",selector:"img",attribute:"src"},urlLink:{type:"string",default:""},urlName:{type:"string",default:"Läs mer om oss"},text:{type:"string",default:"Rudolf Steinerskolan är belägen på en höjd med underbar utsikt över staden. Runtom kring finns tallskog och bergsknallar, här kan man tidiga morgnar stöta på harar och rådjur. Skolgården är naturligt belägen i denna miljö."}},edit:({media:t,attributes:n,setAttributes:l})=>{const{coverImageUrl:c,contentImageUrl:i,coverImageId:m,contentImageId:g,urlLink:d,urlName:p,text:b}=n;return[(0,e.createElement)(r,null,(0,e.createElement)(u,{title:"Select images"},(0,e.createElement)("p",null,(0,e.createElement)("strong",null,"Select background cover image")),(0,e.createElement)(a,null,(0,e.createElement)(o,{onSelect:e=>{l({coverImageId:e.id},{coverImageUrl:e.url})},type:"image",value:m,render:({open:t})=>(0,e.createElement)(s,{className:m?"image-button":"button button-large",onClick:t},"Choose bottom image")}),(0,e.createElement)("p",null,(0,e.createElement)("strong",null,"Select content image")),(0,e.createElement)(o,{onSelect:e=>{l({contentImageId:e.id},{contentImageUrl:e.url})},type:"image",value:g,render:({open:t})=>(0,e.createElement)(s,{className:g?"image-button":"button button-large",onClick:t},"Choose top image")}))))]},save:({attributes:t})=>{const{coverImageUrl:r,contentImageUrl:n}=t;return(0,e.createElement)("div",{className:"hero-images"},(0,e.createElement)("img",{src:r,className:"cover-image"}))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,r,o,a){if(!r){var l=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var c=!0,i=0;i<r.length;i++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(c=!1,a<l&&(l=a));if(c){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,l=r[0],c=r[1],i=r[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(i)var s=i(n)}for(t&&t(r);u<l.length;u++)a=l[u],n.o(e,a)&&e[a]&&e[a][0](),e[l[u]]=0;return n.O(s)},r=self.webpackChunkhero=self.webpackChunkhero||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[46],(function(){return n(945)}));o=n.O(o)}();