$('#AddButton').click(function() {

    var input = $('#TextBox');
    input.val(Number(input.val()) + 1);
})



$('#reagain').click(function() {
    $('#TextBox').val(0)
})


// $("select").each(function() {
//     alert(this.options[this.selectedIndex].value);
// });

// var mohsen = $("#selectDhikr").options.item(0).text;
// console.log(mohsen);
function changeDhikr(){
    var selectDhikr = document.getElementById('selectDhikr');
    var option = selectDhikr.options[selectDhikr.selectedIndex];
    document.getElementById('AddButton').innerHTML = option.value;
}
// changeDhikr();