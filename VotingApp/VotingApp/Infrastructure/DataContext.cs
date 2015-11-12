using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using VotingApp.Domain.Models;
using VotingApp.Models;

namespace VotingApp.Infrastructure
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public IDbSet<Motion> Motions { get; set; }
        public IDbSet<Vote> Votes { get; set; }
        public IDbSet<Comment> Comments { get; set; }
       
    }
}