using System.Web.Mvc;
using CRUD.Models;
using System.Linq;
using System.Collections.Generic;

namespace CRUD.Controllers
{
    public class HomeController : Controller
    {
        public static List<Person> storage;

        [HttpGet]
        public ActionResult Index()
        {
            List<Person> model = new List<Person>();
            if (storage != null)
            {
                model = storage;
            }
            return View(model);
        }

        [HttpPost]
        public ActionResult Add(Person person)
        {
            var newId = 1;
            if (storage == null)
            {
                storage = new List<Person>();
            }

            if (storage.Count > 0)
            {
                newId = storage[storage.Count - 1].Id + 1;
            }

            person.Id = newId;
            storage.Add(person);
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public ActionResult Edit(Person person)
        {
            var p = storage.Where(ps => ps.Id == person.Id).FirstOrDefault();
            p.Name = person.Name;
            p.Age = person.Age;
            p.Gender = person.Gender;
            p.Address = person.Address;
            p.Birthday = person.Birthday;

            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public ActionResult Delete(int id)
        {
            var personToDelete = storage.Where(s => s.Id == id).FirstOrDefault();
            storage.Remove(personToDelete);
            return RedirectToAction("Index", "Home");
        }
    }
}