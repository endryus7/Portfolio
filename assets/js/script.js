const button = document.getElementById("theme-toggle")
const icon = document.getElementById("theme-icon")

button.addEventListener("click", () => {

  document.body.classList.toggle("dark")

  if(document.body.classList.contains("dark")){
    icon.textContent = "light_mode"
    localStorage.setItem("theme","dark")
  }else{
    icon.textContent = "dark_mode"
    localStorage.setItem("theme","light")
  }

})

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark")
  icon.textContent = "light_mode"
}