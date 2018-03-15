using System.Web.Mvc;

namespace Payroll.App
{
    public class PayrollController : Controller
    {
        public ActionResult Payroll()
        {
            return View();
        }

        /*
          /// <summary>
        /// Gets User cookie info.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult GetUserCookie()
        {
            if (Request.Cookies["user"] != null)
            {
                return Json(System.Web.HttpContext.Current.Request.Cookies["user"].Value, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(string.Empty, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public void logOut()
        {
            var session = System.Web.HttpContext.Current.Session;
            session["User"] = null;
        }
             */

    }
}
