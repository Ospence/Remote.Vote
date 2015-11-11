using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VotingApp.Domain.Models;

namespace VotingApp.Services.Models {
    public class DirectorDTO: ApplicationUserDTO {

        public bool CanVote { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IList<Motion> MotionStarted { get; set; }
        public IList<Comment> Comments { get; set; }
        public IList<Vote> Votes { get; set; }


    }
}