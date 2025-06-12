scDefine([
    "dojo/_base/declare",
    "sc/plat/dojo/utils/BaseUtils",
    "sc/plat/dojo/ScreenUI"
], function(
    declare,
    BaseUtils,
    ScreenUI
) {
    return declare("extn.creditRequest.CreditRequestDashboardUI", [ScreenUI], {
        templateString: scResourceLoader.loadResource("extn/creditRequest/CreditRequestDashboard.html"),

        // Event handlers for grid actions
        onApproveClick: function(rowData) {
            this.handleApproveRequest(rowData.RequestId);
        },

        onRejectClick: function(rowData) {
            this.handleRejectRequest(rowData.RequestId);
        },

        // Define grid layout
        creditRequestGridLayout: [
            { name: "Request ID", field: "RequestId", width: "100px" },
            { name: "Customer ID", field: "CustomerId", width: "100px" },
            { name: "Customer Type", field: "CustomerType", width: "100px" },
            { name: "Requested Credit Limit", field: "RequestedCreditLimit", width: "150px" },
            { name: "Current Credit Limit", field: "CurrentCreditLimit", width: "150px" },
            { name: "Credit Score", field: "CreditScore", width: "100px" },
            { name: "Credit Status", field: "CreditStatus", width: "100px" },
            { name: "Reason", field: "ReasonForRequest", width: "200px" },
            {
                name: "Actions",
                field: "Actions",
                width: "120px",
                formatter: function(value, rowIndex, cell) {
                    return '<button class="approveBtn" onclick="window.creditRequestDashboardUI.onApproveClick(this.grid.getItem(' + rowIndex + '))">Approve</button>' +
                           '<button class="rejectBtn" onclick="window.creditRequestDashboardUI.onRejectClick(this.grid.getItem(' + rowIndex + '))">Reject</button>';
                }
            }
        ]
    });
});
