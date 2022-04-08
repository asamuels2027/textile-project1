var wholeset = document.getElementById("square");

for (var j = 0; j < 20; j++) {
  
 for (var i = 0; i < 14; i++) {
    var myArray =  ["#ED0003", "#000000", "#000000", "#01FE01", "#08F7FE", "#CE96FB","#FF61BE","#FFFFFF","#000000","#CE96FB","#08F7FE","#000000","#FDFF00","#000000","#000000"];
    var myArray2 = ["#000000", "#FFAD00", "#FDFF00", "#01FE01", "#000000", "#CE96FB","#000000","#FFFFFF","#000000","#000000","#000000","#01FE01","#FDFF00","#FFAD00","#ED0003"];
    var myArray3 = ["#ED0003", "#000000", "#FDFF00", "#000000", "#08F7FE", "#000000","#FF61BE","#000000","#FF61BE","#000000","#000000","#01FE01","#FDFF00","#000000","#ED0003"];
    var myArray4 = ["#000000", "#FFAD00", "#000000", "#000000", "#08F7FE", "#CE96FB","#000000","#FFFFFF","#000000","#000000","#08F7FE","#01FE01","#000000","#000000","#000000"];
    var myArray5 = ["#000000", "#000000", "#000000", "#01FE01", "#000000", "#000000","#000000","#FFFFFF","#FF61BE","#CE96FB","#000000","#000000","#000000","#000000","#ED0003"];
    var myArray6 = ["#ED0003", "#FFAD00", "#FDFF00", "#01FE01", "#000000", "#000000","#FF61BE","#000000","#FF61BE","#CE96FB","#000000","#01FE01","#000000","#FFAD00","#000000"];
    var myArray7 = ["#ED0003", "#000000", "#000000", "#000000", "#08F7FE", "#CE96FB","#000000","#000000","#FF61BE","#000000","#000000","#000000","#FDFF00","#FFAD00","#ED0003"];
    var myArray8 = ["#000000", "#000000", "#FDFF00", "#000000", "#08F7FE", "#000000","#FF61BE","#FFFFFF","#000000","#000000","#08F7FE","#000000","#000000","#FFAD00","#ED0003"];
    var myArray9 = ["#ED0003", "#FFAD00", "#FDFF00", "#01FE01", "#000000", "#CE96FB","#000000","#FFFFFF","#000000","#CE96FB","#08F7FE","#01FE01","#000000","#000000","#000000"];
    var myArray10 =["#ED0003", "#000000", "#000000", "#000000", "#08F7FE", "#000000","#000000","#FFFFFF","#FF61BE","#CE96FB","#000000","#01FE01","#000000","#000000","#000000"];
    var myArray11 =["#000000", "#FFAD00", "#000000", "#01FE01", "#08F7FE", "#000000","#FF61BE","#000000","#000000","#CE96FB","#08F7FE","#000000","#FDFF00","#000000","#000000"];
    var myArray12 =["#ED0003", "#000000", "#000000", "#000000", "#000000", "#CE96FB","#FF61BE","#000000","#FF61BE","#000000","#000000","#01FE01","#000000","#FFAD00","#ED0003"];
    var myArray13 =["#000000", "#FFAD00", "#FDFF00", "#000000", "#08F7FE", "#000000","#000000","#000000","#FF61BE","#000000","#000000","#01FE01","#000000","#FFAD00","#000000"];
    var myArray14 =["#000000", "#FFAD00", "#FDFF00", "#01FE01", "#000000", "#CE96FB","#FF61BE","#FFFFFF","#000000","#000000","#08F7FE","#000000","#FDFF00","#000000","#000000"];
    var myArray15 =["#ED0003", "#000000", "#000000", "#000000", "#08F7FE", "#CE96FB","#000000","#FFFFFF","#FF61BE","#CE96FB","#000000","#000000","#FDFF00","#000000","#ED0003"];
    var myArray16 =["#ED0003", "#000000", "#FDFF00", "#01FE01", "#000000", "#000000","#000000","#000000","#FF61BE","#000000","#000000","#01FE01","#000000","#FFAD00","#000000"];
    var myArray17 =["#000000", "#FFAD00", "#000000", "#000000", "#08F7FE", "#000000","#000000","#FFFFFF","#000000","#000000","#08F7FE","#01FE01","#FDFF00","#FFAD00","#ED0003"];
    var myArray18 =["#ED0003", "#000000", "#FDFF00", "#01FE01", "#000000", "#000000","#FF61BE","#000000","#000000","#CE96FB","#08F7FE","#000000","#FDFF00","#000000","#ED0003"];
   
    let x= 30+(i*26);  
    
    var myModule = `

        <div id="square1"
        style="height:${x}px; background-color: ${myArray[i]}; ">
        </div>
        
        <div id="square2"
          style="height:${x}px; background-color: ${myArray2[i]};">
        </div>
        
        <div id="square3"
          style="height:${x}px; background-color: ${myArray3[i]};">
        </div>
        
         <div id="square4"
        style="height:${x}px; background-color: ${myArray4[i]}; ">
        </div>
        
        <div id="square5"
          style="height:${x}px; background-color: ${myArray5[i]};">
        </div>
        
        <div id="square6"
          style="height:${x}px; background-color: ${myArray6[i]};">
        </div>
        
        <div id="square7"
          style="height:${x}px; background-color: ${myArray7[i]};">
        </div>
        
        <div id="square8"
          style="height:${x}px; background-color: ${myArray8[i]};">
        </div>
        
        <div id="square9"
          style="height:${x}px; background-color: ${myArray9[i]};">
        </div>
        
      <div id="square10"
        style="height:${x}px; background-color: ${myArray10[i]}; ">
        </div>
        
        <div id="square11"
          style="height:${x}px; background-color: ${myArray11[i]};">
        </div>
        
        <div id="square12"
          style="height:${x}px; background-color: ${myArray12[i]};">
        </div>
        
         <div id="square13"
        style="height:${x}px; background-color: ${myArray13[i]}; ">
        </div>
        
        <div id="square14"
          style="height:${x}px; background-color: ${myArray14[i]};">
        </div>
        
        <div id="square15"
          style="height:${x}px; background-color: ${myArray15[i]};">
        </div>
        
        <div id="square16"
          style="height:${x}px; background-color: ${myArray16[i]};">
        </div>
        
        <div id="square17"
          style="height:${x}px; background-color: ${myArray17[i]};">
        </div>
        
        <div id="square18"
          style="height:${x}px; background-color: ${myArray18[i]};">
        </div>
    `;

    wholeset.insertAdjacentHTML("beforeend", myModule);
  }
}
