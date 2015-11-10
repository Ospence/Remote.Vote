using AutoMapper;
using CoderCamps.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VotingApp.Domain.Models;
using VotingApp.Services.Models;

namespace VotingApp.Services
{
    public class VoteService {
        private IRepository _repo;

        public VoteService(IRepository repo) {
            _repo = repo;
        }

        public IEnumerable<VoteDTO> List() {
            return Mapper.Map<List<VoteDTO>>(from v in _repo.Query<Vote>() select v).ToList();
        }

        public void AddVote(VoteDTO vote) {
            _repo.Add(Mapper.Map<Vote>(vote));
            _repo.SaveChanges();
        }
    
    }
}