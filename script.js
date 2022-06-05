$('#btn-film').on('click', function () {
  searchFilm();
});

function searchFilm() {
  $('#movie-list').html('');
  $.ajax({
    url: 'https://www.omdbapi.com/',
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
            <div class="col-md-2 mb-4">
              <div class="card h-100" >
                <img src="` +
              data.Poster +
              `" class="card-img-top">
                <div class="card-body">
                  <h5 class="">` +
              data.Title +
              `</h5>
              <p>` +
              data.Year +
              `</p>
                  <a href="#" class="detail" data-id="` +
              data.imdbID +
              `" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</a>
                </div>
              </div>
            </div>
          `
          );
          $('#input-film').val('');
        });
      } else {
        $('#movie-list').html('<h1 class="text-center">Movie Not Found</h1>');
      }
    },
  });
}

$('#movie-list').on('click', '.detail', function () {
  $.ajax({
    url: 'https://omdbapi.com',
    type: 'get',
    dataType: 'json',
    data: {
      apikey: 'b0701d06',
      i: $(this).data('id'),
    },
    success: function (movie) {
      if (movie.Response === 'True') {
        $('.modal-body').html(
          `
          <div class="container-fluid">
            <div class="row">
              <div class="col-6">
                <img src="` +
            movie.Poster +
            `" class="img-fluid">
              </div>
                      <div class="col-6">
                      <ul class="list-group">
                        <li class="list-group-item"><h5>` +
            movie.Title +
            `</h5></li>
                        <li class="list-group-item">Released : ` +
            movie.Released +
            `</li>
                        <li class="list-group-item">Duration : ` +
            movie.Runtime +
            `</li>
                        <li class="list-group-item">Genre : ` +
            movie.Genre +
            `</li>
                        <li class="list-group-item">Director : ` +
            movie.Director +
            `</li>
            <li class="list-group-item">Actors : ` +
            movie.Actors +
            `</li>
                        <li class="list-group-item">Synopsis : ` +
            movie.Plot +
            `</li>
                        
                      </ul>
              </div>
            </div>
          </div>
        `
        );
      }
    },
  });
});

function modalHeader() {
  $('.modal-title').html(
    `
    <div>
      ` +
      movie.Tittle +
      `
    </div>
  `
  );
}
