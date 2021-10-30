module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../common/application/ResponseStatus.js":
/*!***********************************************!*\
  !*** ../common/application/ResponseStatus.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SUCCESS: 'SUCCESS'
});


/***/ }),

/***/ "../common/models/CashBalance.js":
/*!***************************************!*\
  !*** ../common/models/CashBalance.js ***!
  \***************************************/
/*! exports provided: TRANSACTION_COST, ERRORS_AND_OMISSION, commissionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_COST", function() { return TRANSACTION_COST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS_AND_OMISSION", function() { return ERRORS_AND_OMISSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commissionType", function() { return commissionType; });
const TRANSACTION_COST = 500
const ERRORS_AND_OMISSION = 40
const commissionType = {
  AGENT_COMMISSION: 'agent-commission',
  REFERRAL: 'referral',
  PROFIT_SHARE: 'profit-share',
  TC_COMMISSION: 'tc-commission'
}


/***/ }),

/***/ "../common/models/Configuration.js":
/*!*****************************************!*\
  !*** ../common/models/Configuration.js ***!
  \*****************************************/
/*! exports provided: ConfigurationId, SystemInitializationStatus, Timezone, DEFAULT_EMAIL_ADDRESS_VERIFICATION_MESSAGE, DEFAULT_RESET_PASSWORD_MESSAGE, DEFAULT_INVITATION_MESSAGE, DEFAULT_USER_INVITATION, DEFAULT_ADD_ACTION_MESSAGE, DEFAULT_FRIEND_REFERRAL_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationId", function() { return ConfigurationId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemInitializationStatus", function() { return SystemInitializationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timezone", function() { return Timezone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_EMAIL_ADDRESS_VERIFICATION_MESSAGE", function() { return DEFAULT_EMAIL_ADDRESS_VERIFICATION_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESET_PASSWORD_MESSAGE", function() { return DEFAULT_RESET_PASSWORD_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_INVITATION_MESSAGE", function() { return DEFAULT_INVITATION_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_USER_INVITATION", function() { return DEFAULT_USER_INVITATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ADD_ACTION_MESSAGE", function() { return DEFAULT_ADD_ACTION_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FRIEND_REFERRAL_MESSAGE", function() { return DEFAULT_FRIEND_REFERRAL_MESSAGE; });
const ConfigurationId = {
  MAIL_EMAIL_ADDRESS_VERIFICATION: 'MAIL_EMAIL_ADDRESS_VERIFICATION',
  MAIL_RESET_PASSWORD: 'MAIL_RESET_PASSWORD',
  MAIL_INVITATION: 'MAIL_INVITATION',
  MAIL_FRIEND_REFERAL: 'MAIL_FRIEND_REFERAL',
  MAIL_ADD_ACTION: 'MAIL_ADD_ACTION',
  MAIL_SMTP_SETTINGS: 'MAIL_SMTP_SETTINGS',
  MAIL_USER_INVITATION: 'MAIL_USER_INVITATION',
  SYSTEM_INITIALIZATION: 'SYSTEM_INITIALIZATION'
}

const SystemInitializationStatus = {
  FINISHED: 'FINISHED'
}

const Timezone = {
  LOS_ANGELES: 'America/Los_Angeles'
}

const DEFAULT_EMAIL_ADDRESS_VERIFICATION_MESSAGE = `
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

const DEFAULT_RESET_PASSWORD_MESSAGE = `
Hello,<br /><br />

Follow this link to reset password for your %EMAIL% account.<br /><br />

%LINK%<br /><br />

If you didn’t ask to reset your password, you can ignore this email.<br />

Thanks,<br />
LoopNext team
`

const DEFAULT_INVITATION_MESSAGE = `
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
const DEFAULT_USER_INVITATION = `
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
const DEFAULT_ADD_ACTION_MESSAGE = `
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
const DEFAULT_FRIEND_REFERRAL_MESSAGE = `
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


/***/ }),

/***/ "../common/models/Container.js":
/*!*************************************!*\
  !*** ../common/models/Container.js ***!
  \*************************************/
/*! exports provided: ALLOW_FILE_TYPES, MAX_FILE_SIZE, Containers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOW_FILE_TYPES", function() { return ALLOW_FILE_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_FILE_SIZE", function() { return MAX_FILE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Containers", function() { return Containers; });
// TODO-IMPORTANT: Add or remove file types allowed to be uploaded for the whole system (photos, media, document, ...)
// This is applied for the WHOLE system
const ALLOW_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'application/pdf',
  'audio/mp3',
  'video/mp3'
]

// TODO-IMPORTANT: Update maximum file size allowed for the whole system
// This is applied for the WHOLE system
const MAX_FILE_SIZE = 1024 * 1024 // 2MB

// TODO-IMPORTANT: Rename values of those keys on your favor.
//
// You can add more key-value for more containers if you want, but if the system already initialized via `/admin/setup`, then you need to
// call POST /api/containers API or connect DB to create new container by yourself.
// We let you control this instead of auto-create those new containers.
//
// Notice that:
//   - For AWS S3, because S3 buckets are global object, you need to create global unique bucket (container) name, like "youruniqueapp-avatar"
//   - For Mongo GridFS: no container is created in reality but it just mark metadata.container for the file object stored in Mongo
const Containers = {
  AVATAR: 'loopnext-avatar',
  DOCUMENT_PARTY: 'loopnext-document-party'
}


/***/ }),

/***/ "../common/models/Notification.js":
/*!****************************************!*\
  !*** ../common/models/Notification.js ***!
  \****************************************/
/*! exports provided: NotificationType, NotificationRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRole", function() { return NotificationRole; });
const NotificationType = {
  CREATE_EVENT: 'create-event',
  DELETE_EVENT: 'delete-event',
  NEW_MESSAGE: 'new-message',
  UPLOAD_DOCUMENT: 'upload-document',
  ACTION_ADD_TO_USER: 'action-add-to-user',
  CREATE_TASK: 'create-task',
  NEW_NEWS: 'new-news'
}

const NotificationRole = {
  BUYER: 'buyer',
  SELLER: 'seller',
  BUYER_AGENT: 'buyer-agent',
  SELLER_AGENT: 'seller-agent',
  LEASING_AGENT: 'leasing-agent',
  ESCROW: 'escrow',
  TITLE: 'title',
  LENDER: 'lender',
  TERMITE: 'termite',
  HOME_INSPECTOR: 'home-inspector',
  TRANSACTION_COORDINATOR: 'transaction-coordinator'
}


/***/ }),

/***/ "../common/models/Role.js":
/*!********************************!*\
  !*** ../common/models/Role.js ***!
  \********************************/
/*! exports provided: default, PriorityMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityMap", function() { return PriorityMap; });
const Role = {
  ADMIN: 'admin',
  COORDINATOR: 'coordinator',
  AGENT: 'agent',
  USER: 'user'
}

/* harmony default export */ __webpack_exports__["default"] = (Role);

// There are cases when user have multiple role records, in that case we use this
// to decide the role with largest permission pool (the higher integer value the higher role position)
const PriorityMap = {
  [Role.ADMIN]: 1,
  [Role.COORDINATOR]: 2,
  [Role.AGENT]: 3,
  [Role.USER]: 4
}


/***/ }),

/***/ "../common/models/Transaction.js":
/*!***************************************!*\
  !*** ../common/models/Transaction.js ***!
  \***************************************/
/*! exports provided: TransactionType, TransactionTypeStatus, PropertyType, TransactionActivityType, TransactionAccessType, TransactionRole, DataAccessType, SigningMethod, TransactionStatus, DocumentActionStatus, EnvelopeStatus, PercentCompleteTransaction, MEGABYTE, MAX_FILE_SIZE, TYPE, FILE_TYPE, TYPE_IMG, FILE_IMG_TYPE, DocumentSpecies, TaskNameForDocumentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionType", function() { return TransactionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionTypeStatus", function() { return TransactionTypeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyType", function() { return PropertyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionActivityType", function() { return TransactionActivityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionAccessType", function() { return TransactionAccessType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRole", function() { return TransactionRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAccessType", function() { return DataAccessType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigningMethod", function() { return SigningMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionStatus", function() { return TransactionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentActionStatus", function() { return DocumentActionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopeStatus", function() { return EnvelopeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentCompleteTransaction", function() { return PercentCompleteTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEGABYTE", function() { return MEGABYTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_FILE_SIZE", function() { return MAX_FILE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_TYPE", function() { return FILE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_IMG", function() { return TYPE_IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_IMG_TYPE", function() { return FILE_IMG_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSpecies", function() { return DocumentSpecies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskNameForDocumentAction", function() { return TaskNameForDocumentAction; });
const TransactionType = {
  NEW_PURCHASE: 'new-purchase',
  NEW_LISTING_FOR_SALE: 'new-listing-for-sale',
  NEW_LISTING_FOR_LEASE: 'new-listing-for-lease',
  NEW_LEASE: 'new-lease',
  NEW_REAL_ESTATE_OTHER: 'new-real-estate-other',
  NEW_OTHER: 'new-other'
}
// transaction type status
const TransactionTypeStatus = {
  TTS_PRE_OFFER: 'pre-offer',
  TTS_UNDER_CONTRACT: 'under-contract',
  TTS_ESCROW: 'escrow',
  TTS_ESCROW_CLOSE: 'escrow-close',
  TTS_WITHDRAWN: 'withdrawn',
  TTS_SOLD: 'sold',
  TTS_TERMINATED: 'terminated',
  TTS_ARCHIVED: 'archived',
  TTS_PRE_LISTING: 'pre-listing',
  TTS_PRIVATE_LISTING: 'private-listing',
  TTS_ACTIVE_LISTING: 'active-listing',
  TTS_LEASED: 'leased',
  TTS_NEW: 'new',
  TTS_IN_PROCESS: 'in-process',
  TTS_DONE: 'done',
  TTS_CLOSE: 'close'
}

const PropertyType = {
  RESIDENTIAL: 'residential',
  COMMERCIAL: 'commercial',
  INDUSTRIAL: 'industrial',
  VACANT_LAND: 'vacant-land',
  MULTIUNIT: 'multiunit',
  FARM_AND_RANCH: 'farm-and-ranch',
  CONDOMINIUM: 'condominium',
  MANUFACTURED_HOME: 'manufactured-home'
}

const TransactionActivityType = {
  TRANSACTION_CREATE: 'transaction-create',
  INVITING_TO_PARTY: 'inviting-to-party',
  PROFILE_CREATED: 'profile-created',
  PARTY_JOINED_TRANSACTION: 'party-joined-transaction',
  UPLOADED_BY: 'uploaded-by',
  TRANSACTION_DELETE_BY_ADMIN: 'transaction-delete-by-admin'
}

const TransactionAccessType = {
  FULL: 'full',
  UPLOAD_ONLY: 'upload-only',
  UPLOAD_VENDOR: 'upload-vendor'
}

const TransactionRole = {
  BUYING_AGENT: 'buyer-agent',
  BUYER: 'buyer',
  SELLER: 'seller',
  TRANSACTION_COORDINATOR: 'transaction-coordinator',
  ESCROW: 'escrow',
  TITLE: 'title',
  LENDER: 'lender',
  HOME_INSPECTOR: 'home-inspector',
  TERMITE: 'termite',
  VENDORS: 'vendors',
  SELLER_AGENT: 'seller-agent'
}

const DataAccessType = {
  SIGN_DOCUMENT: 'sign-document',
  VIEW_ONLY: 'view-only',
  // RECEIVE_COPY: 'receive-copy'
  REVIEW_DOCUMENT: 'review-document'
}

const SigningMethod = {
  MANUAL: 'manual',
  DOCUSIGN: 'docusign'
}

const TransactionStatus = {
  ACTIVE: 'active',
  CLOSED: 'closed',
  ARCHIVED: 'archived'
}

const DocumentActionStatus = {
  TODO: 'todo',
  DONE: 'done'
}

const EnvelopeStatus = {
  SENT: 'sent',
  COMPLETED: 'completed'
}

const PercentCompleteTransaction = {
  PRE_OFFER: 5,
  UNDER_CONTRACT: 20,
  ESCROW: 40,
  ESCROW_CLOSE: 80,
  SOLD: 95,
  CLOSED: 100
}

// 2 megabytes
// export const MEGABYTE = 2
const MEGABYTE = 1
const MAX_FILE_SIZE = MEGABYTE * 1024 * 1024

// file type: pdf
const TYPE = 'pdf'
const FILE_TYPE = `application/${TYPE}`

// file type:
const TYPE_IMG = 'image/jpeg'
const FILE_IMG_TYPE = `application/${TYPE_IMG}`

const DocumentSpecies = {
  ENVELOPE: 'envelope'
}

const TaskNameForDocumentAction = {
  [DataAccessType.VIEW_ONLY]: 'View Document',
  [DataAccessType.REVIEW_DOCUMENT]: 'Review Document',
  [DataAccessType.SIGN_DOCUMENT]: 'Needs Signature'
}


/***/ }),

/***/ "../common/models/User.js":
/*!********************************!*\
  !*** ../common/models/User.js ***!
  \********************************/
/*! exports provided: Constraint, Rank, Levels, CapLimit, Languages, isAdmin, isCoordinator, isUser, getRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constraint", function() { return Constraint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rank", function() { return Rank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Levels", function() { return Levels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapLimit", function() { return CapLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return Languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdmin", function() { return isAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCoordinator", function() { return isCoordinator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUser", function() { return isUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return getRole; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role */ "../common/models/Role.js");



const Constraint = {
  email: {
    MAX_LENGTH: 256
  },
  name: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 256
  },
  password: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 50
  },
  avatar: {
    ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png'],
    MAX_FILE_SIZE: 1024 * 1024 // 2MB
    // MAX_FILE_SIZE: 2 * 1024 * 1024 // 2MB
  }
}

const Rank = {
  AGENT: 'agent',
  EXECUTIVE_AGENT: 'executive-agent',
  COORDINATOR: 'transaction-coordinator'
}

const Levels = ['AGENT', 'EXECUTIVE_AGENT']

const CapLimit = {
  AGENT: 400000
  // EXECUTIVE_AGENT: 800000
}

const Languages = ['en', 'vn']

function isAdmin (user) {
  return !!user.roles && user.roles.some(role => role.name === _Role__WEBPACK_IMPORTED_MODULE_1__["default"].ADMIN)
}

function isCoordinator (user) {
  return !!user.roles && user.roles.some(role => role.name === _Role__WEBPACK_IMPORTED_MODULE_1__["default"].COORDINATOR)
}

function isUser (user) {
  return !!user.roles && user.roles.some(role => role.name === _Role__WEBPACK_IMPORTED_MODULE_1__["default"].USER)
}

function getRole (user) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(user.roles)) {
    return _Role__WEBPACK_IMPORTED_MODULE_1__["default"].USER
  }

  const role = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.minBy(user.roles, role => _Role__WEBPACK_IMPORTED_MODULE_1__["PriorityMap"][role.name])

  return role.name
}


/***/ }),

/***/ "../common/view-models/TransactionParty.js":
/*!*************************************************!*\
  !*** ../common/view-models/TransactionParty.js ***!
  \*************************************************/
/*! exports provided: getFullName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullName", function() { return getFullName; });
function getFullName (transactionParty) {
  let fullName = ''

  if (transactionParty.firstName) {
    fullName += transactionParty.firstName
  }

  if (transactionParty.lastName) {
    fullName += ` ${transactionParty.lastName}`
  }

  return fullName
}


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/isNativeFunction.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/isNativeFunction.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(/*! ../core-js/array/from */ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/objectSpread.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! ../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _Object$keys = __webpack_require__(/*! ../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var defineProperty = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _Object$keys(source);

    if (typeof _Object$getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "../node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "../node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/wrapNativeSuper.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/wrapNativeSuper.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Map = __webpack_require__(/*! ../core-js/map */ "../node_modules/@babel/runtime-corejs2/core-js/map.js");

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "../node_modules/@babel/runtime-corejs2/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct */ "../node_modules/@babel/runtime-corejs2/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof _Map === "function" ? new _Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = _Object$create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "../node_modules/next/app.js":
/*!***********************************!*\
  !*** ../node_modules/next/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/pages/_app.js":
/*!***********************************************!*\
  !*** ../node_modules/next/dist/pages/_app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _regenerator = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__(/*! ../client/router */ "../node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(_ref) {
    var Component, ctx, pageProps;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref.Component, ctx = _ref.ctx;
            _context.next = 3;
            return (0, _utils.loadGetInitialProps)(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _appGetInitialProps.apply(this, arguments);
}

