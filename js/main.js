var timezone = (new Date()).getTimezoneOffset() * 60000; //offset timezona v milisek, če tega ni, jemlje UK čas
var today = new Date((Date.now() - timezone)).toISOString().slice(0, 10);
document.getElementById("end").min = today;
document.getElementById("start").min = today;

document.getElementById("start").addEventListener("change", function () {
    var input = this.value;
    document.getElementById("end").min = input;
    if (document.getElementById("end").value < document.getElementById("start").value) {
        document.getElementById("end").value = document.getElementById("start").value;
    }
});

fullForm.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Form submitted!',
        text: 'Thanks, '+document.getElementById("fName").value+'! We will contact you within 24 hours!',
        footer: '<a href="https://www.slovenia.info/en" target="_blank" style="color: #575fcf;">In the meantime you can visit the official travel guide to Slovenia</a>',
    }).then((result) => {
            window.location.reload(true);
    });
});
function about(){
    Swal.fire({
        position: 'top',
        title: 'Credits',
        text: 'Made by Kristjan Brataševec, 4.RA',
        icon: 'info',
        showConfirmButton: false,
    })
}