using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular2.Controllers
{
    public class RegistrationController : Controller
    {
        // GET: Registration
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SaveRegistrationDetails(Registration registration)
        {
            string key = string.Format("{0}", "key1");

            //if(HttpContext.Session[key] != null)
            //{
            //    registration = (Registration)HttpContext.Session[key];
            //}
            //else
            //{
            //    registration.DataSaved = true;
            //    HttpContext.Session.Add(key, registration);

            //}
            registration.DataSaved = true;
            HttpContext.Session.Add(key, registration);
            return this.Json(new { RegDetails = registration }, JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetRegistrationDetails()
        {
            Registration registration = null;
            string key = string.Format("{0}", "key1");
            if (HttpContext.Session[key] != null)
            {
                registration = (Registration)HttpContext.Session[key];
            }
             
            return this.Json(new { registrationDetails = registration }, JsonRequestBehavior.AllowGet);
        }
    }

    public class Registration {
        
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Type { get; set; }

        public string Address { get; set; }

        public bool DataSaved { get; set; }


    }
}