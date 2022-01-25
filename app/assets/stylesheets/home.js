// HTML読み込み直後に実行される
// document.addEventListener("DOMContentLoaded", get_diff_arrays );

const get_diff_arrays = function(){

    return new Promise(function(resolve, reject){

        var diff_arrays = [];

        for(var i = 9; i <= 19; i++){

            var tmp_array = null;
            var url = "/json/" + i + ".json";
            $.ajaxSetup({ async: false });
            $.getJSON(url, function(data){
                tmp_array = [...Array(data.length)].map((v, i)=> i + 1);
                // console.log(url);
                // console.log(tmp_array);
            });

            diff_arrays.push(tmp_array);

        }

        // console.log(diff_arrays);
        resolve(diff_arrays);

    });

}


function search_song_array(){

    // global
    alert_text = "";

    get_diff_arrays().then(_1st).then(_2nd).then(_3rd).then(_ex);

    if(alert_text != ""){
        // alert(alert_text);
    }

}


const _1st = function(diff_arrays){

    // alert(diff_arrays);

    return new Promise(function(resolve, reject){

        // 1曲目
        var song_index;
        var diff = document.getElementById('1st').value;
        if(diff == false){
            document.getElementById("1stError").innerText = "";
            document.getElementById("pic1").innerText = "[1曲目]";
        }else if(diff < 9 || diff > 19){
            // alert_text += "1曲目 : 9以上19以内で入力してください。\n";
            document.getElementById("1stError").innerText = "9~19の範囲で入力してください。";
        }else{
            document.getElementById("1stError").innerText = "";
            if(document.getElementById("overlap").checked == true){
                song_index = Math.floor(Math.random() * diff_arrays[diff - 9].length);
            }else{
                var rand_num = Math.floor(Math.random() * diff_arrays[diff - 9].length);
                song_index = diff_arrays[diff - 9].splice(rand_num, 1) - 1; 
                // alert(song_index);
            }
            var url = "/json/" + diff + ".json";
            $.ajaxSetup({ async: false });
            $.getJSON(url, function(data){
                document.getElementById("pic1").innerText = data[song_index]["曲名"];
            });
        }
        // console.log("1st");
        // alert(diff_arrays[diff - 9]);
        resolve(diff_arrays);
        
    });
}


const _2nd = function(diff_arrays){

    return new Promise(function(resolve, reject){

        // 2曲目
        var diff = document.getElementById('2nd').value;
        if(diff == false){
            document.getElementById("2ndError").innerText = "";
            document.getElementById("pic2").innerText = "[2曲目]";
        }else if(diff < 9 || diff > 19){
            // alert_text += "2曲目 : 9以上19以内で入力してください。\n";
            document.getElementById("2ndError").innerText = "9~19の範囲で入力してください。";
        }else{
            document.getElementById("2ndError").innerText = "";
            if(document.getElementById("overlap").checked == true){
                song_index = Math.floor(Math.random() * diff_arrays[diff - 9].length);
            }else{
                rand_num = Math.floor(Math.random() * diff_arrays[diff - 9].length);
                song_index = diff_arrays[diff - 9].splice(rand_num, 1) - 1;
                // alert(song_index);
            }
            var url = "/json/" + diff + ".json";
            $.ajaxSetup({ async: false });
            $.getJSON(url, function(data){
                document.getElementById("pic2").innerText = data[song_index]["曲名"];
            });
        }
        // console.log("2nd");
        // alert(diff_arrays[diff - 9]);
        resolve(diff_arrays);
    });
}


const _3rd = function(diff_arrays){

    return new Promise(function(resolve, reject){

    // 3曲目
    var song_index;
        var diff = document.getElementById('3rd').value;
        if(diff == false){
            document.getElementById("3rdError").innerText = "";
            document.getElementById("pic3").innerText = "[3曲目]";
        }else if(diff < 9 || diff > 19){
            // alert_text += "3曲目 : 9以上19以内で入力してください。\n";
            document.getElementById("3rdError").innerText = "9~19の範囲で入力してください。";
        }else{
            document.getElementById("3rdError").innerText = "";
            if(document.getElementById("overlap").checked == true){
                song_index = Math.floor(Math.random() * diff_arrays[diff - 9].length);
            }else{
                var rand_num = Math.floor(Math.random() * diff_arrays[diff - 9].length);
                song_index = diff_arrays[diff - 9].splice(rand_num, 1) - 1;
                // alert(song_index);
            }
            var url = "/json/" + diff + ".json";
            $.ajaxSetup({ async: false });
            $.getJSON(url, function(data){
                document.getElementById("pic3").innerText = data[song_index]["曲名"];
            });
        }
        // console.log("3rd");
        // alert(diff_arrays[diff - 9]);
        resolve(diff_arrays);
    });

}


