using Newtonsoft.Json;
using Payroll.Dto;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Payroll.Dal
{
    public class EmployeeDal : IEmployeeDal
    {

        #region Props & Vars
        /// <summary>
        /// Context for service 
        /// </summary>
        public readonly string RestClient;
        #endregion

        #region Constructor
        public EmployeeDal()
        {
            this.RestClient = Resource.RestClient; // as a Context
        }
        #endregion

        #region Public Methods
        /// <summary>
        /// Get all the employees
        /// </summary>
        /// <returns>List<EmployeeDto></returns>
        public async Task<List<EmployeeDto>> GetEmployeeData()
        {
            try
            {
                RestClient client = new RestClient(RestClient);
                var Request = new RestRequest(Resource.EmployeeApi, Method.GET);
                CancellationTokenSource cancellationToken = new CancellationTokenSource();

                IRestResponse Response = await client.ExecuteTaskAsync<List<EmployeeDto>>(Request, cancellationToken.Token);

                if (Response == null)
                {
                    throw new Exception(Response.ErrorMessage);
                }

                return JsonConvert.DeserializeObject<List<EmployeeDto>>(Response.Content);
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion

    }
}
