using System.Collections.Generic;
using System.Threading.Tasks;
using Payroll.Dto;

namespace Payroll.Dal
{
    public interface IEmployeeDal
    {
        Task<List<EmployeeDto>> GetEmployeeData();
    }
}