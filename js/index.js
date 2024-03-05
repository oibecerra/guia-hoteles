$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 3000
    });

    $('#contacto').on('show.bs.modal', function (e){
    console.log('show');
        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);
    });
     $('#contacto').on('shown.bs.modal', function (e){
        console.log('shown');
        });

    $('#contacto').on('hide.bs.modal', function (e){
        console.log('hide');
    });

    $('#contacto').on('hidden.bs.modal', function (e){
    console.log('hidden');
        $('#contactoBtn').removeClass('btn-primary');
        $('#contactoBtn').addClass('btn-outline-success');
        $('#contactoBtn').prop('disabled', false);
    });
});