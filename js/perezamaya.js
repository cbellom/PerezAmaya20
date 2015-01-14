jQuery(function($)
{
    $("#contact_form").submit(function()
    {
        var name = $("#name").val(); // get name field value
        var tpid = $("#tpid").val(); // get tpid field value
        var id = $("#id").val(); // get id field value
        var phone = $("#phone").val(); // get phone field value
        var email = $("#email").val(); // get email field value
        var subject = $("#subject").val(); // get email field value
        var msg = $("#msg").val(); // get message field value

        $.ajax(
            {
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    'key': 'pSD__Gy91Ba5IzfyWQdpBw',
                    'message': {
                        'from_email': email,
                        'from_name': name,
                        'headers': {
                            'Reply-To': email
                        },
                        'subject': subject,
                        "html": "<h1>Nombre: "+name +"</h1><br/><h2>Documento: "+tpid+" - "+id+"</h2><br/><p>Telefono: "+phone+"<br/>Correo: "+email+"<br/><br/>Mensaje: "+msg+"</p>",
                        'to': [
                            {
                                'email': 'info@perezamaya.com.co',
                                'name': 'Info Perez Amaya',
                                'type': 'to'
                            }]
                    }
                }
            })
            .done(function(response) {
                alert('Su mensaje ha sido enviado. Gracias!!'); // show success message
                $("#name").val(''); // reset field after successful submission
                $("#tpid").val(''); // reset field after successful submission
                $("#id").val(''); // reset field after successful submission
                $("#phone").val(''); // reset field after successful submission
                $("#email").val(''); // reset field after successful submission
                $("#subject").val(''); // reset field after successful submission
                $("#msg").val(''); // reset field after successful submission
            })
            .fail(function(response) {
                alert('Error enviando el correo. Por favor intente mas tarde.');
            });
        return false; // prevent page refresh
    });
});