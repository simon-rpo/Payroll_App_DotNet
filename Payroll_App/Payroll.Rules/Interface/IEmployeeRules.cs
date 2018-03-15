using System.Collections.Generic;
using System.Threading.Tasks;
using Payroll.Dto;

namespace Payroll.Rules
{
    public interface IEmployeeRules
    {
        Task<List<EmployeeDto>> GetAllEmployees();
        MessageDto GetMessage();
    }
}