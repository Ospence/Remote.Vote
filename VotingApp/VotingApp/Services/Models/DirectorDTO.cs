using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Services.Models {
    public class DirectorDTO
    {

        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        //public bool CanVote { get; set; }
    }
}