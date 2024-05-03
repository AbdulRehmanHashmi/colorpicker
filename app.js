var colorpicker = document.getElementById('colorpicker')
var color =document.getElementById('color')
var body = document.getElementById('body')

colorpicker.addEventListener('input', function(){
    var colorpicker1 = colorpicker.value
    color.textContent = colorpicker1
    body.style.backgroundColor = color.textContent
})