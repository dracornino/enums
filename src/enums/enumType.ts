export enum CustomerSource {
  "MONGO_DB" = "MONGO_DB",
  "UNKNOWN" = "",
  POUCH_DB = "POUCH_DB"
}

export enum ActionType {
  "VALIDATE" = "VALIDATE",
  "START_DAY" = "START_DAY",
  "CLEAN_DATA" = "CLEAN_DATA",
  "SYNC_DATA" = "SYNC_DATA",
  "NO_DATA" = "NO_DATA",
  "RETRY" = "RETRY"
}
export enum DocType {
  SaleOrder = "SALE_ORDER",
  Draft = "Draft"
}
export enum DocStatus {
  Open = "OPEN",
  Close = "CLOSE"
}
export enum LineStatus {
  Open = "OPEN",
  Close = "CLOSE"
}
export enum TypeNames {
  SalesOrders = "salesOrders",
  todaysTodoChanges = "todaysTodoChanges",
  Calendar = "calendar"
}
export enum EventType {
  SaleSummary = "SALE_SUMMARY",
  PreSale = "PRE_SALE",
  Activity = "ACTIVITY"
}
export enum FieldType {
  Text = "text",
  Password = "password"
}
export enum FieldKeyboardType {
  PhonePad = "phone-pad",
  Default = "default",
  Numeric = "numeric",
  EmailAddress = "email-address"
}
export enum FieldAutoCapitalize {
  None = "none",
  Sentences = "sentences",
  Words = "words",
  Characters = "characters"
}
export enum FieldControlType {
  Input = "input",
  Picker = "picker",
  DateTimePicker = "dateTimePicker"
}
export enum FieldDateTimeMode {
  Date = "date",
  Time = "time",
  Datetime = "datetime"
}
export enum IconSet {
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
export enum QuestionType {
  Open = "OPEN",
  Selection = "SELECTION",
  MultipleChoice = "MULTIPLE_CHOICE",
  YesNo = "YES_NO"
}
export enum DataType {
  Number = "NUMBER",
  Alphanumeric = "ALPHANUMERIC",
  Date = "DATE",
  Photo = "PHOTO",
  None = "NONE"
}
export enum ValidationType {
  IsRequired = "IS_REQUIRED",
  Minimum = "MINIMUM",
  Maximum = " MAXIMUM",
  RegEx = "REG_EX"
}
