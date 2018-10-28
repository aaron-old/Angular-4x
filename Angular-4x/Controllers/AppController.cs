using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular_4x.Controllers
{
    public class AppController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Views/Index.cshtml");
        }

    }
}
