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
    public class CommentService
    {
        private IRepository _repo;

        public CommentService(IRepository repo)
        {
            _repo = repo;
        }

        public IList<CommentDTO> List() {
            var dbComment = (from a in _repo.Query<Comment>()
                             select a).ToList();
            return Mapper.Map<List<CommentDTO>>(dbComment);
        }

        public CommentDTO Find(int id) {
            return Mapper.Map<CommentDTO>(_repo.Find<Comment>(id));
        }

        public void Add(CommentDTO comment) {
            _repo.Add(Mapper.Map<Comment>(comment));
            _repo.SaveChanges();
        }

        public string FindCurrentUser(string username)
        {
            return (from u in _repo.Query<ApplicationUser>()
                    where u.UserName == username
                    select u.Id).FirstOrDefault();
        }

        private Comment FindInternal(int id) {
            return (from c in _repo.Query<Comment>()
                    where c.Id == id
                    select c).FirstOrDefault();
        }

        public void UpdateComment(CommentDTO comment) {

            var dbComment = FindInternal(comment.Id);

            Mapper.Map(comment, dbComment);
            _repo.SaveChanges();
        }
    }
}