function Controller() {
    function doClick() {
        alert($.userInput.value);
        var userData = $.userInput.value;
        Alloy.createController("newWin", userData).getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "Vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.userInput = Ti.UI.createTextField({
        id: "userInput",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        left: "10",
        width: "250",
        height: "60",
        top: "10dip"
    });
    $.__views.index.add($.__views.userInput);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Open New Window",
        top: "10dip",
        backgroundColor: "blue",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    doClick ? $.__views.__alloyId1.addEventListener("click", doClick) : __defers["$.__views.__alloyId1!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId1!click!doClick"] && $.__views.__alloyId1.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;