var App =
/*#__PURE__*/
function (_react$default$Compon) {
  (0, _inherits2["default"])(App, _react$default$Compon);

  function App() {
    (0, _classCallCheck2["default"])(this, App);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(App).apply(this, arguments));
  }

  (0, _createClass2["default"])(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: (0, _router.makePublicRouterInstance)(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`.
    // @deprecated This method is no longer needed. Errors are caught at the top level

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, _errorInfo) {
      throw error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return _react["default"].createElement(Container, null, _react["default"].createElement(Component, (0, _extends2["default"])({}, pageProps, {
        url: url
      })));
    }
  }]);
  return App;
}(_react["default"].Component); // @deprecated noop for now until removal


exports["default"] = App;
App.childContextTypes = {
  router: _propTypes["default"].object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

function Container(p) {
  return p.children;
}

var warnUrl = (0, _utils.execOnce)(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./connectors/PubsubConnector.js":
/*!***************************************!*\
  !*** ./connectors/PubsubConnector.js ***!
  \***************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);

function create() {
  return new events__WEBPACK_IMPORTED_MODULE_0___default.a();
}

/***/ }),

/***/ "./connectors/RestConnector.js":
/*!*************************************!*\
  !*** ./connectors/RestConnector.js ***!
  \*************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _errors_ApplicationError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/ApplicationError */ "./errors/ApplicationError.js");




function create(_ref) {
  var baseUrl = _ref.baseUrl;
  var instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: baseUrl
  });
  instance.interceptors.response.use(function (response) {
    return response;
  }, function (err) {
    if (err.message === 'Network Error') {
      err.code = _errors_ApplicationError__WEBPACK_IMPORTED_MODULE_3__["default"].name;
      err.message = 'errNetwork';
    }

    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(err);
  });
  /**
   * On browser, restConnector (axios) doesn't need to care about access_token anymore as we hacked around to let server set
   * access_token to browser on successful login.
   * @param token
   */

  instance.setAccessToken = function (token) {
    if (token) {
      instance.defaults.headers['AccessToken'] = token;
    } else {
      instance.removeAccessToken(token);
    }
  };

  instance.removeAccessToken = function () {
    delete instance.defaults.headers.AccessToken;
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('access_token');
  };

  return instance;
}

/***/ }),

/***/ "./errors/ApplicationError.js":
/*!************************************!*\
  !*** ./errors/ApplicationError.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationError; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/wrapNativeSuper */ "../node_modules/@babel/runtime-corejs2/helpers/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);







/**
 * @class ApplicationError
 * @classdesc Contains error related to application layer thrown by service classes except ValidationError
 * @type {object}
 * @property {string} code
 * key indicating a list of error types of each field
 * @example
 * // return {
 * //   name: 'ValidationError',
 * //   code: 'LOGIN_FAILED'
 * // }
 * const error = new ApplicationError('LOGIN_FAILED')
 */
var ApplicationError =
/*#__PURE__*/
function (_Error) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ApplicationError, _Error);

  function ApplicationError(code) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ApplicationError);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ApplicationError).call(this));
    _this.name = ApplicationError.name;
    _this.code = code;
    return _this;
  }

  return ApplicationError;
}(_babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(Error));

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ApplicationError, "name", 'ApplicationError');



/***/ }),

/***/ "./errors/ValidationError.js":
/*!***********************************!*\
  !*** ./errors/ValidationError.js ***!
  \***********************************/
/*! exports provided: default, ErrorCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/wrapNativeSuper */ "../node_modules/@babel/runtime-corejs2/helpers/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);







/**
 * @class ValidationError
 * @classdesc Contains information of all of validation error of an object
 * @type {object}
 * @property {string} name - is always "ValidationError"
 * @property {object} details - object with keys indicating fields having errors, and value for each
 * key indicating a list of error types of each field
 * @example
 * // return {
 * //   name: 'ValidationError',
 * //   details: {
 * //     email: ['INVALID_MIN_LENGTH', 'INVALID_EMAIL'],
 * //     password: ['INVALID_LENGTH'],
 * //     name: ['REQUIRED']
 * //   }
 * // }
 * const error = new ValidationError({
 *   email: ['INVALID_MIN_LENGTH', 'INVALID_EMAIL'],
 *   password: ['INVALID_LENGTH'],
 *   name: ['REQUIRED']
 * })
 *
 * // return {
 * //   name: 'ValidationError',
 * //   details: ['INVALID_FILE_SIZE', 'INVALID_FILE_TYPE']
 * // }
 * const error = new ValidationError(['INVALID_FILE_SIZE', 'INVALID_FILE_TYPE'])
 */
var ValidationError =
/*#__PURE__*/
function (_Error) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ValidationError, _Error);

  function ValidationError(details) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ValidationError);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ValidationError).call(this));
    _this.name = ValidationError.name;
    _this.details = details;
    return _this;
  }

  return ValidationError;
}(_babel_runtime_corejs2_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4___default()(Error));

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ValidationError, "name", 'ValidationError');


var ErrorCode = {
  REQUIRED: 'REQUIRED',
  INVALID: 'INVALID',
  EMAIL_EXISTED: 'EMAIL_EXISTED',
  INVALID_LENGTH: 'INVALID_LENGTH',
  INVALID_EMAIL: 'INVALID_EMAIL',
  INVALID_FILE_TYPE: 'INVALID_FILE_TYPE',
  INVALID_FILE_SIZE: 'INVALID_FILE_SIZE'
};

/***/ }),

/***/ "./gateways/ApplicationGateway.js":
/*!****************************************!*\
  !*** ./gateways/ApplicationGateway.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationGateway; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_ApplicationService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/ApplicationService */ "./services/ApplicationService.js");
/* harmony import */ var _common_application_ResponseStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/application/ResponseStatus */ "../common/application/ResponseStatus.js");









var ApplicationGateway =
/*#__PURE__*/
function () {
  function ApplicationGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ApplicationGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ApplicationGateway, [{
    key: "getConfigurations",
    value: function () {
      var _getConfigurations = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(keys) {
        var filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                filter = {
                  where: {
                    id: {
                      inq: keys
                    }
                  }
                };
                _context.next = 4;
                return this.restConnector.get("/configurations?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(filter)));

              case 4:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", []);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function getConfigurations(_x) {
        return _getConfigurations.apply(this, arguments);
      }

      return getConfigurations;
    }()
  }, {
    key: "getConfiguration",
    value: function () {
      var _getConfiguration = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(key) {
        var resp, configNotFound;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.restConnector.get("/configurations/".concat(key));

              case 3:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                configNotFound = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(_context2.t0, 'response.status') === 404 && lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(_context2.t0, 'response.data.error.code') === 'MODEL_NOT_FOUND'; // Return null instead of throwing 404 error if config not found.

                if (!configNotFound) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return", null);

              case 12:
                throw _context2.t0;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getConfiguration(_x2) {
        return _getConfiguration.apply(this, arguments);
      }

      return getConfiguration;
    }()
  }, {
    key: "verifySmtpEmailSettings",
    value: function () {
      var _verifySmtpEmailSettings = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(settings) {
        var resp, errorCode;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.restConnector.post('/configurations/validate-smtp-settings', settings);

              case 3:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data.isValid);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                errorCode = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(_context3.t0, 'response.data.error.statusCode');

                if (!(errorCode === 400)) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt("return", false);

              case 12:
                throw _context3.t0;

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function verifySmtpEmailSettings(_x3) {
        return _verifySmtpEmailSettings.apply(this, arguments);
      }

      return verifySmtpEmailSettings;
    }()
  }, {
    key: "saveConfiguration",
    value: function () {
      var _saveConfiguration = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_ref2) {
        var id, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = _ref2.id, data = _ref2.data;
                _context4.next = 3;
                return this.restConnector.post("/configurations/replaceOrCreate", {
                  id: id,
                  data: data
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function saveConfiguration(_x4) {
        return _saveConfiguration.apply(this, arguments);
      }

      return saveConfiguration;
    }()
  }, {
    key: "validateInitSystemPassword",
    value: function () {
      var _validateInitSystemPassword = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(password) {
        var _ref3, data, msg;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.restConnector.post('/configurations/validate-init-system-password', {
                  password: password
                });

              case 3:
                _ref3 = _context5.sent;
                data = _ref3.data;
                return _context5.abrupt("return", data.isValid);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                msg = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(_context5.t0, 'response.data.error.message');

                if (!(msg === 'password is a required argument')) {
                  _context5.next = 13;
                  break;
                }

                return _context5.abrupt("return", false);

              case 13:
                throw _context5.t0;

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function validateInitSystemPassword(_x5) {
        return _validateInitSystemPassword.apply(this, arguments);
      }

      return validateInitSystemPassword;
    }()
  }, {
    key: "initializeSystem",
    value: function () {
      var _initializeSystem = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(_ref4) {
        var password, admin, _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                password = _ref4.password, admin = _ref4.admin;
                _context6.next = 3;
                return this.restConnector.post('/configurations/initialize-system', {
                  password: password,
                  admin: admin
                });

              case 3:
                _ref5 = _context6.sent;
                data = _ref5.data;
                return _context6.abrupt("return", data.status === _common_application_ResponseStatus__WEBPACK_IMPORTED_MODULE_7__["default"].SUCCESS);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function initializeSystem(_x6) {
        return _initializeSystem.apply(this, arguments);
      }

      return initializeSystem;
    }()
  }]);

  return ApplicationGateway;
}();



/***/ }),

/***/ "./gateways/AuthGateway.js":
/*!*********************************!*\
  !*** ./gateways/AuthGateway.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthGateway; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _errors_ValidationError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors/ValidationError */ "./errors/ValidationError.js");
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/AuthService */ "./services/AuthService.js");
/* harmony import */ var _errors_ApplicationError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors/ApplicationError */ "./errors/ApplicationError.js");









var AuthGateway =
/*#__PURE__*/
function () {
  function AuthGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AuthGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AuthGateway, [{
    key: "loginWithEmail",
    value: function () {
      var _loginWithEmail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
        var email, password;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = _ref2.email, password = _ref2.password;
                _context.prev = 1;
                _context.next = 4;
                return this.restConnector.post('/users/login', {
                  email: email,
                  password: password
                });

              case 4:
                return _context.abrupt("return", this.getLoginUser());

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                _context.t1 = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(_context.t0, 'response.data.error.code');
                _context.next = _context.t1 === 'USERNAME_EMAIL_REQUIRED' ? 12 : _context.t1 === 'LOGIN_FAILED' ? 12 : 13;
                break;

              case 12:
                throw new _errors_ApplicationError__WEBPACK_IMPORTED_MODULE_7__["default"](_services_AuthService__WEBPACK_IMPORTED_MODULE_6__["default"].Error.LOGIN_FAILED);

              case 13:
                if (!(lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(_context.t0, 'response.data.error.message') === 'ACCOUNT_INACTIVATED')) {
                  _context.next = 15;
                  break;
                }

                throw new _errors_ApplicationError__WEBPACK_IMPORTED_MODULE_7__["default"](_services_AuthService__WEBPACK_IMPORTED_MODULE_6__["default"].Error.ACCOUNT_INACTIVATED);

              case 15:
                throw _context.t0;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function loginWithEmail(_x) {
        return _loginWithEmail.apply(this, arguments);
      }

      return loginWithEmail;
    }()
  }, {
    key: "getLoginUser",
    value: function () {
      var _getLoginUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.restConnector.get('/users/me?filter={"include":"roles"}');

              case 3:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", null);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getLoginUser() {
        return _getLoginUser.apply(this, arguments);
      }

      return getLoginUser;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.restConnector.post('/users/logout', {});

              case 3:
                _context3.next = 8;
                break;

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);
                console.warn('Failed to call logout api, but cookie in browser will be cleared so user is still logged out', _context3.t0);

              case 8:
                this.restConnector.removeAccessToken();

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 5]]);
      }));

      function logout() {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: "sendResetPasswordEmail",
    value: function () {
      var _sendResetPasswordEmail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(email) {
        var errResp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.restConnector.post('/users/reset', {
                  email: email
                });

              case 3:
                _context4.next = 14;
                break;

              case 5:
                _context4.prev = 5;
                _context4.t0 = _context4["catch"](0);
                errResp = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(_context4.t0, 'response.data.error', _context4.t0);
                _context4.t1 = errResp.code;
                _context4.next = _context4.t1 === 'EMAIL_NOT_FOUND' ? 11 : _context4.t1 === 'EMAIL_REQUIRED' ? 12 : 13;
                break;

              case 11:
                throw new _errors_ApplicationError__WEBPACK_IMPORTED_MODULE_7__["default"](_services_AuthService__WEBPACK_IMPORTED_MODULE_6__["default"].Error.EMAIL_NOT_FOUND);

              case 12:
                throw new _errors_ValidationError__WEBPACK_IMPORTED_MODULE_5__["default"]({
                  email: [_errors_ValidationError__WEBPACK_IMPORTED_MODULE_5__["ErrorCode"].REQUIRED]
                });

              case 13:
                throw _context4.t0;

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 5]]);
      }));

      function sendResetPasswordEmail(_x2) {
        return _sendResetPasswordEmail.apply(this, arguments);
      }

      return sendResetPasswordEmail;
    }()
  }, {
    key: "updateAccountInfo",
    value: function () {
      var _updateAccountInfo = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(_ref3) {
        var name, email, preferredLanguage, errResp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                name = _ref3.name, email = _ref3.email, preferredLanguage = _ref3.preferredLanguage;
                _context5.prev = 1;
                _context5.next = 4;
                return this.restConnector.patch("/users/me", {
                  name: name,
                  email: email,
                  preferredLanguage: preferredLanguage
                });

              case 4:
                _context5.next = 15;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](1);
                errResp = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(_context5.t0, 'response.data.error', _context5.t0);
                _context5.t1 = errResp.name;
                _context5.next = _context5.t1 === 'ValidationError' ? 12 : 14;
                break;

              case 12:
                if (!(lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(errResp, 'details.codes.email[0]') === 'uniqueness')) {
                  _context5.next = 14;
                  break;
                }

                throw new _errors_ValidationError__WEBPACK_IMPORTED_MODULE_5__["default"]({
                  email: [_errors_ValidationError__WEBPACK_IMPORTED_MODULE_5__["ErrorCode"].EMAIL_EXISTED]
                });

              case 14:
                throw _context5.t0;

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 6]]);
      }));

      function updateAccountInfo(_x3) {
        return _updateAccountInfo.apply(this, arguments);
      }

      return updateAccountInfo;
    }()
  }, {
    key: "updatePassword",
    value: function () {
      var _updatePassword = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(_ref4) {
        var oldPassword, newPassword, err;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                oldPassword = _ref4.oldPassword, newPassword = _ref4.newPassword;
                _context6.prev = 1;
                _context6.next = 4;
                return this.restConnector.post('/users/change-password', {
                  oldPassword: oldPassword,
                  newPassword: newPassword
                });

              case 4:
                _context6.next = 12;
                break;

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](1);
                err = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(_context6.t0, 'response.data.error', _context6.t0);

                if (!(err.code === 'INVALID_PASSWORD' || err.message === 'oldPassword is a required argument')) {
                  _context6.next = 11;
                  break;
                }

                throw new _errors_ApplicationError__WEBPACK_IMPORTED_MODULE_7__["default"](_services_AuthService__WEBPACK_IMPORTED_MODULE_6__["default"].Error.INVALID_CURRENT_PASSWORD);

              case 11:
                throw err;

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 6]]);
      }));

      function updatePassword(_x4) {
        return _updatePassword.apply(this, arguments);
      }

      return updatePassword;
    }()
  }, {
    key: "setNewPassword",
    value: function () {
      var _setNewPassword = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(_ref5, accessToken) {
        var userId, newPassword, err;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                userId = _ref5.userId, newPassword = _ref5.newPassword;
                _context7.prev = 1;
                _context7.next = 4;
                return this.restConnector.post("/users/reset-password?access_token=".concat(accessToken), {
                  id: userId,
                  newPassword: newPassword
                });

              case 4:
                _context7.next = 14;
                break;

              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](1);
                err = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(_context7.t0, 'response.data.error', _context7.t0);
                _context7.t1 = err.code;
                _context7.next = _context7.t1 === 'INVALID_PASSWORD' ? 12 : 13;
                break;

              case 12:
                throw new _errors_ValidationError__WEBPACK_IMPORTED_MODULE_5__["default"](_services_AuthService__WEBPACK_IMPORTED_MODULE_6__["default"].Error.INVALID_CURRENT_PASSWORD);

              case 13:
                throw err;

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 6]]);
      }));

      function setNewPassword(_x5, _x6) {
        return _setNewPassword.apply(this, arguments);
      }

      return setNewPassword;
    }()
  }, {
    key: "updateAvatar",
    value: function () {
      var _updateAvatar = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(avatar) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.restConnector.patch("/users/me", {
                  avatar: avatar
                }).then(function (resp) {
                  return resp.data;
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updateAvatar(_x7) {
        return _updateAvatar.apply(this, arguments);
      }

      return updateAvatar;
    }()
  }, {
    key: "setAccessToken",
    value: function setAccessToken(accessToken) {
      this.restConnector.setAccessToken(accessToken);
    }
  }]);

  return AuthGateway;
}();



/***/ }),

/***/ "./gateways/DocumentActionGateway.js":
/*!*******************************************!*\
  !*** ./gateways/DocumentActionGateway.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocumentActionGateway; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/filter */ "lodash/filter");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_models_Transaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/models/Transaction */ "../common/models/Transaction.js");









var DocumentActionGateway =
/*#__PURE__*/
function () {
  function DocumentActionGateway(_ref) {
    var restConnector = _ref.restConnector,
        socketConnector = _ref.socketConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, DocumentActionGateway);

    this.restConnector = restConnector;
    this.socketConnector = socketConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(DocumentActionGateway, [{
    key: "listenToMyDocumentAction",
    value: function listenToMyDocumentAction(userId, callback) {
      this.socketConnector.on("documentAction:count:".concat(userId), function (documentAction) {
        callback(documentAction);
      });
    }
  }, {
    key: "listenToMyDocumentActionAdd",
    value: function listenToMyDocumentActionAdd(userId, callback) {
      this.socketConnector.on("documentActionAdd:count:".concat(userId), function (documentAction) {
        callback(documentAction);
      });
    }
  }, {
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(data) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.post("/documentActions", data);

              case 2:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "bulkCreate",
    value: function () {
      var _bulkCreate = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(actions) {
        var _this = this;

        var promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                promises = actions.map(function (action) {
                  return _this.restConnector.post("/documentActions", action).then(function (resp) {
                    return resp.data;
                  });
                });
                return _context2.abrupt("return", _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(promises));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function bulkCreate(_x2) {
        return _bulkCreate.apply(this, arguments);
      }

      return bulkCreate;
    }()
  }, {
    key: "getByDocumentId",
    value: function () {
      var _getByDocumentId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(documentId) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.restConnector.get("/documentActions?filter={\"where\":{\"documentId\":\"".concat(documentId, "\"}}"));

              case 2:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getByDocumentId(_x3) {
        return _getByDocumentId.apply(this, arguments);
      }

      return getByDocumentId;
    }()
  }, {
    key: "updateById",
    value: function () {
      var _updateById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(id, data) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.restConnector.patch("/documentActions/".concat(id), data);

              case 2:
                resp = _context4.sent;
                return _context4.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateById(_x4, _x5) {
        return _updateById.apply(this, arguments);
      }

      return updateById;
    }()
  }, {
    key: "makeDone",
    value: function () {
      var _makeDone = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(id) {
        var body, _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                body = {
                  status: _common_models_Transaction__WEBPACK_IMPORTED_MODULE_7__["DocumentActionStatus"].DONE
                };
                _context5.next = 3;
                return this.restConnector.patch("/documentActions/".concat(id), body);

              case 3:
                _ref2 = _context5.sent;
                data = _ref2.data;
                return _context5.abrupt("return", data);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function makeDone(_x6) {
        return _makeDone.apply(this, arguments);
      }

      return makeDone;
    }()
  }, {
    key: "getByPartyId",
    value: function () {
      var _getByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(partyId) {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.restConnector.get("/documentActions?filter={\"where\":{\"assignedPartyId\":\"".concat(partyId, "\"},\"order\":\"updatedAt DESC\"}"));

              case 2:
                _ref3 = _context6.sent;
                data = _ref3.data;
                return _context6.abrupt("return", data);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getByPartyId(_x7) {
        return _getByPartyId.apply(this, arguments);
      }

      return getByPartyId;
    }()
  }, {
    key: "countDocumentActionsByPartyId",
    value: function () {
      var _countDocumentActionsByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(partyId) {
        var _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.restConnector.get("/documentActions?filter={\"where\":{\"assignedPartyId\":\"".concat(partyId, "\",\"status\":\"todo\"},\"order\":\"updatedAt DESC\"}"));

              case 2:
                _ref4 = _context7.sent;
                data = _ref4.data;
                return _context7.abrupt("return", data.length);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function countDocumentActionsByPartyId(_x8) {
        return _countDocumentActionsByPartyId.apply(this, arguments);
      }

      return countDocumentActionsByPartyId;
    }()
  }, {
    key: "findByPartyId",
    value: function () {
      var _findByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8(partyId, where) {
        var filter, _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                filter = {
                  where: where,
                  include: 'document',
                  order: 'updatedAt DESC'
                };
                _context8.next = 3;
                return this.restConnector.get("/transactionParties/".concat(partyId, "/assignedActions?filter=").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                _ref5 = _context8.sent;
                data = _ref5.data;
                return _context8.abrupt("return", data);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function findByPartyId(_x9, _x10) {
        return _findByPartyId.apply(this, arguments);
      }

      return findByPartyId;
    }()
  }, {
    key: "updateSignDocumentById",
    value: function () {
      var _updateSignDocumentById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9(id, _ref6) {
        var file, bodyFormData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                file = _ref6.file;
                bodyFormData = new FormData();
                bodyFormData.set('file', file);
                return _context9.abrupt("return", this.restConnector({
                  url: "/documentActions/".concat(id, "/sign-document"),
                  method: 'patch',
                  data: bodyFormData,
                  config: {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                }).then(function (resp) {
                  return resp.data;
                }));

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function updateSignDocumentById(_x11, _x12) {
        return _updateSignDocumentById.apply(this, arguments);
      }

      return updateSignDocumentById;
    }()
  }, {
    key: "checkDocumentExistEnvelope",
    value: function () {
      var _checkDocumentExistEnvelope = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10(documentId) {
        var filter, _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                filter = {
                  where: {
                    documentId: documentId
                  },
                  fields: {
                    envelopeId: true
                  }
                };
                _context10.next = 3;
                return this.restConnector.get("/documentActions?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                _ref7 = _context10.sent;
                data = _ref7.data;
                return _context10.abrupt("return", lodash_filter__WEBPACK_IMPORTED_MODULE_6___default()(data, function (o) {
                  return o.envelopeId;
                }).length > 0);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function checkDocumentExistEnvelope(_x13) {
        return _checkDocumentExistEnvelope.apply(this, arguments);
      }

      return checkDocumentExistEnvelope;
    }()
  }]);

  return DocumentActionGateway;
}();



/***/ }),

/***/ "./gateways/DocumentGateway.js":
/*!*************************************!*\
  !*** ./gateways/DocumentGateway.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocumentGateway; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var DocumentGateway =
/*#__PURE__*/
function () {
  function DocumentGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, DocumentGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(DocumentGateway, [{
    key: "findByPartyId",
    value: function () {
      var _findByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(idParty) {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.get("/documents?filter={\"where\":{\n        \"partyId\": \"".concat(idParty, "\"},\n        \"order\":\"createdAt DESC\"\n      }"));

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findByPartyId(_x) {
        return _findByPartyId.apply(this, arguments);
      }

      return findByPartyId;
    }()
  }, {
    key: "getByPartyId",
    value: function () {
      var _getByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(idParty, options) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.restConnector.get("/documents?filter={\"where\":{\n        \"partyId\": \"".concat(idParty, "\"},\n        \"order\":\"createdAt DESC\", \n        \"include\":\"").concat(options.include, "\"\n      }"));

              case 2:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getByPartyId(_x2, _x3) {
        return _getByPartyId.apply(this, arguments);
      }

      return getByPartyId;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref3) {
        var file, title, role, creatorId, partyId, transactionId, url, documentType, bodyFormData, _bodyFormData;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                file = _ref3.file, title = _ref3.title, role = _ref3.role, creatorId = _ref3.creatorId, partyId = _ref3.partyId, transactionId = _ref3.transactionId, url = _ref3.url, documentType = _ref3.documentType;

                if (!file) {
                  _context3.next = 14;
                  break;
                }

                bodyFormData = new FormData();
                if (documentType) bodyFormData.set('documentType', documentType);
                bodyFormData.set('title', title);
                bodyFormData.set('role', role);
                bodyFormData.set('creatorId', creatorId);
                bodyFormData.set('partyId', partyId);
                bodyFormData.set('transactionId', transactionId);
                bodyFormData.set('url', url);
                bodyFormData.append('file', file);
                return _context3.abrupt("return", this.restConnector({
                  url: '/documents/create-new',
                  method: 'post',
                  data: bodyFormData,
                  config: {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                }).then(function (resp) {
                  return resp.data;
                }));

              case 14:
                _bodyFormData = new FormData();
                if (documentType) _bodyFormData.set('documentType', documentType);

                _bodyFormData.set('title', title);

                _bodyFormData.set('role', role);

                _bodyFormData.set('creatorId', creatorId);

                _bodyFormData.set('partyId', partyId);

                _bodyFormData.set('transactionId', transactionId);

                _bodyFormData.set('url', url);

                _bodyFormData.append('file', file);

                return _context3.abrupt("return", this.restConnector({
                  url: '/documents/create-new',
                  method: 'post',
                  data: _bodyFormData,
                  config: {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                }).then(function (resp) {
                  return resp.data;
                }));

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function create(_x4) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id, options) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.restConnector.get("/documents/".concat(id, "?filter={\"include\":\"").concat(options.include, "\"}"));

              case 2:
                resp = _context4.sent;
                return _context4.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getById(_x5, _x6) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "getByTransactionId",
    value: function () {
      var _getByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.restConnector.get("/documents?filter={\"where\":{\"transactionId\":\"".concat(id, "\"},\"order\":\"createdAt DESC\"}"));

              case 2:
                resp = _context5.sent;
                return _context5.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getByTransactionId(_x7) {
        return _getByTransactionId.apply(this, arguments);
      }

      return getByTransactionId;
    }()
  }, {
    key: "getAllDocumentVendor",
    value: function () {
      var _getAllDocumentVendor = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(transactionId) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.restConnector.get("/documents?filter={\"where\":{\"transactionId\":\"".concat(transactionId, "\",\"role\":\"vendors\"},\"order\":\"createdAt DESC\"}"));

              case 2:
                resp = _context6.sent;
                return _context6.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getAllDocumentVendor(_x8) {
        return _getAllDocumentVendor.apply(this, arguments);
      }

      return getAllDocumentVendor;
    }() // async getUriToSignDocument (id) {
    //   const resp = await this.restConnector.post(`documents/${id}/sign`)
    //   return resp.data
    // }

  }, {
    key: "getUriToSignDocument",
    value: function () {
      var _getUriToSignDocument = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id, _ref4) {
        var signers, creatorId, _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                signers = _ref4.signers, creatorId = _ref4.creatorId;
                _context7.next = 3;
                return this.restConnector.post("documents/".concat(id, "/upload-to-docusign"), {
                  signers: signers,
                  creatorId: creatorId
                });

              case 3:
                _ref5 = _context7.sent;
                data = _ref5.data;
                return _context7.abrupt("return", data);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getUriToSignDocument(_x9, _x10) {
        return _getUriToSignDocument.apply(this, arguments);
      }

      return getUriToSignDocument;
    }()
  }, {
    key: "getSignLink",
    value: function () {
      var _getSignLink = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(documentId, body) {
        var _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.restConnector.post("documents/".concat(documentId, "/sign"), body);

              case 2:
                _ref6 = _context8.sent;
                data = _ref6.data;
                return _context8.abrupt("return", data);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getSignLink(_x11, _x12) {
        return _getSignLink.apply(this, arguments);
      }

      return getSignLink;
    }()
  }]);

  return DocumentGateway;
}();



/***/ }),

/***/ "./gateways/EventGateway.js":
/*!**********************************!*\
  !*** ./gateways/EventGateway.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventGateway; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);






var EventGateway =
/*#__PURE__*/
function () {
  function EventGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, EventGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(EventGateway, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.post('/events', event);

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.restConnector["delete"]("/events/".concat(id));

              case 2:
                _ref3 = _context2.sent;
                data = _ref3.data;
                return _context2.abrupt("return", data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteById(_x2) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(where) {
        var filter, _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filter = {
                  where: where
                };
                _context3.next = 3;
                return this.restConnector.get("/events?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                _ref4 = _context3.sent;
                data = _ref4.data;
                return _context3.abrupt("return", data);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function find(_x3) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "patch",
    value: function () {
      var _patch = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(event) {
        var _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.restConnector.patch('/events', event);

              case 2:
                _ref5 = _context4.sent;
                data = _ref5.data;
                return _context4.abrupt("return", data);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function patch(_x4) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
  }]);

  return EventGateway;
}();



/***/ }),

/***/ "./gateways/InvitationGateway.js":
/*!***************************************!*\
  !*** ./gateways/InvitationGateway.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InvitationGateway; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);






var InvitationGateway =
/*#__PURE__*/
function () {
  function InvitationGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, InvitationGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(InvitationGateway, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.post("/invitations", data);

              case 2:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.restConnector.get("/invitations?filter={\"where\":{\n        \"id\": \"".concat(id, "\",\"joined\": ", false, "}}"));

              case 3:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data[0]);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", null);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function findById(_x2) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "findByEmail",
    value: function () {
      var _findByEmail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(email) {
        var filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                filter = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
                  where: {
                    email: encodeURIComponent(email)
                  }
                });
                _context3.next = 4;
                return this.restConnector.get("/invitations?filter=".concat(filter));

              case 4:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data[0]);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", null);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function findByEmail(_x3) {
        return _findByEmail.apply(this, arguments);
      }

      return findByEmail;
    }()
  }, {
    key: "acceptInvatation",
    value: function () {
      var _acceptInvatation = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.restConnector.patch('/invitations', {
                  id: id,
                  joined: true
                });

              case 3:
                resp = _context4.sent;
                return _context4.abrupt("return", resp.data);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", null);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function acceptInvatation(_x4) {
        return _acceptInvatation.apply(this, arguments);
      }

      return acceptInvatation;
    }()
  }, {
    key: "getReferredList",
    value: function () {
      var _getReferredList = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(referrerId) {
        var filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                filter = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
                  where: {
                    referrerId: referrerId,
                    joined: 'true'
                  },
                  include: 'user'
                });
                _context5.next = 4;
                return this.restConnector.get("/invitations?filter=".concat(filter));

              case 4:
                resp = _context5.sent;
                return _context5.abrupt("return", resp.data);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", null);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function getReferredList(_x5) {
        return _getReferredList.apply(this, arguments);
      }

      return getReferredList;
    }()
  }, {
    key: "deleteExistedInvitation",
    value: function () {
      var _deleteExistedInvitation = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.restConnector["delete"]("/invitations/".concat(id));

              case 2:
                resp = _context6.sent;
                return _context6.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function deleteExistedInvitation(_x6) {
        return _deleteExistedInvitation.apply(this, arguments);
      }

      return deleteExistedInvitation;
    }()
  }]);

  return InvitationGateway;
}();



/***/ }),

/***/ "./gateways/MessageGateway.js":
/*!************************************!*\
  !*** ./gateways/MessageGateway.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageGateway; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);






var MessageGateway =
/*#__PURE__*/
function () {
  function MessageGateway(_ref) {
    var restConnector = _ref.restConnector,
        socketConnector = _ref.socketConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, MessageGateway);

    this.restConnector = restConnector;
    this.socketConnector = socketConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(MessageGateway, [{
    key: "listenToMyNewMessages",
    value: function listenToMyNewMessages(userId, callback) {
      this.socketConnector.on("messages:new:".concat(userId), function (message) {
        callback(message);
      });
    }
  }, {
    key: "sendToNewMessage",
    value: function () {
      var _sendToNewMessage = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref2) {
        var content, senderId, recipientId, type, _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                content = _ref2.content, senderId = _ref2.senderId, recipientId = _ref2.recipientId, type = _ref2.type;
                _context.next = 3;
                return this.restConnector.post('/messages', {
                  content: content,
                  senderId: senderId,
                  recipientId: recipientId,
                  type: type
                });

              case 3:
                _ref3 = _context.sent;
                data = _ref3.data;
                return _context.abrupt("return", data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendToNewMessage(_x) {
        return _sendToNewMessage.apply(this, arguments);
      }

      return sendToNewMessage;
    }()
  }, {
    key: "sendToFile",
    value: function () {
      var _sendToFile = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref4) {
        var file, senderId, recipientId, type, bodyFormData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                file = _ref4.file, senderId = _ref4.senderId, recipientId = _ref4.recipientId, type = _ref4.type;
                bodyFormData = new FormData();
                bodyFormData.set('file', file);
                bodyFormData.set('senderId', senderId);
                bodyFormData.set('recipientId', recipientId);
                bodyFormData.set('type', type);
                return _context2.abrupt("return", this.restConnector({
                  url: '/messages/create-new',
                  method: 'post',
                  data: bodyFormData,
                  config: {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                }).then(function (resp) {
                  return resp.data;
                }));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sendToFile(_x2) {
        return _sendToFile.apply(this, arguments);
      }

      return sendToFile;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref5) {
        var where, order, limit, skip, filter, _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                where = _ref5.where, order = _ref5.order, limit = _ref5.limit, skip = _ref5.skip;
                filter = {
                  where: where,
                  order: order,
                  limit: limit,
                  skip: skip
                };
                _context3.prev = 2;
                _context3.next = 5;
                return this.restConnector.get("/messages?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 5:
                _ref6 = _context3.sent;
                data = _ref6.data;
                return _context3.abrupt("return", data);

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](2);
                return _context3.abrupt("return", null);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 10]]);
      }));

      function find(_x3) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "count",
    value: function () {
      var _count = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var where,
            _ref7,
            data,
            _args4 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                where = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
                _context4.next = 3;
                return this.restConnector.get("/messages/count?where=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(where)));

              case 3:
                _ref7 = _context4.sent;
                data = _ref7.data;
                return _context4.abrupt("return", data.count);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function count() {
        return _count.apply(this, arguments);
      }

      return count;
    }()
  }]);

  return MessageGateway;
}();



/***/ }),

/***/ "./gateways/NewsGateway.js":
/*!*********************************!*\
  !*** ./gateways/NewsGateway.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsGateway; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var NewsGateway =
/*#__PURE__*/
function () {
  function NewsGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, NewsGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(NewsGateway, [{
    key: "getAllNew",
    value: function () {
      var _getAllNew = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.get("/news");

              case 2:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllNew() {
        return _getAllNew.apply(this, arguments);
      }

      return getAllNew;
    }()
  }, {
    key: "getViewNews",
    value: function () {
      var _getViewNews = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.restConnector.get("/news?filter={\"where\":{\"status\":true},\"order\":\"createdAt DESC\"}");

              case 2:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getViewNews() {
        return _getViewNews.apply(this, arguments);
      }

      return getViewNews;
    }()
  }, {
    key: "addNewNews",
    value: function () {
      var _addNewNews = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref2) {
        var title, content, newsType, status, creatorId, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                title = _ref2.title, content = _ref2.content, newsType = _ref2.newsType, status = _ref2.status, creatorId = _ref2.creatorId;
                _context3.next = 3;
                return this.restConnector.post("/news", {
                  title: title,
                  content: content,
                  newsType: newsType,
                  status: status,
                  creatorId: creatorId
                });

              case 3:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addNewNews(_x) {
        return _addNewNews.apply(this, arguments);
      }

      return addNewNews;
    }()
  }, {
    key: "editNewNews",
    value: function () {
      var _editNewNews = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id, _ref3) {
        var title, content, newsType, status, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                title = _ref3.title, content = _ref3.content, newsType = _ref3.newsType, status = _ref3.status;
                _context4.next = 3;
                return this.restConnector.patch("/news/".concat(id), {
                  title: title,
                  content: content,
                  newsType: newsType,
                  status: status
                });

              case 3:
                resp = _context4.sent;
                return _context4.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editNewNews(_x2, _x3) {
        return _editNewNews.apply(this, arguments);
      }

      return editNewNews;
    }()
  }, {
    key: "deleteNews",
    value: function () {
      var _deleteNews = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.restConnector["delete"]("/news/".concat(id));

              case 2:
                resp = _context5.sent;
                return _context5.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteNews(_x4) {
        return _deleteNews.apply(this, arguments);
      }

      return deleteNews;
    }()
  }]);

  return NewsGateway;
}();



/***/ }),

/***/ "./gateways/NotificationGateway.js":
/*!*****************************************!*\
  !*** ./gateways/NotificationGateway.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotificationGateway; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_models_Notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/Notification */ "../common/models/Notification.js");







var NotificationGateway =
/*#__PURE__*/
function () {
  function NotificationGateway(_ref) {
    var restConnector = _ref.restConnector,
        socketConnector = _ref.socketConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, NotificationGateway);

    this.restConnector = restConnector;
    this.socketConnector = socketConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(NotificationGateway, [{
    key: "listenToMyNewNotification",
    value: function listenToMyNewNotification(userId, callback) {
      this.socketConnector.on("notifications:new:".concat(userId), function (notification) {
        callback(notification);
      });
    }
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(id) {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector["delete"]("/notifications/".concat(id));

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function deleteById(_x) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "findNotificationWithData",
    value: function () {
      var _findNotificationWithData = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(userId) {
        var types,
            type,
            filter,
            _ref3,
            data,
            _args2 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                types = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [];
                type = types.map(function (item) {
                  return {
                    type: item
                  };
                });
                filter = {
                  where: {
                    userId: userId,
                    or: type
                  }
                };
                _context2.prev = 3;
                _context2.next = 6;
                return this.restConnector.get("/notifications?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 6:
                _ref3 = _context2.sent;
                data = _ref3.data;
                return _context2.abrupt("return", data);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](3);
                return _context2.abrupt("return", null);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 11]]);
      }));

      function findNotificationWithData(_x2) {
        return _findNotificationWithData.apply(this, arguments);
      }

      return findNotificationWithData;
    }()
  }, {
    key: "limitFindNotification",
    value: function () {
      var _limitFindNotification = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(userId) {
        var types,
            type,
            filter,
            _ref4,
            data,
            _args3 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                types = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : [];
                type = types.map(function (item) {
                  return {
                    type: item
                  };
                });
                filter = {
                  where: {
                    userId: userId,
                    or: type
                  },
                  order: 'createdAt DESC',
                  limit: 50
                };
                _context3.prev = 3;
                _context3.next = 6;
                return this.restConnector.get("/notifications?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 6:
                _ref4 = _context3.sent;
                data = _ref4.data;
                return _context3.abrupt("return", data);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](3);
                return _context3.abrupt("return", null);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 11]]);
      }));

      function limitFindNotification(_x3) {
        return _limitFindNotification.apply(this, arguments);
      }

      return limitFindNotification;
    }()
  }, {
    key: "countWithData",
    value: function () {
      var _countWithData = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(userId) {
        var types,
            type,
            where,
            _ref5,
            data,
            _args4 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                types = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : [];
                type = types.map(function (item) {
                  return {
                    type: item
                  };
                });
                where = {
                  userId: userId,
                  isRead: false,
                  or: type
                };
                _context4.prev = 3;
                _context4.next = 6;
                return this.restConnector.get("/notifications/count?where=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(where)));

              case 6:
                _ref5 = _context4.sent;
                data = _ref5.data;
                return _context4.abrupt("return", data.count);

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](3);
                return _context4.abrupt("return", null);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 11]]);
      }));

      function countWithData(_x4) {
        return _countWithData.apply(this, arguments);
      }

      return countWithData;
    }()
  }, {
    key: "getAllNotificationMessage",
    value: function () {
      var _getAllNotificationMessage = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(userId) {
        var filter, _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                filter = {
                  where: {
                    userId: userId,
                    isRead: false,
                    type: _common_models_Notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].NEW_MESSAGE
                  },
                  order: 'createdAt DESC'
                };
                _context5.next = 3;
                return this.restConnector.get("/notifications?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                _ref6 = _context5.sent;
                data = _ref6.data;
                return _context5.abrupt("return", data);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getAllNotificationMessage(_x5) {
        return _getAllNotificationMessage.apply(this, arguments);
      }

      return getAllNotificationMessage;
    }()
  }, {
    key: "getAllNotificationNews",
    value: function () {
      var _getAllNotificationNews = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(userId) {
        var filter, _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                filter = {
                  where: {
                    userId: userId,
                    type: _common_models_Notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].NEW_NEWS
                  },
                  order: 'createdAt DESC'
                };
                _context6.next = 3;
                return this.restConnector.get("/notifications?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                _ref7 = _context6.sent;
                data = _ref7.data;
                return _context6.abrupt("return", data);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getAllNotificationNews(_x6) {
        return _getAllNotificationNews.apply(this, arguments);
      }

      return getAllNotificationNews;
    }()
  }, {
    key: "getAllNotificationAssign",
    value: function () {
      var _getAllNotificationAssign = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(userId) {
        var filter, _ref8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                filter = {
                  where: {
                    userId: userId,
                    type: _common_models_Notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].ACTION_ADD_TO_USER
                  },
                  order: 'createdAt DESC'
                };
                _context7.next = 3;
                return this.restConnector.get("/notifications?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                _ref8 = _context7.sent;
                data = _ref8.data;
                return _context7.abrupt("return", data);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getAllNotificationAssign(_x7) {
        return _getAllNotificationAssign.apply(this, arguments);
      }

      return getAllNotificationAssign;
    }()
  }, {
    key: "setWatchedNotification",
    value: function () {
      var _setWatchedNotification = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.restConnector.patch("/notifications/".concat(id), {
                  isRead: true
                });

              case 2:
                resp = _context8.sent;
                return _context8.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function setWatchedNotification(_x8) {
        return _setWatchedNotification.apply(this, arguments);
      }

      return setWatchedNotification;
    }()
  }]);

  return NotificationGateway;
}();



/***/ }),

/***/ "./gateways/PubsubGateway.js":
/*!***********************************!*\
  !*** ./gateways/PubsubGateway.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PubsubGateway; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var PubsubGateway =
/*#__PURE__*/
function () {
  function PubsubGateway(_ref) {
    var pubsubConnector = _ref.pubsubConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PubsubGateway);

    this.pubsubConnector = pubsubConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PubsubGateway, [{
    key: "emit",
    value: function emit(eventName, data) {
      this.pubsubConnector.emit(eventName, data);
    }
  }, {
    key: "subscribe",
    value: function subscribe(eventName, handler) {
      this.pubsubConnector.on(eventName, handler);
    }
  }]);

  return PubsubGateway;
}();



/***/ }),

/***/ "./gateways/RoleGateway.js":
/*!*********************************!*\
  !*** ./gateways/RoleGateway.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoleGateway; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var RoleGateway =
/*#__PURE__*/
function () {
  function RoleGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, RoleGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(RoleGateway, [{
    key: "find",
    value: function () {
      var _find = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
        var where, skip, order, limit, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                where = _ref2.where, skip = _ref2.skip, order = _ref2.order, limit = _ref2.limit;
                _context.next = 3;
                return this.restConnector.get("/roles", {
                  params: {
                    filter: {
                      where: where,
                      skip: skip,
                      order: order,
                      limit: limit
                    }
                  }
                });

              case 3:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function find(_x) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "findOne",
    value: function () {
      var _findOne = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
        var where, skip, order, limit, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                where = _ref3.where, skip = _ref3.skip, order = _ref3.order, limit = _ref3.limit;
                _context2.next = 3;
                return this.restConnector.get("/Roles/findOne", {
                  params: {
                    filter: {
                      where: where,
                      skip: skip,
                      order: order,
                      limit: limit
                    }
                  }
                });

              case 3:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findOne(_x2) {
        return _findOne.apply(this, arguments);
      }

      return findOne;
    }()
  }, {
    key: "findPrincipals",
    value: function () {
      var _findPrincipals = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(roleId, _ref4) {
        var where, skip, order, limit, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                where = _ref4.where, skip = _ref4.skip, order = _ref4.order, limit = _ref4.limit;
                _context3.next = 3;
                return this.restConnector.get("/Roles/".concat(roleId, "/principals"), {
                  params: {
                    filter: {
                      where: where,
                      skip: skip,
                      order: order,
                      limit: limit
                    }
                  }
                });

              case 3:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findPrincipals(_x3, _x4) {
        return _findPrincipals.apply(this, arguments);
      }

      return findPrincipals;
    }()
  }, {
    key: "createPrincipal",
    value: function () {
      var _createPrincipal = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_ref5) {
        var roleId, principalId, _ref5$principalType, principalType, resp;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                roleId = _ref5.roleId, principalId = _ref5.principalId, _ref5$principalType = _ref5.principalType, principalType = _ref5$principalType === void 0 ? 'USER' : _ref5$principalType;
                _context4.next = 3;
                return this.restConnector.post("/Roles/".concat(roleId, "/principals"), {
                  roleId: roleId,
                  principalId: principalId,
                  principalType: principalType
                });

              case 3:
                resp = _context4.sent;
                return _context4.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createPrincipal(_x5) {
        return _createPrincipal.apply(this, arguments);
      }

      return createPrincipal;
    }()
  }, {
    key: "deletePrincipal",
    value: function () {
      var _deletePrincipal = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(_ref6) {
        var roleId, id, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                roleId = _ref6.roleId, id = _ref6.id;
                _context5.next = 3;
                return this.restConnector["delete"]("/Roles/".concat(roleId, "/principals/").concat(id));

              case 3:
                resp = _context5.sent;
                return _context5.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deletePrincipal(_x6) {
        return _deletePrincipal.apply(this, arguments);
      }

      return deletePrincipal;
    }()
  }]);

  return RoleGateway;
}();



/***/ }),

/***/ "./gateways/StorageGateway.js":
/*!************************************!*\
  !*** ./gateways/StorageGateway.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StorageGateway; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/AuthService */ "./services/AuthService.js");







var StorageGateway =
/*#__PURE__*/
function () {
  function StorageGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, StorageGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(StorageGateway, [{
    key: "upload",
    value: function () {
      var _upload = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(containerName, file) {
        var formData, _ref2, data, uploadedFileData;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                formData.append('file', file);
                _context.next = 4;
                return this.restConnector.post("/containers/".concat(containerName, "/upload"), formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 4:
                _ref2 = _context.sent;
                data = _ref2.data;
                uploadedFileData = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(data, 'result.files.file[0]') || data;
                return _context.abrupt("return", this._getPublicFileLink(uploadedFileData));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function upload(_x, _x2) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }()
    /**
     * The response data format returned from S3, Google Cloud, Mongo GridFS, and file system
     * are very different.
     * This method is about getting correct file URL based on those different response format.
     * @param fileData
     * @return {string} file URL
     * @private
     */

  }, {
    key: "_getPublicFileLink",
    value: function _getPublicFileLink(fileData) {
      if (fileData.providerResponse) {
        // AWS S3
        if (fileData.providerResponse.location) {
          return fileData.providerResponse.location;
        } // Google Cloud Storage


        if (fileData.providerResponse.mediaLink) {
          return fileData.providerResponse.mediaLink;
        }
      } // Mongo GridFs


      if (fileData._id) {
        return "/api/containers/".concat(fileData.metadata.container, "/download/").concat(fileData._id);
      } // File system


      return "/api/containers/".concat(fileData.container, "/download/").concat(fileData.name);
    }
  }]);

  return StorageGateway;
}();



/***/ }),

/***/ "./gateways/TaskGateway.js":
/*!*********************************!*\
  !*** ./gateways/TaskGateway.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskGateway; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);






var TaskGateway =
/*#__PURE__*/
function () {
  function TaskGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TaskGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TaskGateway, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(task) {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.post('/tasks', task);

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.restConnector["delete"]("/tasks/".concat(id));

              case 2:
                _ref3 = _context2.sent;
                data = _ref3.data;
                return _context2.abrupt("return", data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteById(_x2) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(where) {
        var filter, _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filter = {
                  where: where,
                  include: 'sharedUsers',
                  order: 'createdAt DESC'
                };
                _context3.next = 3;
                return this.restConnector.get("/tasks?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                _ref4 = _context3.sent;
                data = _ref4.data;
                return _context3.abrupt("return", data);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function find(_x3) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "editTaskById",
    value: function () {
      var _editTaskById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(id, task) {
        var _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.restConnector.patch("/tasks/".concat(id), task);

              case 2:
                _ref5 = _context4.sent;
                data = _ref5.data;
                return _context4.abrupt("return", data);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editTaskById(_x4, _x5) {
        return _editTaskById.apply(this, arguments);
      }

      return editTaskById;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(id) {
        var _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.restConnector.get("/tasks/".concat(id));

              case 2:
                _ref6 = _context5.sent;
                data = _ref6.data;
                return _context5.abrupt("return", data);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function findById(_x6) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "getTasksByIsActiveForUserId",
    value: function () {
      var _getTasksByIsActiveForUserId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(userId, status, isActive) {
        var filter, _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                filter = {
                  where: {
                    isActive: isActive,
                    status: status,
                    or: [{
                      creatorUserId: userId
                    }, {
                      sharedUserIds: userId
                    }]
                  },
                  order: 'createdAt DESC'
                };
                _context6.next = 3;
                return this.restConnector.get("/tasks?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                _ref7 = _context6.sent;
                data = _ref7.data;
                return _context6.abrupt("return", data);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getTasksByIsActiveForUserId(_x7, _x8, _x9) {
        return _getTasksByIsActiveForUserId.apply(this, arguments);
      }

      return getTasksByIsActiveForUserId;
    }()
  }, {
    key: "patch",
    value: function () {
      var _patch = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(task) {
        var _ref8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.restConnector.patch('/tasks', task);

              case 2:
                _ref8 = _context7.sent;
                data = _ref8.data;
                return _context7.abrupt("return", data);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function patch(_x10) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
  }]);

  return TaskGateway;
}();



/***/ }),

/***/ "./gateways/TransactionActivityGateway.js":
/*!************************************************!*\
  !*** ./gateways/TransactionActivityGateway.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionActivityGateway; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var TransactionActivityGateway =
/*#__PURE__*/
function () {
  function TransactionActivityGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TransactionActivityGateway);

    this.restConnector = restConnector;
  } // Get all activities of current user


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TransactionActivityGateway, [{
    key: "getByActorId",
    value: function () {
      var _getByActorId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(actorId) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.get("/transactionActivities?filter={\"where\":{\"actorId\":{\"like\":\"".concat(actorId, "\"}},\"order\":\"createdAt DESC\"}"));

              case 2:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getByActorId(_x) {
        return _getByActorId.apply(this, arguments);
      }

      return getByActorId;
    }() // Get all activities of current transaction (full-access)

  }, {
    key: "getByTransactionId",
    value: function () {
      var _getByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(transactionId) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.restConnector.get("/transactionActivities?filter={\"where\":{\"transactionId\":\"".concat(transactionId, "\"},\"order\":\"createdAt DESC\"}"));

              case 2:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getByTransactionId(_x2) {
        return _getByTransactionId.apply(this, arguments);
      }

      return getByTransactionId;
    }() // Get all activities of current party (upload-only)

  }, {
    key: "getByPartyId",
    value: function () {
      var _getByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(partyId) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.restConnector.get("/transactionActivities?filter={\"where\":{\"partyId\":\"".concat(partyId, "\"},\"order\":\"createdAt DESC\"}"));

              case 2:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getByPartyId(_x3) {
        return _getByPartyId.apply(this, arguments);
      }

      return getByPartyId;
    }()
  }]);

  return TransactionActivityGateway;
}();



/***/ }),

/***/ "./gateways/TransactionCommissionGateway.js":
/*!**************************************************!*\
  !*** ./gateways/TransactionCommissionGateway.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionCommissionGateway; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);






var TransactionCommissionGateway =
/*#__PURE__*/
function () {
  function TransactionCommissionGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TransactionCommissionGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TransactionCommissionGateway, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.post("/transactionCommissions", data);

              case 2:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.restConnector["delete"]("/transactionCommissions/".concat(id));

              case 2:
                _ref2 = _context2.sent;
                data = _ref2.data;
                return _context2.abrupt("return", data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteById(_x2) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "findByTransactionId",
    value: function () {
      var _findByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(transactionId) {
        var filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filter = {
                  where: {
                    transactionId: transactionId
                  }
                };
                _context3.next = 3;
                return this.restConnector.get("/transactionCommissions?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data[0]);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findByTransactionId(_x3) {
        return _findByTransactionId.apply(this, arguments);
      }

      return findByTransactionId;
    }()
  }, {
    key: "getAllTransactionCommission",
    value: function () {
      var _getAllTransactionCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.restConnector.get("/transactionCommissions");

              case 2:
                resp = _context4.sent;
                return _context4.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAllTransactionCommission() {
        return _getAllTransactionCommission.apply(this, arguments);
      }

      return getAllTransactionCommission;
    }()
  }, {
    key: "findByCoordinator",
    value: function () {
      var _findByCoordinator = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(coordinatorId) {
        var filter, currentYear, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                currentYear = new Date().getFullYear();
                filter = {
                  where: {
                    coordinatorId: coordinatorId
                  },
                  include: 'transaction',
                  and: [{
                    updatedAt: {
                      lte: new Date(currentYear, 11, 31)
                    }
                  }, {
                    updatedAt: {
                      gte: new Date(currentYear, 0, 1)
                    }
                  }]
                };
                _context5.next = 4;
                return this.restConnector.get("/transactionCommissions?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 4:
                resp = _context5.sent;
                return _context5.abrupt("return", resp.data);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function findByCoordinator(_x4) {
        return _findByCoordinator.apply(this, arguments);
      }

      return findByCoordinator;
    }()
  }, {
    key: "updateById",
    value: function () {
      var _updateById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(id, data) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.restConnector.patch("/transactionCommissions/".concat(id), data);

              case 2:
                resp = _context6.sent;
                return _context6.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateById(_x5, _x6) {
        return _updateById.apply(this, arguments);
      }

      return updateById;
    }()
  }]);

  return TransactionCommissionGateway;
}();



/***/ }),

/***/ "./gateways/TransactionDetailGateway.js":
/*!**********************************************!*\
  !*** ./gateways/TransactionDetailGateway.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionDetailGateway; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var TransactionDetailGateway =
/*#__PURE__*/
function () {
  function TransactionDetailGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TransactionDetailGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TransactionDetailGateway, [{
    key: "updateDetail",
    value: function () {
      var _updateDetail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id, _ref2) {
        var yearBuilt, bedrooms, squareFootage, schoolDistrict, type, bathrooms, lotSize, country, streetNumber, streetName, unitNumber, city, state, postalCode, county, mlsNumber, taxId, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                yearBuilt = _ref2.yearBuilt, bedrooms = _ref2.bedrooms, squareFootage = _ref2.squareFootage, schoolDistrict = _ref2.schoolDistrict, type = _ref2.type, bathrooms = _ref2.bathrooms, lotSize = _ref2.lotSize, country = _ref2.country, streetNumber = _ref2.streetNumber, streetName = _ref2.streetName, unitNumber = _ref2.unitNumber, city = _ref2.city, state = _ref2.state, postalCode = _ref2.postalCode, county = _ref2.county, mlsNumber = _ref2.mlsNumber, taxId = _ref2.taxId;
                _context.next = 3;
                return this.restConnector.patch("/transactionDetails/".concat(id), {
                  yearBuilt: yearBuilt,
                  bedrooms: bedrooms,
                  squareFootage: squareFootage,
                  schoolDistrict: schoolDistrict,
                  type: type,
                  bathrooms: bathrooms,
                  lotSize: lotSize,
                  country: country,
                  streetNumber: streetNumber,
                  streetName: streetName,
                  unitNumber: unitNumber,
                  city: city,
                  state: state,
                  postalCode: postalCode,
                  county: county,
                  mlsNumber: mlsNumber,
                  taxId: taxId
                });

              case 3:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateDetail(_x, _x2) {
        return _updateDetail.apply(this, arguments);
      }

      return updateDetail;
    }()
  }, {
    key: "createNewTransactionDetail",
    value: function () {
      var _createNewTransactionDetail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
        var yearBuilt, bedrooms, squareFootage, schoolDistrict, type, bathrooms, lotSize, country, streetNumber, streetName, unitNumber, city, state, postalCode, county, mlsNumber, taxId, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                yearBuilt = _ref3.yearBuilt, bedrooms = _ref3.bedrooms, squareFootage = _ref3.squareFootage, schoolDistrict = _ref3.schoolDistrict, type = _ref3.type, bathrooms = _ref3.bathrooms, lotSize = _ref3.lotSize, country = _ref3.country, streetNumber = _ref3.streetNumber, streetName = _ref3.streetName, unitNumber = _ref3.unitNumber, city = _ref3.city, state = _ref3.state, postalCode = _ref3.postalCode, county = _ref3.county, mlsNumber = _ref3.mlsNumber, taxId = _ref3.taxId;
                _context2.next = 3;
                return this.restConnector.post("/transactionDetails", {
                  yearBuilt: yearBuilt,
                  bedrooms: bedrooms,
                  squareFootage: squareFootage,
                  schoolDistrict: schoolDistrict,
                  type: type,
                  bathrooms: bathrooms,
                  lotSize: lotSize,
                  country: country,
                  streetNumber: streetNumber,
                  streetName: streetName,
                  unitNumber: unitNumber,
                  city: city,
                  state: state,
                  postalCode: postalCode,
                  county: county,
                  mlsNumber: mlsNumber,
                  taxId: taxId
                });

              case 3:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createNewTransactionDetail(_x3) {
        return _createNewTransactionDetail.apply(this, arguments);
      }

      return createNewTransactionDetail;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(transactionId) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.restConnector.get("/transactionDetails?filter={\"where\":{\"transactionId\":\"".concat(transactionId, "\"},\"order\":\"createdAt DESC\"}"));

              case 2:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getById(_x4) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }]);

  return TransactionDetailGateway;
}();



/***/ }),

/***/ "./gateways/TransactionGateway.js":
/*!****************************************!*\
  !*** ./gateways/TransactionGateway.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionGateway; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_models_Transaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/Transaction */ "../common/models/Transaction.js");







var TransactionGateway =
/*#__PURE__*/
function () {
  function TransactionGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TransactionGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TransactionGateway, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.post("/transactions", data);

              case 2:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id, options) {
        var url, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                url = options ? "/transactions/".concat(id, "?filter={\"include\":").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(options.include), "}") : "/transactions/".concat(id);
                _context2.next = 4;
                return this.restConnector.get(url);

              case 4:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", null);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function findById(_x2, _x3) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "updateById",
    value: function () {
      var _updateById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(id, _ref2) {
        var address, transactionType, transactionTypeStatus, url, description, closingDate, status, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                address = _ref2.address, transactionType = _ref2.transactionType, transactionTypeStatus = _ref2.transactionTypeStatus, url = _ref2.url, description = _ref2.description, closingDate = _ref2.closingDate, status = _ref2.status;
                _context3.next = 3;
                return this.restConnector.patch("/transactions/".concat(id), {
                  address: address,
                  transactionType: transactionType,
                  transactionTypeStatus: transactionTypeStatus,
                  url: url,
                  description: description,
                  closingDate: closingDate,
                  status: status
                });

              case 3:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateById(_x4, _x5) {
        return _updateById.apply(this, arguments);
      }

      return updateById;
    }()
  }, {
    key: "deleteImageById",
    value: function () {
      var _deleteImageById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(transactionId) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.restConnector.patch("/transactions/".concat(transactionId), {
                  imageURL: ''
                });

              case 2:
                resp = _context4.sent;
                return _context4.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteImageById(_x6) {
        return _deleteImageById.apply(this, arguments);
      }

      return deleteImageById;
    }()
  }, {
    key: "findByOwnerId",
    value: function () {
      var _findByOwnerId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(options) {
        var url, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = options ? "/users/me/joinedTransactions?filter={\"order\":\"createdAt DESC\",\"include\":".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(options.include), "}") : "/users/me/joinedTransactions?filter={\"order\":\"createdAt DESC\",\"include\":\"parties\"}";
                _context5.next = 3;
                return this.restConnector.get(url);

              case 3:
                resp = _context5.sent;
                return _context5.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function findByOwnerId(_x7) {
        return _findByOwnerId.apply(this, arguments);
      }

      return findByOwnerId;
    }()
  }, {
    key: "findByTransactionId",
    value: function () {
      var _findByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.restConnector.get("/transactions/".concat(id));

              case 2:
                resp = _context6.sent;
                return _context6.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function findByTransactionId(_x8) {
        return _findByTransactionId.apply(this, arguments);
      }

      return findByTransactionId;
    }()
  }, {
    key: "findByData",
    value: function () {
      var _findByData = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(_ref3) {
        var where, skip, order, limit, include, filter, url, _ref4, data, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                where = _ref3.where, skip = _ref3.skip, order = _ref3.order, limit = _ref3.limit, include = _ref3.include;
                filter = {
                  where: where,
                  skip: skip,
                  order: order,
                  limit: limit,
                  include: include
                };
                url = "/transactions?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter));
                _context7.next = 5;
                return this.restConnector.get(url);

              case 5:
                _ref4 = _context7.sent;
                data = _ref4.data;
                res = data.filter(function (i) {
                  return i.parties.length > 0;
                });
                return _context7.abrupt("return", res);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function findByData(_x9) {
        return _findByData.apply(this, arguments);
      }

      return findByData;
    }()
  }, {
    key: "createMainImageById",
    value: function () {
      var _createMainImageById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(transactionId, file) {
        var bodyFormData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                bodyFormData = new FormData();
                bodyFormData.append('file', file);
                return _context8.abrupt("return", this.restConnector({
                  url: "/transactions/".concat(transactionId, "/upload-main-image"),
                  method: 'patch',
                  data: bodyFormData,
                  config: {
                    Headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                }).then(function (resp) {
                  return resp.data;
                }));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function createMainImageById(_x10, _x11) {
        return _createMainImageById.apply(this, arguments);
      }

      return createMainImageById;
    }()
  }, {
    key: "getMyTransactions",
    value: function () {
      var _getMyTransactions = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9() {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.restConnector.get("/users/me/joinedTransactions?filter={\"include\":\"parties\", \"order\":\"createdAt DESC\"}");

              case 2:
                resp = _context9.sent;
                return _context9.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getMyTransactions() {
        return _getMyTransactions.apply(this, arguments);
      }

      return getMyTransactions;
    }()
  }, {
    key: "getAllTransaction",
    value: function () {
      var _getAllTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10() {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.restConnector.get("/transactions");

              case 2:
                resp = _context10.sent;
                return _context10.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getAllTransaction() {
        return _getAllTransaction.apply(this, arguments);
      }

      return getAllTransaction;
    }()
  }, {
    key: "archiveTransaction",
    value: function () {
      var _archiveTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee11(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.restConnector.patch("/transactions/".concat(id), {
                  transactionTypeStatus: _common_models_Transaction__WEBPACK_IMPORTED_MODULE_5__["TransactionTypeStatus"].TTS_ARCHIVED,
                  status: _common_models_Transaction__WEBPACK_IMPORTED_MODULE_5__["TransactionStatus"].ARCHIVED
                });

              case 2:
                resp = _context11.sent;
                return _context11.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function archiveTransaction(_x12) {
        return _archiveTransaction.apply(this, arguments);
      }

      return archiveTransaction;
    }()
  }, {
    key: "closeTransaction",
    value: function () {
      var _closeTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee12(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.restConnector.patch("/transactions/".concat(id), {
                  transactionTypeStatus: _common_models_Transaction__WEBPACK_IMPORTED_MODULE_5__["TransactionTypeStatus"].TTS_CLOSE,
                  status: _common_models_Transaction__WEBPACK_IMPORTED_MODULE_5__["TransactionStatus"].CLOSED
                });

              case 2:
                resp = _context12.sent;
                return _context12.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function closeTransaction(_x13) {
        return _closeTransaction.apply(this, arguments);
      }

      return closeTransaction;
    }()
  }, {
    key: "deleteTransactionById",
    value: function () {
      var _deleteTransactionById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee13(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.restConnector["delete"]("/transactions/".concat(id));

              case 2:
                resp = _context13.sent;
                return _context13.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function deleteTransactionById(_x14) {
        return _deleteTransactionById.apply(this, arguments);
      }

      return deleteTransactionById;
    }()
  }, {
    key: "getAllAgentsInTransaction",
    value: function () {
      var _getAllAgentsInTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee14(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.restConnector.get("/transactions/".concat(id, "/agents"));

              case 2:
                resp = _context14.sent;
                return _context14.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getAllAgentsInTransaction(_x15) {
        return _getAllAgentsInTransaction.apply(this, arguments);
      }

      return getAllAgentsInTransaction;
    }()
  }, {
    key: "updateTransactionPercent",
    value: function () {
      var _updateTransactionPercent = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee15(id, percent) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.restConnector.patch("/transactions/".concat(id), {
                  percentComplete: percent
                });

              case 2:
                resp = _context15.sent;
                return _context15.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function updateTransactionPercent(_x16, _x17) {
        return _updateTransactionPercent.apply(this, arguments);
      }

      return updateTransactionPercent;
    }()
  }]);

  return TransactionGateway;
}();



/***/ }),

/***/ "./gateways/TransactionInvitationGateway.js":
/*!**************************************************!*\
  !*** ./gateways/TransactionInvitationGateway.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionInvitationGateway; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var TransactionInvitationGateway =
/*#__PURE__*/
function () {
  function TransactionInvitationGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TransactionInvitationGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TransactionInvitationGateway, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.post("/transactionInvitations", data);

              case 2:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id, options) {
        var url, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                url = options ? "/transactionInvitations/".concat(id, "?filter={\"include\":\"").concat(options.include, "\"}") : "/transactionInvitations/".concat(id);
                _context2.next = 4;
                return this.restConnector.get(url);

              case 4:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", null);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function findById(_x2, _x3) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "getByTransactionId",
    value: function () {
      var _getByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(transactionId) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.restConnector.get("/transactionInvitations?filter={\"where\":{\"transactionId\":\"".concat(transactionId, "\"}}"));

              case 2:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getByTransactionId(_x4) {
        return _getByTransactionId.apply(this, arguments);
      }

      return getByTransactionId;
    }()
  }]);

  return TransactionInvitationGateway;
}();



/***/ }),

/***/ "./gateways/TransactionPartyGateway.js":
/*!*********************************************!*\
  !*** ./gateways/TransactionPartyGateway.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionPartyGateway; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);






var TransactionPartyGateway =
/*#__PURE__*/
function () {
  function TransactionPartyGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TransactionPartyGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TransactionPartyGateway, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.post('/transactionParties', data);

              case 2:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.restConnector.get("/transactionParties/".concat(id));

              case 2:
                _ref2 = _context2.sent;
                data = _ref2.data;
                return _context2.abrupt("return", data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findById(_x2) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "updateById",
    value: function () {
      var _updateById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(id, data) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.restConnector.patch("/transactionParties/".concat(id), data);

              case 2:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateById(_x3, _x4) {
        return _updateById.apply(this, arguments);
      }

      return updateById;
    }()
  }, {
    key: "findByTransactionId",
    value: function () {
      var _findByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(transactionId) {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.restConnector.get("/transactionParties?filter={\"where\":{\"transactionId\":\"".concat(transactionId, "\"}}"));

              case 2:
                _ref3 = _context4.sent;
                data = _ref3.data;
                return _context4.abrupt("return", data);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findByTransactionId(_x5) {
        return _findByTransactionId.apply(this, arguments);
      }

      return findByTransactionId;
    }()
  }, {
    key: "getByTransactionIdAndUserId",
    value: function () {
      var _getByTransactionIdAndUserId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(transactionId, userId) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.restConnector.get("/transactionParties/findOne?filter={\"where\":{\"transactionId\":\"".concat(transactionId, "\",\"userId\":\"").concat(userId, "\"}}"));

              case 3:
                resp = _context5.sent;
                return _context5.abrupt("return", resp.data);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", null);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 7]]);
      }));

      function getByTransactionIdAndUserId(_x6, _x7) {
        return _getByTransactionIdAndUserId.apply(this, arguments);
      }

      return getByTransactionIdAndUserId;
    }()
  }, {
    key: "getByTransactionId",
    value: function () {
      var _getByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(transactionId, options) {
        var url, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                url = options ? "/transactionParties?filter={\"where\":{\n          \"transactionId\": \"".concat(transactionId, "\"},\"include\":").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(options.include), "\n        }") : "/transactionParties?filter={\"where\":{\n          \"transactionId\": \"".concat(transactionId, "\"}\n        }");
                _context6.next = 3;
                return this.restConnector.get(url);

              case 3:
                resp = _context6.sent;
                return _context6.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getByTransactionId(_x8, _x9) {
        return _getByTransactionId.apply(this, arguments);
      }

      return getByTransactionId;
    }()
  }, {
    key: "findByData",
    value: function () {
      var _findByData = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(where) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.restConnector.get("/transactionParties?filter={\"where\":".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(where), "}"));

              case 2:
                resp = _context7.sent;
                return _context7.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function findByData(_x10) {
        return _findByData.apply(this, arguments);
      }

      return findByData;
    }() // async findMemberByTransactionId(id){
    //   const resp = await this.restConnector.get(`/`)
    // }

  }, {
    key: "getAgentTransaction",
    value: function () {
      var _getAgentTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(userId, where, skip, order, limit) {
        var filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                filter = {
                  where: {
                    userId: userId,
                    or: [{
                      role: 'seller-agent'
                    }, {
                      role: 'buyer-agent'
                    }]
                  },
                  include: {
                    relation: 'transaction',
                    scope: {
                      where: where,
                      include: {
                        relation: 'transactionCommission'
                      },
                      order: order
                    }
                  },
                  skip: skip,
                  limit: limit
                };
                _context8.next = 3;
                return this.restConnector.get("/transactionParties?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                resp = _context8.sent;
                return _context8.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getAgentTransaction(_x11, _x12, _x13, _x14, _x15) {
        return _getAgentTransaction.apply(this, arguments);
      }

      return getAgentTransaction;
    }()
  }]);

  return TransactionPartyGateway;
}();



/***/ }),

/***/ "./gateways/UserCommissionGateway.js":
/*!*******************************************!*\
  !*** ./gateways/UserCommissionGateway.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserCommissionGateway; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_models_CashBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/CashBalance */ "../common/models/CashBalance.js");





 // import { commissionType } from '../../common/models/CashBalance'

var UserCommissionGateway =
/*#__PURE__*/
function () {
  function UserCommissionGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, UserCommissionGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(UserCommissionGateway, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.restConnector.post("/userCommissions", data);

              case 2:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "updateByTransactionIdUserId",
    value: function () {
      var _updateByTransactionIdUserId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(transactionId, userId, data) {
        var filterOption, _ref2, original, resp;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                filterOption = {
                  where: {
                    transactionId: transactionId,
                    userId: userId
                  }
                };
                _context2.next = 3;
                return this.restConnector.get("/userCommissions?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filterOption)));

              case 3:
                _ref2 = _context2.sent;
                original = _ref2.data;

                if (!original[0]) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 8;
                return this.restConnector.patch("/userCommissions/".concat(original[0].id), data);

              case 8:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateByTransactionIdUserId(_x2, _x3, _x4) {
        return _updateByTransactionIdUserId.apply(this, arguments);
      }

      return updateByTransactionIdUserId;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(id) {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.restConnector["delete"]("/userCommissions/".concat(id));

              case 2:
                _ref3 = _context3.sent;
                data = _ref3.data;
                return _context3.abrupt("return", data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteById(_x5) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "getAllAgentCommission",
    value: function () {
      var _getAllAgentCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                filter = {
                  include: ['transaction', 'user']
                };
                _context4.next = 3;
                return this.restConnector.get("/userCommissions?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                resp = _context4.sent;
                return _context4.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAllAgentCommission() {
        return _getAllAgentCommission.apply(this, arguments);
      }

      return getAllAgentCommission;
    }()
  }, {
    key: "getAllCommission",
    value: function () {
      var _getAllCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.restConnector.get("/userCommissions");

              case 2:
                resp = _context5.sent;
                return _context5.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getAllCommission() {
        return _getAllCommission.apply(this, arguments);
      }

      return getAllCommission;
    }()
  }, {
    key: "countCommission",
    value: function () {
      var _countCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(_ref4) {
        var userId, type, isForThisYear, currentYear, filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                userId = _ref4.userId, type = _ref4.type, isForThisYear = _ref4.isForThisYear;
                currentYear = new Date().getFullYear();
                filter = isForThisYear ? {
                  userId: userId,
                  cashType: type,
                  and: [{
                    updatedAt: {
                      lte: new Date(currentYear, 11, 31)
                    }
                  }, {
                    updatedAt: {
                      gte: new Date(currentYear, 0, 1)
                    }
                  }]
                } : {
                  userId: userId,
                  cashType: type
                };
                _context6.next = 5;
                return this.restConnector.get("/userCommissions/count?where=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 5:
                resp = _context6.sent;
                return _context6.abrupt("return", resp.data);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function countCommission(_x6) {
        return _countCommission.apply(this, arguments);
      }

      return countCommission;
    }()
  }, {
    key: "countCommissionPrevYear",
    value: function () {
      var _countCommissionPrevYear = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(_ref5) {
        var userId, type, currentYear, preYear, filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                userId = _ref5.userId, type = _ref5.type;
                currentYear = new Date().getFullYear();
                preYear = currentYear - 1;
                filter = {
                  userId: userId,
                  cashType: type,
                  and: [{
                    updatedAt: {
                      lte: new Date(preYear, 11, 31)
                    }
                  }, {
                    updatedAt: {
                      gte: new Date(preYear, 0, 1)
                    }
                  }]
                };
                _context7.next = 6;
                return this.restConnector.get("/userCommissions/count?where=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 6:
                resp = _context7.sent;
                return _context7.abrupt("return", resp.data);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function countCommissionPrevYear(_x7) {
        return _countCommissionPrevYear.apply(this, arguments);
      }

      return countCommissionPrevYear;
    }()
  }, {
    key: "getUserCommissionThisYear",
    value: function () {
      var _getUserCommissionThisYear = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(userId) {
        var currentYear, filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                currentYear = new Date().getFullYear();
                filter = {
                  where: {
                    userId: userId,
                    and: [{
                      updatedAt: {
                        lte: new Date(currentYear, 11, 31)
                      }
                    }, {
                      updatedAt: {
                        gte: new Date(currentYear, 0, 1)
                      }
                    }]
                  }
                };
                _context8.next = 4;
                return this.restConnector.get("userCommissions?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 4:
                resp = _context8.sent;
                return _context8.abrupt("return", resp.data);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getUserCommissionThisYear(_x8) {
        return _getUserCommissionThisYear.apply(this, arguments);
      }

      return getUserCommissionThisYear;
    }()
  }, {
    key: "getCommissionByTransaction",
    value: function () {
      var _getCommissionByTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(transactionId) {
        var filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                filter = {
                  where: {
                    transactionId: transactionId,
                    cashType: _common_models_CashBalance__WEBPACK_IMPORTED_MODULE_5__["commissionType"].AGENT_COMMISSION
                  }
                };
                _context9.next = 3;
                return this.restConnector.get("userCommissions?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                resp = _context9.sent;
                return _context9.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getCommissionByTransaction(_x9) {
        return _getCommissionByTransaction.apply(this, arguments);
      }

      return getCommissionByTransaction;
    }()
  }]);

  return UserCommissionGateway;
}();



/***/ }),

/***/ "./gateways/UserGateway.js":
/*!*********************************!*\
  !*** ./gateways/UserGateway.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserGateway; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/UserService */ "./services/UserService.js");
/* harmony import */ var _errors_ValidationError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors/ValidationError */ "./errors/ValidationError.js");









var UserGateway =
/*#__PURE__*/
function () {
  function UserGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, UserGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(UserGateway, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
        var resp, errResp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.restConnector.post("/users", data);

              case 3:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                errResp = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(_context.t0, 'response.data.error', _context.t0);
                _context.t1 = errResp.name;
                _context.next = _context.t1 === 'ValidationError' ? 13 : 15;
                break;

              case 13:
                if (!(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(errResp, 'details.codes.email[0]') === 'uniqueness')) {
                  _context.next = 15;
                  break;
                }

                throw new _errors_ValidationError__WEBPACK_IMPORTED_MODULE_7__["default"]({
                  email: [_errors_ValidationError__WEBPACK_IMPORTED_MODULE_7__["ErrorCode"].EMAIL_EXISTED]
                });

              case 15:
                throw _context.t0;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref2) {
        var where, skip, limit, order, include, filter, url, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                where = _ref2.where, skip = _ref2.skip, limit = _ref2.limit, order = _ref2.order, include = _ref2.include;
                filter = {
                  where: where,
                  skip: skip,
                  limit: limit,
                  order: order,
                  include: include
                };
                url = "/users?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter));
                _context2.next = 5;
                return this.restConnector.get(url);

              case 5:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function find(_x2) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.restConnector.get("/users/".concat(id, "?filter={\"include\":\"roles\"}"));

              case 2:
                resp = _context3.sent;
                return _context3.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findById(_x3) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "count",
    value: function () {
      var _count = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var where,
            resp,
            _args4 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                where = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
                _context4.next = 3;
                return this.restConnector.get("/users/count?where=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(where)));

              case 3:
                resp = _context4.sent;
                return _context4.abrupt("return", resp.data.count);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function count() {
        return _count.apply(this, arguments);
      }

      return count;
    }()
  }, {
    key: "updateUserAvatarById",
    value: function () {
      var _updateUserAvatarById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(userId, file) {
        var bodyFormData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                bodyFormData = new FormData();
                bodyFormData.append('file', file);
                return _context5.abrupt("return", this.restConnector({
                  url: "/users/".concat(userId, "/update-avatar"),
                  method: 'patch',
                  data: bodyFormData,
                  config: {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                }).then(function (resp) {
                  return resp.data;
                }));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateUserAvatarById(_x4, _x5) {
        return _updateUserAvatarById.apply(this, arguments);
      }

      return updateUserAvatarById;
    }()
  }, {
    key: "updateById",
    value: function () {
      var _updateById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(id, _ref3) {
        var firstName, lastName, email, emailVerified, isInactive, cash, rank, resp, errResp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                firstName = _ref3.firstName, lastName = _ref3.lastName, email = _ref3.email, emailVerified = _ref3.emailVerified, isInactive = _ref3.isInactive, cash = _ref3.cash, rank = _ref3.rank;
                _context6.prev = 1;
                _context6.next = 4;
                return this.restConnector.patch("/users/".concat(id), {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  emailVerified: emailVerified,
                  isInactive: isInactive,
                  cash: cash,
                  rank: rank
                });

              case 4:
                resp = _context6.sent;
                return _context6.abrupt("return", resp.data);

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](1);
                errResp = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(_context6.t0, 'response.data.error', _context6.t0);
                _context6.t1 = errResp.name;
                _context6.next = _context6.t1 === 'ValidationError' ? 14 : 16;
                break;

              case 14:
                if (!(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(errResp, 'details.codes.email[0]') === 'uniqueness')) {
                  _context6.next = 16;
                  break;
                }

                throw new _errors_ValidationError__WEBPACK_IMPORTED_MODULE_7__["default"]({
                  email: [_errors_ValidationError__WEBPACK_IMPORTED_MODULE_7__["ErrorCode"].EMAIL_EXISTED]
                });

              case 16:
                throw _context6.t0;

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 8]]);
      }));

      function updateById(_x6, _x7) {
        return _updateById.apply(this, arguments);
      }

      return updateById;
    }()
  }, {
    key: "updateInfoById",
    value: function () {
      var _updateInfoById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(id, _ref4) {
        var firstName, lastName, dateOfBirth, gender, company, phone, location, bio, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                firstName = _ref4.firstName, lastName = _ref4.lastName, dateOfBirth = _ref4.dateOfBirth, gender = _ref4.gender, company = _ref4.company, phone = _ref4.phone, location = _ref4.location, bio = _ref4.bio;
                _context7.next = 3;
                return this.restConnector.patch("/users/".concat(id), {
                  firstName: firstName,
                  lastName: lastName,
                  dateOfBirth: dateOfBirth,
                  gender: gender,
                  company: company,
                  phone: phone,
                  location: location,
                  bio: bio
                });

              case 3:
                resp = _context7.sent;
                return _context7.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function updateInfoById(_x8, _x9) {
        return _updateInfoById.apply(this, arguments);
      }

      return updateInfoById;
    }()
  }, {
    key: "uploadCoverImage",
    value: function () {
      var _uploadCoverImage = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(id, file) {
        var bodyFormData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                bodyFormData = new FormData();
                bodyFormData.append('file', file);
                return _context8.abrupt("return", this.restConnector({
                  url: "/users/".concat(id, "/upload-cover-image"),
                  method: 'patch',
                  data: bodyFormData,
                  config: {
                    Headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }
                }).then(function (resp) {
                  return resp.data;
                }));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function uploadCoverImage(_x10, _x11) {
        return _uploadCoverImage.apply(this, arguments);
      }

      return uploadCoverImage;
    }()
  }, {
    key: "updateRankandCash",
    value: function () {
      var _updateRankandCash = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(id, _ref5) {
        var rank, cash, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                rank = _ref5.rank, cash = _ref5.cash;
                _context9.prev = 1;
                _context9.next = 4;
                return this.restConnector.patch("/users/".concat(id), {
                  rank: rank,
                  cash: cash
                });

              case 4:
                resp = _context9.sent;
                return _context9.abrupt("return", resp.data);

              case 8:
                _context9.prev = 8;
                _context9.t0 = _context9["catch"](1);
                console.error(_context9.t0);

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 8]]);
      }));

      function updateRankandCash(_x12, _x13) {
        return _updateRankandCash.apply(this, arguments);
      }

      return updateRankandCash;
    }()
  }, {
    key: "updateStatusNotification",
    value: function () {
      var _updateStatusNotification = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10(id, _ref6) {
        var statusNotification, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                statusNotification = _ref6.statusNotification;
                _context10.prev = 1;
                _context10.next = 4;
                return this.restConnector.patch("/users/".concat(id), {
                  statusNotification: statusNotification
                });

              case 4:
                resp = _context10.sent;
                return _context10.abrupt("return", resp.data);

              case 8:
                _context10.prev = 8;
                _context10.t0 = _context10["catch"](1);
                console.error(_context10.t0);

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[1, 8]]);
      }));

      function updateStatusNotification(_x14, _x15) {
        return _updateStatusNotification.apply(this, arguments);
      }

      return updateStatusNotification;
    }()
  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee11(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.restConnector["delete"]("/users/".concat(id));

              case 2:
                resp = _context11.sent;
                return _context11.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function deleteById(_x16) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
  }, {
    key: "deleteAllRoles",
    value: function () {
      var _deleteAllRoles = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee12(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.restConnector["delete"]("/users/".concat(id, "/roles"));

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function deleteAllRoles(_x17) {
        return _deleteAllRoles.apply(this, arguments);
      }

      return deleteAllRoles;
    }()
  }, {
    key: "getMyMessagingParties",
    value: function () {
      var _getMyMessagingParties = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee13() {
        var _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.restConnector.get("/users/me/my-messaging-parties");

              case 2:
                _ref7 = _context13.sent;
                data = _ref7.data;
                return _context13.abrupt("return", data);

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getMyMessagingParties() {
        return _getMyMessagingParties.apply(this, arguments);
      }

      return getMyMessagingParties;
    }()
  }, {
    key: "getAllUser",
    value: function () {
      var _getAllUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee14() {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.restConnector.get("/users");

              case 2:
                resp = _context14.sent;
                return _context14.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getAllUser() {
        return _getAllUser.apply(this, arguments);
      }

      return getAllUser;
    }()
  }, {
    key: "getReferrer",
    value: function () {
      var _getReferrer = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee15(userId) {
        var _ref8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.restConnector.get("/users/".concat(userId, "/get-all-referrers"));

              case 2:
                _ref8 = _context15.sent;
                data = _ref8.data;
                return _context15.abrupt("return", data);

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getReferrer(_x18) {
        return _getReferrer.apply(this, arguments);
      }

      return getReferrer;
    }()
  }, {
    key: "getUserRole",
    value: function () {
      var _getUserRole = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee16(where) {
        var filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                filter = {
                  where: where,
                  include: {
                    relation: 'roles',
                    scope: {
                      fields: ['id', 'name']
                    }
                  }
                };
                _context16.next = 3;
                return this.restConnector.get("/users?filter=".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 3:
                resp = _context16.sent;
                return _context16.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function getUserRole(_x19) {
        return _getUserRole.apply(this, arguments);
      }

      return getUserRole;
    }()
  }, {
    key: "getAllContact",
    value: function () {
      var _getAllContact = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee17(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.restConnector.get("/users/".concat(id, "/get-all-contact"));

              case 2:
                resp = _context17.sent;
                return _context17.abrupt("return", resp);

              case 4:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function getAllContact(_x20) {
        return _getAllContact.apply(this, arguments);
      }

      return getAllContact;
    }()
  }, {
    key: "findByEmail",
    value: function () {
      var _findByEmail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee18(email) {
        var filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                filter = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
                  where: {
                    email: encodeURIComponent(email)
                  }
                });
                _context18.next = 3;
                return this.restConnector.get("/users?filter=".concat(filter));

              case 3:
                resp = _context18.sent;
                return _context18.abrupt("return", resp.data[0]);

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function findByEmail(_x21) {
        return _findByEmail.apply(this, arguments);
      }

      return findByEmail;
    }()
  }, {
    key: "getTransactionInfo",
    value: function () {
      var _getTransactionInfo = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee19(_ref9) {
        var userId, where, skip, order, limit, filter, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                userId = _ref9.userId, where = _ref9.where, skip = _ref9.skip, order = _ref9.order, limit = _ref9.limit;
                filter = {
                  where: where,
                  skip: skip,
                  order: order,
                  limit: limit
                };
                _context19.next = 4;
                return this.restConnector.get("/users/".concat(userId, "/get-agent-transactions?filter=").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filter)));

              case 4:
                resp = _context19.sent;
                return _context19.abrupt("return", resp.data.transactions);

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function getTransactionInfo(_x22) {
        return _getTransactionInfo.apply(this, arguments);
      }

      return getTransactionInfo;
    }() // test

  }, {
    key: "getByUserId",
    value: function () {
      var _getByUserId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee20(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return this.restConnector.get("/users?filter={\"where\":{\n        \"id\": \"".concat(id, "\"}\n      }"));

              case 2:
                resp = _context20.sent;
                return _context20.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function getByUserId(_x23) {
        return _getByUserId.apply(this, arguments);
      }

      return getByUserId;
    }()
  }]);

  return UserGateway;
}();



/***/ }),

/***/ "./gateways/UserInvitationGateway.js":
/*!*******************************************!*\
  !*** ./gateways/UserInvitationGateway.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserInvitationGateway; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var UserInvitationGateway =
/*#__PURE__*/
function () {
  function UserInvitationGateway(_ref) {
    var restConnector = _ref.restConnector;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, UserInvitationGateway);

    this.restConnector = restConnector;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(UserInvitationGateway, [{
    key: "addNewInvitation",
    value: function () {
      var _addNewInvitation = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
        var firstName, lastName, email, role, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                firstName = _ref2.firstName, lastName = _ref2.lastName, email = _ref2.email, role = _ref2.role;
                _context.next = 3;
                return this.restConnector.post("/userInvitations", {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  role: role
                });

              case 3:
                resp = _context.sent;
                return _context.abrupt("return", resp.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addNewInvitation(_x) {
        return _addNewInvitation.apply(this, arguments);
      }

      return addNewInvitation;
    }()
  }, {
    key: "getInvitationById",
    value: function () {
      var _getInvitationById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.restConnector.get("/userInvitations/".concat(id));

              case 2:
                resp = _context2.sent;
                return _context2.abrupt("return", resp.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInvitationById(_x2) {
        return _getInvitationById.apply(this, arguments);
      }

      return getInvitationById;
    }()
  }]);

  return UserInvitationGateway;
}();



/***/ }),

/***/ "./hocs/nprogress.js":
/*!***************************!*\
  !*** ./hocs/nprogress.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


var delayMs = 300;
var timer = null; // when a route change start run a timeout to init the progress bar

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeStart = function () {
  timer = setTimeout(nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.start, delayMs);
}; // when completed finish the progress bar and clear the timeout


next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
  clearTimeout(timer);
}; // when errored finish the progress bar and clear the timeout


next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.done();
  clearTimeout(timer);
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _delayMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : delayMs;

  var configOptions = arguments.length > 1 ? arguments[1] : undefined;
  delayMs = _delayMs; // configure NProgress if configuration object is passed

  if (configOptions) nprogress__WEBPACK_IMPORTED_MODULE_0___default.a.configure(configOptions); // receive page and return it as is

  return function (Page) {
    return Page;
  };
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _hocs_nprogress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hocs/nprogress */ "./hocs/nprogress.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_14__);
















var ComposedApp =
/*#__PURE__*/
function (_App) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ComposedApp, _App);

  function ComposedApp() {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ComposedApp);

    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ComposedApp).apply(this, arguments));
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ComposedApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_10__["Container"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                _context.t1 = _context.t0;
                return _context.abrupt("return", {
                  pageProps: _context.t1
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ComposedApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_hocs_nprogress__WEBPACK_IMPORTED_MODULE_13__["default"])(300, {
  showSpinner: false
}), next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11___default()(_redux_store__WEBPACK_IMPORTED_MODULE_12__["makeStore"]))(ComposedApp));

/***/ }),

/***/ "./redux/globalRedux.js":
/*!******************************!*\
  !*** ./redux/globalRedux.js ***!
  \******************************/
/*! exports provided: reducer, actionTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony import */ var redux_crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-crud */ "redux-crud");
/* harmony import */ var redux_crud__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_crud__WEBPACK_IMPORTED_MODULE_0__);
 // types name

var NAME = 'global';
var reducer = redux_crud__WEBPACK_IMPORTED_MODULE_0___default.a.Map.reducersFor(NAME);
var actionTypes = redux_crud__WEBPACK_IMPORTED_MODULE_0___default.a.actionTypesFor(NAME);
var actionCreators = redux_crud__WEBPACK_IMPORTED_MODULE_0___default.a.actionCreatorsFor(NAME);
/* harmony default export */ __webpack_exports__["default"] = (actionCreators);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: makeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globalRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globalRedux */ "./redux/globalRedux.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./services/index.js");






var DEFAULT_INITIAL_STATE = {
  global: {
    loginUser: {
      id: 'loginUser',
      data: null
    },
    uiState: {
      id: 'uiState',
      data: {}
    },
    test: {
      id: 'test',
      data: 'In Progress'
    },
    parties: {
      id: 'parties',
      data: 'Main'
    },
    isToggleNew: {
      id: 'isToggleNew',
      data: false
    },
    dashboard: {
      id: 'dashboard',
      data: 'Main'
    }
  }
};
var makeStore = function makeStore(initialState) {
  var composeEnhancers =  false ? undefined : redux__WEBPACK_IMPORTED_MODULE_2__["compose"]; // state name redux

  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
    global: _globalRedux__WEBPACK_IMPORTED_MODULE_4__["reducer"]
  }), _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, DEFAULT_INITIAL_STATE, initialState), composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a.withExtraArgument(_services__WEBPACK_IMPORTED_MODULE_5__))));
};

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./services/ApplicationService.js":
/*!****************************************!*\
  !*** ./services/ApplicationService.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_models_Configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/Configuration */ "../common/models/Configuration.js");
/* harmony import */ var _validators_UserValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validators/UserValidator */ "./validators/UserValidator.js");








var ApplicationService =
/*#__PURE__*/
function () {
  function ApplicationService(options) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ApplicationService);

    this.applicationGateway = options.applicationGateway;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ApplicationService, [{
    key: "saveEmailAddressVerification",
    value: function () {
      var _saveEmailAddressVerification = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.applicationGateway.saveConfiguration({
                  id: _common_models_Configuration__WEBPACK_IMPORTED_MODULE_5__["ConfigurationId"].MAIL_EMAIL_ADDRESS_VERIFICATION,
                  data: data
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveEmailAddressVerification(_x) {
        return _saveEmailAddressVerification.apply(this, arguments);
      }

      return saveEmailAddressVerification;
    }()
  }, {
    key: "saveResetPassword",
    value: function () {
      var _saveResetPassword = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.applicationGateway.saveConfiguration({
                  id: _common_models_Configuration__WEBPACK_IMPORTED_MODULE_5__["ConfigurationId"].MAIL_RESET_PASSWORD,
                  data: data
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function saveResetPassword(_x2) {
        return _saveResetPassword.apply(this, arguments);
      }

      return saveResetPassword;
    }()
  }, {
    key: "emailTransactionInvitation",
    value: function () {
      var _emailTransactionInvitation = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.applicationGateway.saveConfiguration({
                  id: _common_models_Configuration__WEBPACK_IMPORTED_MODULE_5__["ConfigurationId"].MAIL_INVITATION,
                  data: data
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function emailTransactionInvitation(_x3) {
        return _emailTransactionInvitation.apply(this, arguments);
      }

      return emailTransactionInvitation;
    }()
  }, {
    key: "emailDocumentAddAction",
    value: function () {
      var _emailDocumentAddAction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.applicationGateway.saveConfiguration({
                  id: _common_models_Configuration__WEBPACK_IMPORTED_MODULE_5__["ConfigurationId"].MAIL_ADD_ACTION,
                  data: data
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function emailDocumentAddAction(_x4) {
        return _emailDocumentAddAction.apply(this, arguments);
      }

      return emailDocumentAddAction;
    }()
  }, {
    key: "saveSmtpSettings",
    value: function () {
      var _saveSmtpSettings = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.applicationGateway.saveConfiguration({
                  id: _common_models_Configuration__WEBPACK_IMPORTED_MODULE_5__["ConfigurationId"].MAIL_SMTP_SETTINGS,
                  data: data
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function saveSmtpSettings(_x5) {
        return _saveSmtpSettings.apply(this, arguments);
      }

      return saveSmtpSettings;
    }()
  }, {
    key: "getConfigurations",
    value: function () {
      var _getConfigurations = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(keys) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.applicationGateway.getConfigurations(keys));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getConfigurations(_x6) {
        return _getConfigurations.apply(this, arguments);
      }

      return getConfigurations;
    }()
  }, {
    key: "isValidSmtpEmailSettings",
    value: function () {
      var _isValidSmtpEmailSettings = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(settings) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.applicationGateway.verifySmtpEmailSettings(settings));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function isValidSmtpEmailSettings(_x7) {
        return _isValidSmtpEmailSettings.apply(this, arguments);
      }

      return isValidSmtpEmailSettings;
    }()
  }, {
    key: "checkAppHasBeenSetup",
    value: function () {
      var _checkAppHasBeenSetup = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var config;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return this.applicationGateway.getConfiguration(_common_models_Configuration__WEBPACK_IMPORTED_MODULE_5__["ConfigurationId"].SYSTEM_INITIALIZATION);

              case 3:
                config = _context8.sent;
                return _context8.abrupt("return", !!(config && config.status === _common_models_Configuration__WEBPACK_IMPORTED_MODULE_5__["SystemInitializationStatus"].FINISHED));

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                return _context8.abrupt("return", true);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 7]]);
      }));

      function checkAppHasBeenSetup() {
        return _checkAppHasBeenSetup.apply(this, arguments);
      }

      return checkAppHasBeenSetup;
    }()
  }, {
    key: "validateInitSystemPassword",
    value: function () {
      var _validateInitSystemPassword = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(password) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.applicationGateway.validateInitSystemPassword(password));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function validateInitSystemPassword(_x8) {
        return _validateInitSystemPassword.apply(this, arguments);
      }

      return validateInitSystemPassword;
    }()
  }, {
    key: "initializeSystem",
    value: function () {
      var _initializeSystem = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(_ref) {
        var password, admin;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                password = _ref.password, admin = _ref.admin;
                Object(_validators_UserValidator__WEBPACK_IMPORTED_MODULE_6__["validateUser"])(lodash__WEBPACK_IMPORTED_MODULE_4___default.a.pick(admin, ['name', 'email', 'password']));
                return _context10.abrupt("return", this.applicationGateway.initializeSystem({
                  password: password,
                  admin: admin
                }));

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function initializeSystem(_x9) {
        return _initializeSystem.apply(this, arguments);
      }

      return initializeSystem;
    }()
  }]);

  return ApplicationService;
}();



/***/ }),

/***/ "./services/AuthService.js":
/*!*********************************!*\
  !*** ./services/AuthService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserService */ "./services/UserService.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ */ "./services/index.js");
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BaseService */ "./services/BaseService.js");
/* harmony import */ var _validators_UserValidator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../validators/UserValidator */ "./validators/UserValidator.js");
/* harmony import */ var _common_models_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/models/Container */ "../common/models/Container.js");
/* harmony import */ var _common_models_User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/models/User */ "../common/models/User.js");
/* harmony import */ var _common_models_Role__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/models/Role */ "../common/models/Role.js");
















var AuthService =
/*#__PURE__*/
function (_BaseService) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AuthService, _BaseService);

  function AuthService(options) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AuthService);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(AuthService).call(this, options));
    _this.userGateway = options.userGateway;
    _this.roleGateway = options.roleGateway;
    _this.authGateway = options.authGateway;
    _this.storageGateway = options.storageGateway;
    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AuthService, [{
    key: "loginWithEmail",
    value: function () {
      var _loginWithEmail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var email, password, user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = _ref.email, password = _ref.password;
                _context.next = 3;
                return this.authGateway.loginWithEmail({
                  email: email,
                  password: password
                });

              case 3:
                user = _context.sent;
                this.emit(AuthService.Event.USER_LOGIN, {
                  type: 'email',
                  user: user
                });
                return _context.abrupt("return", user);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loginWithEmail(_x) {
        return _loginWithEmail.apply(this, arguments);
      }

      return loginWithEmail;
    }()
  }, {
    key: "getLoginUser",
    value: function () {
      var _getLoginUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.authGateway.getLoginUser());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getLoginUser() {
        return _getLoginUser.apply(this, arguments);
      }

      return getLoginUser;
    }()
  }, {
    key: "signupWithEmail",
    value: function () {
      var _signupWithEmail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref2) {
        var firstName, lastName, email, password, role, user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                firstName = _ref2.firstName, lastName = _ref2.lastName, email = _ref2.email, password = _ref2.password, role = _ref2.role;
                Object(_validators_UserValidator__WEBPACK_IMPORTED_MODULE_11__["validateUser"])({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password
                });

                if (!(role === _common_models_Role__WEBPACK_IMPORTED_MODULE_14__["default"].AGENT)) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 5;
                return this.userGateway.create({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password,
                  rank: _common_models_User__WEBPACK_IMPORTED_MODULE_13__["Rank"].AGENT,
                  cash: 0
                });

              case 5:
                user = _context3.sent;
                _context3.next = 11;
                break;

              case 8:
                _context3.next = 10;
                return this.userGateway.create({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password
                });

              case 10:
                user = _context3.sent;

              case 11:
                _context3.next = 13;
                return ___WEBPACK_IMPORTED_MODULE_9__["userService"]._setRoleForSignUpUser(user.id, role);

              case 13:
                this.emit(AuthService.Event.USER_SIGNUP, {
                  type: 'email',
                  user: user
                });
                return _context3.abrupt("return", this.loginWithEmail({
                  email: email,
                  password: password
                }));

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function signupWithEmail(_x2) {
        return _signupWithEmail.apply(this, arguments);
      }

      return signupWithEmail;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.authGateway.logout();

              case 2:
                this.emit(AuthService.Event.USER_LOGOUT);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function logout() {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: "sendResetPasswordEmail",
    value: function () {
      var _sendResetPasswordEmail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(email) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                Object(_validators_UserValidator__WEBPACK_IMPORTED_MODULE_11__["validateUser"])({
                  email: email
                });
                return _context5.abrupt("return", this.authGateway.sendResetPasswordEmail(email));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function sendResetPasswordEmail(_x3) {
        return _sendResetPasswordEmail.apply(this, arguments);
      }

      return sendResetPasswordEmail;
    }()
  }, {
    key: "updateAccountInfo",
    value: function () {
      var _updateAccountInfo = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(_ref3) {
        var name, email, preferredLanguage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                name = _ref3.name, email = _ref3.email, preferredLanguage = _ref3.preferredLanguage;
                Object(_validators_UserValidator__WEBPACK_IMPORTED_MODULE_11__["validateUser"])({
                  name: name,
                  email: email
                });
                _context6.next = 4;
                return this.authGateway.updateAccountInfo({
                  name: name,
                  email: email,
                  preferredLanguage: preferredLanguage
                });

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateAccountInfo(_x4) {
        return _updateAccountInfo.apply(this, arguments);
      }

      return updateAccountInfo;
    }()
  }, {
    key: "updatePassword",
    value: function () {
      var _updatePassword = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(_ref4) {
        var oldPassword, newPassword;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                oldPassword = _ref4.oldPassword, newPassword = _ref4.newPassword;
                Object(_validators_UserValidator__WEBPACK_IMPORTED_MODULE_11__["validateUser"])({
                  password: newPassword
                });
                _context7.next = 4;
                return this.authGateway.updatePassword({
                  oldPassword: oldPassword,
                  newPassword: newPassword
                });

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function updatePassword(_x5) {
        return _updatePassword.apply(this, arguments);
      }

      return updatePassword;
    }()
  }, {
    key: "setNewPassword",
    value: function () {
      var _setNewPassword = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(_ref5, accessToken) {
        var userId, newPassword;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                userId = _ref5.userId, newPassword = _ref5.newPassword;
                Object(_validators_UserValidator__WEBPACK_IMPORTED_MODULE_11__["validateUser"])({
                  password: newPassword
                });
                _context8.next = 4;
                return this.authGateway.setNewPassword({
                  userId: userId,
                  newPassword: newPassword
                }, accessToken);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function setNewPassword(_x6, _x7) {
        return _setNewPassword.apply(this, arguments);
      }

      return setNewPassword;
    }()
  }, {
    key: "uploadAvatar",
    value: function () {
      var _uploadAvatar = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(file) {
        var avatarUrl;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                Object(_validators_UserValidator__WEBPACK_IMPORTED_MODULE_11__["validateAvatarUpload"])(file);
                _context9.next = 3;
                return this.storageGateway.upload(_common_models_Container__WEBPACK_IMPORTED_MODULE_12__["Containers"].AVATAR, file);

              case 3:
                avatarUrl = _context9.sent;
                return _context9.abrupt("return", this.authGateway.updateAvatar(avatarUrl));

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function uploadAvatar(_x8) {
        return _uploadAvatar.apply(this, arguments);
      }

      return uploadAvatar;
    }()
  }, {
    key: "setAccessToken",
    value: function setAccessToken(accessToken) {
      this.authGateway.setAccessToken(accessToken);
    }
  }]);

  return AuthService;
}(_BaseService__WEBPACK_IMPORTED_MODULE_10__["default"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(AuthService, "Error", {
  LOGIN_FAILED: 'LOGIN_FAILED',
  EMAIL_NOT_FOUND: 'EMAIL_NOT_FOUND',
  INVALID_CURRENT_PASSWORD: 'INVALID_CURRENT_PASSWORD',
  INVALID_EMAIL: 'INVALID_EMAIL',
  ACCOUNT_INACTIVATED: 'ACCOUNT_INACTIVATED'
});

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(AuthService, "Event", {
  USER_LOGIN: 'USER_LOGIN',
  USER_SIGNUP: 'USER_SIGNUP',
  USER_LOGOUT: 'USER_LOGOUT'
});



/***/ }),

/***/ "./services/BaseService.js":
/*!*********************************!*\
  !*** ./services/BaseService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var BaseService =
/*#__PURE__*/
function () {
  function BaseService(_ref) {
    var pubsubGateway = _ref.pubsubGateway;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseService);

    this.pubsubGateway = pubsubGateway;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseService, [{
    key: "emit",
    value: function emit(eventType, data) {
      this.pubsubGateway.emit(eventType, data);
    }
  }, {
    key: "subscribe",
    value: function subscribe(eventType, handler) {
      this.pubsubGateway.subscribe(eventType, handler);
    }
  }]);

  return BaseService;
}();



/***/ }),

/***/ "./services/CommissionService.js":
/*!***************************************!*\
  !*** ./services/CommissionService.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommissionService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var CommissionService =
/*#__PURE__*/
function () {
  function CommissionService(options) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CommissionService);

    this.transactionCommissionGateway = options.transactionCommissionGateway;
    this.userCommissionGateway = options.userCommissionGateway;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CommissionService, [{
    key: "createTransactionCommission",
    value: function () {
      var _createTransactionCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.transactionCommissionGateway.create(data));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createTransactionCommission(_x) {
        return _createTransactionCommission.apply(this, arguments);
      }

      return createTransactionCommission;
    }()
  }, {
    key: "updateTransactionCommission",
    value: function () {
      var _updateTransactionCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id, data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.transactionCommissionGateway.updateById(id, data));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateTransactionCommission(_x2, _x3) {
        return _updateTransactionCommission.apply(this, arguments);
      }

      return updateTransactionCommission;
    }()
  }, {
    key: "updateUserCommissionByTransactionIdUserId",
    value: function () {
      var _updateUserCommissionByTransactionIdUserId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(transactionId, userId, data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.userCommissionGateway.updateByTransactionIdUserId(transactionId, userId, data));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateUserCommissionByTransactionIdUserId(_x4, _x5, _x6) {
        return _updateUserCommissionByTransactionIdUserId.apply(this, arguments);
      }

      return updateUserCommissionByTransactionIdUserId;
    }()
  }, {
    key: "deleteUserCommission",
    value: function () {
      var _deleteUserCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.userCommissionGateway.deleteById(id);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteUserCommission(_x7) {
        return _deleteUserCommission.apply(this, arguments);
      }

      return deleteUserCommission;
    }()
  }, {
    key: "deleteTransactionCommission",
    value: function () {
      var _deleteTransactionCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.transactionCommissionGateway.deleteById(id);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteTransactionCommission(_x8) {
        return _deleteTransactionCommission.apply(this, arguments);
      }

      return deleteTransactionCommission;
    }()
  }, {
    key: "getTransactionByCoordinator",
    value: function () {
      var _getTransactionByCoordinator = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(coordinatorId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.transactionCommissionGateway.findByCoordinator(coordinatorId));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getTransactionByCoordinator(_x9) {
        return _getTransactionByCoordinator.apply(this, arguments);
      }

      return getTransactionByCoordinator;
    }()
  }, {
    key: "findByTransactionId",
    value: function () {
      var _findByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(transactionId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.transactionCommissionGateway.findByTransactionId(transactionId));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function findByTransactionId(_x10) {
        return _findByTransactionId.apply(this, arguments);
      }

      return findByTransactionId;
    }()
  }, {
    key: "createUserCommission",
    value: function () {
      var _createUserCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.userCommissionGateway.create(data));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function createUserCommission(_x11) {
        return _createUserCommission.apply(this, arguments);
      }

      return createUserCommission;
    }()
  }, {
    key: "countCommission",
    value: function () {
      var _countCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(_ref) {
        var userId, type, isForThisYear;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                userId = _ref.userId, type = _ref.type, isForThisYear = _ref.isForThisYear;
                return _context9.abrupt("return", this.userCommissionGateway.countCommission({
                  userId: userId,
                  type: type,
                  isForThisYear: isForThisYear
                }));

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function countCommission(_x12) {
        return _countCommission.apply(this, arguments);
      }

      return countCommission;
    }()
  }, {
    key: "countCommissionPrevYear",
    value: function () {
      var _countCommissionPrevYear = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(_ref2) {
        var userId, type;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                userId = _ref2.userId, type = _ref2.type;
                return _context10.abrupt("return", this.userCommissionGateway.countCommissionPrevYear({
                  userId: userId,
                  type: type
                }));

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function countCommissionPrevYear(_x13) {
        return _countCommissionPrevYear.apply(this, arguments);
      }

      return countCommissionPrevYear;
    }()
  }, {
    key: "getUserCommissionThisYear",
    value: function () {
      var _getUserCommissionThisYear = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(userId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.userCommissionGateway.getUserCommissionThisYear(userId));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getUserCommissionThisYear(_x14) {
        return _getUserCommissionThisYear.apply(this, arguments);
      }

      return getUserCommissionThisYear;
    }()
  }, {
    key: "getCommissionByTransaction",
    value: function () {
      var _getCommissionByTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(transactionId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.userCommissionGateway.getCommissionByTransaction(transactionId));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getCommissionByTransaction(_x15) {
        return _getCommissionByTransaction.apply(this, arguments);
      }

      return getCommissionByTransaction;
    }()
  }, {
    key: "getAllCommission",
    value: function () {
      var _getAllCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", this.userCommissionGateway.getAllCommission());

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getAllCommission() {
        return _getAllCommission.apply(this, arguments);
      }

      return getAllCommission;
    }()
  }, {
    key: "getAllTransactionCommission",
    value: function () {
      var _getAllTransactionCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", this.transactionCommissionGateway.getAllTransactionCommission());

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getAllTransactionCommission() {
        return _getAllTransactionCommission.apply(this, arguments);
      }

      return getAllTransactionCommission;
    }()
  }, {
    key: "getAllAgentCommission",
    value: function () {
      var _getAllAgentCommission = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", this.userCommissionGateway.getAllAgentCommission());

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getAllAgentCommission() {
        return _getAllAgentCommission.apply(this, arguments);
      }

      return getAllAgentCommission;
    }()
  }]);

  return CommissionService;
}();



/***/ }),

/***/ "./services/EventService.js":
/*!**********************************!*\
  !*** ./services/EventService.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var EventService =
/*#__PURE__*/
function () {
  function EventService(options) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, EventService);

    this.eventGateway = options.eventGateway;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EventService, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.eventGateway.create(event));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "deleteEventWithId",
    value: function () {
      var _deleteEventWithId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.eventGateway.deleteById(id));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteEventWithId(_x2) {
        return _deleteEventWithId.apply(this, arguments);
      }

      return deleteEventWithId;
    }()
  }, {
    key: "updateEvent",
    value: function () {
      var _updateEvent = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.eventGateway.patch(event));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateEvent(_x3) {
        return _updateEvent.apply(this, arguments);
      }

      return updateEvent;
    }()
  }, {
    key: "getEventsForUser",
    value: function () {
      var _getEventsForUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(userId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.eventGateway.find({
                  or: [{
                    creatorUserId: userId
                  }, {
                    sharedUserIds: userId
                  }]
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getEventsForUser(_x4) {
        return _getEventsForUser.apply(this, arguments);
      }

      return getEventsForUser;
    }()
  }]);

  return EventService;
}();



/***/ }),

/***/ "./services/MessageService.js":
/*!************************************!*\
  !*** ./services/MessageService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var MessageService =
/*#__PURE__*/
function () {
  function MessageService(options) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, MessageService);

    this.messageGateway = options.messageGateway;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(MessageService, [{
    key: "listenToMyNewMessages",
    value: function listenToMyNewMessages(userId, callback) {
      this.messageGateway.listenToMyNewMessages(userId, callback);
    }
  }, {
    key: "unlistenToMyNewMessages",
    value: function unlistenToMyNewMessages(userId) {}
  }, {
    key: "sendToNewMessage",
    value: function () {
      var _sendToNewMessage = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var content, senderId, recipientId, type;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                content = _ref.content, senderId = _ref.senderId, recipientId = _ref.recipientId, type = _ref.type;
                return _context.abrupt("return", this.messageGateway.sendToNewMessage({
                  content: content,
                  senderId: senderId,
                  recipientId: recipientId,
                  type: type
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendToNewMessage(_x) {
        return _sendToNewMessage.apply(this, arguments);
      }

      return sendToNewMessage;
    }()
  }, {
    key: "sendToFile",
    value: function () {
      var _sendToFile = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {
        var file, senderId, recipientId, type;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                file = _ref2.file, senderId = _ref2.senderId, recipientId = _ref2.recipientId, type = _ref2.type;
                return _context2.abrupt("return", this.messageGateway.sendToFile({
                  file: file,
                  senderId: senderId,
                  recipientId: recipientId,
                  type: type
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sendToFile(_x2) {
        return _sendToFile.apply(this, arguments);
      }

      return sendToFile;
    }()
  }, {
    key: "getMyMessagesWithUser",
    value: function () {
      var _getMyMessagesWithUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(userId, recipientId, level) {
        var limit,
            page,
            order,
            where,
            total,
            data,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                limit = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : 15;
                page = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : 0;
                order = _args3.length > 5 && _args3[5] !== undefined ? _args3[5] : 'createdAt DESC';
                where = {
                  or: [{
                    senderId: userId,
                    recipientId: recipientId
                  }, {
                    senderId: recipientId,
                    recipientId: userId
                  }]
                };
                _context3.next = 6;
                return this.messageGateway.count(where);

              case 6:
                total = _context3.sent;
                _context3.next = 9;
                return this.messageGateway.find({
                  where: where,
                  limit: limit * level,
                  order: order,
                  skip: page * limit * level
                });

              case 9:
                data = _context3.sent;
                return _context3.abrupt("return", {
                  messages: data.reverse(),
                  totalPage: Math.ceil(total / limit)
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getMyMessagesWithUser(_x3, _x4, _x5) {
        return _getMyMessagesWithUser.apply(this, arguments);
      }

      return getMyMessagesWithUser;
    }()
  }]);

  return MessageService;
}();



/***/ }),

/***/ "./services/NewsService.js":
/*!*********************************!*\
  !*** ./services/NewsService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var NewsService =
/*#__PURE__*/
function () {
  function NewsService(options) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, NewsService);

    this.newsGateway = options.newsGateway;
  } // get all news


  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(NewsService, [{
    key: "getAllNew",
    value: function () {
      var _getAllNew = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.newsGateway.getAllNew());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllNew() {
        return _getAllNew.apply(this, arguments);
      }

      return getAllNew;
    }() // get news view

  }, {
    key: "getViewNews",
    value: function () {
      var _getViewNews = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.newsGateway.getViewNews());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getViewNews() {
        return _getViewNews.apply(this, arguments);
      }

      return getViewNews;
    }() // add new news

  }, {
    key: "addNewNews",
    value: function () {
      var _addNewNews = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref) {
        var title, content, newsType, status, creatorId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                title = _ref.title, content = _ref.content, newsType = _ref.newsType, status = _ref.status, creatorId = _ref.creatorId;
                return _context3.abrupt("return", this.newsGateway.addNewNews({
                  title: title,
                  content: content,
                  newsType: newsType,
                  status: status,
                  creatorId: creatorId
                }));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addNewNews(_x) {
        return _addNewNews.apply(this, arguments);
      }

      return addNewNews;
    }() // edit news

  }, {
    key: "editNewNews",
    value: function () {
      var _editNewNews = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id, _ref2) {
        var title, content, newsType, status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                title = _ref2.title, content = _ref2.content, newsType = _ref2.newsType, status = _ref2.status;
                return _context4.abrupt("return", this.newsGateway.editNewNews(id, {
                  title: title,
                  content: content,
                  newsType: newsType,
                  status: status
                }));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editNewNews(_x2, _x3) {
        return _editNewNews.apply(this, arguments);
      }

      return editNewNews;
    }() // delete news

  }, {
    key: "deleteNews",
    value: function () {
      var _deleteNews = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.newsGateway.deleteNews(id));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteNews(_x4) {
        return _deleteNews.apply(this, arguments);
      }

      return deleteNews;
    }()
  }]);

  return NewsService;
}();



/***/ }),

/***/ "./services/NotificationService.js":
/*!*****************************************!*\
  !*** ./services/NotificationService.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotificationService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_models_Notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/Notification */ "../common/models/Notification.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);








var NotificationService =
/*#__PURE__*/
function () {
  function NotificationService(options) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, NotificationService);

    this.notificationGateway = options.notificationGateway;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(NotificationService, [{
    key: "listenToMyNewNotifications",
    value: function () {
      var _listenToMyNewNotifications = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(userId, callback) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.notificationGateway.listenToMyNewNotification(userId, callback);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function listenToMyNewNotifications(_x, _x2) {
        return _listenToMyNewNotifications.apply(this, arguments);
      }

      return listenToMyNewNotifications;
    }()
  }, {
    key: "deleteWithIdUserAndType",
    value: function () {
      var _deleteWithIdUserAndType = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(userId, types) {
        var _this = this;

        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.notificationGateway.findNotificationWithData(userId, types);

              case 2:
                data = _context2.sent;
                return _context2.abrupt("return", data.map(function (data) {
                  _this.notificationGateway.deleteById(data.id);
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteWithIdUserAndType(_x3, _x4) {
        return _deleteWithIdUserAndType.apply(this, arguments);
      }

      return deleteWithIdUserAndType;
    }()
  }, {
    key: "findNotificationWithData",
    value: function () {
      var _findNotificationWithData = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(userId, types) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.notificationGateway.findNotificationWithData(userId, types));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findNotificationWithData(_x5, _x6) {
        return _findNotificationWithData.apply(this, arguments);
      }

      return findNotificationWithData;
    }()
  }, {
    key: "findNotificationDocumentWhithId",
    value: function () {
      var _findNotificationDocumentWhithId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(userId) {
        var actionAddToUser, uploadDocument, arrayDocument, sortNotificationDocument;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.notificationGateway.findNotificationWithData(userId, _common_models_Notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].ACTION_ADD_TO_USER);

              case 2:
                actionAddToUser = _context4.sent;
                _context4.next = 5;
                return this.notificationGateway.findNotificationWithData(userId, _common_models_Notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].UPLOAD_DOCUMENT);

              case 5:
                uploadDocument = _context4.sent;
                arrayDocument = [].concat(_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(actionAddToUser), _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(uploadDocument));
                sortNotificationDocument = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.orderBy(arrayDocument, ['createdAt'], ['desc']);
                return _context4.abrupt("return", sortNotificationDocument);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findNotificationDocumentWhithId(_x7) {
        return _findNotificationDocumentWhithId.apply(this, arguments);
      }

      return findNotificationDocumentWhithId;
    }()
  }, {
    key: "limitFindNotification",
    value: function () {
      var _limitFindNotification = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(userId, types) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.notificationGateway.limitFindNotification(userId, types));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function limitFindNotification(_x8, _x9) {
        return _limitFindNotification.apply(this, arguments);
      }

      return limitFindNotification;
    }()
  }, {
    key: "setWatchedNotification",
    value: function () {
      var _setWatchedNotification = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.notificationGateway.setWatchedNotification(id));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function setWatchedNotification(_x10) {
        return _setWatchedNotification.apply(this, arguments);
      }

      return setWatchedNotification;
    }()
  }, {
    key: "countWithData",
    value: function () {
      var _countWithData = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(userId, types) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.notificationGateway.countWithData(userId, types));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function countWithData(_x11, _x12) {
        return _countWithData.apply(this, arguments);
      }

      return countWithData;
    }()
  }, {
    key: "getAllNotificationMessage",
    value: function () {
      var _getAllNotificationMessage = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(userId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.notificationGateway.getAllNotificationMessage(userId));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getAllNotificationMessage(_x13) {
        return _getAllNotificationMessage.apply(this, arguments);
      }

      return getAllNotificationMessage;
    }()
  }, {
    key: "getAllNotificationNews",
    value: function () {
      var _getAllNotificationNews = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(userId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.notificationGateway.getAllNotificationNews(userId));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getAllNotificationNews(_x14) {
        return _getAllNotificationNews.apply(this, arguments);
      }

      return getAllNotificationNews;
    }()
  }, {
    key: "getAllNotificationAssign",
    value: function () {
      var _getAllNotificationAssign = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10(userId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.notificationGateway.getAllNotificationAssign(userId));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getAllNotificationAssign(_x15) {
        return _getAllNotificationAssign.apply(this, arguments);
      }

      return getAllNotificationAssign;
    }()
  }]);

  return NotificationService;
}();



/***/ }),

/***/ "./services/TaskService.js":
/*!*********************************!*\
  !*** ./services/TaskService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var TaskService =
/*#__PURE__*/
function () {
  function TaskService(options) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TaskService);

    this.taskGateway = options.taskGateway;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TaskService, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(task) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.taskGateway.create(task));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "deleteTaskWithId",
    value: function () {
      var _deleteTaskWithId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.taskGateway.deleteById(id));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteTaskWithId(_x2) {
        return _deleteTaskWithId.apply(this, arguments);
      }

      return deleteTaskWithId;
    }()
  }, {
    key: "updateTask",
    value: function () {
      var _updateTask = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(task) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.taskGateway.patch(task));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateTask(_x3) {
        return _updateTask.apply(this, arguments);
      }

      return updateTask;
    }()
  }, {
    key: "archiveTask",
    value: function () {
      var _archiveTask = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(taskId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.taskGateway.editTaskById(taskId, {
                  isActive: false
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function archiveTask(_x4) {
        return _archiveTask.apply(this, arguments);
      }

      return archiveTask;
    }()
  }, {
    key: "getTaskById",
    value: function () {
      var _getTaskById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.taskGateway.findById(id));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getTaskById(_x5) {
        return _getTaskById.apply(this, arguments);
      }

      return getTaskById;
    }()
  }, {
    key: "updateTaskById",
    value: function () {
      var _updateTaskById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id, task) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.taskGateway.editTaskById(id, task));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateTaskById(_x6, _x7) {
        return _updateTaskById.apply(this, arguments);
      }

      return updateTaskById;
    }()
  }, {
    key: "getActiveTasks",
    value: function () {
      var _getActiveTasks = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(userId, status) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.taskGateway.getTasksByIsActiveForUserId(userId, status, {
                  neq: false
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getActiveTasks(_x8, _x9) {
        return _getActiveTasks.apply(this, arguments);
      }

      return getActiveTasks;
    }()
  }, {
    key: "getArchiveTasks",
    value: function () {
      var _getArchiveTasks = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(userId, status) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.taskGateway.getTasksByIsActiveForUserId(userId, status, false));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getArchiveTasks(_x10, _x11) {
        return _getArchiveTasks.apply(this, arguments);
      }

      return getArchiveTasks;
    }()
  }, {
    key: "getTasksForUser",
    value: function () {
      var _getTasksForUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(userId, status) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.taskGateway.find({
                  status: status,
                  or: [{
                    creatorUserId: userId
                  }, {
                    sharedUserIds: userId
                  }]
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getTasksForUser(_x12, _x13) {
        return _getTasksForUser.apply(this, arguments);
      }

      return getTasksForUser;
    }()
  }, {
    key: "getAllTasksForUser",
    value: function () {
      var _getAllTasksForUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(userId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.taskGateway.find({
                  deadline: {
                    gte: new Date(0)
                  },
                  or: [{
                    creatorUserId: userId
                  }, {
                    sharedUserIds: userId
                  }]
                }));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getAllTasksForUser(_x14) {
        return _getAllTasksForUser.apply(this, arguments);
      }

      return getAllTasksForUser;
    }()
  }]);

  return TaskService;
}();



/***/ }),

/***/ "./services/TransactionService.js":
/*!****************************************!*\
  !*** ./services/TransactionService.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionService; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_models_Transaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/models/Transaction */ "../common/models/Transaction.js");
/* harmony import */ var _common_view_models_TransactionParty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/view-models/TransactionParty */ "../common/view-models/TransactionParty.js");











// export default class UserService {
//   constructor(options :{
//     userGateway : UserGateway
//   })
// }
var TransactionService =
/*#__PURE__*/
function () {
  function TransactionService(options) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, TransactionService);

    var transactionGateway = options.transactionGateway,
        transactionActivityGateway = options.transactionActivityGateway,
        transactionInvitationGateway = options.transactionInvitationGateway,
        transactionPartyGateway = options.transactionPartyGateway,
        documentGateway = options.documentGateway,
        documentActionGateway = options.documentActionGateway,
        transactionDetailGateway = options.transactionDetailGateway,
        userGateway = options.userGateway;
    this.transactionGateway = transactionGateway;
    this.transactionDetailGateway = transactionDetailGateway;
    this.transactionActivityGateway = transactionActivityGateway;
    this.transactionInvitationGateway = transactionInvitationGateway;
    this.transactionPartyGateway = transactionPartyGateway;
    this.documentGateway = documentGateway;
    this.documentActionGateway = documentActionGateway;
    this.userGateway = userGateway;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(TransactionService, [{
    key: "createTransaction",
    value: function () {
      var _createTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(_ref) {
        var ownerId, address, imageURL, url, description, closingDate, transactionType, transactionTypeStatus, status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ownerId = _ref.ownerId, address = _ref.address, imageURL = _ref.imageURL, url = _ref.url, description = _ref.description, closingDate = _ref.closingDate, transactionType = _ref.transactionType, transactionTypeStatus = _ref.transactionTypeStatus, status = _ref.status;
                return _context.abrupt("return", this.transactionGateway.create({
                  ownerId: ownerId,
                  address: address,
                  imageURL: imageURL,
                  url: url,
                  description: description,
                  closingDate: closingDate,
                  transactionType: transactionType,
                  transactionTypeStatus: transactionTypeStatus,
                  status: status
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createTransaction(_x) {
        return _createTransaction.apply(this, arguments);
      }

      return createTransaction;
    }()
  }, {
    key: "updateTransactionById",
    value: function () {
      var _updateTransactionById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(id, _ref2) {
        var address, transactionType, transactionTypeStatus, url, description, closingDate, status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = _ref2.address, transactionType = _ref2.transactionType, transactionTypeStatus = _ref2.transactionTypeStatus, url = _ref2.url, description = _ref2.description, closingDate = _ref2.closingDate, status = _ref2.status;
                return _context2.abrupt("return", this.transactionGateway.updateById(id, {
                  address: address,
                  transactionType: transactionType,
                  transactionTypeStatus: transactionTypeStatus,
                  url: url,
                  description: description,
                  closingDate: closingDate,
                  status: status
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateTransactionById(_x2, _x3) {
        return _updateTransactionById.apply(this, arguments);
      }

      return updateTransactionById;
    }()
  }, {
    key: "listenToMyDocumentAction",
    value: function listenToMyDocumentAction(userId, callback) {
      this.documentActionGateway.listenToMyDocumentAction(userId, callback);
    }
  }, {
    key: "listenToMyDocumentActionAdd",
    value: function listenToMyDocumentActionAdd(userId, callback) {
      this.documentActionGateway.listenToMyDocumentActionAdd(userId, callback);
    }
  }, {
    key: "createMainImage",
    value: function () {
      var _createMainImage = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(transactionId, file) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.transactionGateway.createMainImageById(transactionId, file));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function createMainImage(_x4, _x5) {
        return _createMainImage.apply(this, arguments);
      }

      return createMainImage;
    }()
  }, {
    key: "deleteImage",
    value: function () {
      var _deleteImage = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(transactionId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.transactionGateway.deleteImageById(transactionId));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteImage(_x6) {
        return _deleteImage.apply(this, arguments);
      }

      return deleteImage;
    }()
  }, {
    key: "createTransactionDetail",
    value: function () {
      var _createTransactionDetail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(detailId, _ref3) {
        var yearBuilt, bedrooms, squareFootage, schoolDistrict, type, bathrooms, lotSize, country, streetNumber, streetName, unitNumber, city, state, postalCode, county, mlsNumber, taxId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                yearBuilt = _ref3.yearBuilt, bedrooms = _ref3.bedrooms, squareFootage = _ref3.squareFootage, schoolDistrict = _ref3.schoolDistrict, type = _ref3.type, bathrooms = _ref3.bathrooms, lotSize = _ref3.lotSize, country = _ref3.country, streetNumber = _ref3.streetNumber, streetName = _ref3.streetName, unitNumber = _ref3.unitNumber, city = _ref3.city, state = _ref3.state, postalCode = _ref3.postalCode, county = _ref3.county, mlsNumber = _ref3.mlsNumber, taxId = _ref3.taxId;
                return _context5.abrupt("return", this.transactionDetailGateway.updateDetail(detailId, {
                  yearBuilt: yearBuilt,
                  bedrooms: bedrooms,
                  squareFootage: squareFootage,
                  schoolDistrict: schoolDistrict,
                  type: type,
                  bathrooms: bathrooms,
                  lotSize: lotSize,
                  country: country,
                  streetNumber: streetNumber,
                  streetName: streetName,
                  unitNumber: unitNumber,
                  city: city,
                  state: state,
                  postalCode: postalCode,
                  county: county,
                  mlsNumber: mlsNumber,
                  taxId: taxId
                }));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createTransactionDetail(_x7, _x8) {
        return _createTransactionDetail.apply(this, arguments);
      }

      return createTransactionDetail;
    }()
  }, {
    key: "createNewTransactionDetail",
    value: function () {
      var _createNewTransactionDetail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6(_ref4) {
        var yearBuilt, bedrooms, squareFootage, schoolDistrict, type, bathrooms, lotSize, country, streetNumber, streetName, unitNumber, city, state, postalCode, county, mlsNumber, taxId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                yearBuilt = _ref4.yearBuilt, bedrooms = _ref4.bedrooms, squareFootage = _ref4.squareFootage, schoolDistrict = _ref4.schoolDistrict, type = _ref4.type, bathrooms = _ref4.bathrooms, lotSize = _ref4.lotSize, country = _ref4.country, streetNumber = _ref4.streetNumber, streetName = _ref4.streetName, unitNumber = _ref4.unitNumber, city = _ref4.city, state = _ref4.state, postalCode = _ref4.postalCode, county = _ref4.county, mlsNumber = _ref4.mlsNumber, taxId = _ref4.taxId;
                return _context6.abrupt("return", this.transactionDetailGateway.createNewTransactionDetail({
                  yearBuilt: yearBuilt,
                  bedrooms: bedrooms,
                  squareFootage: squareFootage,
                  schoolDistrict: schoolDistrict,
                  type: type,
                  bathrooms: bathrooms,
                  lotSize: lotSize,
                  country: country,
                  streetNumber: streetNumber,
                  streetName: streetName,
                  unitNumber: unitNumber,
                  city: city,
                  state: state,
                  postalCode: postalCode,
                  county: county,
                  mlsNumber: mlsNumber,
                  taxId: taxId
                }));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function createNewTransactionDetail(_x9) {
        return _createNewTransactionDetail.apply(this, arguments);
      }

      return createNewTransactionDetail;
    }()
  }, {
    key: "getTransactionsForUser",
    value: function () {
      var _getTransactionsForUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.transactionGateway.findByOwnerId({
                  include: [{
                    parties: [{
                      documents: 'actions'
                    }, 'assignedActions', 'user']
                  }, 'invitations']
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getTransactionsForUser() {
        return _getTransactionsForUser.apply(this, arguments);
      }

      return getTransactionsForUser;
    }()
  }, {
    key: "getTransactionsDetailByTransactionId",
    value: function () {
      var _getTransactionsDetailByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee8(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.transactionGateway.findByTransactionId(id));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getTransactionsDetailByTransactionId(_x10) {
        return _getTransactionsDetailByTransactionId.apply(this, arguments);
      }

      return getTransactionsDetailByTransactionId;
    }()
  }, {
    key: "getMemberPartiesByTransaction",
    value: function () {
      var _getMemberPartiesByTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee9(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.transactionPartyGateway.getByTransactionId(id, {
                  include: ['user', {
                    documents: 'actions'
                  }]
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getMemberPartiesByTransaction(_x11) {
        return _getMemberPartiesByTransaction.apply(this, arguments);
      }

      return getMemberPartiesByTransaction;
    }()
  }, {
    key: "getDetailedTransactionAndActivityById",
    value: function () {
      var _getDetailedTransactionAndActivityById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee10(id) {
        var transaction, activitiesFull, detail;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.transactionGateway.findById(id, {
                  include: [{
                    parties: [{
                      documents: 'actions'
                    }, 'assignedActions', 'user']
                  }, 'invitations']
                });

              case 2:
                transaction = _context10.sent;
                _context10.next = 5;
                return this.transactionActivityGateway.getByTransactionId(id);

              case 5:
                activitiesFull = _context10.sent;
                _context10.next = 8;
                return this.transactionDetailGateway.getById(id);

              case 8:
                detail = _context10.sent;
                return _context10.abrupt("return", {
                  transaction: transaction,
                  activitiesFull: activitiesFull,
                  detail: detail
                });

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getDetailedTransactionAndActivityById(_x12) {
        return _getDetailedTransactionAndActivityById.apply(this, arguments);
      }

      return getDetailedTransactionAndActivityById;
    }()
  }, {
    key: "getTransactionVendor",
    value: function () {
      var _getTransactionVendor = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee11(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.transactionGateway.getTransactionVendor(id));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getTransactionVendor(_x13) {
        return _getTransactionVendor.apply(this, arguments);
      }

      return getTransactionVendor;
    }()
  }, {
    key: "getAllTransactionVer2",
    value: function () {
      var _getAllTransactionVer = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee12(userId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.transactionGateway.findById(userId, {
                  include: [{
                    parties: [{
                      documents: 'actions'
                    }, 'assignedActions', 'user']
                  }, 'invitations']
                }));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getAllTransactionVer2(_x14) {
        return _getAllTransactionVer.apply(this, arguments);
      }

      return getAllTransactionVer2;
    }()
  }, {
    key: "getMyTransactionsAndActivitiesForUser",
    value: function () {
      var _getMyTransactionsAndActivitiesForUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee13(userId) {
        var transactions, activities;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.transactionGateway.getMyTransactions();

              case 2:
                transactions = _context13.sent;
                _context13.next = 5;
                return this.transactionActivityGateway.getByActorId(userId);

              case 5:
                activities = _context13.sent;
                return _context13.abrupt("return", {
                  transactions: transactions,
                  activities: activities
                });

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getMyTransactionsAndActivitiesForUser(_x15) {
        return _getMyTransactionsAndActivitiesForUser.apply(this, arguments);
      }

      return getMyTransactionsAndActivitiesForUser;
    }()
  }, {
    key: "inviteParty",
    value: function () {
      var _inviteParty = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee14(_ref5) {
        var transactionId, role, firstName, lastName, email, phoneNumber, access;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                transactionId = _ref5.transactionId, role = _ref5.role, firstName = _ref5.firstName, lastName = _ref5.lastName, email = _ref5.email, phoneNumber = _ref5.phoneNumber, access = _ref5.access;
                return _context14.abrupt("return", this.transactionInvitationGateway.create({
                  transactionId: transactionId,
                  role: role,
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phoneNumber: phoneNumber,
                  access: access
                }));

              case 2:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function inviteParty(_x16) {
        return _inviteParty.apply(this, arguments);
      }

      return inviteParty;
    }()
  }, {
    key: "getInvitationById",
    value: function () {
      var _getInvitationById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee15(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", this.transactionInvitationGateway.findById(id));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getInvitationById(_x17) {
        return _getInvitationById.apply(this, arguments);
      }

      return getInvitationById;
    }()
  }, {
    key: "getDetailedTransactionInvitationById",
    value: function () {
      var _getDetailedTransactionInvitationById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee16(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this.transactionInvitationGateway.findById(id, {
                  include: 'transaction'
                }));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function getDetailedTransactionInvitationById(_x18) {
        return _getDetailedTransactionInvitationById.apply(this, arguments);
      }

      return getDetailedTransactionInvitationById;
    }()
  }, {
    key: "updateTransactionPartyInfo",
    value: function () {
      var _updateTransactionPartyInfo = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee17(_ref6, _ref7) {
        var userId, transactionId, firstName, lastName, email, phoneNumber, company, licenseNumber, transactionParty;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                userId = _ref6.userId, transactionId = _ref6.transactionId;
                firstName = _ref7.firstName, lastName = _ref7.lastName, email = _ref7.email, phoneNumber = _ref7.phoneNumber, company = _ref7.company, licenseNumber = _ref7.licenseNumber;
                _context17.next = 4;
                return this.transactionPartyGateway.getByTransactionIdAndUserId(transactionId, userId);

              case 4:
                transactionParty = _context17.sent;

                if (!transactionParty) {
                  _context17.next = 7;
                  break;
                }

                return _context17.abrupt("return", this.transactionPartyGateway.updateById(transactionParty.id, {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phoneNumber: phoneNumber,
                  company: company,
                  licenseNumber: licenseNumber
                }));

              case 7:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function updateTransactionPartyInfo(_x19, _x20) {
        return _updateTransactionPartyInfo.apply(this, arguments);
      }

      return updateTransactionPartyInfo;
    }()
  }, {
    key: "updateTransactionPartyById",
    value: function () {
      var _updateTransactionPartyById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee18(id, _ref8) {
        var firstName, lastName, email, role, phoneNumber, company, licenseNumber, access;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                firstName = _ref8.firstName, lastName = _ref8.lastName, email = _ref8.email, role = _ref8.role, phoneNumber = _ref8.phoneNumber, company = _ref8.company, licenseNumber = _ref8.licenseNumber, access = _ref8.access;
                return _context18.abrupt("return", this.transactionPartyGateway.updateById(id, {
                  firstName: firstName,
                  lastName: lastName,
                  role: role,
                  email: email,
                  phoneNumber: phoneNumber,
                  company: company,
                  licenseNumber: licenseNumber,
                  access: access
                }));

              case 2:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function updateTransactionPartyById(_x21, _x22) {
        return _updateTransactionPartyById.apply(this, arguments);
      }

      return updateTransactionPartyById;
    }() // async getTransactionParty ({findTransactionParties, where, skip, order, limit}) {
    //   const arrayTransactionParties = await this.transactionPartyGateway.findByData(
    //     findTransactionParties
    //   )
    //   let arrayTransaction =[]
    //   arrayTransactionParties.map( async transaction => {
    //     where.id = transaction.transactionId
    //     const dataTransaction = await this.transactionGateway.findByData({where, skip, order, limit})
    //     if (dataTransaction !== null) {
    //       arrayTransaction.push(dataTransaction)
    //     }
    //   })
    //   // const temp = await Promise.all(arrayTransaction)
    //   console.log('arrayTransaction',arrayTransaction);
    //   return arrayTransaction
    // }

  }, {
    key: "getTransactions",
    value: function () {
      var _getTransactions = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee19(_ref9) {
        var where, skip, order, limit, include;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                where = _ref9.where, skip = _ref9.skip, order = _ref9.order, limit = _ref9.limit, include = _ref9.include;
                return _context19.abrupt("return", this.transactionGateway.findByData({
                  where: where,
                  skip: skip,
                  order: order,
                  limit: limit,
                  include: include
                }));

              case 2:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function getTransactions(_x23) {
        return _getTransactions.apply(this, arguments);
      }

      return getTransactions;
    }()
  }, {
    key: "getDetailedDocumentByPartyId",
    value: function () {
      var _getDetailedDocumentByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee20(idParty) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this.documentGateway.getByPartyId(idParty, {
                  include: 'actions'
                }));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function getDetailedDocumentByPartyId(_x24) {
        return _getDetailedDocumentByPartyId.apply(this, arguments);
      }

      return getDetailedDocumentByPartyId;
    }()
  }, {
    key: "getDocumentsAndPartyByTransactionId",
    value: function () {
      var _getDocumentsAndPartyByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee21(transactionId) {
        var documents, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc, partyDetail, temp, party, user, name;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.documentGateway.getByTransactionId(transactionId);

              case 2:
                documents = _context21.sent;
                result = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context21.prev = 7;
                _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(documents);

              case 9:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context21.next = 28;
                  break;
                }

                doc = _step.value;
                partyDetail = null; // Vendor: not have creatorId

                if (!doc.creatorId) {
                  _context21.next = 25;
                  break;
                }

                // Normal document: Save in 'documents' folder
                temp = doc.uri.split('/');

                if (!(temp[temp.length - 2] === 'documents')) {
                  _context21.next = 25;
                  break;
                }

                _context21.next = 17;
                return this.transactionPartyGateway.findById(doc.creatorId);

              case 17:
                party = _context21.sent;
                _context21.next = 20;
                return this.userGateway.findById(party.userId);

              case 20:
                user = _context21.sent;
                name = Object(_common_view_models_TransactionParty__WEBPACK_IMPORTED_MODULE_9__["getFullName"])(party);

                if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(name)) {
                  name = user.name || Object(_common_view_models_TransactionParty__WEBPACK_IMPORTED_MODULE_9__["getFullName"])(user);
                }

                partyDetail = {
                  name: name,
                  email: party.email,
                  avatar: user.avatar
                };
                result.push(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, doc, {
                  party: partyDetail
                }));

              case 25:
                _iteratorNormalCompletion = true;
                _context21.next = 9;
                break;

              case 28:
                _context21.next = 34;
                break;

              case 30:
                _context21.prev = 30;
                _context21.t0 = _context21["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context21.t0;

              case 34:
                _context21.prev = 34;
                _context21.prev = 35;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 37:
                _context21.prev = 37;

                if (!_didIteratorError) {
                  _context21.next = 40;
                  break;
                }

                throw _iteratorError;

              case 40:
                return _context21.finish(37);

              case 41:
                return _context21.finish(34);

              case 42:
                return _context21.abrupt("return", result);

              case 43:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[7, 30, 34, 42], [35,, 37, 41]]);
      }));

      function getDocumentsAndPartyByTransactionId(_x25) {
        return _getDocumentsAndPartyByTransactionId.apply(this, arguments);
      }

      return getDocumentsAndPartyByTransactionId;
    }()
  }, {
    key: "getEnvelopeDocumentsAndPartyByTransactionId",
    value: function () {
      var _getEnvelopeDocumentsAndPartyByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee22(transactionId) {
        var documents, result, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, doc, partyDetail, temp, party, user, name;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return this.documentGateway.getByTransactionId(transactionId);

              case 2:
                documents = _context22.sent;
                result = [];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context22.prev = 7;
                _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(documents);

              case 9:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context22.next = 28;
                  break;
                }

                doc = _step2.value;
                partyDetail = null; // Vendor: not have creatorId

                if (!doc.creatorId) {
                  _context22.next = 25;
                  break;
                }

                // Envelope document: Save in 'documents' folder
                temp = doc.uri.split('/');

                if (!(temp[temp.length - 2] === 'envelopes')) {
                  _context22.next = 25;
                  break;
                }

                _context22.next = 17;
                return this.transactionPartyGateway.findById(doc.creatorId);

              case 17:
                party = _context22.sent;
                _context22.next = 20;
                return this.userGateway.findById(party.userId);

              case 20:
                user = _context22.sent;
                name = Object(_common_view_models_TransactionParty__WEBPACK_IMPORTED_MODULE_9__["getFullName"])(party);

                if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(name)) {
                  name = user.name || Object(_common_view_models_TransactionParty__WEBPACK_IMPORTED_MODULE_9__["getFullName"])(user);
                }

                partyDetail = {
                  name: name,
                  email: party.email,
                  avatar: user.avatar
                };
                result.push(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, doc, {
                  party: partyDetail
                }));

              case 25:
                _iteratorNormalCompletion2 = true;
                _context22.next = 9;
                break;

              case 28:
                _context22.next = 34;
                break;

              case 30:
                _context22.prev = 30;
                _context22.t0 = _context22["catch"](7);
                _didIteratorError2 = true;
                _iteratorError2 = _context22.t0;

              case 34:
                _context22.prev = 34;
                _context22.prev = 35;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 37:
                _context22.prev = 37;

                if (!_didIteratorError2) {
                  _context22.next = 40;
                  break;
                }

                throw _iteratorError2;

              case 40:
                return _context22.finish(37);

              case 41:
                return _context22.finish(34);

              case 42:
                return _context22.abrupt("return", result);

              case 43:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[7, 30, 34, 42], [35,, 37, 41]]);
      }));

      function getEnvelopeDocumentsAndPartyByTransactionId(_x26) {
        return _getEnvelopeDocumentsAndPartyByTransactionId.apply(this, arguments);
      }

      return getEnvelopeDocumentsAndPartyByTransactionId;
    }()
  }, {
    key: "getDocumentsAndPartyByPartyId",
    value: function () {
      var _getDocumentsAndPartyByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee24(partyId) {
        var _this = this;

        var documents, promise;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return this.documentGateway.findByPartyId(partyId);

              case 2:
                documents = _context24.sent;
                promise = documents.map(
                /*#__PURE__*/
                function () {
                  var _ref10 = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee23(doc) {
                    var party, user, name;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee23$(_context23) {
                      while (1) {
                        switch (_context23.prev = _context23.next) {
                          case 0:
                            _context23.next = 2;
                            return _this.transactionPartyGateway.findById(doc.creatorId);

                          case 2:
                            party = _context23.sent;
                            _context23.next = 5;
                            return _this.userGateway.findById(party.userId);

                          case 5:
                            user = _context23.sent;
                            name = Object(_common_view_models_TransactionParty__WEBPACK_IMPORTED_MODULE_9__["getFullName"])(party);

                            if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(name)) {
                              name = user.name || Object(_common_view_models_TransactionParty__WEBPACK_IMPORTED_MODULE_9__["getFullName"])(user);
                            }

                            return _context23.abrupt("return", _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, doc, {
                              party: {
                                name: name,
                                email: party.email,
                                avatar: user.avatar
                              }
                            }));

                          case 9:
                          case "end":
                            return _context23.stop();
                        }
                      }
                    }, _callee23);
                  }));

                  return function (_x28) {
                    return _ref10.apply(this, arguments);
                  };
                }());
                return _context24.abrupt("return", _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(promise));

              case 5:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function getDocumentsAndPartyByPartyId(_x27) {
        return _getDocumentsAndPartyByPartyId.apply(this, arguments);
      }

      return getDocumentsAndPartyByPartyId;
    }()
  }, {
    key: "getDocumentsByPartyId",
    value: function () {
      var _getDocumentsByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee25(partyId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", this.documentGateway.findByPartyId(partyId));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function getDocumentsByPartyId(_x29) {
        return _getDocumentsByPartyId.apply(this, arguments);
      }

      return getDocumentsByPartyId;
    }()
  }, {
    key: "getDocumentsByTransactionId",
    value: function () {
      var _getDocumentsByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee26(transactionId) {
        var documents, result, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, doc, isExist;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return this.documentGateway.getByTransactionId(transactionId);

              case 2:
                documents = _context26.sent;
                result = [];
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context26.prev = 7;
                _iterator3 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(documents);

              case 9:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context26.next = 18;
                  break;
                }

                doc = _step3.value;
                _context26.next = 13;
                return this.documentActionGateway.checkDocumentExistEnvelope(doc.id);

              case 13:
                isExist = _context26.sent;

                // Cannot create envelop with document of vendors
                if (!isExist && doc.role !== _common_models_Transaction__WEBPACK_IMPORTED_MODULE_8__["TransactionRole"].VENDORS) {
                  result.push(doc);
                }

              case 15:
                _iteratorNormalCompletion3 = true;
                _context26.next = 9;
                break;

              case 18:
                _context26.next = 24;
                break;

              case 20:
                _context26.prev = 20;
                _context26.t0 = _context26["catch"](7);
                _didIteratorError3 = true;
                _iteratorError3 = _context26.t0;

              case 24:
                _context26.prev = 24;
                _context26.prev = 25;

                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }

              case 27:
                _context26.prev = 27;

                if (!_didIteratorError3) {
                  _context26.next = 30;
                  break;
                }

                throw _iteratorError3;

              case 30:
                return _context26.finish(27);

              case 31:
                return _context26.finish(24);

              case 32:
                return _context26.abrupt("return", result);

              case 33:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this, [[7, 20, 24, 32], [25,, 27, 31]]);
      }));

      function getDocumentsByTransactionId(_x30) {
        return _getDocumentsByTransactionId.apply(this, arguments);
      }

      return getDocumentsByTransactionId;
    }()
  }, {
    key: "createFileDocument",
    value: function () {
      var _createFileDocument = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee27(_ref11) {
        var file, title, role, creatorId, partyId, transactionId, url, documentType;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                file = _ref11.file, title = _ref11.title, role = _ref11.role, creatorId = _ref11.creatorId, partyId = _ref11.partyId, transactionId = _ref11.transactionId, url = _ref11.url, documentType = _ref11.documentType;
                return _context27.abrupt("return", this.documentGateway.create({
                  file: file,
                  title: title,
                  role: role,
                  creatorId: creatorId,
                  partyId: partyId,
                  transactionId: transactionId,
                  url: url,
                  documentType: documentType
                }));

              case 2:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function createFileDocument(_x31) {
        return _createFileDocument.apply(this, arguments);
      }

      return createFileDocument;
    }()
  }, {
    key: "createDocumentAction",
    value: function () {
      var _createDocumentAction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee28(_ref12) {
        var action, documentId, assignedPartyId, creatorId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                action = _ref12.action, documentId = _ref12.documentId, assignedPartyId = _ref12.assignedPartyId, creatorId = _ref12.creatorId;
                return _context28.abrupt("return", this.documentActionGateway.create({
                  action: action,
                  documentId: documentId,
                  assignedPartyId: assignedPartyId,
                  creatorId: creatorId
                }));

              case 2:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function createDocumentAction(_x32) {
        return _createDocumentAction.apply(this, arguments);
      }

      return createDocumentAction;
    }()
  }, {
    key: "createDocumentsAction",
    value: function () {
      var _createDocumentsAction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee29(arrayAction) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                return _context29.abrupt("return", this.documentActionGateway.bulkCreate(arrayAction));

              case 1:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function createDocumentsAction(_x33) {
        return _createDocumentsAction.apply(this, arguments);
      }

      return createDocumentsAction;
    }()
  }, {
    key: "getActivitiesByActorId",
    value: function () {
      var _getActivitiesByActorId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee30(actorId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                return _context30.abrupt("return", this.transactionActivityGateway.getByActorId(actorId));

              case 1:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function getActivitiesByActorId(_x34) {
        return _getActivitiesByActorId.apply(this, arguments);
      }

      return getActivitiesByActorId;
    }()
  }, {
    key: "getActivitiesByPartyId",
    value: function () {
      var _getActivitiesByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee31(partyId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", this.transactionActivityGateway.getByPartyId(partyId));

              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function getActivitiesByPartyId(_x35) {
        return _getActivitiesByPartyId.apply(this, arguments);
      }

      return getActivitiesByPartyId;
    }()
  }, {
    key: "getDocumentActionByDocumentId",
    value: function () {
      var _getDocumentActionByDocumentId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee32(documentId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                return _context32.abrupt("return", this.documentActionGateway.getByDocumentId(documentId));

              case 1:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function getDocumentActionByDocumentId(_x36) {
        return _getDocumentActionByDocumentId.apply(this, arguments);
      }

      return getDocumentActionByDocumentId;
    }()
  }, {
    key: "getAllDocumentVendorByTransactionId",
    value: function () {
      var _getAllDocumentVendorByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee33(transactionId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                return _context33.abrupt("return", this.documentGateway.getAllDocumentVendor(transactionId));

              case 1:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function getAllDocumentVendorByTransactionId(_x37) {
        return _getAllDocumentVendorByTransactionId.apply(this, arguments);
      }

      return getAllDocumentVendorByTransactionId;
    }()
  }, {
    key: "updateDocumentActionById",
    value: function () {
      var _updateDocumentActionById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee34(id, _ref13) {
        var action, status, documentId, assignedPartyId, creatorId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                action = _ref13.action, status = _ref13.status, documentId = _ref13.documentId, assignedPartyId = _ref13.assignedPartyId, creatorId = _ref13.creatorId;
                return _context34.abrupt("return", this.documentActionGateway.updateById(id, {
                  action: action,
                  status: status,
                  documentId: documentId,
                  assignedPartyId: assignedPartyId,
                  creatorId: creatorId
                }));

              case 2:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function updateDocumentActionById(_x38, _x39) {
        return _updateDocumentActionById.apply(this, arguments);
      }

      return updateDocumentActionById;
    }()
  }, {
    key: "getDocumentByTransactionId",
    value: function () {
      var _getDocumentByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee35(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                return _context35.abrupt("return", this.documentGateway.getByTransactionId(id));

              case 1:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function getDocumentByTransactionId(_x40) {
        return _getDocumentByTransactionId.apply(this, arguments);
      }

      return getDocumentByTransactionId;
    }()
  }, {
    key: "getAllAgentParty",
    value: function () {
      var _getAllAgentParty = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee36(userId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", this.transactionPartyGateway.getAllAgentParty(userId));

              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function getAllAgentParty(_x41) {
        return _getAllAgentParty.apply(this, arguments);
      }

      return getAllAgentParty;
    }()
  }, {
    key: "getDocumentById",
    value: function () {
      var _getDocumentById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee37(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                return _context37.abrupt("return", this.documentGateway.getById(id, {
                  include: 'actions'
                }));

              case 1:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function getDocumentById(_x42) {
        return _getDocumentById.apply(this, arguments);
      }

      return getDocumentById;
    }()
  }, {
    key: "getDetailedDocumentsForParties",
    value: function () {
      var _getDetailedDocumentsForParties = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee39(parties) {
        var _this2 = this;

        var documents;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                documents = parties.map(
                /*#__PURE__*/
                function () {
                  var _ref14 = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee38(party) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee38$(_context38) {
                      while (1) {
                        switch (_context38.prev = _context38.next) {
                          case 0:
                            return _context38.abrupt("return", _this2.documentGateway.getByPartyId(party.id, {
                              include: 'actions'
                            }));

                          case 1:
                          case "end":
                            return _context38.stop();
                        }
                      }
                    }, _callee38);
                  }));

                  return function (_x44) {
                    return _ref14.apply(this, arguments);
                  };
                }());
                return _context39.abrupt("return", _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(documents));

              case 2:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39);
      }));

      function getDetailedDocumentsForParties(_x43) {
        return _getDetailedDocumentsForParties.apply(this, arguments);
      }

      return getDetailedDocumentsForParties;
    }()
  }, {
    key: "getDocumentActionsAssignedToParty",
    value: function () {
      var _getDocumentActionsAssignedToParty = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee40(partyId, where) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                return _context40.abrupt("return", this.documentActionGateway.findByPartyId(partyId, where));

              case 1:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      function getDocumentActionsAssignedToParty(_x45, _x46) {
        return _getDocumentActionsAssignedToParty.apply(this, arguments);
      }

      return getDocumentActionsAssignedToParty;
    }()
  }, {
    key: "getDocumentActionsByPartyId",
    value: function () {
      var _getDocumentActionsByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee41(partyId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                return _context41.abrupt("return", this.documentActionGateway.getByPartyId(partyId));

              case 1:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      function getDocumentActionsByPartyId(_x47) {
        return _getDocumentActionsByPartyId.apply(this, arguments);
      }

      return getDocumentActionsByPartyId;
    }()
  }, {
    key: "countDocumentActionsByPartyId",
    value: function () {
      var _countDocumentActionsByPartyId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee42(partyId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                return _context42.abrupt("return", this.documentActionGateway.countDocumentActionsByPartyId(partyId));

              case 1:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      function countDocumentActionsByPartyId(_x48) {
        return _countDocumentActionsByPartyId.apply(this, arguments);
      }

      return countDocumentActionsByPartyId;
    }()
  }, {
    key: "getDocumentActionsByDocumentId",
    value: function () {
      var _getDocumentActionsByDocumentId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee43(documentId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                return _context43.abrupt("return", this.documentActionGateway.getByDocumentId(documentId));

              case 1:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function getDocumentActionsByDocumentId(_x49) {
        return _getDocumentActionsByDocumentId.apply(this, arguments);
      }

      return getDocumentActionsByDocumentId;
    }()
  }, {
    key: "getTransactionPartyByUserId",
    value: function () {
      var _getTransactionPartyByUserId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee44(transactionId, userId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                return _context44.abrupt("return", this.transactionPartyGateway.getByTransactionIdAndUserId(transactionId, userId));

              case 1:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function getTransactionPartyByUserId(_x50, _x51) {
        return _getTransactionPartyByUserId.apply(this, arguments);
      }

      return getTransactionPartyByUserId;
    }()
  }, {
    key: "getPartiesForTransaction",
    value: function () {
      var _getPartiesForTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee45(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                return _context45.abrupt("return", this.transactionGateway.findById(id, {
                  include: 'parties'
                }));

              case 1:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      function getPartiesForTransaction(_x52) {
        return _getPartiesForTransaction.apply(this, arguments);
      }

      return getPartiesForTransaction;
    }()
  }, {
    key: "getAllTransaction",
    value: function () {
      var _getAllTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee46() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                return _context46.abrupt("return", this.transactionGateway.getAllTransaction());

              case 1:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      function getAllTransaction() {
        return _getAllTransaction.apply(this, arguments);
      }

      return getAllTransaction;
    }()
  }, {
    key: "deleteTransactionById",
    value: function () {
      var _deleteTransactionById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee47(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                return _context47.abrupt("return", this.transactionGateway.deleteTransactionById(id));

              case 1:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      function deleteTransactionById(_x53) {
        return _deleteTransactionById.apply(this, arguments);
      }

      return deleteTransactionById;
    }()
  }, {
    key: "updateSignDocumentById",
    value: function () {
      var _updateSignDocumentById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee48(documentActionId, _ref15) {
        var file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                file = _ref15.file;
                return _context48.abrupt("return", this.documentActionGateway.updateSignDocumentById(documentActionId, {
                  file: file
                }));

              case 2:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      function updateSignDocumentById(_x54, _x55) {
        return _updateSignDocumentById.apply(this, arguments);
      }

      return updateSignDocumentById;
    }()
  }, {
    key: "archiveTransaction",
    value: function () {
      var _archiveTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee49(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                return _context49.abrupt("return", this.transactionGateway.archiveTransaction(id));

              case 1:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function archiveTransaction(_x56) {
        return _archiveTransaction.apply(this, arguments);
      }

      return archiveTransaction;
    }()
  }, {
    key: "closeTransaction",
    value: function () {
      var _closeTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee50(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                return _context50.abrupt("return", this.transactionGateway.closeTransaction(id));

              case 1:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function closeTransaction(_x57) {
        return _closeTransaction.apply(this, arguments);
      }

      return closeTransaction;
    }()
  }, {
    key: "getTransactionWithUserRoles",
    value: function () {
      var _getTransactionWithUserRoles = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee51(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                return _context51.abrupt("return", this.transactionGateway.getTransactionWithUserRoles(id));

              case 1:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      function getTransactionWithUserRoles(_x58) {
        return _getTransactionWithUserRoles.apply(this, arguments);
      }

      return getTransactionWithUserRoles;
    }()
  }, {
    key: "getAllAgents",
    value: function () {
      var _getAllAgents = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee52(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                return _context52.abrupt("return", this.transactionGateway.getAllAgentsInTransaction(id));

              case 1:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));

      function getAllAgents(_x59) {
        return _getAllAgents.apply(this, arguments);
      }

      return getAllAgents;
    }()
  }, {
    key: "getAgentTransaction",
    value: function () {
      var _getAgentTransaction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee53(userId, where, skip, order, limit) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                return _context53.abrupt("return", this.transactionPartyGateway.getAgentTransaction(userId, where, skip, order, limit));

              case 1:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));

      function getAgentTransaction(_x60, _x61, _x62, _x63, _x64) {
        return _getAgentTransaction.apply(this, arguments);
      }

      return getAgentTransaction;
    }()
  }, {
    key: "getUriToSignDocument",
    value: function () {
      var _getUriToSignDocument = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee54(id, _ref16) {
        var signers, creatorId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                signers = _ref16.signers, creatorId = _ref16.creatorId;
                return _context54.abrupt("return", this.documentGateway.getUriToSignDocument(id, {
                  signers: signers,
                  creatorId: creatorId
                }));

              case 2:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      function getUriToSignDocument(_x65, _x66) {
        return _getUriToSignDocument.apply(this, arguments);
      }

      return getUriToSignDocument;
    }()
  }, {
    key: "getSignLink",
    value: function () {
      var _getSignLink = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee55(documentId, envelopeId, party) {
        var name, user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                name = Object(_common_view_models_TransactionParty__WEBPACK_IMPORTED_MODULE_9__["getFullName"])(party);

                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(name)) {
                  _context55.next = 6;
                  break;
                }

                _context55.next = 4;
                return this.userGateway.findById(party.userId);

              case 4:
                user = _context55.sent;
                name = user.name || Object(_common_view_models_TransactionParty__WEBPACK_IMPORTED_MODULE_9__["getFullName"])(user);

              case 6:
                return _context55.abrupt("return", this.documentGateway.getSignLink(documentId, {
                  envelopeId: envelopeId,
                  partyId: party.id,
                  email: party.email,
                  name: name
                }));

              case 7:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));

      function getSignLink(_x67, _x68, _x69) {
        return _getSignLink.apply(this, arguments);
      }

      return getSignLink;
    }()
  }, {
    key: "createTransactionParty",
    value: function () {
      var _createTransactionParty = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee56(data) {
        var user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                _context56.next = 2;
                return this.userGateway.findByEmail(data.email);

              case 2:
                user = _context56.sent;

                if (user) {
                  _context56.next = 5;
                  break;
                }

                return _context56.abrupt("return", this.transactionInvitationGateway.create(data));

              case 5:
                return _context56.abrupt("return", this.transactionPartyGateway.create(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, data, {
                  userId: user.id
                })));

              case 6:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));

      function createTransactionParty(_x70) {
        return _createTransactionParty.apply(this, arguments);
      }

      return createTransactionParty;
    }()
  }, {
    key: "getPartyByTransactionIdAndUserId",
    value: function () {
      var _getPartyByTransactionIdAndUserId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee57(transactionId, userId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                return _context57.abrupt("return", this.transactionPartyGateway.getByTransactionIdAndUserId(transactionId, userId));

              case 1:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));

      function getPartyByTransactionIdAndUserId(_x71, _x72) {
        return _getPartyByTransactionIdAndUserId.apply(this, arguments);
      }

      return getPartyByTransactionIdAndUserId;
    }()
  }, {
    key: "getPartiesByTransactionId",
    value: function () {
      var _getPartiesByTransactionId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee59(transactionId) {
        var _this3 = this;

        var parties, promise;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                _context59.next = 2;
                return this.transactionPartyGateway.findByTransactionId(transactionId);

              case 2:
                parties = _context59.sent;
                promise = parties.map(
                /*#__PURE__*/
                function () {
                  var _ref17 = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee58(party) {
                    var name, user;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee58$(_context58) {
                      while (1) {
                        switch (_context58.prev = _context58.next) {
                          case 0:
                            name = Object(_common_view_models_TransactionParty__WEBPACK_IMPORTED_MODULE_9__["getFullName"])(party);

                            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(name)) {
                              _context58.next = 6;
                              break;
                            }

                            _context58.next = 4;
                            return _this3.userGateway.findById(party.userId);

                          case 4:
                            user = _context58.sent;
                            name = user.name || Object(_common_view_models_TransactionParty__WEBPACK_IMPORTED_MODULE_9__["getFullName"])(user);

                          case 6:
                            return _context58.abrupt("return", _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, party, {
                              name: name
                            }));

                          case 7:
                          case "end":
                            return _context58.stop();
                        }
                      }
                    }, _callee58);
                  }));

                  return function (_x74) {
                    return _ref17.apply(this, arguments);
                  };
                }());
                return _context59.abrupt("return", _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(promise));

              case 5:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));

      function getPartiesByTransactionId(_x73) {
        return _getPartiesByTransactionId.apply(this, arguments);
      }

      return getPartiesByTransactionId;
    }()
  }, {
    key: "makeDoneDocumentAction",
    value: function () {
      var _makeDoneDocumentAction = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee60(actionId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                return _context60.abrupt("return", this.documentActionGateway.makeDone(actionId));

              case 1:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      function makeDoneDocumentAction(_x75) {
        return _makeDoneDocumentAction.apply(this, arguments);
      }

      return makeDoneDocumentAction;
    }()
  }, {
    key: "updateTransactionPercent",
    value: function () {
      var _updateTransactionPercent = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee61(transactionId, percent) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                return _context61.abrupt("return", this.transactionGateway.updateTransactionPercent(transactionId, percent));

              case 1:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));

      function updateTransactionPercent(_x76, _x77) {
        return _updateTransactionPercent.apply(this, arguments);
      }

      return updateTransactionPercent;
    }()
  }]);

  return TransactionService;
}();



/***/ }),

/***/ "./services/UserInvitationService.js":
/*!*******************************************!*\
  !*** ./services/UserInvitationService.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserInvitationService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _validators_UserValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/UserValidator */ "./validators/UserValidator.js");






var UserInvitationService =
/*#__PURE__*/
function () {
  function UserInvitationService(options) {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, UserInvitationService);

    this.userInvitationGateway = options.userInvitationGateway;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(UserInvitationService, [{
    key: "addNewInvitation",
    value: function () {
      var _addNewInvitation = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var firstName, lastName, email, role;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                firstName = _ref.firstName, lastName = _ref.lastName, email = _ref.email, role = _ref.role;
                Object(_validators_UserValidator__WEBPACK_IMPORTED_MODULE_4__["validateUser"])({
                  firstName: firstName,
                  lastName: lastName,
                  email: email
                });
                return _context.abrupt("return", this.userInvitationGateway.addNewInvitation({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  role: role
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addNewInvitation(_x) {
        return _addNewInvitation.apply(this, arguments);
      }

      return addNewInvitation;
    }()
  }, {
    key: "getInvitationById",
    value: function () {
      var _getInvitationById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.userInvitationGateway.getInvitationById(id));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInvitationById(_x2) {
        return _getInvitationById.apply(this, arguments);
      }

      return getInvitationById;
    }()
  }]);

  return UserInvitationService;
}();



/***/ }),

/***/ "./services/UserService.js":
/*!*********************************!*\
  !*** ./services/UserService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BaseService */ "./services/BaseService.js");
/* harmony import */ var _validators_UserValidator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../validators/UserValidator */ "./validators/UserValidator.js");
/* harmony import */ var _common_models_Role__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/models/Role */ "../common/models/Role.js");











var UserService =
/*#__PURE__*/
function (_BaseService) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(UserService, _BaseService);

  function UserService(options) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, UserService);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(UserService).call(this, options));
    var userGateway = options.userGateway,
        roleGateway = options.roleGateway,
        invitationGateway = options.invitationGateway;
    _this.userGateway = userGateway;
    _this.roleGateway = roleGateway;
    _this.invitationGateway = invitationGateway;
    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(UserService, [{
    key: "getUsersForAdmin",
    value: function () {
      var _getUsersForAdmin = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var where, skip, _ref$order, order, limit, total, users;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                where = _ref.where, skip = _ref.skip, _ref$order = _ref.order, order = _ref$order === void 0 ? 'createdAt DESC' : _ref$order, limit = _ref.limit;
                _context.next = 3;
                return this.userGateway.count(where);

              case 3:
                total = _context.sent;
                _context.next = 6;
                return this.userGateway.find({
                  where: where,
                  skip: skip,
                  order: order,
                  limit: limit,
                  include: 'roles'
                });

              case 6:
                users = _context.sent;
                return _context.abrupt("return", {
                  total: total,
                  users: users
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUsersForAdmin(_x) {
        return _getUsersForAdmin.apply(this, arguments);
      }

      return getUsersForAdmin;
    }() // async getUsersForTC ({ where }) {
    //   const total = await this.userGateway.count(where)
    //   const users = await this.userGateway.find({
    //     where
    //   })
    //   return { total, users }
    // }

  }, {
    key: "getRolesForAdmin",
    value: function () {
      var _getRolesForAdmin = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {
        var where, skip, order, limit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                where = _ref2.where, skip = _ref2.skip, order = _ref2.order, limit = _ref2.limit;
                return _context2.abrupt("return", this.roleGateway.find({
                  where: where,
                  skip: skip,
                  order: order,
                  limit: limit
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getRolesForAdmin(_x2) {
        return _getRolesForAdmin.apply(this, arguments);
      }

      return getRolesForAdmin;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref3) {
        var firstName, lastName, email, password, isInactive, role, user, isReferredUser;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                firstName = _ref3.firstName, lastName = _ref3.lastName, email = _ref3.email, password = _ref3.password, isInactive = _ref3.isInactive, role = _ref3.role;
                Object(_validators_UserValidator__WEBPACK_IMPORTED_MODULE_8__["validateUser"])({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password
                });
                _context3.next = 4;
                return this.userGateway.create({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password,
                  isInactive: isInactive
                });

              case 4:
                user = _context3.sent;
                _context3.next = 7;
                return this.invitationGateway.findByEmail(email);

              case 7:
                isReferredUser = _context3.sent;

                if (!isReferredUser) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 11;
                return this.invitationGateway.acceptInvatation(isReferredUser.id);

              case 11:
                if (!(user && role)) {
                  _context3.next = 14;
                  break;
                }

                _context3.next = 14;
                return this._setRoleForUser(user.id, role);

              case 14:
                if (!(role === _common_models_Role__WEBPACK_IMPORTED_MODULE_9__["default"].AGENT)) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 17;
                return this.addRankAndCashForAgent(user.id, _common_models_Role__WEBPACK_IMPORTED_MODULE_9__["default"].AGENT);

              case 17:
                if (!(role === _common_models_Role__WEBPACK_IMPORTED_MODULE_9__["default"].COORDINATOR)) {
                  _context3.next = 20;
                  break;
                }

                _context3.next = 20;
                return this.addRankAndCashForAgent(user.id, _common_models_Role__WEBPACK_IMPORTED_MODULE_9__["default"].COORDINATOR);

              case 20:
                return _context3.abrupt("return", user);

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function createUser(_x3) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "getAllUser",
    value: function () {
      var _getAllUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.userGateway.getAllUser());

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAllUser() {
        return _getAllUser.apply(this, arguments);
      }

      return getAllUser;
    }()
  }, {
    key: "getUserFromId",
    value: function () {
      var _getUserFromId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.userGateway.findById(id));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getUserFromId(_x4) {
        return _getUserFromId.apply(this, arguments);
      }

      return getUserFromId;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(_ref4) {
        var id, firstName, lastName, email, emailVerified, isInactive, role, user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = _ref4.id, firstName = _ref4.firstName, lastName = _ref4.lastName, email = _ref4.email, emailVerified = _ref4.emailVerified, isInactive = _ref4.isInactive, role = _ref4.role;
                Object(_validators_UserValidator__WEBPACK_IMPORTED_MODULE_8__["validateUser"])({
                  firstName: firstName,
                  lastName: lastName,
                  email: email
                }); // const user = await this.userGateway.findById(id)

                _context6.next = 4;
                return this.userGateway.updateById(id, {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  emailVerified: emailVerified,
                  isInactive: isInactive
                });

              case 4:
                user = _context6.sent;

                if (!(user && role)) {
                  _context6.next = 8;
                  break;
                }

                _context6.next = 8;
                return this._setRoleForUser(id, role);

              case 8:
                return _context6.abrupt("return", user);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateUser(_x5) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
  }, {
    key: "updateInfoUser",
    value: function () {
      var _updateInfoUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id, _ref5) {
        var firstName, lastName, dateOfBirth, gender, company, phone, location, bio;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                firstName = _ref5.firstName, lastName = _ref5.lastName, dateOfBirth = _ref5.dateOfBirth, gender = _ref5.gender, company = _ref5.company, phone = _ref5.phone, location = _ref5.location, bio = _ref5.bio;
                return _context7.abrupt("return", this.userGateway.updateInfoById(id, {
                  firstName: firstName,
                  lastName: lastName,
                  dateOfBirth: dateOfBirth,
                  gender: gender,
                  company: company,
                  phone: phone,
                  location: location,
                  bio: bio
                }));

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function updateInfoUser(_x6, _x7) {
        return _updateInfoUser.apply(this, arguments);
      }

      return updateInfoUser;
    }()
  }, {
    key: "deleteUserWithId",
    value: function () {
      var _deleteUserWithId = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.userGateway.deleteById(id));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function deleteUserWithId(_x8) {
        return _deleteUserWithId.apply(this, arguments);
      }

      return deleteUserWithId;
    }()
  }, {
    key: "uploadCoverImageUser",
    value: function () {
      var _uploadCoverImageUser = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(id, file) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.userGateway.uploadCoverImage(id, file));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function uploadCoverImageUser(_x9, _x10) {
        return _uploadCoverImageUser.apply(this, arguments);
      }

      return uploadCoverImageUser;
    }()
  }, {
    key: "count",
    value: function () {
      var _count = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(where) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.userGateway.count(where));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function count(_x11) {
        return _count.apply(this, arguments);
      }

      return count;
    }()
  }, {
    key: "getMyMessagingParties",
    value: function () {
      var _getMyMessagingParties = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.userGateway.getMyMessagingParties());

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getMyMessagingParties() {
        return _getMyMessagingParties.apply(this, arguments);
      }

      return getMyMessagingParties;
    }()
  }, {
    key: "updateUserAvatar",
    value: function () {
      var _updateUserAvatar = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(userId, file) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.userGateway.updateUserAvatarById(userId, file));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function updateUserAvatar(_x12, _x13) {
        return _updateUserAvatar.apply(this, arguments);
      }

      return updateUserAvatar;
    }()
    /**
     * This is the art of domain drive design. Although the back-end support 1 user having multiple roles.
     * The service is about implementing use case with the assumption that 1 user has 1 role.
     * @param userId
     * @param role
     * @return {Promise.<void>}
     */

  }, {
    key: "_setRoleForUser",
    value: function () {
      var _setRoleForUser2 = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(userId, role) {
        var roleData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.userGateway.deleteAllRoles(userId);

              case 2:
                _context13.next = 4;
                return this.roleGateway.findOne({
                  where: {
                    name: role
                  }
                });

              case 4:
                roleData = _context13.sent;
                _context13.next = 7;
                return this.roleGateway.createPrincipal({
                  roleId: roleData.id,
                  principalId: userId
                });

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function _setRoleForUser(_x14, _x15) {
        return _setRoleForUser2.apply(this, arguments);
      }

      return _setRoleForUser;
    }()
  }, {
    key: "_setRoleForSignUpUser",
    value: function () {
      var _setRoleForSignUpUser2 = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(userId, role) {
        var roleData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.roleGateway.findOne({
                  where: {
                    name: role
                  }
                });

              case 2:
                roleData = _context14.sent;
                _context14.next = 5;
                return this.roleGateway.createPrincipal({
                  roleId: roleData.id,
                  principalId: userId
                });

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function _setRoleForSignUpUser(_x16, _x17) {
        return _setRoleForSignUpUser2.apply(this, arguments);
      }

      return _setRoleForSignUpUser;
    }()
  }, {
    key: "sendMailToReferFriend",
    value: function () {
      var _sendMailToReferFriend = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(userId, email) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.invitationGateway.create({
                  referrerId: userId,
                  email: email
                });

              case 2:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function sendMailToReferFriend(_x18, _x19) {
        return _sendMailToReferFriend.apply(this, arguments);
      }

      return sendMailToReferFriend;
    }()
  }, {
    key: "getInvitationById",
    value: function () {
      var _getInvitationById = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this.invitationGateway.findById(id));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function getInvitationById(_x20) {
        return _getInvitationById.apply(this, arguments);
      }

      return getInvitationById;
    }()
  }, {
    key: "getInvitationByEmail",
    value: function () {
      var _getInvitationByEmail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(email) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", this.invitationGateway.findByEmail(email));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function getInvitationByEmail(_x21) {
        return _getInvitationByEmail.apply(this, arguments);
      }

      return getInvitationByEmail;
    }()
  }, {
    key: "getReferredList",
    value: function () {
      var _getReferredList = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18(referrerId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                return _context18.abrupt("return", this.invitationGateway.getReferredList(referrerId));

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function getReferredList(_x22) {
        return _getReferredList.apply(this, arguments);
      }

      return getReferredList;
    }()
  }, {
    key: "deleteExistedInvitation",
    value: function () {
      var _deleteExistedInvitation = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", this.invitationGateway.deleteExistedInvitation(id));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function deleteExistedInvitation(_x23) {
        return _deleteExistedInvitation.apply(this, arguments);
      }

      return deleteExistedInvitation;
    }()
  }, {
    key: "acceptInvatation",
    value: function () {
      var _acceptInvatation = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return this.invitationGateway.acceptInvatation(id);

              case 2:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function acceptInvatation(_x24) {
        return _acceptInvatation.apply(this, arguments);
      }

      return acceptInvatation;
    }()
  }, {
    key: "getAllReferrer",
    value: function () {
      var _getAllReferrer = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21(userId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this.userGateway.getReferrer(userId));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function getAllReferrer(_x25) {
        return _getAllReferrer.apply(this, arguments);
      }

      return getAllReferrer;
    }()
  }, {
    key: "getUserRole",
    value: function () {
      var _getUserRole = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", this.userGateway.getUserRole(id));

              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function getUserRole(_x26) {
        return _getUserRole.apply(this, arguments);
      }

      return getUserRole;
    }()
  }, {
    key: "getAllContact",
    value: function () {
      var _getAllContact = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", this.userGateway.getAllContact(id));

              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function getAllContact(_x27) {
        return _getAllContact.apply(this, arguments);
      }

      return getAllContact;
    }()
  }, {
    key: "addRankAndCashForAgent",
    value: function () {
      var _addRankAndCashForAgent = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24(userId, role) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return this.userGateway.updateRankandCash(userId, {
                  rank: role,
                  cash: 0
                });

              case 2:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function addRankAndCashForAgent(_x28, _x29) {
        return _addRankAndCashForAgent.apply(this, arguments);
      }

      return addRankAndCashForAgent;
    }()
  }, {
    key: "updateRankAndCash",
    value: function () {
      var _updateRankAndCash = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25(userId, rank, cash) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return this.userGateway.updateRankandCash(userId, {
                  rank: rank,
                  cash: cash
                });

              case 2:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function updateRankAndCash(_x30, _x31, _x32) {
        return _updateRankAndCash.apply(this, arguments);
      }

      return updateRankAndCash;
    }()
  }, {
    key: "updateStatusNotification",
    value: function () {
      var _updateStatusNotification = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26(userId, statusNotification) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return this.userGateway.updateStatusNotification(userId, {
                  statusNotification: statusNotification
                });

              case 2:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function updateStatusNotification(_x33, _x34) {
        return _updateStatusNotification.apply(this, arguments);
      }

      return updateStatusNotification;
    }()
  }, {
    key: "findUserByEmail",
    value: function () {
      var _findUserByEmail = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27(email) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this.userGateway.findByEmail(email));

              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function findUserByEmail(_x35) {
        return _findUserByEmail.apply(this, arguments);
      }

      return findUserByEmail;
    }()
  }, {
    key: "getTransactionInfo",
    value: function () {
      var _getTransactionInfo = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28(_ref6) {
        var userId, where, skip, order, limit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                userId = _ref6.userId, where = _ref6.where, skip = _ref6.skip, order = _ref6.order, limit = _ref6.limit;
                return _context28.abrupt("return", this.userGateway.getTransactionInfo({
                  userId: userId,
                  where: where,
                  skip: skip,
                  order: order,
                  limit: limit
                }));

              case 2:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function getTransactionInfo(_x36) {
        return _getTransactionInfo.apply(this, arguments);
      }

      return getTransactionInfo;
    }()
  }]);

  return UserService;
}(_BaseService__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),

/***/ "./services/index.js":
/*!***************************!*\
  !*** ./services/index.js ***!
  \***************************/
/*! exports provided: authService, userService, applicationService, transactionService, eventService, taskService, messageService, newsService, userInvitationService, notificationService, commissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return authService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return userService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationService", function() { return applicationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionService", function() { return transactionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventService", function() { return eventService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskService", function() { return taskService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageService", function() { return messageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsService", function() { return newsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInvitationService", function() { return userInvitationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationService", function() { return notificationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commissionService", function() { return commissionService; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthService */ "./services/AuthService.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserService */ "./services/UserService.js");
/* harmony import */ var _UserInvitationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserInvitationService */ "./services/UserInvitationService.js");
/* harmony import */ var _ApplicationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationService */ "./services/ApplicationService.js");
/* harmony import */ var _TransactionService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransactionService */ "./services/TransactionService.js");
/* harmony import */ var _gateways_UserGateway__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gateways/UserGateway */ "./gateways/UserGateway.js");
/* harmony import */ var _gateways_UserInvitationGateway__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gateways/UserInvitationGateway */ "./gateways/UserInvitationGateway.js");
/* harmony import */ var _gateways_AuthGateway__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gateways/AuthGateway */ "./gateways/AuthGateway.js");
/* harmony import */ var _gateways_RoleGateway__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../gateways/RoleGateway */ "./gateways/RoleGateway.js");
/* harmony import */ var _gateways_ApplicationGateway__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../gateways/ApplicationGateway */ "./gateways/ApplicationGateway.js");
/* harmony import */ var _gateways_StorageGateway__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../gateways/StorageGateway */ "./gateways/StorageGateway.js");
/* harmony import */ var _gateways_PubsubGateway__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../gateways/PubsubGateway */ "./gateways/PubsubGateway.js");
/* harmony import */ var _gateways_MessageGateway__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../gateways/MessageGateway */ "./gateways/MessageGateway.js");
/* harmony import */ var _gateways_NewsGateway__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../gateways/NewsGateway */ "./gateways/NewsGateway.js");
/* harmony import */ var _gateways_TransactionGateway__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../gateways/TransactionGateway */ "./gateways/TransactionGateway.js");
/* harmony import */ var _gateways_TransactionActivityGateway__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../gateways/TransactionActivityGateway */ "./gateways/TransactionActivityGateway.js");
/* harmony import */ var _gateways_TransactionInvitationGateway__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../gateways/TransactionInvitationGateway */ "./gateways/TransactionInvitationGateway.js");
/* harmony import */ var _gateways_TransactionPartyGateway__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../gateways/TransactionPartyGateway */ "./gateways/TransactionPartyGateway.js");
/* harmony import */ var _gateways_DocumentGateway__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../gateways/DocumentGateway */ "./gateways/DocumentGateway.js");
/* harmony import */ var _gateways_DocumentActionGateway__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../gateways/DocumentActionGateway */ "./gateways/DocumentActionGateway.js");
/* harmony import */ var _gateways_NotificationGateway__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../gateways/NotificationGateway */ "./gateways/NotificationGateway.js");
/* harmony import */ var _gateways_InvitationGateway__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../gateways/InvitationGateway */ "./gateways/InvitationGateway.js");
/* harmony import */ var _connectors_RestConnector__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../connectors/RestConnector */ "./connectors/RestConnector.js");
/* harmony import */ var _connectors_PubsubConnector__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../connectors/PubsubConnector */ "./connectors/PubsubConnector.js");
/* harmony import */ var _gateways_EventGateway__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../gateways/EventGateway */ "./gateways/EventGateway.js");
/* harmony import */ var _EventService__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./EventService */ "./services/EventService.js");
/* harmony import */ var _gateways_TaskGateway__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../gateways/TaskGateway */ "./gateways/TaskGateway.js");
/* harmony import */ var _TaskService__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./TaskService */ "./services/TaskService.js");
/* harmony import */ var _gateways_TransactionCommissionGateway__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../gateways/TransactionCommissionGateway */ "./gateways/TransactionCommissionGateway.js");
/* harmony import */ var _gateways_TransactionDetailGateway__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../gateways/TransactionDetailGateway */ "./gateways/TransactionDetailGateway.js");
/* harmony import */ var _gateways_UserCommissionGateway__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../gateways/UserCommissionGateway */ "./gateways/UserCommissionGateway.js");
/* harmony import */ var _CommissionService__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./CommissionService */ "./services/CommissionService.js");
/* harmony import */ var _MessageService__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./MessageService */ "./services/MessageService.js");
/* harmony import */ var _NewsService__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./NewsService */ "./services/NewsService.js");
/* harmony import */ var _NotificationService__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./NotificationService */ "./services/NotificationService.js");






































var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_0___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var API_BASE_URL = "".concat(publicRuntimeConfig.BASE_URL, "/api");
var restConnector = _connectors_RestConnector__WEBPACK_IMPORTED_MODULE_24__["create"]({
  baseUrl: API_BASE_URL
});
var socketConnector = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(publicRuntimeConfig.BASE_URL);
var pubsubConnector = _connectors_PubsubConnector__WEBPACK_IMPORTED_MODULE_25__["create"]();
var authGateway = new _gateways_AuthGateway__WEBPACK_IMPORTED_MODULE_9__["default"]({
  restConnector: restConnector
});
var userGateway = new _gateways_UserGateway__WEBPACK_IMPORTED_MODULE_7__["default"]({
  restConnector: restConnector
});
var roleGateway = new _gateways_RoleGateway__WEBPACK_IMPORTED_MODULE_10__["default"]({
  restConnector: restConnector
});
var storageGateway = new _gateways_StorageGateway__WEBPACK_IMPORTED_MODULE_12__["default"]({
  restConnector: restConnector
});
var applicationGateway = new _gateways_ApplicationGateway__WEBPACK_IMPORTED_MODULE_11__["default"]({
  restConnector: restConnector
});
var pubsubGateway = new _gateways_PubsubGateway__WEBPACK_IMPORTED_MODULE_13__["default"]({
  pubsubConnector: pubsubConnector
});
var transactionGateway = new _gateways_TransactionGateway__WEBPACK_IMPORTED_MODULE_16__["default"]({
  restConnector: restConnector
});
var transactionActivityGateway = new _gateways_TransactionActivityGateway__WEBPACK_IMPORTED_MODULE_17__["default"]({
  restConnector: restConnector
});
var transactionInvitationGateway = new _gateways_TransactionInvitationGateway__WEBPACK_IMPORTED_MODULE_18__["default"]({
  restConnector: restConnector
});
var transactionPartyGateway = new _gateways_TransactionPartyGateway__WEBPACK_IMPORTED_MODULE_19__["default"]({
  restConnector: restConnector
});
var documentGateway = new _gateways_DocumentGateway__WEBPACK_IMPORTED_MODULE_20__["default"]({
  restConnector: restConnector
});
var documentActionGateway = new _gateways_DocumentActionGateway__WEBPACK_IMPORTED_MODULE_21__["default"]({
  restConnector: restConnector,
  socketConnector: socketConnector
});
var eventGateway = new _gateways_EventGateway__WEBPACK_IMPORTED_MODULE_26__["default"]({
  restConnector: restConnector
});
var taskGateway = new _gateways_TaskGateway__WEBPACK_IMPORTED_MODULE_28__["default"]({
  restConnector: restConnector
});
var messageGateway = new _gateways_MessageGateway__WEBPACK_IMPORTED_MODULE_14__["default"]({
  restConnector: restConnector,
  socketConnector: socketConnector
});
var newsGateway = new _gateways_NewsGateway__WEBPACK_IMPORTED_MODULE_15__["default"]({
  restConnector: restConnector
});
var notificationGateway = new _gateways_NotificationGateway__WEBPACK_IMPORTED_MODULE_22__["default"]({
  restConnector: restConnector,
  socketConnector: socketConnector
});
var invitationGateway = new _gateways_InvitationGateway__WEBPACK_IMPORTED_MODULE_23__["default"]({
  restConnector: restConnector
});
var userInvitationGateway = new _gateways_UserInvitationGateway__WEBPACK_IMPORTED_MODULE_8__["default"]({
  restConnector: restConnector
});
var transactionCommissionGateway = new _gateways_TransactionCommissionGateway__WEBPACK_IMPORTED_MODULE_30__["default"]({
  restConnector: restConnector
});
var userCommissionGateway = new _gateways_UserCommissionGateway__WEBPACK_IMPORTED_MODULE_32__["default"]({
  restConnector: restConnector
});
var transactionDetailGateway = new _gateways_TransactionDetailGateway__WEBPACK_IMPORTED_MODULE_31__["default"]({
  restConnector: restConnector
});
var authService = new _AuthService__WEBPACK_IMPORTED_MODULE_2__["default"]({
  pubsubGateway: pubsubGateway,
  authGateway: authGateway,
  userGateway: userGateway,
  roleGateway: roleGateway,
  storageGateway: storageGateway
});
var userService = new _UserService__WEBPACK_IMPORTED_MODULE_3__["default"]({
  pubsubGateway: pubsubGateway,
  userGateway: userGateway,
  roleGateway: roleGateway,
  invitationGateway: invitationGateway
});
var applicationService = new _ApplicationService__WEBPACK_IMPORTED_MODULE_5__["default"]({
  pubsubGateway: pubsubGateway,
  applicationGateway: applicationGateway
});
var transactionService = new _TransactionService__WEBPACK_IMPORTED_MODULE_6__["default"]({
  transactionGateway: transactionGateway,
  transactionActivityGateway: transactionActivityGateway,
  transactionInvitationGateway: transactionInvitationGateway,
  transactionPartyGateway: transactionPartyGateway,
  documentGateway: documentGateway,
  documentActionGateway: documentActionGateway,
  transactionDetailGateway: transactionDetailGateway,
  userGateway: userGateway
});
var eventService = new _EventService__WEBPACK_IMPORTED_MODULE_27__["default"]({
  eventGateway: eventGateway
});
var taskService = new _TaskService__WEBPACK_IMPORTED_MODULE_29__["default"]({
  taskGateway: taskGateway
});
var messageService = new _MessageService__WEBPACK_IMPORTED_MODULE_34__["default"]({
  messageGateway: messageGateway
});
var newsService = new _NewsService__WEBPACK_IMPORTED_MODULE_35__["default"]({
  newsGateway: newsGateway
});
var userInvitationService = new _UserInvitationService__WEBPACK_IMPORTED_MODULE_4__["default"]({
  userInvitationGateway: userInvitationGateway
});
var notificationService = new _NotificationService__WEBPACK_IMPORTED_MODULE_36__["default"]({
  notificationGateway: notificationGateway
});
var commissionService = new _CommissionService__WEBPACK_IMPORTED_MODULE_33__["default"]({
  transactionCommissionGateway: transactionCommissionGateway,
  userCommissionGateway: userCommissionGateway
});

/***/ }),

/***/ "./validators/BaseValidator.js":
/*!*************************************!*\
  !*** ./validators/BaseValidator.js ***!
  \*************************************/
/*! exports provided: validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validate.js */ "validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _errors_ValidationError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/ValidationError */ "./errors/ValidationError.js");




function validate(data, baseSpec) {
  var validationSpec = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.pick(baseSpec, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data));

  var error = validate_js__WEBPACK_IMPORTED_MODULE_2___default()(data, validationSpec, {
    format: 'grouped'
  });

  if (error) {
    throw new _errors_ValidationError__WEBPACK_IMPORTED_MODULE_3__["default"](error);
  }
}

/***/ }),

/***/ "./validators/UserValidator.js":
/*!*************************************!*\
  !*** ./validators/UserValidator.js ***!
  \*************************************/
/*! exports provided: validateUser, validateAvatarUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateUser", function() { return validateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAvatarUpload", function() { return validateAvatarUpload; });
/* harmony import */ var _errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/ValidationError */ "./errors/ValidationError.js");
/* harmony import */ var _common_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/User */ "../common/models/User.js");
/* harmony import */ var _BaseValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseValidator */ "./validators/BaseValidator.js");



var Spec = {
  email: {
    presence: {
      message: "^".concat(_errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].REQUIRED),
      allowEmpty: false
    },
    email: {
      message: "^".concat(_errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].INVALID_EMAIL)
    },
    length: {
      maximum: _common_models_User__WEBPACK_IMPORTED_MODULE_1__["Constraint"].email.MAX_LENGTH,
      message: "^".concat(_errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].INVALID_LENGTH)
    }
  },
  password: {
    presence: {
      message: "^".concat(_errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].REQUIRED),
      allowEmpty: false
    },
    length: {
      minimum: _common_models_User__WEBPACK_IMPORTED_MODULE_1__["Constraint"].password.MIN_LENGTH,
      maximum: _common_models_User__WEBPACK_IMPORTED_MODULE_1__["Constraint"].password.MAX_LENGTH,
      message: "^".concat(_errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].INVALID_LENGTH)
    }
  },
  firstName: {
    presence: {
      message: "^".concat(_errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].REQUIRED),
      allowEmpty: false
    },
    length: {
      minimum: _common_models_User__WEBPACK_IMPORTED_MODULE_1__["Constraint"].name.MIN_LENGTH,
      maximum: _common_models_User__WEBPACK_IMPORTED_MODULE_1__["Constraint"].name.MAX_LENGTH,
      message: "^".concat(_errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].INVALID_LENGTH)
    }
  },
  lastName: {
    presence: {
      message: "^".concat(_errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].REQUIRED),
      allowEmpty: false
    },
    length: {
      minimum: _common_models_User__WEBPACK_IMPORTED_MODULE_1__["Constraint"].name.MIN_LENGTH,
      maximum: _common_models_User__WEBPACK_IMPORTED_MODULE_1__["Constraint"].name.MAX_LENGTH,
      message: "^".concat(_errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].INVALID_LENGTH)
    }
  }
};
function validateUser(userData) {
  Object(_BaseValidator__WEBPACK_IMPORTED_MODULE_2__["validate"])(userData, Spec);
}
function validateAvatarUpload(file) {
  var errorCodes = [];

  if (!_common_models_User__WEBPACK_IMPORTED_MODULE_1__["Constraint"].avatar.ALLOWED_FILE_TYPES.includes(file.type)) {
    errorCodes.push(_errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].INVALID_FILE_TYPE);
  }

  if (file.size > _common_models_User__WEBPACK_IMPORTED_MODULE_1__["Constraint"].avatar.MAX_FILE_SIZE) {
    errorCodes.push(_errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].INVALID_FILE_SIZE);
  }

  if (errorCodes.length) {
    throw new _errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__["default"](errorCodes);
  }
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/filter":
/*!********************************!*\
  !*** external "lodash/filter" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/filter");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-crud":
/*!*****************************!*\
  !*** external "redux-crud" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-crud");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "validate.js":
/*!******************************!*\
  !*** external "validate.js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validate.js");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map