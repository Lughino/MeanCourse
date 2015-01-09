/**
 *
 * Model for configure and send mail
 *
 * @module Mailer
 *
 * @author Luca Pau <luca.pau82@gmail.com>
 */

var registry = require('simple-registry');
var nodemailer = require('nodemailer');

function Mailer() {
    var config = registry.get('config');
    this.from = config.mailer.fromDelivery;
    this.to = '';
    this.cc = '';
    this.bcc = config.mailer.bccDelivery;
    this.subject = '';
    this.bodyHtml = '';
    this.bodyText = '';
    this.autoConvertText = false;
}

Mailer.prototype = {
    constructor: Mailer,

    /**
     * Set to param
     * @param {String} to
     */
    setTo: function(to) {
        this.to = to;
    },

    /**
     * Set cc param
     * @param {String} cc
     */
    setCc: function(cc) {
        this.cc = cc;
    },

    /**
     * Set subject param
     * @param {String} subject
     */
    setSubject: function(subject) {
        this.subject = subject;
    },

    /**
     * Set bodyHtml param
     * @param {String} html
     */
    setBodyHtml: function(html) {
        this.bodyHtml = html;
    },

    /**
     * Set bodyText param
     * @param {String} text
     */
    setBodyText: function(text) {
        this.bodyText = text;
    },

    /**
     * Set autoConvertText param
     * If true convert automatically bodyHtml to text
     */
    setAutoConvertText: function() {
        this.autoConvertText = true;
    },

    /**
     * Send mail
     */
    sendMail: function() {
        var config = registry.get('config');
        var transport = nodemailer.createTransport(config.mailer.transport, config.mailer.options);

        transport.sendMail({
            from: this.from,
            to: this.to,
            cc: this.cc,
            bcc: this.bcc,
            subject: this.subject,
            html: this.bodyHtml,
            text: this.bodyText,
            generateTextFromHTML: this.autoConvertText
        }, function (error, response) {
            if (error) {
                console.error(error);
                return;
            }
            if( config.mailer.transport === 'Stub' ) {
                console.log(response.message);
            }
        });
    }
};

module.exports = Mailer;

/**
 var mail = new Mailer();
 mail.setTo(user.getEmail());
 mail.setSubject('asdasd');
 mail.setBodyHtml('<p>asdasd</p>');
 mail.setAutoConvertText();
 mail.sendMail();
 */