var Language = {
    Id: "1",
    Culture: "ES",
    Name: "Spanish",
    Init: function () {
        if (sessionStorage.getItem("Culture") != null && sessionStorage.getItem("Culture") != 'undefined') {
            Language.Culture = sessionStorage.getItem("Culture");
        } else {
            sessionStorage.setItem("Culture", Language.Culture);
        }
    }
};

Language.Init();

var dict = {
    "PAYROLL": {
        EN: "Payroll App"
    },
    "PayrollDirect": {
        EN: "Payroll"
    }
    // "PAYROLL": {
    //     ES: "Payroll App"
    // },
    // "Home": {
    //     ES: "HOME"
    // },
    // "Request": {
    //     ES: "MI HISTORICO"
    // },
    // "Pending_Request": {
    //     ES: "SOLICITUDES PENDIENTES"
    // },
    // "Managed_Request": {
    //     ES: "GESTIONADO"
    // },
    // "Login": {
    //     ES: "Entrar"
    // },
    // "InsertUser": {
    //     ES: "Debes ingresar el Usuario"
    // },
    // "InsertPassword": {
    //     ES: "Debes ingresar la contraseña"
    // },
    // "invalid_grant": {
    //     ES: "Usuario y/o Contraseña invalida."
    // },
    // "AccessDeny": {
    //     ES: "Acceso Denegado"
    // },
    // "NewRequest": {
    //     ES: "Nueva Solicitud"
    // },
    // "waitingDialog": {
    //     ES: "Cargando"
    // },
    // "Create_Request": {
    //     ES: "Crear Solicitud"
    // },
    // "Review_Request": {
    //     ES: "Revisar Solicitud"
    // },
    // "Request_Title": {
    //     ES: "Solicitudes"
    // },
    // "PendingRequest_Title": {
    //     ES: "Solicitudes Pendientes"
    // },
    // "CostCenter": {
    //     ES: "Centro de Costos"
    // },
    // "Direction": {
    //     ES: "Dirección"
    // },
    // "ApproverLevel": {
    //     ES: "Nivel de Aprobador"
    // },
    // "RequesterUser": {
    //     ES: "Usuario Solicitante"
    // },
    // "BeneficerUserName": {
    //     ES: "Usuario Beneficiario"
    // },
    // "Insert_name_user": {
    //     ES: "¡Inserta la IPN del Beneficiario!"
    // },
    // "Vehicles": {
    //     ES: "Vehiculos"
    // },
    // "Destination": {
    //     ES: "Destinaciones"
    // },
    // "Justify": {
    //     ES: "Justificación"
    // },
    // "Save_changes": {
    //     ES: "Guardar Cambios"
    // },
    // "Close": {
    //     ES: "Cerrar"
    // },
    // "NoData": {
    //     ES: "No hay datos"
    // },
    // "NoMatches": {
    //     ES: "Sin Coincidencias"
    // },
    // "ReqSuccess": {
    //     ES: "¡Solicitud Creada con Éxito!"
    // },
    // "DataTableLanguage": {
    //     ES: "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    // },
    // "IdRequestLabel": {
    //     ES: "Solicitud Nro"
    // },
    // "DateRequest": {
    //     ES: "Fecha Solicitud"
    // },
    // "Status": {
    //     ES: "Estado"
    // },
    // "Warning-Status-Title": {
    //     ES: "¡Advertencia!"
    // },
    // "Reject-Message": {
    //     ES: "¿Deseas Rechazar esta solicitud?"
    // },
    // "Approve-Message": {
    //     ES: "¿Deseas Aprobar esta solicitud?"
    // },
    // "Reject-Observ": {
    //     ES: "Observaciones"
    // },
    // "Yes": {
    //     ES: "Si"
    // },
    // "Insert_Observation": {
    //     ES: "Ingresa las Observaciones del Rechazo"
    // },
    // "ReqUpdateSuccess": {
    //     ES: "¡Solicitud Actualizada con Éxito!"
    // },
    // "InsertObservation": {
    //     ES: "Por favor, ingresa una observación que explique el rechazo."
    // },
    // "Verify-for": {
    //     ES: "En Verificación por: "
    // },
    // "Actual-Status": {
    //     ES: "Estado Actual: "
    // },
    // "Service-Vehicle": {
    //     ES: "Vehiculos de Servicio"
    // },
    // "ExportRequest": {
    //     ES: "Exportar Solicitudes"
    // },
}
