using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Domain.Models
{
    public class Director: ApplicationUser {

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool CanVote { get; set; }
        public IList<Motion> MotionStarted { get; set; }
        public IList<Comment> Comments { get; set; }
        public IList<Vote> Votes { get; set; }


    }
}