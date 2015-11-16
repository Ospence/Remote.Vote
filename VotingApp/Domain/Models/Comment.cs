using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Domain.Models
{
    public class Comment
    {
        public int Id { get; set; }

        public string Poster { get; set; }
        public string Content { get; set; }
        public int MotionId { get; set; }
        public IList<string> Edits { get; set; }

        public bool WasEdited { get; set; }

        public DateTime PostDate { get; set; }
    }
}