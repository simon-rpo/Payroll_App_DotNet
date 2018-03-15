using Payroll.Dal;
using Payroll.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Payroll.Rules
{
    public class EmployeeRules : IEmployeeRules
    {

        #region Vars & Props
        /// <summary>
        /// Employee Data access layer injection
        /// </summary>
        private readonly IEmployeeDal EmployeeDal;
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
        public EmployeeRules(IEmployeeDal EmployeeDal)
        {
            this.EmployeeDal = EmployeeDal;
        }
        #endregion

        #region Public Methods
        /// <summary>
        /// Get all the employees
        /// </summary>
        /// <returns></returns>
        public async Task<List<EmployeeDto>> GetAllEmployees()
        {
            return await EmployeeDal.GetEmployeeData();
        }
        #endregion
    }
}
