var a;
var b;
var a1;
var b1;
var kotae;
function nemui(a, b) {
    if (a >= b) {
        a1 = a;
        b1 = b;
    }
    else {
        a1 = b;
        b1 = a;
    }
    while (0 !== a1 % b1) {
        kotae = a1 % b1;
        if (0 == kotae) {
            break;
        }
        a1 = b1;
        b1 = kotae;
    }
    if (b1 < 0) {
        b1 = b1 * -1n
    }
    return (b1);
}
function Buuton() {
    var IDa = document.getElementById('a')
    document.getElementById('ban').value = nemui(BigInt(document.getElementById('ran1').value), BigInt(document.getElementById('ran2').value));

}
var nyuuryokuran = 2;
function kazuhuyasu() {
    nyuuryokuran = nyuuryokuran + 1;
    var newDiv = document.createElement('div')
    // newDiv.id = "ban222";
    newDiv.innerHTML = `

    <div style="display: flex;"><span style="font-size: x-large;">` + nyuuryokuran +`:</span><input type="number" name="ran` + nyuuryokuran + `" id="ran` + nyuuryokuran + `" step="1" placeholder="求めたい数">
        <div class="error">数字以外もしくは全角で入力しています</div>
    </div><br>
    
    `;
    


    // DOM に新しく作られた要素とその内容を追加します
    const currentDiv = document.getElementById("textbox");
    var child = currentDiv.appendChild(newDiv);
}


var debug = {};

debug.viewAlldata = function(){
    while(true){
        
        if(saisin === null){
            break;
        }
    }
}