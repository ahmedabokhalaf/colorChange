//Add Default Locat Storage Class on Body
document.body.classList.add(localStorage.getItem("pageColor" || "red"));

var element = document.querySelectorAll(".color-switcher li");//كدة انا جبت كل العناصر اللي جوا الكولر سويتشر
var classesList = [];//ده علشان يشيل كل الكلاسات بتاعة الألوان

//Loop on elements
for(var i=0;i<element.length;i++){
    classesList.push(element[i].getAttribute("data-color"));

    element[i].addEventListener("click", function(){
            //Remove All Old Classes
            document.body.classList.remove(...classesList);//ES6 (spread operator)
            //Add Current Class From Li data-color Attribute
            document.body.classList.add(this.getAttribute("data-color"));

            //Add Data to Local Storage For Saving The Style (Like Cookie)
            localStorage.setItem('pageColor', this.getAttribute("data-color"));
        }
    );


}
