(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,l){},13:function(e,t,l){},14:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(2),c=l.n(r);l(12),l(13);var u=function(){const[e,t]=Object(a.useState)(""),[l,r]=Object(a.useState)([]),[c,u]=Object(a.useState)(null),m=()=>{console.log(e);let t=!1,l=e.replace(/;+/g,";").split(";");switch(r([]),console.log(l),l[1]){case"M":u("resiliation");break;case"N":u("depose");break;case"K":u("miseEnService");break;default:switch(l[0]){case"A":u("souscription(disco)"),t=!0;break;case"E":u("Resiliation(disco)"),t=!0;break;case"C":u("ssDepose(disco)"),t=!0;break;case"B":u("acDepose(disco"),t=!0;break;default:console.log("Saisir un flux correct"),u(null)}}(e=>{r(t=>[t,e])})(function(e){let t=[];switch(e[1]){case"M":for(let l=1;l<e.length;l++)if([1,2,4].includes(l))t.push(e[l]);else if(3==t.length&&15==e[l].length)t.push(e[l]);else if(e[l].includes("FC")){t.push(e[l]),l++,t.push(e[l]);let a=e[l];for(let n=0;n<6;n++)n<a?(l++,t.push(e[l])):t.push("-");l++,console.log(e[l]),t.push(e[l])}else e[l].includes("G")&&13==t.length&&(console.log("test"),t.push(e[l+1]));break;case"N":for(let l=1;l<e.length;l++)if(console.log(t.length),[1,2,4].includes(l))t.push(e[l]);else if(3!=t.length&&18!=t.length||14!=e[l].length&&15!=e[l].length)if(e[l].includes("DI")){3==t.length&&t.push("-"),18==t.length&&t.push("-"),l++,t.push(e[l]);let a=e[l];for(let n=0;n<6;n++)n<a?(l++,t.push(e[l])):t.push("-");19==t.length&&(l++,t.push(e[l]))}else if(e[l].includes("FC")){l++,t.push(e[l]);let a=e[l];for(let n=0;n<6;n++)n<a?(l++,t.push(e[l])):t.push("-");19==t.length&&(l++,t.push(e[l]))}else"G"==e[l-1][0]&&27==t.length?t.push(e[l]):e[l-1].includes("DISJ")?t.push(e[l]):"A"!=e[l][0]&&"E"!=e[l][0]||22!=t.length?e[l].includes("H")&&30==t.length&&t.push(e[l]):t.push(e[l]);else t.push(e[l]);break;case"K":for(let l=1;l<e.length;l++)if([1,2,4,6,7,8].includes(l))t.push(e[l]);else if(e[l-1].includes("FC")){t.push(e[l]);let a=e[l];for(let n=0;n<6;n++)n<a?(l++,t.push(e[l])):t.push("-");l++,console.log(e[l]),t.push(e[l]),t.push(e[l+1])}else e[l].includes("G")&&15==t.length&&t.push(e[l+3])}return t}(l))};return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h2",{style:{color:"white"}},"Traducteur de flux")),n.a.createElement("div",{className:"Filter"},n.a.createElement("div",{class:"form-floating mb-3"},n.a.createElement("input",{className:"form-control",type:"text",id:"input_flux",value:e,onChange:e=>{t(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&m()}}),n.a.createElement("label",{for:"floatingInput"},"Flux")),n.a.createElement("div",{class:"validate-button"},n.a.createElement("button",{onClick:m,class:"btn btn-secondary btn-lm"},"Valider"))),n.a.createElement(e=>{let{data:t}=e;return n.a.createElement("div",{style:{overflowX:"auto",backgroundColor:"gray",borderRadius:"10px",margin:"10px",marginTop:"center"}},n.a.createElement("table",{id:"depose",class:"bg-info",style:{display:"depose"===c?"block":"none"}},n.a.createElement("tr",null,n.a.createElement("th",null,"ID Gestion"),n.a.createElement("th",null,"N\xb0 PDL"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"Ancien matricule"),n.a.createElement("th",null,"Nbr de cadran dist. av mod"),n.a.createElement("th",null,"1er index dist. av mod"),n.a.createElement("th",null,"2e index dist. av mod"),n.a.createElement("th",null,"3e index dist. av mod"),n.a.createElement("th",null,"4e index dist. av mod"),n.a.createElement("th",null,"5e index dist. av mod"),n.a.createElement("th",null,"6e index dist. av mod"),n.a.createElement("th",null,"Nbr de cadran four. av mod"),n.a.createElement("th",null,"1er index four. av mod"),n.a.createElement("th",null,"2e index four. av mod"),n.a.createElement("th",null,"3e index four. av mod"),n.a.createElement("th",null,"4e index four. av mod"),n.a.createElement("th",null,"5e index four. av mod"),n.a.createElement("th",null,"6e index four. av mod"),n.a.createElement("th",null,"Nouveau matricule"),n.a.createElement("th",null,"Nbr de cadran dist. ap mod"),n.a.createElement("th",null,"1er index dist. ap mod"),n.a.createElement("th",null,"2e index dist. ap mod"),n.a.createElement("th",null,"3e index dist. ap mod"),n.a.createElement("th",null,"4e index dist. ap mod"),n.a.createElement("th",null,"5e index dist. ap mod"),n.a.createElement("th",null,"6e index dist. ap mod"),n.a.createElement("th",null,"Nbr de cadran four. ap mod"),n.a.createElement("th",null,"1er cadran four. ap mod"),n.a.createElement("th",null,"2e cadran four. ap mod"),n.a.createElement("th",null,"3e cadran four. ap mod"),n.a.createElement("th",null,"4e cadran four. ap mod"),n.a.createElement("th",null,"5e cadran four. ap mod"),n.a.createElement("th",null,"6e cadran four. ap mod"),n.a.createElement("th",null,"Type de relev\xe9"),n.a.createElement("th",null,"Puissance Souscrite"),n.a.createElement("th",null,"Type Compteur"),n.a.createElement("th",null,"N\xb0 demande SGE"),n.a.createElement("th",null,"Plage HC")),t.map((e,t)=>n.a.createElement("tr",{key:t},e.map((e,t)=>n.a.createElement("td",{key:t},e))))),n.a.createElement("table",{id:"resiliation",class:"bg-info",style:{display:"resiliation"===c?"block":"none"}},n.a.createElement("tr",null,n.a.createElement("th",null,"ID Gestion"),n.a.createElement("th",null,"N\xb0 PDL"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"Matricule Compteur"),n.a.createElement("th",null,"Calendrier fournisseur"),n.a.createElement("th",null,"Nombre de cadran"),n.a.createElement("th",null,"1er index r\xe9siliation"),n.a.createElement("th",null,"2e index r\xe9siliation"),n.a.createElement("th",null,"3e index r\xe9siliation"),n.a.createElement("th",null,"4e index r\xe9siliation"),n.a.createElement("th",null,"5e index r\xe9siliation"),n.a.createElement("th",null,"6e index r\xe9siliation"),n.a.createElement("th",null,"Type de relev\xe9"),n.a.createElement("th",null,"Type Compteur")),t.map((e,t)=>n.a.createElement("tr",{key:t},e.map((e,t)=>n.a.createElement("td",{key:t},e))))),n.a.createElement("table",{id:"miseEnService",class:"bg-info",style:{display:"miseEnService"===c?"block":"none"}},n.a.createElement("tr",null,n.a.createElement("th",null,"ID Gestion"),n.a.createElement("th",null,"N\xb0 PDL"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"N\xb0 Demande SGE"),n.a.createElement("th",null,"N\xb0 partenaire"),n.a.createElement("th",null,"Matricule Compteur"),n.a.createElement("th",null,"Nombre de cadran"),n.a.createElement("th",null,"1er index"),n.a.createElement("th",null,"2e index"),n.a.createElement("th",null,"3e index"),n.a.createElement("th",null,"4e index"),n.a.createElement("th",null,"5e index"),n.a.createElement("th",null,"6e index"),n.a.createElement("th",null,"Type de relev\xe9"),n.a.createElement("th",null,"Puissance Souscrite"),n.a.createElement("th",null,"Type Compteur")),t.map((e,t)=>n.a.createElement("tr",{key:t},e.map((e,t)=>n.a.createElement("td",{key:t},e))))),n.a.createElement("table",{id:"souscription(disco)",class:"bg-info",style:{display:"souscription(disco)"===c?"block":"none"}},n.a.createElement("tr",null,n.a.createElement("th",null,"ID Gestion"),n.a.createElement("th",null,"N\xb0 PDL"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"N\xb0 Demande SGE"),n.a.createElement("th",null,"N\xb0 partenaire"),n.a.createElement("th",null,"Matricule Compteur"),n.a.createElement("th",null,"Nombre de cadran"),n.a.createElement("th",null,"1er index"),n.a.createElement("th",null,"2e index"),n.a.createElement("th",null,"3e index"),n.a.createElement("th",null,"4e index"),n.a.createElement("th",null,"5e index"),n.a.createElement("th",null,"6e index"),n.a.createElement("th",null,"Type de relev\xe9"),n.a.createElement("th",null,"Puissance Souscrite"),n.a.createElement("th",null,"Type Compteur")),t.map((e,t)=>n.a.createElement("tr",{key:t},e.map((e,t)=>n.a.createElement("td",{key:t},e))))),n.a.createElement("table",{id:"resiliation(disco)",class:"bg-info",style:{display:"resiliation(disco)"===c?"block":"none"}},n.a.createElement("tr",null,n.a.createElement("th",null,"ID Gestion"),n.a.createElement("th",null,"N\xb0 PDL"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"N\xb0 Demande SGE"),n.a.createElement("th",null,"N\xb0 partenaire"),n.a.createElement("th",null,"Matricule Compteur"),n.a.createElement("th",null,"Nombre de cadran"),n.a.createElement("th",null,"1er index"),n.a.createElement("th",null,"2e index"),n.a.createElement("th",null,"3e index"),n.a.createElement("th",null,"4e index"),n.a.createElement("th",null,"5e index"),n.a.createElement("th",null,"6e index"),n.a.createElement("th",null,"Type de relev\xe9"),n.a.createElement("th",null,"Puissance Souscrite"),n.a.createElement("th",null,"Type Compteur")),t.map((e,t)=>n.a.createElement("tr",{key:t},e.map((e,t)=>n.a.createElement("td",{key:t},e))))),n.a.createElement("table",{id:"ssDepose(disco)",class:"bg-info",style:{display:"ssDepose(disco)"===c?"block":"none"}},n.a.createElement("tr",null,n.a.createElement("th",null,"ID Gestion"),n.a.createElement("th",null,"N\xb0 PDL"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"N\xb0 Demande SGE"),n.a.createElement("th",null,"N\xb0 partenaire"),n.a.createElement("th",null,"Matricule Compteur"),n.a.createElement("th",null,"Nombre de cadran"),n.a.createElement("th",null,"1er index"),n.a.createElement("th",null,"2e index"),n.a.createElement("th",null,"3e index"),n.a.createElement("th",null,"4e index"),n.a.createElement("th",null,"5e index"),n.a.createElement("th",null,"6e index"),n.a.createElement("th",null,"Type de relev\xe9"),n.a.createElement("th",null,"Puissance Souscrite"),n.a.createElement("th",null,"Type Compteur")),t.map((e,t)=>n.a.createElement("tr",{key:t},e.map((e,t)=>n.a.createElement("td",{key:t},e))))),n.a.createElement("table",{id:"acDepose(disco)",class:"bg-info",style:{display:"acDepose(disco)"===c?"block":"none"}},n.a.createElement("tr",null,n.a.createElement("th",null,"ID Gestion"),n.a.createElement("th",null,"N\xb0 PDL"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"N\xb0 Demande SGE"),n.a.createElement("th",null,"N\xb0 partenaire"),n.a.createElement("th",null,"Matricule Compteur"),n.a.createElement("th",null,"Nombre de cadran"),n.a.createElement("th",null,"1er index"),n.a.createElement("th",null,"2e index"),n.a.createElement("th",null,"3e index"),n.a.createElement("th",null,"4e index"),n.a.createElement("th",null,"5e index"),n.a.createElement("th",null,"6e index"),n.a.createElement("th",null,"Type de relev\xe9"),n.a.createElement("th",null,"Puissance Souscrite"),n.a.createElement("th",null,"Type Compteur")),t.map((e,t)=>n.a.createElement("tr",{key:t},e.map((e,t)=>n.a.createElement("td",{key:t},e))))))},{data:l}))};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)))},3:function(e,t,l){e.exports=l(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.52da4a53.chunk.js.map