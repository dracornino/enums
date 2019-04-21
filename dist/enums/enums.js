"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endpoints;
(function (Endpoints) {
    Endpoints["NE_ROUTE_POUCH_DB"] = "NE_ROUTE_POUCH_DB";
    Endpoints["NE_ROUTE_COORDINATOR"] = "NE_ROUTE_COORDINATOR";
})(Endpoints = exports.Endpoints || (exports.Endpoints = {}));
var AmbitApps;
(function (AmbitApps) {
    AmbitApps["NE_ROUTE_APP"] = "NE_ROUTE_APP";
})(AmbitApps = exports.AmbitApps || (exports.AmbitApps = {}));
var PackageStatus;
(function (PackageStatus) {
    PackageStatus["ACCEPTED"] = "ACCEPTED";
    PackageStatus["PENDING"] = "PENDING";
})(PackageStatus = exports.PackageStatus || (exports.PackageStatus = {}));
var NavEventTypes;
(function (NavEventTypes) {
    NavEventTypes["NavBarButtonPress"] = "NavBarButtonPress";
    NavEventTypes["ScreenChangedEvent"] = "ScreenChangedEvent";
})(NavEventTypes = exports.NavEventTypes || (exports.NavEventTypes = {}));
var NavEventsIds;
(function (NavEventsIds) {
    NavEventsIds["share"] = "share";
    NavEventsIds["sync"] = "sync";
    NavEventsIds["saveActivity"] = "saveActivity";
    NavEventsIds["sideDrawerToggle"] = "sideDrawerToggle";
    NavEventsIds["willAppear"] = "willAppear";
    NavEventsIds["search"] = "search";
    NavEventsIds["willDisappear"] = "willDisappear";
    NavEventsIds["update"] = "update";
    NavEventsIds["save"] = "save";
    NavEventsIds["back"] = "back";
    NavEventsIds["newActivity"] = "newActivity";
    NavEventsIds["backPress"] = "backPress";
    NavEventsIds["datetimeChooser"] = "datetimeChooser";
    NavEventsIds["routeInfo"] = "routeInfo";
    NavEventsIds["routePreview"] = "routePreview";
    NavEventsIds["customerList"] = "customerList";
    NavEventsIds["Locate"] = "Locate";
})(NavEventsIds = exports.NavEventsIds || (exports.NavEventsIds = {}));
var ContactType;
(function (ContactType) {
    ContactType["Charging"] = "CHARGING";
    ContactType["Delivery"] = "DELIVERY";
})(ContactType = exports.ContactType || (exports.ContactType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW51bXMvZW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFZLFNBR1Q7QUFISCxXQUFZLFNBQVM7SUFDakIsb0RBQXVDLENBQUE7SUFDdkMsMERBQTZDLENBQUE7QUFDL0MsQ0FBQyxFQUhTLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR2xCO0FBRUQsSUFBWSxTQUVYO0FBRkQsV0FBWSxTQUFTO0lBQ25CLDBDQUE2QixDQUFBO0FBQy9CLENBQUMsRUFGVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUVwQjtBQUVELElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QixzQ0FBcUIsQ0FBQTtJQUNyQixvQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFHeEI7QUFFRCxJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsd0RBQXVDLENBQUE7SUFDdkMsMERBQXlDLENBQUE7QUFDM0MsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBRUQsSUFBWSxZQWtCWDtBQWxCRCxXQUFZLFlBQVk7SUFDdEIsK0JBQWUsQ0FBQTtJQUNmLDZCQUFhLENBQUE7SUFDYiw2Q0FBNkIsQ0FBQTtJQUM3QixxREFBcUMsQ0FBQTtJQUNyQyx5Q0FBeUIsQ0FBQTtJQUN6QixpQ0FBaUIsQ0FBQTtJQUNqQiwrQ0FBK0IsQ0FBQTtJQUMvQixpQ0FBaUIsQ0FBQTtJQUNqQiw2QkFBYSxDQUFBO0lBQ2IsNkJBQWEsQ0FBQTtJQUNiLDJDQUEyQixDQUFBO0lBQzNCLHVDQUF1QixDQUFBO0lBQ3ZCLG1EQUFtQyxDQUFBO0lBQ25DLHVDQUF1QixDQUFBO0lBQ3ZCLDZDQUE2QixDQUFBO0lBQzdCLDZDQUE2QixDQUFBO0lBQzdCLGlDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFsQlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFrQnZCO0FBRUQsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ3JCLG9DQUFtQixDQUFBO0lBQ25CLG9DQUFtQixDQUFBO0FBRXJCLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEVuZHBvaW50cyB7XG4gICAgTkVfUk9VVEVfUE9VQ0hfREIgPSBcIk5FX1JPVVRFX1BPVUNIX0RCXCIsXG4gICAgTkVfUk9VVEVfQ09PUkRJTkFUT1IgPSBcIk5FX1JPVVRFX0NPT1JESU5BVE9SXCJcbiAgfVxuICBcbiAgZXhwb3J0IGVudW0gQW1iaXRBcHBzIHtcbiAgICBORV9ST1VURV9BUFAgPSBcIk5FX1JPVVRFX0FQUFwiXG4gIH1cbiAgXG4gIGV4cG9ydCBlbnVtIFBhY2thZ2VTdGF0dXMge1xuICAgIEFDQ0VQVEVEID0gXCJBQ0NFUFRFRFwiLFxuICAgIFBFTkRJTkcgPSBcIlBFTkRJTkdcIlxuICB9XG4gIFxuICBleHBvcnQgZW51bSBOYXZFdmVudFR5cGVzIHtcbiAgICBOYXZCYXJCdXR0b25QcmVzcyA9IFwiTmF2QmFyQnV0dG9uUHJlc3NcIixcbiAgICBTY3JlZW5DaGFuZ2VkRXZlbnQgPSBcIlNjcmVlbkNoYW5nZWRFdmVudFwiXG4gIH1cbiAgXG4gIGV4cG9ydCBlbnVtIE5hdkV2ZW50c0lkcyB7XG4gICAgc2hhcmUgPSBcInNoYXJlXCIsXG4gICAgc3luYyA9IFwic3luY1wiLFxuICAgIHNhdmVBY3Rpdml0eSA9IFwic2F2ZUFjdGl2aXR5XCIsXG4gICAgc2lkZURyYXdlclRvZ2dsZSA9IFwic2lkZURyYXdlclRvZ2dsZVwiLFxuICAgIHdpbGxBcHBlYXIgPSBcIndpbGxBcHBlYXJcIixcbiAgICBzZWFyY2ggPSBcInNlYXJjaFwiLFxuICAgIHdpbGxEaXNhcHBlYXIgPSBcIndpbGxEaXNhcHBlYXJcIixcbiAgICB1cGRhdGUgPSBcInVwZGF0ZVwiLFxuICAgIHNhdmUgPSBcInNhdmVcIixcbiAgICBiYWNrID0gXCJiYWNrXCIsXG4gICAgbmV3QWN0aXZpdHkgPSBcIm5ld0FjdGl2aXR5XCIsXG4gICAgYmFja1ByZXNzID0gXCJiYWNrUHJlc3NcIixcbiAgICBkYXRldGltZUNob29zZXIgPSBcImRhdGV0aW1lQ2hvb3NlclwiLFxuICAgIHJvdXRlSW5mbyA9IFwicm91dGVJbmZvXCIsXG4gICAgcm91dGVQcmV2aWV3ID0gXCJyb3V0ZVByZXZpZXdcIixcbiAgICBjdXN0b21lckxpc3QgPSBcImN1c3RvbWVyTGlzdFwiLFxuICAgIExvY2F0ZSA9IFwiTG9jYXRlXCJcbiAgfVxuICBcbiAgZXhwb3J0IGVudW0gQ29udGFjdFR5cGUge1xuICAgIENoYXJnaW5nPVwiQ0hBUkdJTkdcIixcbiAgICBEZWxpdmVyeT1cIkRFTElWRVJZXCJcbiAgXG4gIH1cbiAgIl19