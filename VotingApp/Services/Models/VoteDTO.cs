using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Services.Models
{
    public class VoteDTO
    {
        public int Id { get; set; }

        public string OwnerId { get; set; }
        public int OnMotionId { get; set; }

        public bool Yes { get; set; }

        DateTime DatePlaced { get; set; }
    }
}