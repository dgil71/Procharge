"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.RetailItem = void 0;
const retail_moto_1 = require("./retail-moto");
const restaurant_1 = require("./restaurant");
const lodging_1 = require("./lodging");
class RetailItem {
}
exports.RetailItem = RetailItem;
class Transaction {
    constructor() {
        this.merchantCountryOriginCode = "840";
        this.paymentGatewayID = "4";
        this.hardwareVendorIdentifier = "FISP";
        this.softwareIdentifier = "0002";
        this.isPurchaseCard = false;
        this.cardNotPresent = false;
        this.receipts = false;
        this.displaySignature = false;
        this.cardOnFile = false;
        this.commercialRequestIndicator = "1";
        this.marketSpecificDataRequest = " ";
        this.reasonCode = "02";
        this.networkReferenceNumber = "";
        this.items = [];
        this.retailItems = [];
        this.dateTime = new Date();
        this.universalTimeStamp = new Date().getTime();
        this.hardwareVendorIdentifier = "FISP";
        this.softwareIdentifier = "0002";
        this.applicationKey = "";
        this.isProcharge = true;
        this.isMoto = false;
        this.isEcommerce = true;
        this.isRetail = false;
        this.ebtCode = "";
        this.preAuthorization = false;
        this.protocolType = "1";
        this.cardNumber = "";
        this.name = "";
        this.firstName = "";
        this.lastName = "";
        this.street1 = "";
        this.street2 = "";
        this.city = "";
        this.state = "";
        this.postalCode = "";
        this.country = "";
        this.emv = "";
        this.track1Data = "";
        this.trackData = "";
        this.ccLastFour = "";
        this.token = "";
        this.ccType = "";
        this.ccExpMonth = "";
        this.ccExpYear = "";
        this.cvv = "";
        this.amount = "";
        this.originalAmount = "";
        this.subTotal = "0.00";
        this.tipAmount = "";
        this.taxAmount = "";
        this.cashBackAmount = "";
        this.cashAdvanceAmount = "";
        this.reverseCashDiscountAmount = "";
        this.reverseCashDiscountFixAmount = "";
        this.customerServiceFee = "";
        this.customerServiceFeeAmount = "";
        this.customerServiceFeeFixAmount = "";
        this.cashDiscountFixAmount = "";
        this.cashDiscountAmount = "";
        this.email = "";
        this.phone = "";
        this.cell = "";
        this.companyName = "";
        this.merchantNumber = "";
        this.merchantCountryOriginCode = "840";
        this.paymentGatewayID = "4";
        this.transactionCode = "4";
        this.merchantID = 0;
        this.merchantid = 0;
        this.profileID = 0;
        this.profileid = 0;
        this.orderNumber = "";
        this.source = "dm";
        this.approvalCode = "";
        this.sandbox = "n";
        this.target = "6";
        this.transactionID = "";
        this.retrievalReferenceNumber = "";
        this.deviceID = "";
        this.batchNumber = undefined;
        this.itemNumber = "001";
        this.revisionNumber = "0";
        this.debitItemNumber = "999";
        this.invoiceID = 0;
        this.invoiceNum = "";
        this.paymentID = 0;
        this.eci = "";
        this.aci = "";
        this.authCharIndicator = "";
        this.industryType = "6";
        this.paymentType = ""; // apple pay, google pay.
        this.paymentToken = {}; // apple pay token, google pay token.
        this.sandbox_batchnum = "";
        this.sandbox_itemnum = "";
        this.deviceModel = "";
        this.isOffline = false;
        this.isRecurring = false;
        this.isInstallment = false;
        this.terminalID = "PP001.";
        this.writeControlCharacter = "@";
        this.transactionType = "";
        this.terminalCapability = "3C20";
        this.terminalCardCaptureCapability = "9";
        this.terminalPinCapability = "1";
        this.terminalCategoryCode = undefined;
        this.posConditionCode = "00";
        this.citMitIndicator = "";
        this.mitIndicator = "";
        this.cardVerificationPresenceIndicator = "1";
        this.partialAuthIndicator = "2";
        this.giftCardIndicator = "";
        this.isPurchaseCard = false;
        this.cardNotPresent = false;
        this.receipts = false;
        this.displaySignature = false;
        this.srcIP = "";
        this.customerID = 0;
        this.customerReceipt = "";
        this.merchantReceipt = "";
        this.description = "";
        this.items = [];
        this.reasonCode = "02";
        this.retailIndustry = new retail_moto_1.RetailMoto(this);
        this.lodgingIndustry = new lodging_1.Lodging(this);
        this.restaurantIndustry = new restaurant_1.Restaurant(this);
    }
}
exports.Transaction = Transaction;
