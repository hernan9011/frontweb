function changeContent(num) {
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  document.getElementById("section" + num).classList.add("active");
  text(num);
}


function text(id){
    const miArray = ["", "Perfil","Mensajes","Maches" , "Citas"];
    const liking = document.getElementById('text-bar');
    liking.innerHTML = "";
    liking.textContent = miArray[id];
}