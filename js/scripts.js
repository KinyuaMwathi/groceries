$(document).ready(function() {
  $("form#groceriesForm").submit(function(event) {
    event.preventDefault();
    const fruits = $("select#selectFruits").val();
    const meat = $("select#selectMeat").val();
    const dairyProducts = $("select#selectDairyProducts").val();
    const bakeryGoods = $("select#selectBakeryGoods").val();
    const juice = $("select#selectJuice").val();

    const array = [fruits, meat, dairyProducts, bakeryGoods, juice];
    let sortedGroceries = [];
    sortedGroceries = array.sort();
    sortedGroceries= sortedGroceries.map(function(x) {
      return x.toUpperCase();
    });

    $("#groceriesOutput").text(sortedGroceries) + '<br>';

    $("#hidden").show();
  });
});