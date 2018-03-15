using Autofac;
using Autofac.Integration.WebApi;
using Payroll.Dal;
using Payroll.Rules;
using System.Reflection;
using System.Web.Http;

namespace Payroll.MiddleWare
{
    public static class AutoFactConfig
    {

        public static HttpConfiguration Configure(HttpConfiguration Configuration, Assembly ApiAssembly)
        {
            ContainerBuilder builder = new ContainerBuilder();
            builder.RegisterApiControllers(ApiAssembly);
            builder.RegisterWebApiFilterProvider(Configuration);

            Rules(ref builder);
            DataAccessLayer(ref builder);

            Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(builder.Build());

            return Configuration;
        }

        #region Metodos Privados

        private static void DataAccessLayer(ref ContainerBuilder builder)
        {
            builder.RegisterType<EmployeeDal>().As<IEmployeeDal>();
        }

        private static void Rules(ref ContainerBuilder builder)
        {
            builder.RegisterType<EmployeeRules>().As<IEmployeeRules>();
            builder.RegisterType<PayrollRules>().As<IPayrollRules>();
        }

        #endregion
    }
}
