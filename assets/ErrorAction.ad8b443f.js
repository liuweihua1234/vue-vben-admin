import{d as t,aO as o,a_ as e,a as r,aS as a,c as n,aI as s,cq as i,r as u,o as c,f as l,p as d,g as m}from"./index.8a947221.js";/* empty css              */import{B as p}from"./index.1eae7913.js";import"./vendor.3b1829c7.js";import"./isNumeric.2bec345d.js";var f=t({name:"ErrorAction",components:{Icon:o,Tooltip:e,Badge:p},setup(){const{t:t}=r(),{push:o}=a();return{t:t,getCount:n((()=>i.getErrorListCountState)),handleToErrorList:function(){o(s.ERROR_LOG_PAGE).then((()=>{i.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,a,n){const s=u("Icon"),i=u("Badge"),p=u("Tooltip");return c(),l(p,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:d((()=>[m(i,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:d((()=>[m(s,{icon:"ion:bug-outline"})])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;