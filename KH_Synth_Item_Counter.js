function openContent(evt, game, nested) {
  var i, tabcontent, tablinks;

  if (Boolean(nested)) {
  } else {
    var nestedTabs = document.getElementsByClassName("nestedTab");
    for (i = 0; i < nestedTabs.length; i++) {
      nestedTabs[i].style.display = "none";
    }
  }

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(game).style.display = "block";
  evt.currentTarget.className += " active";
}
function modify_qty(val, name) {
    var qty = document.getElementById(name).value;
    var new_qty = parseInt(qty,10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById(name).value = new_qty;
    return new_qty;
}
function changeBGImage(boss) {
  switch (boss) {
    case "KHI":
      document.body.style.backgroundColor = "#f3f3f3";
      document.body.style.backgroundImage = "url('file:///C:/Users/Amelia/Documents/Websites/KH_Synth_Item_Counter/KHI.jpg')";
      document.body.style.background;
      break;
    case "KHII":
      document.body.style.backgroundColor = "#f3f3f3";
      document.body.style.backgroundImage = "url('file:///C:/Users/Amelia/Documents/Websites/KH_Synth_Item_Counter/KHII.jpg')";
      document.body.style.background;
      break;
    default:
      document.body.style.backgroundColor = "#000000";
      document.body.style.backgroundImage = "url('')";
      document.body.style.background;
      break;
  }
}
