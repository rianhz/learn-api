$('#btn-film').click(function () {
  $('#movie-list').html('');
  $.ajax({
    url: 'http://www.omdbapi.com/',
    dataType: 'json',
    type: 'get',
    data: {
      apikey: 'b0701d06',
      s: $('#input-film').val(),
    },
    success: function (res) {
      if (res.Response == 'True') {
        let movies = res.Search;
        $.each(movies, function (i, data) {
          $('#movie-list').append(
            `
            <div class="col-md-4 mb-4">
              <div class="card" >
                <img src="` +
              data.Poster +
              `" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          `
          );
        });

        $('input-film') = ''
      } else {
        $('#movie-list').html('<h1 class="text-center">Movie Not Found</h1>');
      }
    },
  });
});

