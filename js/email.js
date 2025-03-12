(function() {

    const EMAILJS_PUBLIC_KEY = "IgvvNY1QeFYCkQA1J";
    const EMAILJS_SERVICE_ID = "service_e23lc8a";
    const EMAILJS_TEMPLATE_ID = "template_szsglxo";

    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY,
    });

    const sendEmail = async (templateParams) => {
        try {
            const response = emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            console.log(`email js response: ${response}`);
            return true;
        } catch(error) {
            console.log(`email js error: ${error}`);
            return false;
         }
    }

    // Expose sendEmail to the global scope
    window.sendEmail = sendEmail;

})();