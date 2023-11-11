const arrowButton = document.getElementById('float');

window.onscroll=function() {myFunction()};

function myFunction(){
if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    document.getElementById("float").classList.add("hide-btn");
    arrowButton.classList.remove('hide-btn')
} else {
    document.getElementById("float").classList.remove("hide-btn");
    arrowButton.classList.add('hide-btn');
}
};