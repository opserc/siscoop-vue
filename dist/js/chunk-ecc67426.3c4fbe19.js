(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ecc67426"],{"4f2d":function(o,t,e){},"92bd":function(o,t,e){"use strict";e.r(t);var a=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("b-card-group",{attrs:{deck:""}},[e("b-card",{attrs:{header:"Listado de Asociados Completo","header-tag":"header",title:"Asociados"}},[e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"6"}},[e("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:"Buscar Asociado"}},[e("b-input-group",[e("b-form-input",{attrs:{placeholder:"Buscar Asociado"},model:{value:o.filter,callback:function(t){o.filter=t},expression:"filter"}}),e("b-input-group-append",[e("b-btn",{attrs:{disabled:!o.filter},on:{click:function(t){o.filter=""}}},[o._v("Limpiar")])],1)],1)],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"6"}},[e("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:"Filtrar"}},[e("b-input-group",[e("b-form-select",{attrs:{options:o.sortOptions},model:{value:o.sortBy,callback:function(t){o.sortBy=t},expression:"sortBy"}},[e("option",{attrs:{slot:"first"},domProps:{value:null},slot:"first"},[o._v("-- Ninguno --")])]),e("b-form-select",{attrs:{slot:"append",disabled:!o.sortBy},slot:"append",model:{value:o.sortDesc,callback:function(t){o.sortDesc=t},expression:"sortDesc"}},[e("option",{domProps:{value:!1}},[o._v("Asc")]),e("option",{domProps:{value:!0}},[o._v("Desc")])])],1)],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"6"}},[e("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:"Paginado"}},[e("b-form-select",{attrs:{options:o.pageOptions},model:{value:o.perPage,callback:function(t){o.perPage=t},expression:"perPage"}})],1)],1)],1),e("b-table",{attrs:{"show-empty":"",stacked:"md",items:o.items,fields:o.fields,"current-page":o.currentPage,"per-page":o.perPage,filter:o.filter,"sort-by":o.sortBy,"sort-desc":o.sortDesc,"sort-direction":o.sortDirection},on:{"update:sortBy":function(t){o.sortBy=t},"update:sortDesc":function(t){o.sortDesc=t},filtered:o.onFiltered},scopedSlots:o._u([{key:"actions",fn:function(t){return[e("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(e){e.stopPropagation(),o.info(t.item,t.index,e.target)}}},[o._v("\r\n          Info modal\r\n        ")]),e("b-button",{attrs:{size:"sm"},on:{click:function(o){return o.stopPropagation(),t.toggleDetails(o)}}},[o._v("\r\n          "+o._s(t.detailsShowing?"Hide":"Show")+" Details\r\n        ")])]}},{key:"row-details",fn:function(t){return[e("b-card-group",{attrs:{deck:""}},[e("b-col",{attrs:{cols:"8"}},[e("b-card",{attrs:{title:"Datos Completos"}},[e("ul",[e("li",[o._v("Nombres: "+o._s(o.modalInfo.nombre))]),e("li",[o._v("Apellidos: "+o._s(o.modalInfo.apellido))]),e("li",[o._v("Cedula de Identidad: "+o._s(o.modalInfo.cedula))]),e("li",[o._v("Fecha de Nacimiento: "+o._s(o.modalInfo.fnacimiento))]),e("li",[o._v("Condición: "+o._s(o.modalInfo.condicion))]),e("li",[o._v("Fecha de Ingreso: "+o._s(o.modalInfo.fecha))])])])],1),e("b-col",{attrs:{cols:"4"}},[e("b-card",[e("b-img",{attrs:{src:o.modalInfo.imagen,fluid:"",alt:"Foto del Asociado N° "+o.modalInfo.imagen}})],1)],1)],1)]}}])}),e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"6"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":o.totalRows,"per-page":o.perPage},model:{value:o.currentPage,callback:function(t){o.currentPage=t},expression:"currentPage"}})],1)],1),e("b-modal",{ref:"modal",attrs:{id:"modalInfo",title:o.modalInfo.title,"hide-footer":""}},[e("b-form-group",{attrs:{label:"N° de Asociado:",description:"Numero de Registro en el Libro de Asociados"}},[e("b-form-input",{attrs:{type:"text",disabled:""},model:{value:o.modalInfo.nsocio,callback:function(t){o.$set(o.modalInfo,"nsocio",t)},expression:"modalInfo.nsocio"}})],1),e("b-form-group",{attrs:{label:"Nombres:"}},[e("b-form-input",{attrs:{type:"text",required:""},model:{value:o.modalInfo.nombre,callback:function(t){o.$set(o.modalInfo,"nombre",t)},expression:"modalInfo.nombre"}})],1),e("b-form-group",{attrs:{label:"Apellidos:"}},[e("b-form-input",{attrs:{type:"text",required:""},model:{value:o.modalInfo.apellido,callback:function(t){o.$set(o.modalInfo,"apellido",t)},expression:"modalInfo.apellido"}})],1),e("b-form-group",{attrs:{label:"Cedula de Identidad:"}},[e("b-form-input",{attrs:{type:"text",required:""},model:{value:o.modalInfo.cedula,callback:function(t){o.$set(o.modalInfo,"cedula",t)},expression:"modalInfo.cedula"}})],1),e("b-form-group",{attrs:{label:"Fecha de Nacimiento:"}},[e("b-form-input",{attrs:{type:"text",required:""},model:{value:o.modalInfo.fnacimiento,callback:function(t){o.$set(o.modalInfo,"fnacimiento",t)},expression:"modalInfo.fnacimiento"}})],1),e("b-form-group",{attrs:{label:"Fecha de Inscripción:"}},[e("b-form-input",{attrs:{type:"text",required:""},model:{value:o.modalInfo.fecha,callback:function(t){o.$set(o.modalInfo,"fecha",t)},expression:"modalInfo.fecha"}})],1),e("b-form-group",{attrs:{label:"Imagen:"}},[e("b-form-input",{attrs:{type:"text",required:""},model:{value:o.modalInfo.imagen,callback:function(t){o.$set(o.modalInfo,"imagen",t)},expression:"modalInfo.imagen"}})],1),e("b-form-group",{attrs:{label:"Condicion:"}},[e("b-form-input",{attrs:{type:"text",required:""},model:{value:o.modalInfo.condicion,callback:function(t){o.$set(o.modalInfo,"condicion",t)},expression:"modalInfo.condicion"}})],1),e("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:function(t){o.sociosUpdate()}}},[o._v("Actualizar")])],1)],1)],1)],1)},n=[],i=e("bc3a"),s=e.n(i),l=e("c1df"),r=[],c={name:"socios",data:function(){return{mensajeRespuesta:"",items:[],fields:[{key:"nsocio",label:"Numero de Asociado",sortable:!0,sortDirection:"desc"},{key:"nombre",label:"Nombres",class:"text-center"},{key:"apellido",label:"Apellidos",class:"text-center"},{key:"cedula",label:"Cedula de Identidad",sortable:!0},{key:"actions",label:"Actions"}],currentPage:1,perPage:5,totalRows:r.length,pageOptions:[5,10,15],sortBy:null,sortDesc:!1,sortDirection:"asc",filter:null,modalInfo:{title:"",id:"",nsocio:"",nombre:"",apellido:"",cedula:"",fecha:"",condicion:"",fnacimiento:"",imagen:"",mensaje:""}}},mounted:function(){this.sociosAll()},computed:{sortOptions:function(){return this.fields.filter(function(o){return o.sortable}).map(function(o){return{text:o.label,value:o.key}})}},methods:{info:function(o,t){var e=l(o.fecha).format("DD/MM/YYYY");this.modalInfo.id=o.id,this.modalInfo.nsocio=o.nsocio,this.modalInfo.nombre=o.nombre,this.modalInfo.apellido=o.apellido,this.modalInfo.cedula=o.cedula,this.modalInfo.fecha=e,this.modalInfo.condicion=o.condicion,this.modalInfo.fnacimiento=o.fnacimiento,this.modalInfo.imagen=o.imagen,this.modalInfo.mensaje=this.mensajeRespuesta,this.modalInfo.title="Actualizando Asociado",this.$root.$emit("bv::show::modal","modalInfo",t)},infoDetails:function(o){var t=l(o.fecha).format("DD/MM/YYYY");this.modalInfo.id=o.id,this.modalInfo.nsocio=o.nsocio,this.modalInfo.nombre=o.nombre,this.modalInfo.apellido=o.apellido,this.modalInfo.cedula=o.cedula,this.modalInfo.fecha=t,this.modalInfo.condicion=o.condicion,this.modalInfo.fnacimiento=o.fnacimiento,this.modalInfo.imagen=o.imagen,this.modalInfo.mensaje=this.mensajeRespuesta,this.modalInfo.title="Actualizando Asociado",detailsShowing=!0},handleSubmit:function(){this.$refs.modal.hide()},onFiltered:function(o){this.totalRows=o.length,this.currentPage=1},sociosAll:function(){var o=this;s.a.get("http://localhost:3000/api/socios").then(function(t){o.items=t.data})},sociosUpdate:function(){var o=this,t=this.modalInfo.id,e=this.modalInfo.nsocio,a=this.modalInfo.nombre,n=this.modalInfo.apellido,i=this.modalInfo.cedula,l=this.modalInfo.condicion,r=this.modalInfo.fnacimiento,c=this.modalInfo.imagen;s.a.put("http://localhost:3000/api/socios/"+t,{nsocio:e,nombre:a,apellido:n,cedula:i,condicion:l,fnacimiento:r,imagen:c}).then(function(t){o.sociosAll(),o.mensajeRespuesta=t.data.message,o.handleSubmit()})}}},d=c,m=(e("da42"),e("2877")),f=Object(m["a"])(d,a,n,!1,null,"22b2e950",null);f.options.__file="Socios.vue";t["default"]=f.exports},da42:function(o,t,e){"use strict";var a=e("4f2d"),n=e.n(a);n.a}}]);
//# sourceMappingURL=chunk-ecc67426.3c4fbe19.js.map