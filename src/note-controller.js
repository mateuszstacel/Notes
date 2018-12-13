var render = new Render();
var notelist = new NoteList();

window.onload = function() {
  document.getElementById('layout').innerHTML = render.basic();

  document.getElementById('submit').addEventListener('click', function(){
    submitNote();
  })
}

function submitNote(){
  var textinput = document.getElementById('textarea').value;
  notelist.createNote(textinput);
  document.getElementById('notes').innerHTML = render.renderNote();
  document.getElementById('textarea').value = "";
}
