export declare enum CustomerSource {
    "MONGO_DB" = "MONGO_DB",
    "UNKNOWN" = "",
    POUCH_DB = "POUCH_DB"
}
export declare enum ActionType {
    "VALIDATE" = "VALIDATE",
    "START_DAY" = "START_DAY",
    "CLEAN_DATA" = "CLEAN_DATA",
    "SYNC_DATA" = "SYNC_DATA",
    "NO_DATA" = "NO_DATA",
    "RETRY" = "RETRY"
}
export declare enum DocType {
    SaleOrder = "SALE_ORDER",
    Draft = "Draft"
}
export declare enum DocStatus {
    Open = "OPEN",
    Close = "CLOSE"
}
export declare enum LineStatus {
    Open = "OPEN",
    Close = "CLOSE"
}
export declare enum TypeNames {
    SalesOrders = "salesOrders",
    todaysTodoChanges = "todaysTodoChanges",
    Calendar = "calendar"
}
export declare enum EventType {
    SaleSummary = "SALE_SUMMARY",
    PreSale = "PRE_SALE",
    Activity = "ACTIVITY"
}
export declare enum FieldType {
    Text = "text",
    Password = "password"
}
export declare enum FieldKeyboardType {
    PhonePad = "phone-pad",
    Default = "default",
    Numeric = "numeric",
    EmailAddress = "email-address"
}
export declare enum FieldAutoCapitalize {
    None = "none",
    Sentences = "sentences",
    Words = "words",
    Characters = "characters"
}
export declare enum FieldControlType {
    Input = "input",
    Picker = "picker",
    DateTimePicker = "dateTimePicker"
}
export declare enum FieldDateTimeMode {
    Date = "date",
    Time = "time",
    Datetime = "datetime"
}
export declare enum IconSet {
    Contact = "contact",
    RadioButtonOn = "radio-button-on",
    Stopwatch = "stopwatch",
    Clock = "clock",
    Alarm = "alarm",
    Calendar = "calendar",
    Contrast = "contrast",
    Locate = "locate",
    Map = "map",
    PriceTag = "pricetag",
    List = "list",
    RadioButtonOff = "radio-button-off",
    Bookmark = "bookmark"
}
export declare enum QuestionType {
    Open = "OPEN",
    Selection = "SELECTION",
    MultipleChoice = "MULTIPLE_CHOICE",
    YesNo = "YES_NO"
}
export declare enum DataType {
    Number = "NUMBER",
    Alphanumeric = "ALPHANUMERIC",
    Date = "DATE",
    Photo = "PHOTO",
    None = "NONE"
}
export declare enum ValidationType {
    IsRequired = "IS_REQUIRED",
    Minimum = "MINIMUM",
    Maximum = " MAXIMUM",
    RegEx = "REG_EX"
}
