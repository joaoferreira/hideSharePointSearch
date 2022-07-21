var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
var LOG_SOURCE = 'HideSharePointSearchBoxApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var HideSharePointSearchBoxApplicationCustomizer = /** @class */ (function (_super) {
    __extends(HideSharePointSearchBoxApplicationCustomizer, _super);
    function HideSharePointSearchBoxApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HideSharePointSearchBoxApplicationCustomizer.prototype.onInit = function () {
        var keepSearch = false;
        //Keep search box for lists 
        if (document.location.href.indexOf('/Lists/') != -1) {
            keepSearch = true;
        }
        //Keep search box for document libraries 
        if (document.location.href.indexOf('/Forms/') != -1) {
            keepSearch = true;
        }
        //On any other SharePoint page hide the search box
        if (!keepSearch) {
            var css = '#O365_SearchBoxContainer_container{display:none;}';
            var style = document.createElement('style');
            document.getElementsByTagName('body')[0].appendChild(style);
            style.appendChild(document.createTextNode(css));
        }
        return Promise.resolve();
    };
    return HideSharePointSearchBoxApplicationCustomizer;
}(BaseApplicationCustomizer));
export default HideSharePointSearchBoxApplicationCustomizer;
//# sourceMappingURL=HideSharePointSearchBoxApplicationCustomizer.js.map