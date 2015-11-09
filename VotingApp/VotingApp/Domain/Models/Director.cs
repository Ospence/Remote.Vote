using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Domain.Models
{
    public class Director: Staff
    {
        public bool CanVote { get; set; }
    }
}