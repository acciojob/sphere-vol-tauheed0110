const radius = document.getElementById("radius");
const volume = document.getElementById("volume");
const submit = document.getElementById("submit");

submit.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission and page reload
    volume_sphere();    // Call the function to calculate the volume
});

function volume_sphere() {
    // Check if radius is a valid number
    if (isNaN(radius.value)) {
        volume.value = "NaN";
    } else {
        const r = parseFloat(radius.value); // Convert radius value to a float
        volume.value = ((4 / 3) * Math.PI * r * r * r).toFixed(4); // Calculate volume and round it
    }
}

// This will trigger the function on form submit if you need it
window.onload = () => {
    document.getElementById('MyForm').onsubmit = (e) => {
        e.preventDefault(); // Prevent the form from submitting
        volume_sphere();    // Call the volume calculation function
    };
};
