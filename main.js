define(function (require, exports, module) {
    "use strict";
    var Menus = brackets.getModule("command/Menus"),
        AppInit = brackets.getModule("utils/AppInit"),
        Commands = brackets.getModule("command/Commands"),
        FileUtils = brackets.getModule("file/FileUtils"),
        FileSystem = brackets.getModule("filesystem/FileSystem"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        CommandManager = brackets.getModule("command/CommandManager"),
        DocumentManager = brackets.getModule("document/DocumentManager"),
        MainViewManager = brackets.getModule("view/MainViewManager"),
        LanguageManager = brackets.getModule("language/LanguageManager"),
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
    ExtensionUtils.loadStyleSheet(module, "style.less");

    //appstart
    AppInit.appReady(function () {
        //        user = window.prompt("【backgroundpng】First start Path setting 「png/jpeg」", "");
    })
});
