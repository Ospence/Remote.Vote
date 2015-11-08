using CoderCamps.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Services
{
    public class CommentService
    {
        private IRepository _repo;

        public CommentService(IRepository repo)
        {
            _repo = repo;
        }
    }
}