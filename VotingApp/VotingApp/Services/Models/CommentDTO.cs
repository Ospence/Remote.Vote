using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Services.Models
{
    public class CommentDTO
    {
        public int Id { get; set; }

        public string Poster { get; set; }
        public string Content { get; set; }
        // public (string or Motion.Id) OnMotion { get; set; }
        // public IList<string> Edits { get; set; }

        // public bool WasEdited { get; set; }

        public DateTime PostDate { get; set; }
    }
}