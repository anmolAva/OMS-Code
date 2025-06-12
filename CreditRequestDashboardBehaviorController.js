scDefine([
    "dojo/_base/declare",
    "sc/plat/dojo/BehaviorController"
], function(
    declare,
    BehaviorController
) {
    return declare("extn.creditRequest.CreditRequestDashboardBehaviorController", [BehaviorController], {
        mashupRefs: [
            {
                mashupId: "getPendingCreditRequests",
                mashupRefId: "getPendingCreditRequestsRef"
            },
            {
                mashupId: "approveCreditRequest",
                mashupRefId: "approveCreditRequestRef"
            },
            {
                mashupId: "rejectCreditRequest",
                mashupRefId: "rejectCreditRequestRef"
            }
        ],

        getPendingCreditRequests: function() {
            // Triggers the mashup to fetch pending credit requests
            this.callMashup("getPendingCreditRequests", {}, this.handlePendingRequestsResponse);
        },

        handlePendingRequestsResponse: function(response) {
            // Populate the grid with the response data
            if (response && response.CreditLimitRequests) {
                this.setModel("creditRequestStore", response.CreditLimitRequests);
            }
        },

        approveCreditRequest: function(requestId) {
            var input = { RequestId: requestId };
            this.callMashup("approveCreditRequest", input, this.handleApproveResponse);
        },

        handleApproveResponse: function(response) {
            // Refresh grid or show success message
            this.getPendingCreditRequests();
        },

        rejectCreditRequest: function(requestId) {
            var input = { RequestId: requestId };
            this.callMashup("rejectCreditRequest", input, this.handleRejectResponse);
        },

        handleRejectResponse: function(response) {
            // Refresh grid or show success message
            this.getPendingCreditRequests();
        }
    });
});
