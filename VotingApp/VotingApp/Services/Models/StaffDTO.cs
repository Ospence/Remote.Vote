using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VotingApp.Services.Models;

namespace VotingApp.Services.Models {
    public class StaffDTO: ApplicationUserDTO {

        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}