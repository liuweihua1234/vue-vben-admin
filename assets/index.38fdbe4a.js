import{f as e}from"./BasicForm.205370b0.js";import{u as t}from"./useForm.5e8ab938.js";import{d as o,n as i,r,o as s,f as p,br as n,g as a}from"./index.8a947221.js";import{_ as l}from"./index.ee861045.js";import"./index.f1773ae9.js";import"./_baseClone.91fce584.js";import"./_Uint8Array.b1ff6412.js";import"./isArray.e55f5dd2.js";import"./index.b59597c9.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.07496caf.js";import"./isEqual.563532de.js";import"./identity.e5918e80.js";import"./toString.861a9ae4.js";import"./_baseProperty.0fd6dbfc.js";import"./toInteger.a25ecc80.js";import"./index.4c43253e.js";import"./index.2c4e33f6.js";import"./SearchOutlined.b19280fd.js";import"./EyeOutlined.3f7d1401.js";import"./index.6f85517b.js";import"./_baseSlice.6f42b8d2.js";import"./CheckOutlined.af985792.js";import"./DownOutlined.e3879b2b.js";import"./index.aad67b3f.js";import"./index.36897cf3.js";import"./index.c47a44f7.js";import"./UpOutlined.66b37b38.js";import"./index.c8ff2abb.js";import"./RightOutlined.d3306906.js";import"./RedoOutlined.58d0f99d.js";import"./index.d94421bb.js";import"./EllipsisOutlined.0ca49394.js";import"./types.31046b05.js";import"./Tree.00294558.js";import"./util.2d6868a4.js";import"./useFormItem.cfc17307.js";import"./isEqual.222c6e0f.js";import"./_baseIsEqual.97cc6b34.js";import"./get.b2e237e3.js";/* empty css              */import"./uuid.03279e2e.js";import"./index.831f8df6.js";import"./DeleteOutlined.ce0659f5.js";import"./index.a5da0e53.js";import"./useModal.b05e4604.js";import"./useTimeout.4ab89dd3.js";import"./useWindowSizeFn.0acae6c2.js";import"./ScrollContainer.7c8aaa6b.js";import"./index.02b8894f.js";import"./domUtils.e0b91801.js";import"./useScrollTo.a0f2ab62.js";import"./FullscreenOutlined.88a165f5.js";import"./index.6704907b.js";import"./Dropdown.16737c14.js";import"./index.cdde649d.js";import"./LeftOutlined.081aa009.js";import"./download.93ef06c4.js";import"./uniqBy.5d345c52.js";import"./index.2698f41d.js";import"./index.c32e09a2.js";import"./usePageContext.5206dcb7.js";import"./transButton.249d7b30.js";import"./ArrowLeftOutlined.5c44f118.js";const m=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var d=o({components:{BasicForm:e,PageWrapper:l},setup(){const{createMessage:e}=i(),[o,{validate:r,setProps:s}]=t({labelCol:{span:7},wrapperCol:{span:10},schemas:m,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await r(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(t){}}});return{register:o}}});const c=n("data-v-5cbaa0f1"),u=c(((e,t,o,i,n,l)=>{const m=r("BasicForm"),d=r("PageWrapper");return s(),p(d,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:c((()=>[a(m,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));d.render=u,d.__scopeId="data-v-5cbaa0f1";export default d;