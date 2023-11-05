let a;
let b;
let abuffer;
let bbuffer;

let a1;
let b1;
let kotae;
let KoubaisuSwith = 0;
let kotaebuffer = [];
function nemui(a, b) {//下の関数のもとになったもの　ユークリッドの控除法で求めています。
    if (a >= b) {
        a1 = a;
        b1 = b;
    }
    else {
        a1 = b;
        b1 = a;
    }
    console.log(a);
    while (0 !== a1 % b1) {//0のときはここをスキップしてそのまま小さい方の数字を出す
        kotae = a1 % b1;
        if (0 == kotae) {

            break;
        }
        a1 = b1;
        b1 = kotae;
    }
    if (b1 < 0) {//マイナスだったとき用
        b1 = b1 * -1n;
    }
    kotaebuffer[keisancount] = b1;
    keisancount += 1;
    return (b1);
}
let data = {}
function keisan() {
    let keisan_buffer = [];
    if (kotaebuffer.length > 1) {//数字が一つだけならここで弾く
        while (kotaebuffer.length > 1) {//数字が一つになったら終わらせる
                if (kotaebuffer.length == 1) {
                    break;
                }
                if (KoubaisuSwith == 1) {
                    data.Koubaisu = kotaebuffer;//公倍数を求めるときに一回公倍数を求めたあと求めた数で公約数を計算するため
                }

                keisan_buffer[0] = Math.max(kotaebuffer[0],kotaebuffer[1])
                keisan_buffer[1] = Math.min(kotaebuffer[0],kotaebuffer[1])
                while (true) {//最初から割り切れるならここをスキップして小さい方の数字をそのまま出す
                    keisan_buffer[2] = keisan_buffer[0] % keisan_buffer[1];
                    console.log(keisan_buffer[2]);
                    if (0 == keisan_buffer[2]) {//求め終わったら止めるよう
                        break;
                    }
                    keisan_buffer[0] = keisan_buffer[1];
                    keisan_buffer[1] = keisan_buffer[2];
                }
                if (keisan_buffer[1] < 0) {
                    keisan_buffer[1] = keisan_buffer[1] * -1n;
                }
                    kotaebuffer[0] = keisan_buffer[1];
                    kotaebuffer.splice(1, 1);//求め終わった数を消すよう
                console.log(kotaebuffer);
            
        }
        if (KoubaisuSwith == 1) {
            return Keisan_Koubaisu(data.Koubaisu,keisan_buffer[1])
        }
        else {
            return (keisan_buffer[1]);
        }
    }
    else {
        return ("");
    }
}
const Keisan_Koubaisu = (data_buffer,koyakusu) => {
    let answer = 1
    data_buffer.forEach(element => {
        answer = answer * (element / koyakusu)
    });
    return answer
}

function Buuton() {
    for (let i = 0; i < nyuuryokuran; i++) {
        if (document.getElementById('ran' + (i + 1)).value !== "") {//何も入力されてなかったら飛ばす
            kotaebuffer[i] = document.getElementById('ran' + (i + 1)).value;
        }
    }
    kotaebuffer = kotaebuffer.map(Number)
    console.log(kotaebuffer);
    if (KoubaisuSwith == 1) {
        Koubaisu = kotaebuffer;
    }
    document.getElementById('ban').value = keisan();
}
function change() {//公倍数モードと公約数モードの切替
    if (KoubaisuSwith == 0) {
        KoubaisuSwith = 1;
        document.getElementById("center").innerHTML = "最小公倍数を求めたい数を入れると出てきます";
        document.getElementById("botan").innerHTML = "公約数モード";
    }
    else {
        KoubaisuSwith = 0;
        document.getElementById("center").innerHTML = "最大公約数を求めたい数を入れると出てきます";
        document.getElementById("botan").innerHTML = "公倍数モード";
    }
}


let nyuuryokuran = 2;
function kazuhuyasu() {//入力欄増やすよう
    nyuuryokuran = nyuuryokuran + 1;
    let newDiv = document.createElement('div');
    // newDiv.id = "ban222";
    newDiv.id = "sotowaku" + nyuuryokuran;
    newDiv.innerHTML = `
<div style="display: flex;">
    <span style="font-size: x-large;">` + nyuuryokuran + `:</span>
        <input type="number" name="ran` + nyuuryokuran + `" id="ran` + nyuuryokuran + `" step="1" placeholder="求めたい数">
        <div class="error">数字以外もしくは全角で入力しています</div>
        <div>
            <button style="padding-right: 20px !important;padding-left: 20px !important;" onclick="remove(` + nyuuryokuran +`);">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width:10px"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                </svg>
            </button>
        </div>
</div><br>`;



    // DOM に新しく作られた要素とその内容を追加します
    const currentDiv = document.getElementById("textbox");
    let child = currentDiv.appendChild(newDiv);
}
function reset() {//入力されてるのを全部消すよう
    for (let i = 0; i < nyuuryokuran; i++) {
        document.getElementById("ran" + (i + 1)).value = "";

    }
    document.getElementById("ban").value="";
}
const remove = (ak) => {
    let removeBuffer = [];
    var j = 0;
    for(let i = ak + 1; i <= nyuuryokuran; i++){
       removeBuffer[j] = document.getElementById('ran'+ i).value;
       j++;
       console.log(removeBuffer);
    }
    document.getElementById("sotowaku" + nyuuryokuran).remove();
    nyuuryokuran -= 1;
    j = 0;
    for(let i = ak; i <= nyuuryokuran; i++){
        console.log(removeBuffer);
        document.getElementById('ran' + i).value = removeBuffer[j];
        j++;

    }
}
