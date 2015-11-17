using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VotingApp.Services.Models;

namespace VotingApp.Domain.Models
{
    public class MotionDTO
    {
        public int Id { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public string CreatedById { get; set; }
        public string SecondedById { get; set; }

        public bool AllowSecond { get; set; }
        public bool Seconded { get; set; }
        public bool Active { get; set; }
        public bool Passed { get; set; }
        public bool WasEdited { get; set; }

        public DateTime DateCreated { get; set; }
        public DateTime DateSeconded { get; set; }
        public DateTime DateResult { get; set; }

        public IList<VoteDTO> Votes { get; set; }
        public IList<CommentDTO> Comments { get; set; }
        public IList<string> Edits { get; set; }
    }
}