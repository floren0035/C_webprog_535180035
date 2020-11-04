$('#search').keyup(function() {
    var searchField=$('#search').val();
    var myExp = new RegExp(searchField, "i");
    $.getJSON('data.json', function(data) {
        console.log(searchField);
        
        if ($('#search').val().length === 0){
            $('#update').empty();
        }else{
            var output = '<div class="searchresults">';
            $.each(data, function(key,val){
                if ((val.Judul.search(myExp) !=-1) || (val.Author.search(myExp) !=-1) 
                    || (val.Tahun.search(myExp) !=-1) || (val.ISBN.search(myExp) !=-1)){
                    output += '<div class="card"> <div class="cover">';
                    output += '<img src="img/' + val.cover + '" class="imgstyle">';
                    output += '</div> <div class="desc my-auto">';
                    output += '<h4>' + val.Judul + '</h4>';
                    output += '<p>Author : ' + val.Author + 
                                '<br>Tahun : ' + val.Tahun +
                                '<br>ISBN : ' + val.ISBN +
                                '<br>Lokasi : ' + val.Lokasi +
                                '<br>Stok : ' + val.Stok + '</p>';
                    output += '</div> </div>';
                }
            });
            output += '</div>';
            $('#update').html(output);
        }
    });
});