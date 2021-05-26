$(document).ready(function() {

    
    $('#btn-to-registration').click(function (e) {
        e.preventDefault();

        $('.login').addClass('d-none');
        $('.login input').removeAttr('required');
        $('.registration input').attr('required', '');

        $('.registration').removeClass('d-none');
        checkPasswordValidity();
    });
    
    $('#btn-to-login').click(function (e) {
        e.preventDefault();
        
        $('.login').removeClass('d-none');
        $('.registration').addClass('d-none');
        $('.registration input').removeAttr('required');

        $('input[type="password"]').removeClass('is-invalid');
    });

    $('#go-login').click(function(e) {
        $('#login').val() === 'admin' && 
        $('#password').val() === 'admin' ||
        e.preventDefault();
    })
    
    $('#password').keyup(function(e){
        if (!$(this).val() || $('#password-confirmation').val())
            checkPasswordValidity();
    });

    $('#password-confirmation').keyup(function(e){
        checkPasswordValidity();
    });

    function checkPasswordValidity() {
        if($('#password-confirmation').parent().hasClass('d-none')) {
            $('input[type="password"]').removeClass('is-invalid');
            return true;
        };

        let passwordValue = $('#password').val();
        let confirmPasswordValue = $('#password-confirmation').val();
        
        if (passwordValue !== confirmPasswordValue) {
            $('input[type="password"]').addClass('is-invalid');
        }
        else{
            $('input[type="password"]').removeClass('is-invalid');            
        }          
        
        return passwordValue === confirmPasswordValue;
    }


});