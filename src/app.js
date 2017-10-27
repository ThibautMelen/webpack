import compress from './compress';
$(function() {
    let url = "target.html";

    $.get(url, function(page) {
      let initial_length = page.length;
      console.log(`${initial_length / 1024} ko`);

      //opti
      let newPage = compress(page);
      console.log(newPage);

      let optimized_length = newPage.length;
      console.log(`${optimized_length / 1024} ko`);

      let reduction = 1 - optimized_length / initial_length;
      console.log(`Réduction : ${reduction * 100} %`);

      $("body").html(newPage);
    });
  });
