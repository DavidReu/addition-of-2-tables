$(document).ready(function () {
    var tab1 = [];
    var tab2 = [];
    var tabtotal = [];

    $('#tab1 td').each(function () {
        var a = parseInt($(this).html());
        tab1.push(a);
    })
    console.log(tab1);

    $('#tab2 td').each(function () {
        var a = parseInt($(this).html());
        tab2.push(a);
    })

    function somme(x, y) {
        while (tabtotal.length < x.length) {
            for (var i = 0; i < x.length; i++) {
                tabtotal.push(x[i] + y[i]);
                $('#list-tabtotal').append('<td>' + tabtotal[i] + '</td>');
            }
        }

        //console.log(tabtotal);
    }
    somme(tab1, tab2);

})
