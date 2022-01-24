function search_song_array(){

    var url = "";
    var diff_arrays = [];

    for(var i = 9; i <= 19; i++){
        url = "/json/" + i + ".json";
        console.log(url);
        $.getJSON(url, function(data){
            var tmp_array = [Array(data.length).keys()];
            console.log(tmp_array);
            diff_arrays.push(tmp_array);
        });
    }

    console.log(diff_arrays);

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


function overlap_check(diff, index, already){

    for(var i = 0; i < already.length; i++){
        if(diff == already[i][0] && index == already[i][1]){
            return false;
        }else{
            console.log(already);
            return true;
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