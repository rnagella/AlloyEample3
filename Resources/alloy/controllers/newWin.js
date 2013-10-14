function Controller() {
    function closeWin() {
        $.newWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newWin = Ti.UI.createWindow({
        backgroundColor: "blue",
        layout: "Vertical",
        id: "newWin"
    });
    $.__views.newWin && $.addTopLevelView($.__views.newWin);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "Alloy New window...!",
        id: "__alloyId2"
    });
    $.__views.newWin.add($.__views.__alloyId2);
    $.__views.myUseData = Ti.UI.createLabel({
        id: "myUseData",
        visible: "false",
        text: ""
    });
    $.__views.newWin.add($.__views.myUseData);
    $.__views.closeWin = Ti.UI.createButton({
        id: "closeWin",
        title: "Close New Window"
    });
    $.__views.newWin.add($.__views.closeWin);
    closeWin ? $.__views.closeWin.addEventListener("click", closeWin) : __defers["$.__views.closeWin!click!closeWin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg = arguments[0] || "No data received";
    if ("No data received" !== arg) {
        $.myUseData.text = "User Entered data : " + arg;
        $.myUseData.setVisible(true);
    }
    $.newWin.open();
    __defers["$.__views.closeWin!click!closeWin"] && $.__views.closeWin.addEventListener("click", closeWin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;