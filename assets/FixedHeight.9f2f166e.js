import{_ as i,F as e}from"./index.098be97c.js";import{getCustomHeaderColumns as s}from"./tableData.252346e9.js";import{d as t}from"./table.bfe7438e.js";import{B as o}from"./ScrollContainer.7c8aaa6b.js";import{d as r,r as m,o as p,f as a,g as d,p as j,q as n}from"./index.8a947221.js";import{u as c}from"./useTable.0f298b62.js";import"./index.6f85517b.js";import"./SearchOutlined.b19280fd.js";import"./toString.861a9ae4.js";import"./isArray.e55f5dd2.js";import"./_baseClone.91fce584.js";import"./_Uint8Array.b1ff6412.js";import"./identity.e5918e80.js";import"./_baseSlice.6f42b8d2.js";import"./CheckOutlined.af985792.js";import"./DownOutlined.e3879b2b.js";import"./BasicForm.205370b0.js";import"./index.f1773ae9.js";import"./index.b59597c9.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.07496caf.js";import"./isEqual.563532de.js";import"./_baseProperty.0fd6dbfc.js";import"./toInteger.a25ecc80.js";import"./index.4c43253e.js";import"./index.2c4e33f6.js";import"./EyeOutlined.3f7d1401.js";import"./index.aad67b3f.js";import"./index.36897cf3.js";import"./index.c47a44f7.js";import"./UpOutlined.66b37b38.js";import"./index.c8ff2abb.js";import"./RightOutlined.d3306906.js";import"./RedoOutlined.58d0f99d.js";import"./index.d94421bb.js";import"./EllipsisOutlined.0ca49394.js";import"./types.31046b05.js";import"./Tree.00294558.js";import"./util.2d6868a4.js";import"./useFormItem.cfc17307.js";import"./isEqual.222c6e0f.js";import"./_baseIsEqual.97cc6b34.js";import"./get.b2e237e3.js";/* empty css              */import"./uuid.03279e2e.js";import"./index.831f8df6.js";import"./DeleteOutlined.ce0659f5.js";import"./index.a5da0e53.js";import"./useModal.b05e4604.js";import"./useTimeout.4ab89dd3.js";import"./useWindowSizeFn.0acae6c2.js";import"./FullscreenOutlined.88a165f5.js";import"./index.6704907b.js";import"./Dropdown.16737c14.js";import"./index.cdde649d.js";import"./LeftOutlined.081aa009.js";import"./download.93ef06c4.js";import"./domUtils.e0b91801.js";import"./uniqBy.5d345c52.js";import"./index.81c9b1dc.js";import"./DoubleLeftOutlined.6a700560.js";import"./DoubleRightOutlined.9ab318aa.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.249d7b30.js";import"./CaretDownFilled.e325b6bc.js";import"./useForm.5e8ab938.js";import"./useSortable.ca05ff1a.js";import"./clickOutside.1357c514.js";import"./useExpose.4645fd96.js";import"./index.02b8894f.js";import"./useScrollTo.a0f2ab62.js";var l=r({components:{BasicTable:i,FormOutlined:e,BasicHelp:o},setup(){const[i]=c({title:"定高/头部自定义",api:t,columns:s(),canResize:!1,scroll:{y:100}});return{registerTable:i}}});const b={class:"p-4"},f=n(" 姓名 "),u=n(" 地址 ");l.render=function(i,e,s,t,o,r){const n=m("BasicHelp"),c=m("FormOutlined"),l=m("BasicTable");return p(),a("div",b,[d(l,{onRegister:i.registerTable},{customTitle:j((()=>[d("span",null,[f,d(n,{class:"ml-2",text:"姓名"})])])),customAddress:j((()=>[u,d(c,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default l;