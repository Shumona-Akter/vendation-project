const modalAllBtn = () =>{
    const allBtnModal = document.getElementById('all-btn-modal');
    allBtnModal.classList.toggle("d-none");
}

document.getElementById('close-btn').addEventListener('click', function(){
    const allBtnModal = document.getElementById('all-btn-modal');
    allBtnModal.classList.add("d-none");
})

document.getElementById('submit').addEventListener('click', function(){
    window.location.href = "success.html"
});



