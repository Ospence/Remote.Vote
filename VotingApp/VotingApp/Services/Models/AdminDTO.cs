using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Services.Models {
    public class AdminDTO: ApplicationUserDTO {

        public string FirtName { get; set; }
        public string LastName { get; set; }
    }
}