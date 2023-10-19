let header = document.getElementById("header")
class Color{
    constructor(){
        this.color1 = document.getElementById("color1")
        this.color1.addEventListener("click",()=>{
            this.select_color("color1")
        })
        this.color2 = document.getElementById("color2")
        this.color2.addEventListener("click",()=>{
            this.select_color("color2")
        })
        this.color3 = document.getElementById("color3")
        this.color3.addEventListener("click",()=>{
            this.select_color("color3")
        })
        this.color4 = document.getElementById("color4")
        this.color4.addEventListener("click",()=>{
            this.select_color("color4")
        })
        if(localStorage.getItem("color") == null){
            document.body.style.background = "rgb(152, 65, 233)"
            header.style.background = "rgb(152, 65, 233)"
        }
        this.select_color(localStorage.getItem("color"))
    }
    select_color(color){
        if(color == "color1"){
            header.style.background = "rgb(106, 100, 100)"
            document.body.style.background = "rgb(106, 100, 100)"
        }else if(color == "color2"){
            document.body.style.background = "linear-gradient(to right,#ff9966, #ff5e62)"
            header.style.background = "linear-gradient(to right,#ff9966, #ff5e62)"
        }else if(color == "color3"){
            document.body.style.background = "rgba(246, 184, 25, 0.834)"
            header.style.background = "rgba(246, 184, 25, 0.834)"
        }else if(color == "color4"){
            document.body.style.background = "rgb(152, 65, 233)"
            header.style.background = "rgb(152, 65, 233)"
        }
        localStorage.setItem("color",color)
    }
}
onload = new Color()