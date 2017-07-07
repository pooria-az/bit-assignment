var yahooRSS = 'https://finance.yahoo.com/rss/topstories';

$('body').ready(function() {
  $.get(yahooRSS, function(data) {
    var $xml = $(data);
    $xml.find("item").each(function() {
      var $this = $(this);
      var item = {
        title: $this.find("title").text(),
        link: $this.find("link").text(),
        description: $this.find("description").text(),
        pubDate: $this.find("pubDate").text(),
        author: $this.find("author").text()
      };
      console.log(item);
    });
  });
});