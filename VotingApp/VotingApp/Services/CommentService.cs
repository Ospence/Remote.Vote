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

        public IList<CommentDTO> ListComment() {
            var dbComment = (from a in _repo.Query<Comment>()
                             select a).ToList();
            return Mapper.Map<List<CommentDTO>>(dbComment);
        }

        public CommentDTO Find(int id) {
            return Mapper.Map<CommentDTO>(_repo.Find<Comment>(id));
        }

        public void AddComment(CommentDTO comment) {
            _repo.Add(Mapper.Map<Comment>(comment));
            _repo.SaveChanges();
        }


        private Comment FindInternalComment(int id) {
            return (from c in _repo.Query<Comment>()
                    where c.Id == id
                    select c).FirstOrDefault();
        }

        public void UpdateComment(CommentDTO comment) {

            var dbComment = FindInternalComment(comment.Id);

            Mapper.Map(comment, dbComment);
            _repo.SaveChanges();
        }
    }
}