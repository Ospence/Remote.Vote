using CoderCamps.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VotingApp.Services
{
    public class VoteService
    {
        private IRepository _repo;

        public VoteService(IRepository repo)
        {
            _repo = repo;
        }


    }
}