using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Aurora.Web.Controllers
{
    public class MailController : Controller
    {
        [HttpPost]
        public ActionResult Signup(string email)
        {
            return View();
        }
    }
}
