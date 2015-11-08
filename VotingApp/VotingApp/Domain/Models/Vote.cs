using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Domain.Models
{
    public class Vote
    {
        public int Id { get; set; }

        public string Title { get; set; }
        // public (string or Motion.Id) OnMotion { get; set; }

        public bool Yes { get; set; }
    }
}