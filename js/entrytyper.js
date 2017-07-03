function typing(string, id, time) {

  var text1 = string;
  console.log(text1)
  var  i=0;
  console.log(text1[2]);

  function type() {

    if(i < text1.length+5) {

      id.append(text1[i]);
      i = i+1;

      if( i == text1.length+4) {

        $('#typi').html(' ');
        i = 0

      }

    };

  };

  var timer = setInterval(type, time);

}

$(document).ready( function() {

  typing("NAVEEN MANIKANTA KODIGUDLA", $('#typi'), 210); 

});