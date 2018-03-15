using Payroll.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Payroll.Rules
{
    public class PayrollRules : IPayrollRules
    {
        #region Vars & Props
        private readonly IEmployeeRules EmployeeRules;
        private MessageDto Message;

        public MessageDto GetMessage()
        {
            return Message;
        }
        #endregion

        #region Constructor
        public PayrollRules(IEmployeeRules EmployeeRules)
        {
            this.EmployeeRules = EmployeeRules;
        }
        #endregion


        public async Task<List<PayrollDto>> PayrollAnnualSalary(List<EmployeeDto> lEmployees)
        {

            // retrieving data...
            List<PayrollDto> lData = (from x in await EmployeeRules.GetAllEmployees()
                                      join d in lEmployees on x.id equals d.id
                                      select new PayrollDto
                                      {
                                          EmployeeDto = x,
                                          AnnualSalary = (x.contractTypeName == "HourlySalaryEmployee")
                                               ? CalculateBaseHourly(x.hourlySalary)
                                               : CalculateBaseMonthly(x.monthlySalary)
                                      }).ToList();
            return lData;
        }

        #region Private Methods
        private decimal CalculateBaseMonthly(decimal monthlySalary)
        {
            return monthlySalary * 12;
        }

        private decimal CalculateBaseHourly(decimal hourlySalary)
        {
            return 120 * hourlySalary * 12;
        }
        #endregion

    }
}
