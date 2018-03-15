using Payroll.Dto;
using Payroll.Rules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ExtranetSofasa.VolumenBonusVN.Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PayrollController : ApiController
    {
        #region Properties
        private readonly IPayrollRules PayrollRules;
        #endregion

        #region Constructor
        public PayrollController(IPayrollRules PayrollRules)
        {
            this.PayrollRules = PayrollRules;
        }
        #endregion

        #region API

        [Route("api/Payroll/GetEmployeeAnnualSalary")]
        [HttpPost]
        public async Task<HttpResponseMessage> GetEmployeeAnnualSalary(List<EmployeeDto> lEmployees)
        {

            try
            {
                List<PayrollDto> lData = await PayrollRules.PayrollAnnualSalary(lEmployees);
                return Request.CreateResponse(HttpStatusCode.OK, new { ModelData = lData, Message = string.Empty });
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        #endregion

    }
}