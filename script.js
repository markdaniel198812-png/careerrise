document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            alert("Application submitted successfully.");

        });

    }

});
