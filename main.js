function each (array,func){
  for (var i = 0; i< array.length; i++){
      func(array[i])
  }
}

function filter(array, predicate) {
  var arr = []
  each (array,function(element){
      if (predicate(element)){
          arr.push(element)
      }
  })
  return arr
}

function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}
var id = generateID();
function makeDetails(brand,playerName,team,images,price){
  var currentIndex=0
function getDetails(){
$("#client").append(`<h2>${shirt1.brand}</h2>`)
$("#client").append(`<h2>${shirt1.playerName}</h2>`)
$("#client").append(`<h2>${shirt1.team}</h2>`)
$("#client").append(`<h2>Price on $:${shirt1.price}</h2>`)
}
function getDetails1(){
  $("#client1").append(`<h2>${shirt2.brand}</h2>`)
  $("#client1").append(`<h2>${shirt2.playerName}</h2>`)
  $("#client1").append(`<h2>${shirt2.team}</h2>`)
  $("#client1").append(`<h2>Price on $:${shirt2.price}</h2>`)
  }
  function getDetails2(){
    $("#client2").append(`<h2>${shirt3.brand}</h2>`)
    $("#client2").append(`<h2>${shirt3.playerName}</h2>`)
    $("#client2").append(`<h2>${shirt3.team}</h2>`)
    $("#client2").append(`<h2>Price on $:${shirt3.price}</h2>`)
    }  
  return{
      id:id(),
      brand:brand,
      playerName:playerName,
      team:team,
      images:images,
      price:price,
      getDetails,
      getDetails1,
      getDetails2


  }
}
var shirt1=makeDetails("Nike","Gavi","FC Barcelona",["https://y.yarn.co/d8b851b8-fca3-48fc-be1e-1078d9fe7373_text.gif","https://media.foot-store.fr/catalog/product/cache/image/573x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_dx2687-456-gavi_1.jpg","https://media.foot-store.fr/catalog/product/cache/image/573x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_dx2686-101-joaofelix.jpg"],150)
var shirt2=makeDetails("Nike","Joao Felix","FC Barcelona",["https://y.yarn.co/d8b851b8-fca3-48fc-be1e-1078d9fe7373_text.gif","https://media.foot-store.fr/catalog/product/cache/image/573x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_dx2687-456-gavi_1.jpg","https://media.foot-store.fr/catalog/product/cache/image/573x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_dx2686-101-joaofelix.jpg"],120)
var shirt3=makeDetails("Nike","Mbappe","psg",["https://y.yarn.co/d8b851b8-fca3-48fc-be1e-1078d9fe7373_text.gif","https://media.foot-store.fr/catalog/product/cache/image/573x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_dx2687-456-gavi_1.jpg","https://media.foot-store.fr/catalog/product/cache/image/573x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_dx2686-101-joaofelix.jpg","https://media.foot-store.fr/catalog/product/cache/image/573x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_dx2694-411-mpabbe_1.jpg"],114)
console.log(shirt1)
$("title").text('Football shirts')
$("#first").text("Hello User ")
$("#client").append( `<img id='img1' src="${shirt1.images[1]}">`)
$("#img1").css({"width":"20%"})
$("#img1").on('click',shirt1.getDetails)
$("#client1").append( `<img id='img2' src="${shirt2.images[2]}">`)
$("#img2").css({"width":"20%"})
$("#img2").on('click',shirt2.getDetails1)
$("#client2").append( `<img id='img3' src="${shirt3.images[3]}">`)
$("#img3").css({"width":"20%"})
$("#img3").on('click',shirt3.getDetails2)





