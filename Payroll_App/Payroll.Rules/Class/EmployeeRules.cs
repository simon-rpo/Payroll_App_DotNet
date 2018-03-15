using Payroll.Dal;
using Payroll.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Payroll.Rules
{
    public class EmployeeRules : IEmployeeRules
    {

        #region Vars & Props
        private readonly IEmployeeDal EmployeeDal;
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
        public async Task<List<EmployeeDto>> GetAllEmployees()
        {
            return await EmployeeDal.GetEmployeeData();
        }
        #endregion
    }
}
