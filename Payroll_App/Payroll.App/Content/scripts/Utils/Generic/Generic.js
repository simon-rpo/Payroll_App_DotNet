$(function () {
    "use strict"; // Start of use strict

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    //Titles init
    var translator = $('body').translate({ lang: "ES", t: dict });
    translator.lang(Language.Culture); //Default Spanish

    //add Year
    var date = new Date();
    var year = date.getFullYear();
    $(".year").html(year);

}); // End of use strict


//Fromat Url string
function FormatString(fmtstr) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fmtstr.replace(/\{(\d+)\}/g, function (match, index) {
        return args[index];
    });
}


var TypesMessage = {
    Success: "Success",
    Error: "Error",
};

var GlobalMessage = {
    Background: "#00FF08",
    Color: "#005703",
    ChangeColor: false,
    ChangeTitle: false,
    Title: "",
    Message: "",
    Time: 1500,
    TimeHidden: 5000,
    ChangeSize: false,
    Height: "50px",
    width: "200px",
    Type: TypesMessage.Success, //Success or Error
    Show: function () {
        var backGround;
        var Color;
        var Title;
        var Height;
        var Width;
        if (!GlobalMessage.ChangeColor) {
            if (GlobalMessage.Type == TypesMessage.Success) {
                backGround = "#18BC9C";
                Color = "#000";
            }
            else if (GlobalMessage.Type == TypesMessage.Error) {
                backGround = "#FF0009";
                Color = "#FFF";
            }
        }
        else {
            backGround = GlobalMessage.Background;
            Color = GlobalMessage.Color;
        }

        if (GlobalMessage.ChangeTitle) {
            Title = GlobalMessage.Title;
        }
        else {
            if (GlobalMessage.Type == TypesMessage.Success) {
                Title = dict.GolbalTitleSuccess[Language.Culture];
            }
            else if (GlobalMessage.Type == TypesMessage.Error) {
                Title = dict.GolbalTitleError[Language.Culture];
            }
        }

        if (GlobalMessage.ChangeSize) {
            $("#GolbalMessage").css("height", GlobalMessage.Height);
            $("#GolbalMessage").css("width", GlobalMessage.width);
        }

        $("#lblMessageTitle").html(Title);
        $("#lblMessageTitle").css("color", Color);
        $("#GolbalMessage").css("background", backGround);
        $("#GolbalMessage").css("border", "solid 2px " + Color);
        $("#lblMessageContainer").css("color", Color);
        $("#lblMessageContainer").html(GlobalMessage.Message);
        $("#GolbalMessage").fadeIn(GlobalMessage.Time);
        setTimeout(function () { GlobalMessage.Hidden(); }, GlobalMessage.TimeHidden);
    },
    Hidden: function () {
        $("#GolbalMessage").fadeOut(GlobalMessage.Time);
    }
};