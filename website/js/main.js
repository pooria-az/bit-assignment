var endpoint = 'https://newsapi.org/v1/articles?source=the-economist&sortBy=latest&apiKey=dc4ac6237d1c4033953786fd575b6254';

$('body').ready(function() {
  $.get(endpoint, function(data) {
    if (data.status !== 'ok' || !data.articles) {
      return;
    }
    data.articles.slice(0, 2).forEach(function(article) {
      $('#news1-row').append(`<a class="news-title" target="_blank" href="${article.url}" >${article.title}</a><p class="news-text">${article.description || ''}</p>`);
    });

    data.articles.slice(2, 4).forEach(function(article) {
      $('#news2-row').append(`<a class="news-title" target="_blank" href="${article.url}" >${article.title}</a><p class="news-text">${article.description || ''}</p>`);
    })

    data.articles.slice(4, 6).forEach(function(article) {
      $('#news3-row').append(`<a class="news-title" target="_blank" href="${article.url}" >${article.title}</a><p class="news-text">${article.description || ''}</p>`);
    })
    
  });
});
