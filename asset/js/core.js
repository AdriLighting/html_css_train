function load_articles() {
  $(document).ready(function () {
    for (let index = 0; index < 8; index++) {
      var c2 = $('#article_0').clone();
      c2.attr('id', 'article_' + (index + 1));        // modifiy dom attribut
      c2.attr('title', 'article_' + (index + 1));
      c2.attr('name', 'article_' + (index + 1));
      c2.find('h2').html('article ' + (index + 2));   // modify h2 > html (value)
      c2.appendTo('#section_articles');
    }
  });
}

function set_link() {
  var z, i, elmnt, file;

  z = document.getElementsByTagName("*");

  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("link-position");

    if(file){
      let split = file.split(" ");

      document.getElementById(elmnt.id).addEventListener("click", () => {
          let pos = document.getElementById(split[0]).offsetTop;
          
          window.scroll({
            top: pos - split[1] ,
            left: 0,
            behavior: 'smooth'
          })

          const sidebar = document.querySelector('#sidebar_left');  
          console.log(sidebar.classList.contains("sidebar-left-active")); 
          if (!sidebar.classList.contains("sidebar-left-active"))  {
            sidebar_toggle();
          }  
                 
        });
      
        elmnt.removeAttribute("link-position");
      
    }
  }
}

function reportWindowSize() {
  document.getElementById("height").innerHTML = window.innerHeight;
  document.getElementById("width").innerHTML = window.innerWidth;
  if (window.innerWidth < 810) {
    const sidebar = document.querySelector('#sidebar_left');  
    if (!sidebar.classList.contains("sidebar-left-active"))  {
      sidebar_toggle();
    }      
  }
}

function sidebar_toggle() {
  const sidebar = document.querySelector('#sidebar_left');  
  if (window.innerWidth < 810) sidebar.classList.toggle("sidebar-left-active");
}


window.onresize = reportWindowSize;





function httpGetAsync(theUrl, callback)
{


          // var xhr = new XMLHttpRequest();
          // xhr.open("GET", theUrl, true);
          // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
          // xhr.setRequestHeader('Content-Type', 'application/json');
          // xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          // xhr.send("");
          // xhr.onload = function() {
          //   console.log("HELLO")
          //   callback(this.responseText);

          // }
          $.ajax({
            url: theUrl,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
            },
            type: "GET", /* or type:"GET" or type:"PUT" */
            dataType: "json",
            data: {
            },
            success: function (result) {
                console.log(result);
            },
            error: function () {
                console.log("error");
            }
        });
      }

/*
async function myDisplay() {
  return new Promise( async function(resolve, reject) {
    var array = [];
    array.push(0);
    array.push(1);
    array.push(2);
    resolve({result : "promise succes", array}); 
  })	
}

let x_connect = function connect(data) { 
  var json = {};
  json.data = "data";
  json.value = "value";
  // result = (true, json);
  data( true, json, "3" );
}

console.log("DEB");
x_connect ( function(err, data, last) {
  console.log("err", err);
  console.log("data", data);
  console.log("last", last);
} )
console.log("FIN\n");
console.log("DEB");
var array = [];
array.push(0);
array.push(1);
array.push(2);
var json = {};
json.data = "data";
json.data2 = "data";
json.data3 = "data";
json.array = array;
jsonP = JSON.stringify(json);
console.log("jsonP", jsonP);
for (const key of  Object.keys(json)) { 
  console.log(key);
  if (json[key].constructor == Array) {
    for (const okey of  Object.entries(json[key])) {console.log(okey);}
  }
}
console.log("FIN\n");
console.log("DEB");
// myDisplay().then(console.log("FIN\n"));
myDisplay().then( 
    function(succes) {
      console.log({return : succes});
      const myJSON = JSON.stringify(succes); 
      const myArr = JSON.parse(myJSON);
      console.log("---\n", myArr.array)
      console.log("---\n", myArr.result)
    } 
  ).catch( 
    (err) => {
      console.log(err);
    } 
  );
console.log("FIN\n");

*/