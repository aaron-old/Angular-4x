using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular_4x.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View("~/Views/Index.cshtml");
        }

        public ActionResult Error()
        {
            return View("~/Views/Error.cshtml");
        }
    
    }
}
