using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return this.View();
        }
        public ActionResult GetHomeContent()
        {
            HomeContent content = new HomeContent() { Description = "This is sample text", Title = "Home Page" };
            return this.Json(new { data = content }, JsonRequestBehavior.AllowGet);
        }
    }
    public class HomeContent
    {
        public string Title { get; set; }
        public string Description { get; set; }
    }
}