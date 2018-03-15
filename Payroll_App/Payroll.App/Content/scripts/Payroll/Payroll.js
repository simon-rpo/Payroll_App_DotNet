//Section ready
$(function ($) {
  Payroll.Init();
});

var UserData = [];

var Payroll = {
  Init: function () {

    // #region "Init"
    $('#xTable').hide();
    // #endregion

    Payroll.Config();
  },
  //Initial config
  Config: function () {
    $("#btnCalculate").click(function () {
      Payroll.Calculate();
    });
    return;
  },

  Calculate: function () {
    var Url = FormatString(UrlsPayroll.GetCalculate);

    if ($.fn.DataTable.isDataTable('#xTable')) {
      $('#xTable').DataTable().clear();
      $('#xTable').DataTable().destroy();
    }

    $('#xTable').DataTable({
      "bServerSide": false,
      "bProcessing": true,
      "searching": true,
      "bSort": true,
      "ajax": {
        async: true,
        crossDomain: true,
        url: Url,
        "data": function () {
          return $("#txtIdEmployee").val() !== '' ? '[{ id: ' + $("#txtIdEmployee").val() + ',}]' : '[]';
        },
        method: "POST",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        dataSrc: function (data) {
          return data.ModelData;
        },
        error: function (XmlHttpError, error, description) {
          $.notify({
            // options
            icon: 'glyphicon glyphicon-exclamation-sign',
            title: 'Error',
            message: 'Error @ Calculate' + description,
            target: '_blank'
          },
            { type: 'warning' });
        },
      },
      "aoColumns": [
        { data: "EmployeeDto.id" },
        { data: "EmployeeDto.name" },
        { data: "EmployeeDto.contractTypeName" },
        { data: "EmployeeDto.roleName" },
        { data: "EmployeeDto.hourlySalary" },
        { data: "EmployeeDto.monthlySalary" },
        { data: "AnnualSalary" },
      ],
      "order": [[0, "desc"]],
      "initComplete": function () {
        $.notify({
          // options
          icon: 'glyphicon glyphicon glyphicon-ok',
          title: 'Success',
          message: ' -> Data Retrieving Successfully',
          target: '_blank'
        },
          { type: 'success' });
        $('#xTable').show();
        $('#txtIdEmployee').val('');
      }
    });
  },
};
