let Header = document.createElement("header");
let logo = document.createElement("div");
let logoText = document.createTextNode("Elzero");
let nav = document.createElement("ul");
let content = document.createElement("div");
let footer = document.createElement("footer");
let footerText = document.createTextNode("Copyright 2021");
let ArrNav = ["Home", "About", "Service", "Contact"];



document.body.style.cssText= "margin:0px, background-color: rgb(236, 236,236), font-family: Tahoma,Arial";



logo.appendChild(logoText);
Header.appendChild(logo);

for(i = 0; i < 4 ; i++){
      let listText$i = document.createTextNode(`${ArrNav[i]}`);
       console.log(listText$i);
     let list$i = document.createElement("li");
     console.log(list$i);
    
      list$i.appendChild(listText$i);
      nav.appendChild(list$i);
      console.log(nav);
}

document.body.appendChild(Header);
Header.appendChild(nav);
console.log(Header);
Header.className="website-head";

Header.style.display="flex";

Header.style.justifyContent="space-between";
Header.style.padding="20px";
Header.style.backgroundColor="rgb(255, 255, 255)";
Header.style.alignItems="center";


nav.style.listStyle= "none";
nav.style.margin= "0px";
nav.style.padding= "0px";
nav.style.display= "flex";
nav.style.flexBasis= "200px";
nav.style.justifyContent= "space-between";
logo.style.color= "rgb(35, 169, 110)";
logo.style.fontWeight= "bold";
///////////////////
content.style.display="flex";
content.style.justifyContent="center";
content.style.padding= "20px";
content.style.flexWrap="wrap";
content.style.gap= "20px";
content.style.minHeight="calc(100vh - 142px)";
content.style.boxSizing= "border-box";
content.style.backgroundColor= "rgb(241 241 241)";

for(let k = 0; k < 15 ; k++) {
      let product$k = document.createElement("div");
      let span$k = document.createElement("span");
      let spanText$k = document.createTextNode(`${k+1}`);
      let productText$k = document.createTextNode("Product");
      span$k.appendChild(spanText$k);
    
product$k.appendChild(span$k);
product$k.appendChild(productText$k);
content.appendChild(product$k);
product$k.className= "product";

}
console.log(content);
document.body.appendChild(content);
content.className= "content";

for(let j = 0; j < 15 ;j++){
let myProduct = document.getElementsByClassName("product");
console.log(myProduct);
myProduct[j].style.padding= "20px";
myProduct[j].style.width= "calc((100% - 40px) / 3)";
myProduct[j].style.backgroundColor= "rgb(255, 255, 255)";
myProduct[j].style.textAlign="center";
myProduct[j].style.color= "rgb(136, 136, 136)";
myProduct[j].style.boxSizing= "border-box";
myProduct[j].style.border= "1px solid rgb(221, 221, 221)";
myProduct[j].style.borderRadius= "6px";
let mySpan = document.getElementsByTagName("span");
console.log(mySpan);
mySpan[j].style.fontSize= "40px";
mySpan[j].style.display= "block";
mySpan[j].style.fontWeight="normal";
mySpan[j].style.color= "black";
mySpan[j].style.marginBottom= "10px";
mySpan[j].style.marginTop= "10px";
}
//Footer
footer.appendChild(footerText);
document.body.appendChild(footer);
footer.className= "footer";
footer.style.backgroundColor= "rgb(35, 169, 110)";
footer.style.fontSize= "26px";
footer.style.textAlign="center";
footer.style.padding= "20px";
footer.style.color= "rgb(255, 255, 255)";