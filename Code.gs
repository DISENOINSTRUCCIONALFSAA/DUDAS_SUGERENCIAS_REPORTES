function doGet(e) {
    const userEmail = Session.getActiveUser().getEmail();
    var htmlOutput =  HtmlService.createTemplateFromFile('Index');
    htmlOutput.email = userEmail;
    return htmlOutput.evaluate();
}

function AddRecord(nombre, consentimiento) {

  const userEmail = Session.getActiveUser().getEmail();
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName("REGISTROS");

  dataSheet.appendRow([nombre, consentimiento, userEmail, new Date()]);

  // ------------------------------------------------------------------------------------------------------------
  // Cuerpo del correo para DI
  // ------------------------------------------------------------------------------------------------------------
  const keys2 = ['El mensaje se envió el: ', 'Nos ha dejado un(a): ', 'El contenido del mensaje es: ', 'Por favor contactarse al siguiente correo: '];

  var htmlBody1 = '<h1 style="color:Peru;font-size:40px;"> EQUIPO DI, tiene un nuevo mensaje </h1> <br> <ol>';

  htmlBody1 += '<p style="color:black;font-size:20px;">' + keys2[0] + ": " + new Date() + '</p>';
  htmlBody1 += '<p style="color:black;font-size:20px;">' + keys2[1] + ": " + nombre + '</p>';
  htmlBody1 += '<p style="color:black;font-size:20px;">' + keys2[2] + ": " + consentimiento + '</p>';
  htmlBody1 += '<p style="color:black;font-size:20px;">' + keys2[3] + ": " + userEmail + '</p>';

  htmlBody1 += '</ol>';
  GmailApp.sendEmail('yarilenka.benites@ferreyros.com.pe', '¡BD INSTRUCTORES, NUEVO MENSAJE!', '', {htmlBody:htmlBody1});
  GmailApp.sendEmail('luis.condori@ferreyros.com.pe', '¡BD INSTRUCTORES, NUEVO MENSAJE!', '', {htmlBody:htmlBody1});
  GmailApp.sendEmail('ernesto.parraga@ferreyros.com.pe', '¡BD INSTRUCTORES, NUEVO MENSAJE!', '', {htmlBody:htmlBody1});
  GmailApp.sendEmail('diseno.instruccional@ferreyros.com.pe', '¡BD INSTRUCTORES, NUEVO MENSAJE!', '', {htmlBody:htmlBody1});
  // ------------------------------------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------------------------------------
  // Cuerpo del correo para la persona que hace uso del buzón
  // ------------------------------------------------------------------------------------------------------------

  var htmlBody2 = '<h1 style="color:Indigo;font-size:40px;"> ¡GRACIAS POR SU MENSAJE! </h1> <br> <ol>';

  htmlBody2 += '<p style="color:black;font-size:20px;">' + "DI le agradece por contactarse. Nos comunicaremos con usted durante la semana para resolver tu solicitud." + '</p>';

  htmlBody2 += '</ol>';
  GmailApp.sendEmail(userEmail, '¡DI SE COMUNICARÁ CONTIGO!', '', {htmlBody:htmlBody2});

}
