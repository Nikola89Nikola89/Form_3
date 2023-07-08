$(document).ready(function(){
    //checkbox
    $.each($('.checkbox'), function(index, val){
        if($(this).find('input').prop('checked') == true){
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.checkbox', function(event){
        if($(this).hasClass('.active')){
            $(this).find('input').prop('checked', false)
        }
        else{
            $(this).find('input').prop('checked', true)
        }
        $(this).toggleClass('active');


        return false
    })
    //radio
    $.each($('.radiobuttons_item'), function(index, val){
        if($(this).find('input').prop('checked') == true){
            $(this).addClass('active');
        }
    })
    $(document).on('click', '.radiobuttons_item', function(event){
        $(this).parents('.radiobuttons').find('.radiobuttons_item').removeClass('active');
        $(this).parents('.radiobuttons').find('.radiobuttons_item input').prop('checked',false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked',true);

        return false
    })
});