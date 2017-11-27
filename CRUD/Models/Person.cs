using System;
using System.Collections.Generic;
using System.Linq;

namespace CRUD.Models
{
    public class Person
    {
        private DateTime _birthday = new DateTime();
        public enum GenderEnum
        {
            Male,
            Female
        }
        public int Id{ get; set; }

        public string Name { get; set; }

        public int Age { get; set; }

        public GenderEnum Gender { get; set; }

        public string Address { get; set; }

        public DateTime Birthday
        {
            get
            {
                return DateTime.Parse(_birthday.ToShortDateString());
            }
            set
            {
                _birthday = value;
            }
        }
    }
}