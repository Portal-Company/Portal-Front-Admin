import{r as n,u as N,t as S,b as a,j as e,R as f,C as i,c as t,B as H}from"./index.0b2edeaa.js";import{_ as s}from"./react-apexcharts.min.ad88116b.js";const k=n.exports.memo(()=>{N(S);const o=(()=>{let r=getComputedStyle(document.body).getPropertyValue("--prefix")||"bs-";r&&(r=r.trim());const A=getComputedStyle(document.body).getPropertyValue(`--${r}primary`),w=getComputedStyle(document.body).getPropertyValue(`--${r}secondary`),T=getComputedStyle(document.body).getPropertyValue(`--${r}primary-tint-20`),C=getComputedStyle(document.body).getPropertyValue(`--${r}warning`),B=getComputedStyle(document.body).getPropertyValue(`--${r}tertiray`);return{primary:A.trim(),secondary:w.trim(),primary_light:T.trim(),warning:C.trim(),tertiray:B.trim()}})(),l=[o.primary,o.secondary];n.exports.useEffect(()=>()=>l);const c={options:{chart:{type:"bar",height:350},colors:l,plotOptions:{bar:{horizontal:!0,dataLabels:{position:"top"}}},dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px"}},stroke:{show:!0,width:1},tooltip:{shared:!0,intersect:!1},xaxis:{categories:[2001,2002,2003,2004,2005,2006,2007]}},series:[{data:[44,55,41,64,22,43,21]},{data:[53,32,33,52,13,44,32]}]},d={options:{chart:{height:350,type:"line",stacked:!1},dataLabels:{enabled:!1},colors:l,stroke:{width:[4,4]},plotOptions:{bar:{columnWidth:"20%"}},xaxis:{categories:[2009,2010,2011,2012,2013,2014,2015,2016]},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#8A92A6"},labels:{style:{colors:"#8A92A6"}},title:{text:"Series A",style:{colors:"#8A92A6"}}},{opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,colors:"#8A92A6"},labels:{style:{colors:"#8A92A6"}},title:{text:"Series B",style:{colors:"#8A92A6"}}}],tooltip:{shared:!1,intersect:!0,x:{show:!1}},legend:{horizontalAlign:"left",offsetX:40}},series:[{name:"Series A",data:[1.4,2,2.5,1.5,2.5,2.8,3.8,4.6]},{name:"Series B",data:[20,29,37,36,44,45,50,58]}]},h={options:{chart:{height:385,type:"radialBar"},colors:l,plotOptions:{radialBar:{dataLabels:{total:{show:!0,label:"TOTAL"}}}},labels:["TEAM A","TEAM B","TEAM C","TEAM D"]},series:[67,84,97,61]},p={options:{chart:{type:"pie",height:365},colors:l,labels:["Team A","Team B","Team C","Team D","Team E"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},series:[44,55,13,43,22],chart:{height:365,type:"pie"}},m={options:{colors:l,chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1}},title:{text:"Radar Chart - Multi Series"},stroke:{width:2},fill:{opacity:.1},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]}},series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]}]},y={options:{colors:l,chart:{height:350,type:"scatter",zoom:{enabled:!0,type:"xy"}},xaxis:{tickAmount:10,labels:{formatter:function(r){return parseFloat(r).toFixed(1)}}},yaxis:{tickAmount:7}},series:[{name:"SAMPLE A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"SAMPLE B",data:[[36.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]}]},g=[o.primary,o.secondary],u={options:{fill:{opacity:.8},colors:g,responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},series:[14,23,21,17,15,10,12,17,21],chart:{height:365,type:"polarArea"}},b=[o.primary,o.secondary,o.tertiray],x={options:{chart:{height:350,type:"line",stacked:!1},stroke:{width:[0,2,5],curve:"smooth"},colors:b,plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"},min:0},tooltip:{shared:!0,intersect:!1,y:{formatter:function(r){return typeof r<"u"?r.toFixed(0)+" points":r}}}},series:[{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}]};return a(n.exports.Fragment,{children:[e(f,{children:e(i,{lg:"12",children:e(t,{children:e(t.Body,{children:a("div",{className:"d-flex flex-wrap align-items-center justify-content-between",children:[e("div",{className:"d-flex flex-wrap align-items-center",children:e("div",{className:"d-flex flex-wrap align-items-center mb-3 mb-sm-0",children:e("h4",{className:"me-2 h4",children:"Apexcharts"})})}),a("small",{children:["For more Information regarding Apexcharts Plugin refer",e(H,{bsPrefix:" ",target:"_blank",href:"https://apexcharts.com/docs/react-charts/",children:"Documentation"})]})]})})})})}),a(f,{children:[e(i,{lg:"6",children:a(t,{children:[e(t.Header,{className:"d-flex justify-content-between",children:e(t.Header.Title,{children:e("h4",{children:" Bar Chart"})})}),e(t.Body,{className:"text-center",children:e(s,{options:c.options,series:c.series,type:"bar",height:"350"})})]})}),e(i,{lg:"6",children:a(t,{children:[e(t.Header,{className:"d-flex justify-content-between",children:e(t.Header.Title,{children:e("h4",{children:"Line Chart"})})}),e(t.Body,{className:"text-center",children:e(s,{options:d.options,series:d.series,type:"line",height:"350"})})]})}),e(i,{lg:"6",children:a(t,{children:[e(t.Header,{className:"d-flex justify-content-between",children:e(t.Header.Title,{children:e("h4",{children:"Radialbar Chart"})})}),e(t.Body,{className:"text-center",children:e(s,{options:h.options,series:h.series,type:"radialBar",height:"385"})})]})}),e(i,{lg:"6",children:a(t,{children:[e(t.Header,{className:"d-flex justify-content-between",children:e(t.Header.Title,{children:e("h4",{children:"Pie Chart"})})}),e(t.Body,{className:"text-center",children:e(s,{options:p.options,series:p.series,type:"pie",height:"350"})})]})}),e(i,{lg:"6",children:a(t,{children:[e(t.Header,{className:"d-flex justify-content-between",children:e(t.Header.Title,{children:e("h4",{children:"Radar Chart"})})}),e(t.Body,{className:"text-center",children:e(s,{options:m.options,series:m.series,type:"radar",height:"350"})})]})}),e(i,{lg:"6",children:a(t,{children:[e(t.Header,{className:"d-flex justify-content-between",children:e(t.Header.Title,{children:e("h4",{children:"Scatter Chart"})})}),e(t.Body,{className:"text-center",children:e(s,{options:y.options,series:y.series,type:"scatter",height:"350"})})]})}),e(i,{lg:"6",children:a(t,{children:[e(t.Header,{className:"d-flex justify-content-between",children:e(t.Header.Title,{children:e("h4",{children:" Polar Area Charts"})})}),e(t.Body,{className:"text-center",children:e(s,{options:u.options,series:u.series,type:"polarArea",height:"365"})})]})}),e(i,{lg:"6",children:a(t,{children:[e(t.Header,{className:"d-flex justify-content-between",children:e(t.Header.Title,{children:e("h4",{children:"Mixed"})})}),e(t.Body,{className:"text-center",children:e(s,{options:x.options,series:x.series,type:"line",height:"350"})})]})})]})]})});k.displayName="Apexcharts";export{k as default};
