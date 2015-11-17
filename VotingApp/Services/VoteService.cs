using AutoMapper;
using CoderCamps.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using VotingApp.Domain.Models;
using VotingApp.Services.Models;

namespace VotingApp.Services
{
    public class VoteService {
        private IRepository _repo;

        public VoteService(IRepository repo)
        {
            _repo = repo;
        }

        public VoteDTO Find(int id)
        {
            return Mapper.Map<VoteDTO>(_repo.Find<Vote>(id));
        }

        public IEnumerable<VoteDTO> List()
        {
            return Mapper.Map<List<VoteDTO>>(from v in _repo.Query<Vote>() select v).ToList();
        }

        [Authorize(Roles = "Director")]
        public void Add(VoteDTO vote, string userId)
        {
            vote.OwnerId = userId;
            _repo.Add(Mapper.Map<Vote>(vote));
            _repo.SaveChanges();
        }

        public string FindCurrentUser(string username)
        {
            return (from u in _repo.Query<ApplicationUser>()
                    where u.UserName == username
                    select u.Id).FirstOrDefault();
        }

        public VoteDTO FindVoteByUser(string username)
        {
            var dbUser = (from u in _repo.Query<ApplicationUser>()
                          where u.UserName == username
                          select u).FirstOrDefault();
            var dbVote = (from v in _repo.Query<Vote>()
                          where v.OwnerId == dbUser.Id
                          select v).FirstOrDefault();
            return Mapper.Map<VoteDTO>(dbVote);
        }

    }
}