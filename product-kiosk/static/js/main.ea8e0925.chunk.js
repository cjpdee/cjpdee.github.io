(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(7),r=a.n(s),c=(a(14),a(8)),o=a(1),u=a(2),l=a(4),m=a(3),d=a(5);function p(e){return e.split(" ").join("-").toLowerCase()}function _(e){return e<10&&"0"+e.toString()}var g=["Ready to try","On the way","In the queue","Out of stock"],h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"product"},n.a.createElement("div",{className:"\n                        product__status\n                        product__status--".concat(p(g[this.props.status]),"\n                    ")}),n.a.createElement("div",{className:"product__content"},n.a.createElement("div",{className:"product__image"},n.a.createElement("img",{src:this.props.image,alt:this.props.product_name})),n.a.createElement("span",{className:"product__title"},this.props.product_name),n.a.createElement("div",{className:"product__content-item"},n.a.createElement("span",{className:"product__detail"},"Category:"),n.a.createElement("span",{className:"product__detail product__detail--black"},this.props.category)),n.a.createElement("div",{className:"product__content-item"},n.a.createElement("span",{className:"product__detail"},"Size:"),n.a.createElement("span",{className:"product__detail product__detail--black"},"UK ",this.props.size_uk)),n.a.createElement("div",{className:"product__content-item"},n.a.createElement("span",{className:"product__detail"},"Colour:"),n.a.createElement("span",{className:"product__detail product__detail--black"},this.props.colour)),n.a.createElement("span",{className:"product__initials"},this.props.customer_initials)))}}]),t}(n.a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("button",{className:"filter",onClick:function(){e.props.handleClick(e.props.value)}},n.a.createElement("div",{className:"filter__status filter__status--".concat(p(this.props.label))}),n.a.createElement("span",{className:"filter__label"},this.props.label))}}]),t}(n.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"pagination"},n.a.createElement("div",{className:"pagination__indicators"},this.paginationList()),n.a.createElement("span",{className:"pagination__numbers"},n.a.createElement("span",{className:"pagination__current"},_(this.props.currentPage+1)),n.a.createElement("span",{className:"pagination__total"},_(this.props.numPages))))}},{key:"paginationList",value:function(){for(var e=this,t=[],a=function(a){t.push(n.a.createElement("button",{className:"pagination__indicator ".concat(e.pageIsActive(a)&&"pagination__indicator--active"),key:a,onClick:function(){e.props.handleClick(a)}}))},i=0;i<this.props.numPages;i++)a(i);return t}},{key:"pageIsActive",value:function(e){return e===this.props.currentPage}}]),t}(n.a.Component),y=["https://images.ctfassets.net/od02wyo8cgm5/4zKaw0ZGSnCmuqB8EaLFI0/f372623f3e0d27dfa100802421c35f0d/cloud_waterproof_2-fw19-black_lunar-m-g1.png?w=500&h=500&fl=progressive&q=91&bg=rgb:f7f7f7&fm=jpg","https://www.americangolf.co.uk/on/demandware.static/-/Sites-master-catalog/default/dwc8fd5f12/images-square/zoom/338968-Nike-Golf-Black-Air-Max-1G-1.jpg","https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1574099086-adidas-continental-80-1574099076.jpg?crop=1xw:1xh;center,top&resize=480:*","https://stockx-360.imgix.net/Nike-Air-Max-97-MSCHF-x-INRI-Jesus-Shoes/Images/Nike-Air-Max-97-MSCHF-x-INRI-Jesus-Shoes/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1573581208"],v=[{id:"id1",product_name:"Cloud Lightweight Running Shoe",image:y[0],category:"Men",size_uk:10,colour:"Dark Grey",customer_initials:"JA",status:3},{id:"id2",product_name:"Nike Air Max 1G",image:y[1],category:"Men",size_uk:7,colour:"Black",customer_initials:"MC",status:2},{id:"id3",product_name:"Adidas Continental 80",image:y[2],category:"Women",size_uk:7,colour:"White",customer_initials:"DN",status:1},{id:"id4",product_name:"Nike Air Max 97",image:y[3],category:"Men",size_uk:6,colour:"White/Blue",customer_initials:"BR",status:1},{id:"id5",product_name:"Cloud Lightweight Running Shoe",image:y[0],category:"Men",size_uk:10,colour:"Dark Grey",customer_initials:"AJ",status:3},{id:"id6",product_name:"Nike Air Max 1G",image:y[1],category:"Men",size_uk:7,colour:"Black",customer_initials:"VS",status:3},{id:"id7",product_name:"Adidas Continental 80",image:y[2],category:"Women",size_uk:9,colour:"White",customer_initials:"JP",status:2},{id:"id9",product_name:"Cloud Lightweight Running Shoe",image:y[0],category:"Men",size_uk:10,colour:"Dark Grey",customer_initials:"AJ",status:1},{id:"id8",product_name:"Nike Air Max 97",image:y[3],category:"Women",size_uk:6,colour:"White/Blue",customer_initials:"TR",status:0},{id:"id10",product_name:"Nike Air Max 1G",image:y[1],category:"Men",size_uk:7,colour:"Black",customer_initials:"EF",status:0},{id:"id12",product_name:"Nike Air Max 97",image:y[3],category:"Men",size_uk:6,colour:"White/Blue",customer_initials:"TL",status:2},{id:"id13",product_name:"Cloud Lightweight Running Shoe",image:y[0],category:"Men",size_uk:11,colour:"Dark Grey",customer_initials:"AJ",status:3},{id:"id19",product_name:"Adidas Continental 80",image:y[2],category:"Women",size_uk:5,colour:"White",customer_initials:"HF",status:1},{id:"id11",product_name:"Adidas Continental 80",image:y[2],category:"Women",size_uk:7,colour:"White",customer_initials:"BB",status:0},{id:"id14",product_name:"Nike Air Max 1G",image:y[1],category:"Men",size_uk:8,colour:"Black",customer_initials:"WP",status:1},{id:"id15",product_name:"Adidas Continental 80",image:y[2],category:"Women",size_uk:5,colour:"White",customer_initials:"HF",status:3},{id:"id16",product_name:"Nike Air Max 97",image:y[3],category:"Men",size_uk:8,colour:"White/Blue",customer_initials:"RT",status:1},{id:"id18",product_name:"Nike Air Max 1G",image:y[1],category:"Men",size_uk:8,colour:"Black",customer_initials:"WP",status:3},{id:"id17",product_name:"Cloud Lightweight Running Shoe",image:y[0],category:"Men",size_uk:11,colour:"Dark Grey",customer_initials:"AJ",status:3},{id:"id20",product_name:"Nike Air Max 97",image:y[3],category:"Women",size_uk:8,colour:"White/Blue",customer_initials:"RT",status:2}],N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={items:[],numPages:Math.ceil(v.length/4),activeFilter:null,currentPage:0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({items:this.fetchData()}),setInterval((function(){e.nextPage()}),1e4)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"page"},n.a.createElement("header",{className:"page__header"},null!==this.state.activeFilter&&n.a.createElement("button",{className:"filter",onClick:function(){e.clearFilters()}},n.a.createElement("div",{className:"filter__cross"}),n.a.createElement("span",{className:"filter__label"},"Clear Filters")),g.map((function(t,a){return n.a.createElement(k,{label:t,value:a,key:a,handleClick:function(t){e.setState({activeFilter:t,currentPage:0})}})}))),n.a.createElement("main",{className:"page__body"},this.getCurrentPageData().map((function(e){return n.a.createElement(h,Object.assign({},e,{key:e.id}))}))),n.a.createElement("footer",{className:"page__footer"},n.a.createElement(f,{numPages:this.getPageCount(),currentPage:this.state.currentPage,handleClick:function(t){e.setState({currentPage:t})}})))}},{key:"nextPage",value:function(){this.state.currentPage<this.getPageCount()-1?this.setState({currentPage:this.state.currentPage+1}):this.setState({currentPage:0})}},{key:"getFilteredData",value:function(){var e=this,t=Object(c.a)(this.state.items);return null!==this.state.activeFilter&&(t=this.state.items.filter((function(t){return t.status===e.state.activeFilter}))),t}},{key:"getPageCount",value:function(){return Math.ceil((this.getFilteredData().length-1)/4)}},{key:"getCurrentPageData",value:function(){return this.getFilteredData().slice(4*this.state.currentPage,4*(this.state.currentPage+1))}},{key:"clearFilters",value:function(){this.setState({activeFilter:null})}},{key:"fetchData",value:function(){return v}}]),t}(n.a.Component);r.a.render(n.a.createElement(N,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.ea8e0925.chunk.js.map