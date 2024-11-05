const radius = document.getElementById("radius");
const volume = document.getElementById("volume");
const submit = document.getElementById("submit");


submit.addEventListener('click', ()=>{
    volume_sphere();
})

function volume_sphere() {
    // Write your code here
    if(isNaN(radius)){
        volume.value = "NaN";
        return;
    }
    const radius = parseInt(radius);
    const v = ((4/3)*Math.PI*radius*radius*radius);
    volume.value = v.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
