
on("chat:message", function(msg) {
    if(!(msg.type === "api" && msg.content.indexOf("!test ") !== -1)) {
        return;
    }
    try {
        var argStr = msg.content.replace("!test ", "");
        var argList = argStr.split(",");
        var objId = argList[0];
        var obj = getObjectWithReport("graphic", objId);
        var sheetId = getPropertyValue(obj, "represents");
        var attrName = "miscExpenses";
        getRepeatingSection(sheetId, attrName);
    }
    catch (err) {
        log("Exception: " + err);
    }
});

function getRepeatingSection(sheetId, attributeName) {
    var results = getAttributeWithError(sheetId, attributeName);
    log(results);
}


