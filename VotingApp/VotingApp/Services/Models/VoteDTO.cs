using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Services.Models
{
    public class VoteDTO
    {
        public int Id { get; set; }

        public string Title { get; set; }
        // public (string or Motion.Id) OnMotion { get; set; }

        public bool Yes { get; set; }
    }
}