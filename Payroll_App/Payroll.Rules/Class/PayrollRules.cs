using Payroll.Dto;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Payroll.Rules
{
    public class PayrollRules : IPayrollRules
    {
        #region Vars & Props
        /// <summary>
        /// Employee rules injection
        /// </summary>
        private readonly IEmployeeRules EmployeeRules;
        /// <summary>
        /// Message dto
        /// </summary>
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

        #region Public Methods
        /// <summary>
        /// Retrieves the Annual salary calculated by every employee
        /// </summary>
        /// <param name="lEmployees"></param>
        /// <returns>List<PayrollDto></returns>
        public async Task<List<PayrollDto>> PayrollAnnualSalary(List<EmployeeDto> lEmployees)
        {
            // retrieving data...
            if (lEmployees.Any())
            {
                return (from x in await EmployeeRules.GetAllEmployees()
                        join d in lEmployees on x.id equals d.id
                        select new PayrollDto
                        {
                            EmployeeDto = x,
                            AnnualSalary = (x.contractTypeName == "HourlySalaryEmployee")
                                 ? CalculateBaseHourly(x.hourlySalary)
                                 : CalculateBaseMonthly(x.monthlySalary)
                        }).ToList();
            }
            else
            {
                return (from x in await EmployeeRules.GetAllEmployees()
                        select new PayrollDto
                        {
                            EmployeeDto = x,
                            AnnualSalary = (x.contractTypeName == "HourlySalaryEmployee")
                                 ? CalculateBaseHourly(x.hourlySalary)
                                 : CalculateBaseMonthly(x.monthlySalary)
                        }).ToList();
            }
        }
        #endregion

        #region Private Methods
        /// <summary>
        /// Calculates Annual salary based on Monthly salary
        /// </summary>
        /// <param name="monthlySalary"></param>
        /// <returns>decimal</returns>
        private decimal CalculateBaseMonthly(decimal monthlySalary)
        {
            return monthlySalary * 12;
        }

        /// <summary>
        /// Calculates Annual salary based on Hourly salary
        /// </summary>
        /// <param name="hourlySalary"></param>
        /// <returns>decimal</returns>
        private decimal CalculateBaseHourly(decimal hourlySalary)
        {
            return 120 * hourlySalary * 12;
        }
        #endregion

    }
}
