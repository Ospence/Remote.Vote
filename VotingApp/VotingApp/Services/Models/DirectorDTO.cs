using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Services.Models {
    public class DirectorDTO: StaffDTO {

        public bool CanVote { get; set; }

    }
}