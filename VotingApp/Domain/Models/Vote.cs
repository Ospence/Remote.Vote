using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Domain.Models
{
    public class Vote
    {
        public int Id { get; set; }

        public string OwnerId { get; set; }
        public int OnMotionId { get; set; }

        public bool Yes { get; set; }

        DateTime DatePlaced { get; set; }
    }
}