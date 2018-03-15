/**
 * @file jquery.translate.js
 * @brief jQuery plugin to translate text in the client side.
 * @author Manuel Fernandes
 * @site
 * @version 0.9
 * @license MIT license <http://www.opensource.org/licenses/MIT>
 *
 * translate.js is a jQuery plugin to translate text in the client side.
 *
 */

$(function ($) {
    $.fn.translate = function (options) {

        var that = this; //a reference to ourselves

        var settings = {
            css: "trn",
            lang: "ES"/*,
      t: {
        "translate": {
          pt: "tradução",
          br: "tradução"
        }
      }*/
        };
        settings = $.extend(settings, options || {});
        if (settings.css.lastIndexOf(".", 0) !== 0)   //doesn't start with '.'
            settings.css = "." + settings.css;

        var t = settings.t;

        //public methods
        this.lang = function (l) {
            if (l) {
                settings.lang = l;
                this.translate(settings);  //translate everything
            }

            return settings.lang;
        };


        this.get = function (index) {
            var res = index;

            try {
                res = t[index][settings.lang];
            }
            catch (err) {
                //not found, return index
                return index;
            }

            if (res)
                return res;
            else
                return index;
        };

        this.g = this.get;



        //main
        this.find(settings.css).each(function (i) {
            var $this = $(this);

            var trn_key = $this.attr("data-trn-key");
            var trn_key_placeholder = $this.attr("data-trn-key-placeholder");
            var trn_key_input = $this.attr("data-trn-key-input");
            var trn_key_title = $this.attr("data-trn-key-title");
            var trn_key_caret = $this.attr("data-trn-key-caret");
            var trn_key_glyphicon = $this.attr("data-trn-key-glyphicon");

            //Insert words
            if (trn_key) {
                $this.html(that.get(trn_key));
            }
            
            if (trn_key_placeholder) {
                $this.attr("placeholder", that.get(trn_key_placeholder))
            }

            if (trn_key_input) {
                $this.attr("value", that.get(trn_key_input))
            }

            if (trn_key_title) {
                $this.attr("title", that.get(trn_key_title))
            }

            if (trn_key_caret) {
                $this.html(that.get(trn_key_caret) + "<span class='caret'></span>");
            }


            if (trn_key_glyphicon) {
                $this.html("<span class='glyphicon glyphicon-log-out'></span>" + that.get(trn_key_glyphicon));
            }

        });


        return this;



    };
});