var index_array = [];
var diff_arrays = [];

function get_diff_arrays(){

    var diff_arrays = [];
    var index_array = [];

    for(var i = 9; i <= 19; i++){

        var tmp_array = null;
        var url = "/json/" + i + ".json";

        $.getJSON(url, function(data){
            index_array.push(i);
            tmp_array = [...Array(data.length)].map((v, i)=> i);
            console.log(url);
            // console.log(i);
            console.log(tmp_array);
        });

        diff_arrays.push(tmp_array);

    }

    /// return [index_array, diff_arrays];

}

var alert_text = "";
var already = [];


function search_song_array(){

    _1st().then(_2nd).then(_3rd).then(_ex);

    if(alert_text != ""){
        alert(alert_text);
    }

    index_array = [];
    diff_arrays = [];
    already = [];

}


const _1st = function(){

    return new Promise(function(resolve, reject){

        // 1曲目
        var diff = document.getElementById('1st').value;
        if(diff < 9 || diff > 19){
            alert_text += "1曲目 : 9以上19以内で入力してください。\n";
        }else{
            var url = "/json/" + diff + ".json";
            $.ajaxSetup({ async: false });
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
                document.getElementById("pic1").innerText = data[song_index]["曲名"];
            });
        }
        console.log("1st");
        resolve();
    });
}


const _2nd = function(){

    return new Promise(function(resolve, reject){

        // 2曲目
        var diff = document.getElementById('2nd').value;
        if(diff < 9 || diff > 19){
            alert_text += "2曲目 : 9以上19以内で入力してください。\n";
        }else{
            var url = "/json/" + diff + ".json";
            $.ajaxSetup({ async: false });
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
        console.log("2nd");
        resolve();
    });
}


const _3rd = function(){

    new Promise(function(resolve, reject){

    // 3曲目
        var diff = document.getElementById('3rd').value;
        if(diff < 9 || diff > 19){
            alert_text += "3曲目 : 9以上19以内で入力してください。\n";
        }else{
            var url = "/json/" + diff + ".json";
            $.ajaxSetup({ async: false });
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
        console.log("3rd");
        resolve();
    });

}


const _ex = function(){

    new Promise(function(resolve, reject){

        // EXTRA
        var diff = document.getElementById('ex').value;
        if(diff < 9 || diff > 19){
            alert_text += "EXTRA : 9以上19以内で入力してください。";
        }else{
            var url = "/json/" + diff + ".json";
            $.ajaxSetup({ async: false });
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
                document.getElementById("pic4").innerText = data[song_index]["曲名"];
            });
        }
        console.log("ex");
        resolve();
    });
}


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