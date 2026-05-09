const imageUpload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");

imageUpload.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {

            preview.innerHTML = `
                <img src="${e.target.result}" width="300">
            `;

        };

        reader.readAsDataURL(file);

    }

});
