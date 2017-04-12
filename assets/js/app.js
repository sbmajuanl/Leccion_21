  var contenedor=document.getElementById("contenedor");
  for (var i = 1; i <= 12; i++) {
  var div=document.createElement("div");
  var img=document.createElement("img");
  var titulo=document.createElement("titulo");
  div.setAttribute("class","conten-images");
  img.setAttribute("class","work_img");
  img.setAttribute("width","320px");
  img.setAttribute("onclick","onClick(this)")
  img.setAttribute("src","assets/img/img-"+i+".jpg");
  titulo.setAttribute("class","titulo");
  titulo.innerHTML="Nombre del proyecto";
  div.appendChild(img);
  div.appendChild(titulo);
  contenedor.appendChild(div);
  }

  function onClick(element) {//Muestra los elementos (imagen)//
    document.getElementById("img_modal").src = element.src;
    document.getElementById("modal").style.display ="block";
  }
  function noonClick() {//Oculta las demas imagenes//
    document.getElementById("modal").style.display ="none";
  }
