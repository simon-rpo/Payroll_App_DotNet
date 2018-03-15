using System.Collections.Generic;
using System.Threading.Tasks;
using Payroll.Dto;

namespace Payroll.Rules
{
    public interface IPayrollRules
    {
        Task<List<PayrollDto>> PayrollAnnualSalary(List<EmployeeDto> lEmployees);
        MessageDto GetMessage();
    }
}