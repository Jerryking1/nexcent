function loginFunction(){
    document.getElementById('signin').addEventListener("click", ()=>{
        window.location.href = "./login.html"
        loginFunction()
    })
}
loginFunction()