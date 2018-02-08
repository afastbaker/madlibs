$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var countryInput = $("input#country").val();
    var adverb1Input = $("input#adverb1").val();
    var adjectiveInput = $("input#adjective").val();
    var animalInput = $("input#animal").val();
    var verbInput = $("input#verb").val();
    var adverb2Input = $("input#adverb2").val();

    $(".country").text(countryInput);
    $(".adverb1").text(adverb1Input);
    $(".adjective").text(adjectiveInput);
    $(".animal").text(animalInput);
    $(".verb").text(verbInput);
    $(".adverb2").text(adverb2Input);

    $("#story").show();

    event.preventDefault();
  });
});
