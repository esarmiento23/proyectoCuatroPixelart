var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


let paleta = document.getElementById('paleta');
let grillaPixeles = document.getElementById('grilla-pixeles');



function recorrePaleta() {

  for (var i = 0; i < nombreColores.length; i++) {

    let divPaleta = document.createElement('div');
    divPaleta.className = "color-paleta";
    divPaleta.style.backgroundColor = nombreColores[i];
    paleta.appendChild(divPaleta);
  };
};

recorrePaleta();

function creaGrilla() {

  for (var i = 0; i < 1750; i++) {

    let pixelGrilla = document.createElement('div');
    pixelGrilla.className = "pixelGrilla";
    pixelGrilla.style.border = 'solid black 0.5px';
    grillaPixeles.appendChild(pixelGrilla);
  };
};

creaGrilla();


// cambio indicador color
let $boxColor = $('#indicador-de-color');
$('.color-paleta').click(function(){

  let $colorPaleta = $(this).css('backgroundColor');
  
  $boxColor.css('backgroundColor' , $colorPaleta );
});


//pintar con click

$('.pixelGrilla').click(function(){
  let $pixelAPintar = $('#indicador-de-color').css('backgroundColor');
  $(this).css('backgroundColor', $pixelAPintar);

});




// mouseDown
//mouseup
//mouseMove
//hover
let $clickDown = false;

$('.pixelGrilla').mousedown(function(){
  $clickDown = true;
});
$('.pixelGrilla').mouseup(function(){
  $clickDown = false;
});

$('.pixelGrilla').hover(function(){
  if ($clickDown){
    let $pixelAPintar = $('#indicador-de-color').css('backgroundColor');
  $(this).css('backgroundColor', $pixelAPintar);
  }

});

//borrar

$('#borrar').click(function(){
$('.pixelGrilla').animate({
  'backgroundColor':''},1500);
});

//cargar superheroe


 
 $('#batman').click(function(){
   cargarSuperheroe(batman);
  });
 
  $('#wonder').click(function(){
    cargarSuperheroe(wonder);
   });
 
   $('#flash').click(function(){
    cargarSuperheroe(flash);
   });
 
   $('#invisible').click(function(){
    cargarSuperheroe(invisible);
   });


   //guardar

   $('#guardar').click(function(){
    guardarPixelArt();

   })

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual

    $boxColor.css('backgroundColor' , colorActual );

  })
);
