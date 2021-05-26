$(document).ready(function() {

    
    $('#btn-to-registration').click(function (e) {
        e.preventDefault();

        $('.login').addClass('d-none');
        $('.registration').removeClass('d-none');
        checkPasswordValidity();
    });
    
    $('#btn-to-login').click(function (e) {
        e.preventDefault();
        
        $('.login').removeClass('d-none');
        $('.registration').addClass('d-none');
        $('input[type="password"]').removeClass('is-invalid');
    });
    
    $('#password').keyup(function(e){
        if (!$(this).val() || $('#password-confirmation').val())
            checkPasswordValidity();
    });

    $('#password-confirmation').keyup(function(e){
        checkPasswordValidity();
    });

    $('#login-registration-form').submit(function(e){
       if (!checkPasswordValidity()) 
            e.preventDefault();
    });

    function checkPasswordValidity() {
        if($('#password-confirmation').parent().hasClass('d-none')) {
            $('input[type="password"]').removeClass('is-invalid');
            return;
        };

        let passwordValue = $('#password').val();
        let confirmPasswordValue = $('#password-confirmation').val();
        
        console.log(passwordValue, confirmPasswordValue);

        if (passwordValue !== confirmPasswordValue) {
            $('input[type="password"]').addClass('is-invalid');
        }
        else{
            $('input[type="password"]').removeClass('is-invalid');            
        }          
        
        return passwordValue === confirmPasswordValue;
    }


});