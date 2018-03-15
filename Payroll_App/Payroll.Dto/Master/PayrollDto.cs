using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Payroll.Dto
{
    public class PayrollDto
    {
        public EmployeeDto EmployeeDto { get; set; }
        public decimal AnnualSalary { get; set; }
    }
}
