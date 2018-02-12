
// Wigzo chrome push notification service

Installaion Instructions

*** Make sure your website has a valid SSL certificate and is running on HTTPS. ***

You can download latest package from here :- 
    https://app.wigzo.com/push/#/install

Steps :-

1.  Extract files to top level directory i.e. root(/) of your website.

2.  Copy and paste the following code into <head> </head> section of your web page
        <link rel="manifest" href="gcm_manifest.json">
        <script type="text/javascript" src="/gcm_service_worker.js"></script>

3.  In order to send push notifications, Chrome should ask opt-in from the user through a dialog box. We provide two mechanisms for opt-in.
        1. Either you can ask for opt-in on any event by calling following method.
            WigzoPush.pushSubscribe()

        For instance you can attach it to an event such as button click.
            <button onclick="WigzoPush.pushSubscribe()">Subscribe</button>

        2. Or you can ask for opt-in on page load.
            <script>
                window.wigzo = (function(module){
                    module.wigzoGcmAutoSubscribe = true;
                    return module;
                }(window.wigzo || {}));
            </script>

4.  To unsubscribe the user from receiving push notifications call the following method on any event.
        WigzoPush.pushUnsubscribe()

If you don't know how to do this or don't have access to the source code of your website, please contact your webmaster or website administrator.
