export const ConfigurationId = {
  MAIL_EMAIL_ADDRESS_VERIFICATION: 'MAIL_EMAIL_ADDRESS_VERIFICATION',
  MAIL_RESET_PASSWORD: 'MAIL_RESET_PASSWORD',
  MAIL_INVITATION: 'MAIL_INVITATION',
  MAIL_FRIEND_REFERAL: 'MAIL_FRIEND_REFERAL',
  MAIL_ADD_ACTION: 'MAIL_ADD_ACTION',
  MAIL_SMTP_SETTINGS: 'MAIL_SMTP_SETTINGS',
  MAIL_USER_INVITATION: 'MAIL_USER_INVITATION',
  SYSTEM_INITIALIZATION: 'SYSTEM_INITIALIZATION'
}

export const SystemInitializationStatus = {
  FINISHED: 'FINISHED'
}

export const Timezone = {
  LOS_ANGELES: 'America/Los_Angeles'
}

export const DEFAULT_EMAIL_ADDRESS_VERIFICATION_MESSAGE = `
<!DOCTYPE html>
<html>

<head>
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet" type="text/css" />
    <style type="text/css">
        body {
            background-color: #fafafa;
            font-family: 'Open Sans', sans-serif;
        }

        .container {
            padding: 0;
        }

        .block-white,.block-white-s {
            margin: auto;
            text-align: center;
            padding-bottom: 20px;
        }

        .block-white img {
            width: 120px;
            height: 50px;
        }

        .block-white-s img{
            padding-top: 20px;
            width: 61px;
            height: 21px;
        }

        .block-center {
            width: 560px;
            background-color: #fff;
            color: #000;
            margin: auto;
            text-align: center;
            padding-bottom: 50px;
            padding: 30px 20px;
        }

        .block-center img {
            width: 100px;
            height: 100px;
        }

        .fullname {
            font-size: 46px;
            line-height: 55px;
            font-style: normal;
            font-weight: bold;
            color: #333333;
            padding: 15px 0;
        }

        .content {
            line-height: 24px;
            color: #333333;
            font-size: 14px;
            line-height: 21px;
            padding: 5px 40px;
        }

        .assign {
            padding: 20px;
            text-align: center;
        }

        .assign .box {
            background-color: #dee5eb;
            border-radius: 10px;
            width: 250px;
            min-width: 250px;
            margin: auto;
            padding: 10px;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
        }

        .assign .box .right {
            width: 125px;
            text-align: right;
        }

        .assign .box .left {
            width: 125px;
            min-width: 125px;
            text-align: left;
        }

        .assign .box .left p {
            font-weight: bold;
        }

        p {
            margin: 0;
            font-size: 14px;
            color: #333333;
        }

        .footer {
            font-size: 14px;
            padding: 25px 0px;
            color: #a9a9a9;
        }

        .footer a {
            color: #a9a9a9;
            text-decoration: underline;
        }

        .button {
            color: white;
            background-color: #6ec7bc;
        }

        .button:hover {
            color: white;
        }

        .underline {
            width: 380px;
            border-bottom: 1px dotted rgba(28, 110, 164, 0.4);
            margin: auto;
            text-align: center;
        }

        .th-2 {
            padding: 10px 0px 15px;
        }

        .th-1 {
            padding: 10px 0px 5px;
        }

        .confirm {
            -webkit-text-size-adjust: none;
            text-decoration: none;
            display: inline-block;
            color: #ffffff;
            background-color: #6ec7bc;
            border-radius: 6px;
            -webkit-border-radius: 6px;
            -moz-border-radius: 6px;
            width: auto;
            width: auto;
            border-top: 1px solid #6ec7bc;
            border-right: 1px solid #6ec7bc;
            border-bottom: 1px solid #6ec7bc;
            border-left: 1px solid #6ec7bc;
            padding-top: 10px;
            padding-bottom: 10px;
            font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif;
            text-align: center;
            word-break: keep-all;
            padding: 10px 35px;
            font-size: 20px;
        }

        a {
            text-decoration: none;
        }

        a b {
            color: #3a93e4;
        }

        .link {
            height: 100px;
        }

        .welcome {
            height: 400px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="flex-center">
            <div class="block-white">
                <img src="https://lvuwnh.stripocdn.email/content/guids/CABINET_7edb13f1ab3234ebb8df89375d27a402/images/21721626679881386.png"
                    class="link" />
            </div>
            <div class="block-center">
                <img src="https://lvuwnh.stripocdn.email/content/guids/CABINET_81454401935a5244b77154ec71ea461e/images/21491626679172656.png"
                    class="welcome" />
                <div class="fullname">
                    Confirm Your Email
                </div>
                <div class="content">
                    You’ve received this message because your email address has been registered with our site. Please
                    click the button below to verify your email address and confirm that you are the owner of this
                    account.
                </div>
                <p class="th-2">If you did not register with us, please disregard this email.</p>
                <a href="%LINK%" class="button">
                    <span class="confirm">CONFIRM YOUR EMAIL</span>
                </a>
                <p class="th-1">Once confirmed, this email will be uniquely associated with your account.</p>
            </div>
            <div class="block-white-s">
                <img src="https://lvuwnh.stripocdn.email/content/guids/CABINET_81454401935a5244b77154ec71ea461e/images/92981626678921738.png"
                    class="welcome" />
                <div class="footer">© Copyright 2019 - Link Brokerages Inc <br />
                    31620 Rail Road Canyon Drive. Canyon Lake CA 92587
                </div>
                <div class="footer" style="padding: 20px">
                    <a target="_blank" href="https://linkbrokerages.com/">https://linkbrokerages.com</a>
                    •
                    <a target="_blank" href="https://www.linkbrokerages.com/contact">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
`

