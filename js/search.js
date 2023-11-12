document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const modal = document.getElementById('myModal');
    const closeModalButton = document.getElementById('closeModal');

    var data = [];
    $('.menu-item-post a').each(function(i, elem) {
    const title = $(this).text();
    const link = $(this).attr('href');
    data.push({title, link});
    });
    // console.log(data)
    // $('.search-form button').on('click', function(e) {
    //     e.preventDefault();
    //     let searchValue = $('#searchInput').val();
    //     const item = data.find(item => item.title === searchValue);
    //     // const item = data.find(item => item.title.toLowerCase().includes(searchValue));
    //     console.log(data.length)
    //     $('#searchResults').append('<li><a href="'+item.link+'">'+item.title +'</a></li>')
    //     $('.modal').css('display', 'block')
    // })
    


    // searchForm.addEventListener('submit', function(event) {
    //     event.preventDefault(); // Заборонити стандартну подію відправки форми
    //      const query = searchInput.value.toLowerCase();
    //      const results = performSearch(query, data);
    //      displayResults(results);
    // });

    // closeModalButton.addEventListener('click', function() {
    //     modal.style.display = 'none';
    // });

    // function performSearch(query, data) {
    //     return data.filter(item => item.title.toLowerCase().includes(query));
    // }

    // function displayResults(results) {
    //     searchResults.innerHTML = '';

    //     if (results.length === 0) {
    //         searchResults.innerHTML = 'Немає результатів';
    //     } else {
    //         results.forEach(item => {
    //             const li = $('#searchResults').append('<li><a href="'+item.link+'">'+item.title +'</a></li>')
    //             // const li = document.createElement('li');
    //             // li.textContent = item.title;
    //             // li.link = item.link;
    //             // searchResults.appendChild(li);
    //         });
    //     }

    //     modal.style.display = 'block'; // Відображати модальне вікно
    // }


    $('.search-form button').on('click', function (e) {
        e.preventDefault();
        $('#searchResults').find('li').remove();
        $('.modal').css('display', 'none');
        const searchValue = $('#searchInput').val().toUpperCase();
        for (i = 0; i < data.length; i++) {
            const result = data[i].title.toUpperCase().replace(/\s/g, '');
            if (result.indexOf(searchValue) != -1) {
                $('#searchResults').append('<li><a href="'+data[i].link+'">'+data[i].title+'</a></li>');
                $('.modal').css('display', 'block');
            }
        }
    })
    $('.close').on('click', function(e){
        e.preventDefault();
        $('.modal').css('display', 'none');
    })
});




 