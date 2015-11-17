using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VotingApp.Domain.Models;

namespace VotingApp.Services.Models
{
    public class CommentDTO
    {
        public int Id { get; set; }

        public string Poster { get; set; }
        public string Content { get; set; }
        public int MotionId { get; set; }
        public IList<string> Edits { get; set; }

        public bool WasEdited { get; set; }
        public DateTime DateEdited { get; set; }

        public DateTime DatePosted { get; set; }
    }
}