const _ex = function(diff_arrays){

    return new Promise(function(resolve, reject){

        // EXTRA
        var song_index;
        var diff = document.getElementById('ex').value;
        if(diff == false){
            document.getElementById("exError").innerText = "";
            document.getElementById("pic4").innerText = "[EXTRA]";
        }else if(diff < 9 || diff > 19){
            // alert_text += "EXTRA : 9以上19以内で入力してください。";
            document.getElementById("exError").innerText = "9~19の範囲で入力してください。";
        }else{
            document.getElementById("exError").innerText = "";
            if(document.getElementById("overlap").checked == true){
                song_index = Math.floor(Math.random() * diff_arrays[diff - 9].length);
            }else{
                var rand_num = Math.floor(Math.random() * diff_arrays[diff - 9].length);
                song_index = diff_arrays[diff - 9].splice(rand_num, 1) - 1;
                // alert(song_index);
            }
            var url = "/json/" + diff + ".json";
            $.ajaxSetup({ async: false });
            $.getJSON(url, function(data){
                document.getElementById("pic4").innerText = data[song_index]["曲名"];
            });
        }
        // console.log("ex");
        // alert(diff_arrays[diff - 9]);
        resolve();
    });
}


// 激遅レガシー

/*

function overlap_check(diff, index, already){

    if(already.length == 0){
        return true;
    }else{
        for(var i = 0; i < already.length; i++){
            if(diff == already[i][0] && index == already[i][1]){
                return false;
            }else{
                console.log(already);
                return true;
            }
        }
    }
}

function search_song(){
    
    var already = [];
    var alert_text = "";

    // 1曲目
    var diff = document.getElementById('1st').value;
    if(diff < 9 || diff > 19){
        alert_text += "1曲目 : 9以上19以内で入力してください。\n";
    }else{
        var url = "/json/" + diff + ".json";
        $.getJSON(url, function(data){
            var song_index = Math.floor(Math.random() * data.length);
            already.push([diff, song_index]);
            document.getElementById("pic1").innerText = data[song_index]["曲名"];
        });
    }

    // 2曲目
    var diff = document.getElementById('2nd').value;
    if(diff < 9 || diff > 19){
        alert_text += "2曲目 : 9以上19以内で入力してください。\n";
    }else{
        var url = "/json/" + diff + ".json";

        $.getJSON(url, function(data){
            if(document.getElementById("overlap").checked == true){
                var song_index = Math.floor(Math.random() * data.length);
            }else{
                while(true){
                    var song_index = Math.floor(Math.random() * data.length);
                    if(overlap_check(diff, song_index, already) == true){
                        break;
                    }
                }
            }
            already.push([diff, song_index]);
            document.getElementById("pic2").innerText = data[song_index]["曲名"];
        });
    }

    var diff = document.getElementById('3rd').value;
    if(diff < 9 || diff > 19){
        alert_text += "3曲目 : 9以上19以内で入力してください。\n";
    }else{
        var url = "/json/" + diff + ".json";

        $.getJSON(url, function(data){
            if(document.getElementById("overlap").checked == true){
                var song_index = Math.floor(Math.random() * data.length);
            }else{
                while(true){
                    var song_index = Math.floor(Math.random() * data.length);
                    if(overlap_check(diff, song_index, already) == true){
                        break;
                    }
                }
            }
            already.push([diff, song_index]);
            document.getElementById("pic3").innerText = data[song_index]["曲名"];
        });
    }

    var diff = document.getElementById('ex').value;
    if(diff < 9 || diff > 19){
        alert_text += "EXTRA : 9以上19以内で入力してください。";
    }else{
        var url = "/json/" + diff + ".json";

        $.getJSON(url, function(data){
            if(document.getElementById("overlap").checked == true){
                var song_index = Math.floor(Math.random() * data.length);
            }else{
                while(true){
                    var song_index = Math.floor(Math.random() * data.length);
                    if(overlap_check(diff, song_index, already) == true){
                        break;
                    }
                }
            }
            document.getElementById("pic4").innerText = data[song_index]["曲名"];
        });
    }

    if(alert_text != ""){
        alert(alert_text);
    }



}

*/


// これだとうまくいかない...なぜだ...

/*function get_nums() {

    var difficulties = [];
    var alert_text = "";

    var diff = document.getElementById('1st').value;
    if(diff < 1 || diff > 19){
        alert_text += "1曲目 : 1以上19以内で入力してください。\n";
    }
    difficulties.push(diff);

    var diff = document.getElementById('2nd').value;
    if(diff < 1 || diff > 19){
        alert_text += "2曲目 : 1以上19以内で入力してください。\n";
    }
    difficulties.push(diff);

    var diff = document.getElementById('3rd').value;
    if(diff < 1 || diff > 19){
        alert_text += "3曲目 : 1以上19以内で入力してください。\n";
    }
    difficulties.push(diff);

    var diff = document.getElementById('ex').value;
    if(diff < 1 || diff > 19){
        alert_text += "EXTRA : 1以上19以内で入力してください。";
    }
    difficulties.push(diff);

    if(alert_text != ""){
        alert(alert_text);
    }else{
        alert(difficulties)
    }

    return difficulties;

}


function search_song(){

    var difficulties = get_nums();
    console.log(difficulties, difficulties.length);


    for(var i = 0; i < 4; i++){

        var url = "/json/" + difficulties[i] + ".json";

        $.getJSON(url, function(data){
            var song_index = Math.floor(Math.random() * data.length);
            var id = `pic${i}`;
            console.log(id);
            document.getElementById(id).innerText = data[song_index]["曲名"];
        });

    }
    
}

*/