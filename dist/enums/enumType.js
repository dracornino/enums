"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerSource;
(function (CustomerSource) {
    CustomerSource["MONGO_DB"] = "MONGO_DB";
    CustomerSource["UNKNOWN"] = "";
    CustomerSource["POUCH_DB"] = "POUCH_DB";
})(CustomerSource = exports.CustomerSource || (exports.CustomerSource = {}));
var ActionType;
(function (ActionType) {
    ActionType["VALIDATE"] = "VALIDATE";
    ActionType["START_DAY"] = "START_DAY";
    ActionType["CLEAN_DATA"] = "CLEAN_DATA";
    ActionType["SYNC_DATA"] = "SYNC_DATA";
    ActionType["NO_DATA"] = "NO_DATA";
    ActionType["RETRY"] = "RETRY";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var DocType;
(function (DocType) {
    DocType["SaleOrder"] = "SALE_ORDER";
    DocType["Draft"] = "Draft";
})(DocType = exports.DocType || (exports.DocType = {}));
var DocStatus;
(function (DocStatus) {
    DocStatus["Open"] = "OPEN";
    DocStatus["Close"] = "CLOSE";
})(DocStatus = exports.DocStatus || (exports.DocStatus = {}));
var LineStatus;
(function (LineStatus) {
    LineStatus["Open"] = "OPEN";
    LineStatus["Close"] = "CLOSE";
})(LineStatus = exports.LineStatus || (exports.LineStatus = {}));
var TypeNames;
(function (TypeNames) {
    TypeNames["SalesOrders"] = "salesOrders";
    TypeNames["todaysTodoChanges"] = "todaysTodoChanges";
    TypeNames["Calendar"] = "calendar";
})(TypeNames = exports.TypeNames || (exports.TypeNames = {}));
var EventType;
(function (EventType) {
    EventType["SaleSummary"] = "SALE_SUMMARY";
    EventType["PreSale"] = "PRE_SALE";
    EventType["Activity"] = "ACTIVITY";
})(EventType = exports.EventType || (exports.EventType = {}));
var FieldType;
(function (FieldType) {
    FieldType["Text"] = "text";
    FieldType["Password"] = "password";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
var FieldKeyboardType;
(function (FieldKeyboardType) {
    FieldKeyboardType["PhonePad"] = "phone-pad";
    FieldKeyboardType["Default"] = "default";
    FieldKeyboardType["Numeric"] = "numeric";
    FieldKeyboardType["EmailAddress"] = "email-address";
})(FieldKeyboardType = exports.FieldKeyboardType || (exports.FieldKeyboardType = {}));
var FieldAutoCapitalize;
(function (FieldAutoCapitalize) {
    FieldAutoCapitalize["None"] = "none";
    FieldAutoCapitalize["Sentences"] = "sentences";
    FieldAutoCapitalize["Words"] = "words";
    FieldAutoCapitalize["Characters"] = "characters";
})(FieldAutoCapitalize = exports.FieldAutoCapitalize || (exports.FieldAutoCapitalize = {}));
var FieldControlType;
(function (FieldControlType) {
    FieldControlType["Input"] = "input";
    FieldControlType["Picker"] = "picker";
    FieldControlType["DateTimePicker"] = "dateTimePicker";
})(FieldControlType = exports.FieldControlType || (exports.FieldControlType = {}));
var FieldDateTimeMode;
(function (FieldDateTimeMode) {
    FieldDateTimeMode["Date"] = "date";
    FieldDateTimeMode["Time"] = "time";
    FieldDateTimeMode["Datetime"] = "datetime";
})(FieldDateTimeMode = exports.FieldDateTimeMode || (exports.FieldDateTimeMode = {}));
var IconSet;
(function (IconSet) {
    IconSet["Contact"] = "contact";
    IconSet["RadioButtonOn"] = "radio-button-on";
    IconSet["Stopwatch"] = "stopwatch";
    IconSet["Clock"] = "clock";
    IconSet["Alarm"] = "alarm";
    IconSet["Calendar"] = "calendar";
    IconSet["Contrast"] = "contrast";
    IconSet["Locate"] = "locate";
    IconSet["Map"] = "map";
    IconSet["PriceTag"] = "pricetag";
    IconSet["List"] = "list";
    IconSet["RadioButtonOff"] = "radio-button-off";
    IconSet["Bookmark"] = "bookmark";
})(IconSet = exports.IconSet || (exports.IconSet = {}));
var QuestionType;
(function (QuestionType) {
    QuestionType["Open"] = "OPEN";
    QuestionType["Selection"] = "SELECTION";
    QuestionType["MultipleChoice"] = "MULTIPLE_CHOICE";
    QuestionType["YesNo"] = "YES_NO";
})(QuestionType = exports.QuestionType || (exports.QuestionType = {}));
var DataType;
(function (DataType) {
    DataType["Number"] = "NUMBER";
    DataType["Alphanumeric"] = "ALPHANUMERIC";
    DataType["Date"] = "DATE";
    DataType["Photo"] = "PHOTO";
    DataType["None"] = "NONE";
})(DataType = exports.DataType || (exports.DataType = {}));
var ValidationType;
(function (ValidationType) {
    ValidationType["IsRequired"] = "IS_REQUIRED";
    ValidationType["Minimum"] = "MINIMUM";
    ValidationType["Maximum"] = " MAXIMUM";
    ValidationType["RegEx"] = "REG_EX";
})(ValidationType = exports.ValidationType || (exports.ValidationType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW51bXMvZW51bVR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDeEIsdUNBQXVCLENBQUE7SUFDdkIsOEJBQWMsQ0FBQTtJQUNkLHVDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFKVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUl6QjtBQUVELElBQVksVUFPWDtBQVBELFdBQVksVUFBVTtJQUNwQixtQ0FBdUIsQ0FBQTtJQUN2QixxQ0FBeUIsQ0FBQTtJQUN6Qix1Q0FBMkIsQ0FBQTtJQUMzQixxQ0FBeUIsQ0FBQTtJQUN6QixpQ0FBcUIsQ0FBQTtJQUNyQiw2QkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBUFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFPckI7QUFDRCxJQUFZLE9BR1g7QUFIRCxXQUFZLE9BQU87SUFDakIsbUNBQXdCLENBQUE7SUFDeEIsMEJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSFcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBR2xCO0FBQ0QsSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ25CLDBCQUFhLENBQUE7SUFDYiw0QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUNELElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQiwyQkFBYSxDQUFBO0lBQ2IsNkJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFHckI7QUFDRCxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDbkIsd0NBQTJCLENBQUE7SUFDM0Isb0RBQXVDLENBQUE7SUFDdkMsa0NBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBQ0QsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLHlDQUE0QixDQUFBO0lBQzVCLGlDQUFvQixDQUFBO0lBQ3BCLGtDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUNELElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiwwQkFBYSxDQUFBO0lBQ2Isa0NBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCO0FBQ0QsSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQzNCLDJDQUFzQixDQUFBO0lBQ3RCLHdDQUFtQixDQUFBO0lBQ25CLHdDQUFtQixDQUFBO0lBQ25CLG1EQUE4QixDQUFBO0FBQ2hDLENBQUMsRUFMVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUs1QjtBQUNELElBQVksbUJBS1g7QUFMRCxXQUFZLG1CQUFtQjtJQUM3QixvQ0FBYSxDQUFBO0lBQ2IsOENBQXVCLENBQUE7SUFDdkIsc0NBQWUsQ0FBQTtJQUNmLGdEQUF5QixDQUFBO0FBQzNCLENBQUMsRUFMVyxtQkFBbUIsR0FBbkIsMkJBQW1CLEtBQW5CLDJCQUFtQixRQUs5QjtBQUNELElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMxQixtQ0FBZSxDQUFBO0lBQ2YscUNBQWlCLENBQUE7SUFDakIscURBQWlDLENBQUE7QUFDbkMsQ0FBQyxFQUpXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBSTNCO0FBQ0QsSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLGtDQUFhLENBQUE7SUFDYixrQ0FBYSxDQUFBO0lBQ2IsMENBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUpXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBSTVCO0FBQ0QsSUFBWSxPQWNYO0FBZEQsV0FBWSxPQUFPO0lBQ2pCLDhCQUFtQixDQUFBO0lBQ25CLDRDQUFpQyxDQUFBO0lBQ2pDLGtDQUF1QixDQUFBO0lBQ3ZCLDBCQUFlLENBQUE7SUFDZiwwQkFBZSxDQUFBO0lBQ2YsZ0NBQXFCLENBQUE7SUFDckIsZ0NBQXFCLENBQUE7SUFDckIsNEJBQWlCLENBQUE7SUFDakIsc0JBQVcsQ0FBQTtJQUNYLGdDQUFxQixDQUFBO0lBQ3JCLHdCQUFhLENBQUE7SUFDYiw4Q0FBbUMsQ0FBQTtJQUNuQyxnQ0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBZFcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBY2xCO0FBQ0QsSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBQ3RCLDZCQUFhLENBQUE7SUFDYix1Q0FBdUIsQ0FBQTtJQUN2QixrREFBa0MsQ0FBQTtJQUNsQyxnQ0FBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkI7QUFDRCxJQUFZLFFBTVg7QUFORCxXQUFZLFFBQVE7SUFDbEIsNkJBQWlCLENBQUE7SUFDakIseUNBQTZCLENBQUE7SUFDN0IseUJBQWEsQ0FBQTtJQUNiLDJCQUFlLENBQUE7SUFDZix5QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQU5XLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBTW5CO0FBQ0QsSUFBWSxjQUtYO0FBTEQsV0FBWSxjQUFjO0lBQ3hCLDRDQUEwQixDQUFBO0lBQzFCLHFDQUFtQixDQUFBO0lBQ25CLHNDQUFvQixDQUFBO0lBQ3BCLGtDQUFnQixDQUFBO0FBQ2xCLENBQUMsRUFMVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUt6QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEN1c3RvbWVyU291cmNlIHtcbiAgXCJNT05HT19EQlwiID0gXCJNT05HT19EQlwiLFxuICBcIlVOS05PV05cIiA9IFwiXCIsXG4gIFBPVUNIX0RCID0gXCJQT1VDSF9EQlwiXG59XG5cbmV4cG9ydCBlbnVtIEFjdGlvblR5cGUge1xuICBcIlZBTElEQVRFXCIgPSBcIlZBTElEQVRFXCIsXG4gIFwiU1RBUlRfREFZXCIgPSBcIlNUQVJUX0RBWVwiLFxuICBcIkNMRUFOX0RBVEFcIiA9IFwiQ0xFQU5fREFUQVwiLFxuICBcIlNZTkNfREFUQVwiID0gXCJTWU5DX0RBVEFcIixcbiAgXCJOT19EQVRBXCIgPSBcIk5PX0RBVEFcIixcbiAgXCJSRVRSWVwiID0gXCJSRVRSWVwiXG59XG5leHBvcnQgZW51bSBEb2NUeXBlIHtcbiAgU2FsZU9yZGVyID0gXCJTQUxFX09SREVSXCIsXG4gIERyYWZ0ID0gXCJEcmFmdFwiXG59XG5leHBvcnQgZW51bSBEb2NTdGF0dXMge1xuICBPcGVuID0gXCJPUEVOXCIsXG4gIENsb3NlID0gXCJDTE9TRVwiXG59XG5leHBvcnQgZW51bSBMaW5lU3RhdHVzIHtcbiAgT3BlbiA9IFwiT1BFTlwiLFxuICBDbG9zZSA9IFwiQ0xPU0VcIlxufVxuZXhwb3J0IGVudW0gVHlwZU5hbWVzIHtcbiAgU2FsZXNPcmRlcnMgPSBcInNhbGVzT3JkZXJzXCIsXG4gIHRvZGF5c1RvZG9DaGFuZ2VzID0gXCJ0b2RheXNUb2RvQ2hhbmdlc1wiLFxuICBDYWxlbmRhciA9IFwiY2FsZW5kYXJcIlxufVxuZXhwb3J0IGVudW0gRXZlbnRUeXBlIHtcbiAgU2FsZVN1bW1hcnkgPSBcIlNBTEVfU1VNTUFSWVwiLFxuICBQcmVTYWxlID0gXCJQUkVfU0FMRVwiLFxuICBBY3Rpdml0eSA9IFwiQUNUSVZJVFlcIlxufVxuZXhwb3J0IGVudW0gRmllbGRUeXBlIHtcbiAgVGV4dCA9IFwidGV4dFwiLFxuICBQYXNzd29yZCA9IFwicGFzc3dvcmRcIlxufVxuZXhwb3J0IGVudW0gRmllbGRLZXlib2FyZFR5cGUge1xuICBQaG9uZVBhZCA9IFwicGhvbmUtcGFkXCIsXG4gIERlZmF1bHQgPSBcImRlZmF1bHRcIixcbiAgTnVtZXJpYyA9IFwibnVtZXJpY1wiLFxuICBFbWFpbEFkZHJlc3MgPSBcImVtYWlsLWFkZHJlc3NcIlxufVxuZXhwb3J0IGVudW0gRmllbGRBdXRvQ2FwaXRhbGl6ZSB7XG4gIE5vbmUgPSBcIm5vbmVcIixcbiAgU2VudGVuY2VzID0gXCJzZW50ZW5jZXNcIixcbiAgV29yZHMgPSBcIndvcmRzXCIsXG4gIENoYXJhY3RlcnMgPSBcImNoYXJhY3RlcnNcIlxufVxuZXhwb3J0IGVudW0gRmllbGRDb250cm9sVHlwZSB7XG4gIElucHV0ID0gXCJpbnB1dFwiLFxuICBQaWNrZXIgPSBcInBpY2tlclwiLFxuICBEYXRlVGltZVBpY2tlciA9IFwiZGF0ZVRpbWVQaWNrZXJcIlxufVxuZXhwb3J0IGVudW0gRmllbGREYXRlVGltZU1vZGUge1xuICBEYXRlID0gXCJkYXRlXCIsXG4gIFRpbWUgPSBcInRpbWVcIixcbiAgRGF0ZXRpbWUgPSBcImRhdGV0aW1lXCJcbn1cbmV4cG9ydCBlbnVtIEljb25TZXQge1xuICBDb250YWN0ID0gXCJjb250YWN0XCIsXG4gIFJhZGlvQnV0dG9uT24gPSBcInJhZGlvLWJ1dHRvbi1vblwiLFxuICBTdG9wd2F0Y2ggPSBcInN0b3B3YXRjaFwiLFxuICBDbG9jayA9IFwiY2xvY2tcIixcbiAgQWxhcm0gPSBcImFsYXJtXCIsXG4gIENhbGVuZGFyID0gXCJjYWxlbmRhclwiLFxuICBDb250cmFzdCA9IFwiY29udHJhc3RcIixcbiAgTG9jYXRlID0gXCJsb2NhdGVcIixcbiAgTWFwID0gXCJtYXBcIixcbiAgUHJpY2VUYWcgPSBcInByaWNldGFnXCIsXG4gIExpc3QgPSBcImxpc3RcIixcbiAgUmFkaW9CdXR0b25PZmYgPSBcInJhZGlvLWJ1dHRvbi1vZmZcIixcbiAgQm9va21hcmsgPSBcImJvb2ttYXJrXCJcbn1cbmV4cG9ydCBlbnVtIFF1ZXN0aW9uVHlwZSB7XG4gIE9wZW4gPSBcIk9QRU5cIixcbiAgU2VsZWN0aW9uID0gXCJTRUxFQ1RJT05cIixcbiAgTXVsdGlwbGVDaG9pY2UgPSBcIk1VTFRJUExFX0NIT0lDRVwiLFxuICBZZXNObyA9IFwiWUVTX05PXCJcbn1cbmV4cG9ydCBlbnVtIERhdGFUeXBlIHtcbiAgTnVtYmVyID0gXCJOVU1CRVJcIixcbiAgQWxwaGFudW1lcmljID0gXCJBTFBIQU5VTUVSSUNcIixcbiAgRGF0ZSA9IFwiREFURVwiLFxuICBQaG90byA9IFwiUEhPVE9cIixcbiAgTm9uZSA9IFwiTk9ORVwiXG59XG5leHBvcnQgZW51bSBWYWxpZGF0aW9uVHlwZSB7XG4gIElzUmVxdWlyZWQgPSBcIklTX1JFUVVJUkVEXCIsXG4gIE1pbmltdW0gPSBcIk1JTklNVU1cIixcbiAgTWF4aW11bSA9IFwiIE1BWElNVU1cIixcbiAgUmVnRXggPSBcIlJFR19FWFwiXG59XG4iXX0=