export const DEFAULT_RESET_PASSWORD_MESSAGE = `
Hello,<br /><br />

Follow this link to reset password for your %EMAIL% account.<br /><br />

%LINK%<br /><br />

If you didn’t ask to reset your password, you can ignore this email.<br />

Thanks,<br />
LoopNext team
`

export const DEFAULT_INVITATION_MESSAGE = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2021-06-25</title> 
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]--> 
  <!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"> 
  <!--<![endif]--> 
  <style type="text/css">
    #outlook a {
    padding:0;
    }
    .ExternalClass {
      width:100%;
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height:100%;
    }
    .es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
    }
    a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
    }
    .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
    }
    [data-ogsb] .es-button {
      border-width:0!important;
      padding:15px 25px 15px 25px!important;
    }
    @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
  </style> 
 </head> 
 <body style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#FFFFFF"> 
   <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
      <v:fill type="tile" color="#ffffff"></v:fill>
    </v:background>
  <![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
       <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-image:url(https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/6301624653901898.png);background-position:center bottom;background-repeat:no-repeat;background-size:cover" align="center" background="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/6301624653901898.png"> 
           <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:640px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:25px;padding-top:40px;font-size:0px"><a href="https://viewstripo.email" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#B7BDC9;font-size:20px"><img src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/65991624651410662.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" alt="Logo" title="Logo" width="120" height="38"></a></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:20px;padding-top:25px"><h1 style="Margin:0;line-height:48px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:40px;font-style:normal;font-weight:bold;color:#ffffff">Welcome to Link Brokerages</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#b7bdc9" align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:30px;color:#d8dae0;font-size:20px"><strong>%%NAME%%</strong> assigned your to&nbsp;<strong>%%TRANSACTION_ADDRESS%%</strong><br><br>All document transactions will be facilitated, documented, and stored on this web application!</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:40px"><span class="es-button-border" style="border-style:solid;border-color:#75B6C9;background:#6ec7bc;border-width:1px;display:inline-block;border-radius:28px;width:auto"><a href="%%LINK%%" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#6ec7bc;border-width:15px 25px 15px 25px;display:inline-block;background:#6ec7bc;border-radius:28px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">Sign into your account →</a></span></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;font-size:0px"><img class="adapt-img" src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/36581624651992081.png" alt="Insert alt text here" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Insert alt text here" width="600" height="287"></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:640px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:30px;font-size:0px"><img class="adapt-img" src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/70421624652001654.png" alt="Insert alt text here" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Insert alt text here" width="600" height="125"></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:25px"><h2 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#444444">Every parties one stop shop</h2></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#999999;font-size:18px">Link's digital office allows you to access all facets of your transaction. All important documents, information, or whatever it is you may need can be found within this portal. Sign in above to get started.&nbsp;</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:640px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:40px"> 
               <!--[if mso]><table style="width:600px" cellpadding="0" cellspacing="0"><tr><td style="width:210px"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:190px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/34831624662721969.png" alt="Icon" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Icon" width="50" height="50"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#444444">Transaction Management</h3></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;font-size:14px">Access all the tools necessary to conduct your transactions as seemlessly as possible&nbsp;all in one place.&nbsp;</p></td> 
                     </tr> 
                   </table></td> 
                  <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td><td style="width:185px"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:185px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/22831624662729620.png" alt="Icon" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Icon" width="50" height="50"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#444444">E-Signing Capabilities</h3></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;font-size:14px">Link's partnership with Docusign allows you and&nbsp;your clients to sign all necessary documents.</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#6ec7bc;font-size:16px">Learn More<a href="https://viewstripo.email/" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#6ec7bc;font-size:14px">&nbsp;→</a></p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:185px"><![endif]--> 
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:185px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/13481624662738342.png" alt="Icon" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Icon" width="50" height="50"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#444444">Messaging and Task Management</h3></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;font-size:14px">Access your&nbsp;task board, as well as the side by side agent&nbsp;dashboard to see your production compared to your Link counterparts.&nbsp;</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:640px;border-bottom:2px solid transparent" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px"> 
               <!--[if mso]><table style="width:600px" cellpadding="0" cellspacing="0"><tr><td style="width:280px" valign="top"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:280px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#75B6C9;font-size:16px"><img class="adapt-img" src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/57311624662544669.png" alt="Insert alt text here" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Insert alt text here" width="280" height="191"></a></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#444444">Playa Del Rey Office&nbsp;</h3></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#999999;font-size:16px"><span class="product-description">Our Playa Del Rey office houses our management and operations team. We build our tech and business within this office in hopes to expand our brand.&nbsp;</span></p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td><td style="width:40px"></td><td style="width:280px" valign="top"><![endif]--> 
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:280px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#75B6C9;font-size:16px"><img class="adapt-img" src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/32391624662495441.png" alt="I ♥ Email" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="I ♥ Email" width="280" height="195"></a></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#444444">San Diego Office&nbsp;</h3></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#999999;font-size:16px">Our San Diego office is our first branch expansion team. Our managing team has spent countless of years in the area equipping us with all the experience and knowledge we need to infiltrate the market.&nbsp;</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:25px;padding-bottom:25px;font-size:0"> 
                       <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td style="padding:0;Margin:0;border-bottom:2px solid #eeeeee;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#F6F6F6;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" bgcolor="#f8fafb" style="padding:0;Margin:0;background-color:#f8fafb"> 
           <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:640px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;padding-bottom:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:5px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#999999;font-size:14px"><img src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/6641624661952992.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Logo" width="70" height="22"></a></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;font-size:14px">© Copyright 2019 - Link Brokerages Inc<br>31620 Rail Road Canyon Drive. Canyon Lake CA 92587<br></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;font-size:14px"><u><a target="_blank" href="https://viewstripo.email" class="view" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#999999;font-size:14px"></a>https://linkbrokerages.com</u><u><a target="_blank" href="https://viewstripo.email" class="view" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#999999;font-size:14px"></a></u>&nbsp;&nbsp; • &nbsp;&nbsp;<u>Contact Us</u></p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
`
export const DEFAULT_USER_INVITATION = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2021-06-25</title> 
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]--> 
  <!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"> 
  <!--<![endif]--> 
  <style type="text/css">
    #outlook a {
    padding:0;
    }
    .ExternalClass {
      width:100%;
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height:100%;
    }
    .es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
    }
    a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
    }
    .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
    }
    [data-ogsb] .es-button {
      border-width:0!important;
      padding:15px 25px 15px 25px!important;
    }
    @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
  </style> 
 </head> 
 <body style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#FFFFFF"> 
   <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
      <v:fill type="tile" color="#ffffff"></v:fill>
    </v:background>
  <![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
       <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-image:url(https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/6301624653901898.png);background-position:center bottom;background-repeat:no-repeat;background-size:cover" align="center" background="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/6301624653901898.png"> 
           <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:640px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:25px;padding-top:40px;font-size:0px"><a href="https://viewstripo.email" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#B7BDC9;font-size:20px"><img src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/65991624651410662.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" alt="Logo" title="Logo" width="120" height="38"></a></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:20px;padding-top:25px"><h1 style="Margin:0;line-height:48px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:40px;font-style:normal;font-weight:bold;color:#ffffff">Welcome to Link Brokerages</h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td esdev-links-color="#b7bdc9" align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:30px;color:#d8dae0;font-size:20px">All document transactions will be facilitated, documented, and stored on this web application!</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:40px"><span class="es-button-border" style="border-style:solid;border-color:#75B6C9;background:#6ec7bc;border-width:1px;display:inline-block;border-radius:28px;width:auto"><a href="%%LINK%%" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#6ec7bc;border-width:15px 25px 15px 25px;display:inline-block;background:#6ec7bc;border-radius:28px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">Sign into your account →</a></span></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;font-size:0px"><img class="adapt-img" src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/36581624651992081.png" alt="Insert alt text here" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Insert alt text here" width="600" height="287"></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:640px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:30px;font-size:0px"><img class="adapt-img" src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/70421624652001654.png" alt="Insert alt text here" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Insert alt text here" width="600" height="125"></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:25px"><h2 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#444444">Every parties one stop shop</h2></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#999999;font-size:18px">Link's digital office allows you to access all facets of your transaction. All important documents, information, or whatever it is you may need can be found within this portal. Sign in above to get started.&nbsp;</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:640px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:40px"> 
               <!--[if mso]><table style="width:600px" cellpadding="0" cellspacing="0"><tr><td style="width:210px"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:190px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/34831624662721969.png" alt="Icon" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Icon" width="50" height="50"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#444444">Transaction Management</h3></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;font-size:14px">Access all the tools necessary to conduct your transactions as seemlessly as possible&nbsp;all in one place.&nbsp;</p></td> 
                     </tr> 
                   </table></td> 
                  <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td><td style="width:185px"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:185px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/22831624662729620.png" alt="Icon" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Icon" width="50" height="50"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#444444">E-Signing Capabilities</h3></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;font-size:14px">Link's partnership with Docusign allows you and&nbsp;your clients to sign all necessary documents.</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#6ec7bc;font-size:16px">Learn More<a href="https://viewstripo.email/" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#6ec7bc;font-size:14px">&nbsp;→</a></p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:185px"><![endif]--> 
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:185px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/13481624662738342.png" alt="Icon" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Icon" width="50" height="50"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#444444">Messaging and Task Management</h3></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;font-size:14px">Access your&nbsp;task board, as well as the side by side agent&nbsp;dashboard to see your production compared to your Link counterparts.&nbsp;</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:640px;border-bottom:2px solid transparent" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px"> 
               <!--[if mso]><table style="width:600px" cellpadding="0" cellspacing="0"><tr><td style="width:280px" valign="top"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:280px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#75B6C9;font-size:16px"><img class="adapt-img" src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/57311624662544669.png" alt="Insert alt text here" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Insert alt text here" width="280" height="191"></a></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#444444">Playa Del Rey Office&nbsp;</h3></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#999999;font-size:16px"><span class="product-description">Our Playa Del Rey office houses our management and operations team. We build our tech and business within this office in hopes to expand our brand.&nbsp;</span></p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td><td style="width:40px"></td><td style="width:280px" valign="top"><![endif]--> 
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                 <tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:280px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#75B6C9;font-size:16px"><img class="adapt-img" src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/32391624662495441.png" alt="I ♥ Email" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="I ♥ Email" width="280" height="195"></a></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:bold;color:#444444">San Diego Office&nbsp;</h3></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#999999;font-size:16px">Our San Diego office is our first branch expansion team. Our managing team has spent countless of years in the area equipping us with all the experience and knowledge we need to infiltrate the market.&nbsp;</p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:25px;padding-bottom:25px;font-size:0"> 
                       <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td style="padding:0;Margin:0;border-bottom:2px solid #eeeeee;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#F6F6F6;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td align="center" bgcolor="#f8fafb" style="padding:0;Margin:0;background-color:#f8fafb"> 
           <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:640px"> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;padding-bottom:40px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:5px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#999999;font-size:14px"><img src="https://rukiji.stripocdn.email/content/guids/74525535-6634-4220-8f60-7747002fc4e7/images/6641624661952992.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Logo" width="70" height="22"></a></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;font-size:14px">© Copyright 2019 - Link Brokerages Inc<br>31620 Rail Road Canyon Drive. Canyon Lake CA 92587<br></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;font-size:14px"><u><a target="_blank" href="https://viewstripo.email" class="view" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#999999;font-size:14px"></a>https://linkbrokerages.com</u><u><a target="_blank" href="https://viewstripo.email" class="view" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#999999;font-size:14px"></a></u>&nbsp;&nbsp; • &nbsp;&nbsp;<u>Contact Us</u></p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
`
export const DEFAULT_ADD_ACTION_MESSAGE = `
<!DOCTYPE html>
<html>

<head>
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet" type="text/css" />
  <style type="text/css">
    body {
      background-color: #fafafa;
      font-family: 'Open Sans', sans-serif;
    }

    .container {
      padding: 0;
    }

    .block-white {
      margin: auto;
      text-align: center;
      padding-bottom: 20px;
    }

    .block-white img {
      width: 120px;
      height: 50px;
    }

    .block-center {
      width: 600px;
      background-color: #fff;
      color: #000;
      margin: auto;
      text-align: center;
      padding-bottom: 50px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .fullname {
      font-size: 46px;
      line-height: 55px;
      font-style: normal;
      font-weight: bold;
      color: #333333;
      padding: 15px 0;
    }

    .content {
      line-height: 24px;
      color: #333333;
      font-size: 17px;
      padding: 10px 0;
    }

    .assign {
      padding: 20px;
      text-align: center;
    }

    .assign .box {
      background-color: #dee5eb;
      border-radius: 10px;
      width: 250px;
      min-width: 250px;
      margin: auto;
      padding: 10px;
    }
    .assign .box p span {
      font-weight: bold;
    }

    p {
      margin: 0;
      font-size: 14px;
      color: #333333;
    }

    .footer {
      font-size: 14px;
      padding: 25px 0px;
      color: #a9a9a9;
    }

    .footer a {
      color: #a9a9a9;
      text-decoration: underline;
    }

    .button {
      color: white;
      background-color: #6ec7bc;
    }

    .button:hover {
      color: white;
    }

    .underline {
      width: 380px;
      border-bottom: 1px dotted rgba(28, 110, 164, 0.4);
      margin: auto;
      text-align: center;
    }

    .access {
      -webkit-text-size-adjust: none;
      text-decoration: none;
      display: inline-block;
      color: #ffffff;
      background-color: #6ec7bc;
      border-radius: 6px;
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
      width: auto;
      width: auto;
      border-top: 1px solid #6ec7bc;
      border-right: 1px solid #6ec7bc;
      border-bottom: 1px solid #6ec7bc;
      border-left: 1px solid #6ec7bc;
      padding-top: 10px;
      padding-bottom: 10px;
      font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif;
      text-align: center;
      word-break: keep-all;
      padding: 10px 35px;
      margin-top: 25px;
      font-size: 20px;
    }

    a {
      text-decoration: none;
    }

    a b {
      color: #3a93e4;
    }

    .link {
      height: 100px;
    }

    .welcome {
      height: 400px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="flex-center">
      <div class="block-white">
        <img
          src="https://lvuwnh.stripocdn.email/content/guids/CABINET_7edb13f1ab3234ebb8df89375d27a402/images/21721626679881386.png"
          class="link" />
      </div>
      <div class="block-center">
        <img
          src="https://lvuwnh.stripocdn.email/content/guids/CABINET_7edb13f1ab3234ebb8df89375d27a402/images/21741626680096696.png"
          class="welcome" />
        <div class="fullname">
          Hi %DISPLAY_NAME%
        </div>
        <div class="content">
          You have been assigned to collaborate on %ADDRESS%. All document transactions will be conducted, documented,
          and stored on this web application!
        </div>
        <div class="assign">
          <div class="box">
            <p>Document: <span>%TITLE%</span></p>
            <p>Action: <span>%ACTION%</span></p>
          </div>
        </div>
        <a href="%LINK%" class="button">
          <span class="access">ACCESS DOCUMENT</span>
        </a>
      </div>
     
    </div>
    <div class="block-white">
      <div class="footer">© Copyright 2019 - Link Brokerages Inc <br />
        31620 Rail Road Canyon Drive. Canyon Lake CA 92587
      </div>
      <div class="footer" style="padding: 20px">
        <a target="_blank" href="https://linkbrokerages.com/">https://linkbrokerages.com</a>
        •
        <a target="_blank" href="https://www.linkbrokerages.com/contact">Contact Us</a>
      </div>
    </div>
  </div>
  </div>
</body>

</html>
`
export const DEFAULT_FRIEND_REFERRAL_MESSAGE = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
 <head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>Link - Welcome</title> 
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet"> 
  <!--<![endif]--> 
  <style type="text/css">
@media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button { font-size:20px!important; display:block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
  #outlook a {
    padding:0;
  }
  .ExternalClass {
    width:100%;
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
    line-height:100%;
  }
  .es-button {
    mso-style-priority:100!important;
    text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
    color:inherit!important;
    text-decoration:none!important;
    font-size:inherit!important;
    font-family:inherit!important;
    font-weight:inherit!important;
    line-height:inherit!important;
  }
  .es-desk-hidden {
    display:none;
    float:left;
    overflow:hidden;
    width:0;
    max-height:0;
    line-height:0;
    mso-hide:all;
  }
  td .es-button-border:hover a.es-button-1 {
    background:#0681f3!important;
    border-color:#0681f3!important;
  }
  td .es-button-border-2:hover {
    background:#0681f3!important;
  }
  td .es-button-border:hover a.es-button-3 {
    background:#3da79c!important;
    border-color:#3da79c!important;
  }
  td .es-button-border-4:hover {
    background:#3da79c!important;
  }
</style> 
 </head> 
 <body style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> 
  <div class="es-wrapper-color" style="background-color:#3D4C6B;"> 
   <table class="es-wrapper" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-image:url(https://etbfpv.stripocdn.email/content/guids/CABINET_5977fa6882007e6c1eb875b3c56a5038/images/25671581641287692.png);background-repeat:no-repeat;background-position:center top;background-size:cover;" width="100%" cellspacing="0" cellpadding="0" background="https://etbfpv.stripocdn.email/content/guids/CABINET_5977fa6882007e6c1eb875b3c56a5038/images/25671581641287692.png"> 
     <tr style="border-collapse:collapse;"> 
      <td valign="top" style="padding:0;Margin:0;"> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
         <tr style="border-collapse:collapse;"> 
          <td align="center" style="padding:0;Margin:0;"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="640" cellspacing="0" cellpadding="0" align="center"> 
             <tr style="border-collapse:collapse;"> 
              <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                 <tr style="border-collapse:collapse;"> 
                  <td width="600" valign="top" align="center" style="padding:0;Margin:0;"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:25px;padding-top:40px;"><a href="https://viewstripo.email" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:16px;text-decoration:none;color:#75B6C9;"><img src="%%IMAGE_LOGO%%" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" alt="Logo" title="Logo" width="120"></a></td> 
                     </tr> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;"><h1 style="Margin:0;line-height:70px;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;font-size:58px;font-style:normal;font-weight:normal;color:#FFFFFF;"><strong>Welcome</strong></h1></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             <tr style="border-collapse:collapse;"> 
              <td align="left" style="Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:25px;"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                 <tr style="border-collapse:collapse;"> 
                  <td width="600" valign="top" align="center" style="padding:0;Margin:0;"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:3px;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="left" bgcolor="transparent" style="Margin:0;padding-bottom:10px;padding-top:40px;padding-left:40px;padding-right:40px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#999999;">Welcome to Link Brokerages, a technology company reinventing the real estate brokerage space. Our objective is to pair the industries top talent with modern technology to make our agents life easier and dominate the market.<br><br>Imagine what you could you do with a thousand personal assistants. Link is here to provide that level of support.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#999999;"><br>Apply as an agent below!</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="center" style="padding:10px;Margin:0;"><span class="es-button-border es-button-border-4" style="border-style:solid;border-color:#75B6C9;background:#57C1B7;border-width:1px;display:inline-block;border-radius:28px;width:auto;"><a href="https://www.linkbrokerages.com/join-as-an-agent" class="es-button es-button-3" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;color:#FFFFFF;border-style:solid;border-color:#57C1B7;border-width:15px 55px;display:inline-block;background:#57C1B7;border-radius:28px;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center;">Apply </a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
             <tr style="border-collapse:collapse;"> 
              <td align="left" style="Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:25px;"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                 <tr style="border-collapse:collapse;"> 
                  <td width="600" valign="top" align="center" style="padding:0;Margin:0;"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:3px;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                     <tr style="border-collapse:collapse;"> 
                      <td style="padding:0;Margin:0;"> 
                       <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                         <tr class="links" style="border-collapse:collapse;"> 
                          <td align="center" valign="top" width="33.33%" id="esd-menu-id-0" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:10px;border:0;"><a target="_blank" href="https://www.linkbrokerages.com/technology" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:16px;text-decoration:none;display:block;color:#57C1B7;">Technology</a></td> 
                          <td align="center" valign="top" width="33.33%" id="esd-menu-id-1" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:10px;border:0;"><a target="_blank" href="https://www.linkbrokerages.com/about-us265de524" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:16px;text-decoration:none;display:block;color:#57C1B7;">About Us</a></td> 
                          <td align="center" valign="top" width="33.33%" id="esd-menu-id-2" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:10px;border:0;"><a target="_blank" href="https://www.linkbrokerages.com/faqs" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:16px;text-decoration:none;display:block;color:#57C1B7;">FAQ</a></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="center" style="padding:0;Margin:0;"><img class="adapt-img" src="%%IMAGE_PART%%" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="338"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="left" bgcolor="transparent" style="Margin:0;padding-bottom:10px;padding-top:40px;padding-left:40px;padding-right:40px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#999999;">A cloud-based, full-service brokerage offering all the perks of a standard brokerage without the large splits or hidden fees.<br><br>With our focus on technology, we are able to improve all aspects of real estate brokerage. Our full transaction/document management system streamlines the process of getting a house on the market with in-house photography, termite inspections, home inspections, website builders, and more. <br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#999999;"><br></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="center" style="padding:10px;Margin:0;"><span class="es-button-border es-button-border-4" style="border-style:solid;border-color:#75B6C9;background:#57C1B7;border-width:1px;display:inline-block;border-radius:28px;width:auto;"><a href="https://www.linkbrokerages.com/" class="es-button es-button-3" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;color:#FFFFFF;border-style:solid;border-color:#57C1B7;border-width:15px 55px;display:inline-block;background:#57C1B7;border-radius:28px;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center;">Learn More </a></span></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> 
         <tr style="border-collapse:collapse;"> 
          <td align="center" style="padding:0;Margin:0;"> 
           <table class="es-footer-body" width="640" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"> 
             <tr style="border-collapse:collapse;"> 
              <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;padding-bottom:40px;"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                 <tr style="border-collapse:collapse;"> 
                  <td width="600" valign="top" align="center" style="padding:0;Margin:0;"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#FFFFFF;">© Link Brokerages LLC, All Rights Reserved</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse;"> 
                      <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#FFFFFF;"><a target="_blank" href="https://www.linkbrokerages.com/terms-and-conditions" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:none;color:#FFFFFF;">Terms and Conditions&nbsp;</a> &nbsp;•&nbsp; &nbsp;<a target="_blank" href="http://beta.linkbrokerages.com/login" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:none;color:#FFFFFF;">Log in</a></p></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
  </div>  
 </body>
</html>
`
