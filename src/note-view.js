function Render() {

}

Render.prototype.basic = function () {
  return [
    "<h1>Notes</h1>",
    "<textarea id='textarea' name='textarea' rows='8' cols='80'></textarea>",
    "<br/>",
    "<button type='submit' name='button' id='submit'>Submit</button>",
    "<div id='notes'></div>"

  ].join("")

};

Render.prototype.renderNote = function () {
  var output = ""
  for(var i = 0; i < notelist.list.length; i++){
    output += "<p>" + notelist.list[i].text + "</p>"
  }
  return output;
};
