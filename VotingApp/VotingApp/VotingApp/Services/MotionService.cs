using AutoMapper;
using CoderCamps.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using VotingApp.Domain.Models;

namespace VotingApp.Services
{
    //[Authorize(Roles="Director, Chairmen")]
    public class MotionService
    {
        private IRepository _repo;

        public MotionService(IRepository repo)
        {
            _repo = repo;
        }

        public IList<MotionDTO> List() {
            var dbMotions = (from a in _repo.Query<Motion>()
                           select a).ToList();
            return Mapper.Map<List<MotionDTO>>(dbMotions);
          
        }

        public MotionDTO Find(int id) {
            return Mapper.Map<MotionDTO>(_repo.Find<Motion>(id));
        }

        //[Authorize(Roles = "Active")]
        public void AddOrUpdate(MotionDTO motion, string Id) {
            if(motion.Id == 0)
            {
                motion.AllowSecond = false;
                motion.CreatedById = Id;
                _repo.Add(Mapper.Map<Motion>(motion));
            }
            else
            {
                var dbMotion = FindInternal(motion.Id);
                motion.WasEdited = (motion.WasEdited ? motion.WasEdited : true);
                Mapper.Map(motion, dbMotion);
            }
            _repo.SaveChanges();
        }

        public string FindCurrentUser(string username) {
            return (from u in _repo.Query<ApplicationUser>()
                    where u.UserName == username
                    select u.Id).FirstOrDefault();
}

        private Motion FindInternal(int id) {
            return (from m in _repo.Query<Motion>()
                    where m.Id == id
                    select m).FirstOrDefault();
        }

        //[Authorize(Roles = "Active")]
        public MotionDTO Update(MotionDTO motion) {

            var dbMotion = FindInternal(motion.Id);

            Mapper.Map(motion, dbMotion);
            _repo.SaveChanges();
            return Mapper.Map<MotionDTO>(dbMotion);
        }

        [Authorize(Roles = "Director")]
        [Authorize(Roles = "Active")]
        public MotionDTO SecondMotion(MotionDTO motion)
        {
            var dbMotion = FindInternal(motion.Id);
            motion.Seconded = true;
            Mapper.Map(motion, dbMotion);
            _repo.SaveChanges();
            return Mapper.Map<MotionDTO>(dbMotion);
        }
        
        [Authorize(Roles = "Chairmen")]
        [Authorize(Roles = "Active")]
        public MotionDTO AllowSecond(MotionDTO motion)
        {
            //var dbMotion = FindInternal(motion.Id);
            motion.AllowSecond = true;
            return motion;
            //Mapper.Map(motion, dbMotion);
            //_repo.SaveChanges();
            //return Mapper.Map<MotionDTO>(dbMotion);
        }

        [Authorize(Roles = "Chairmen")]
        [Authorize(Roles = "Active")]
        public MotionDTO KillMotion(MotionDTO motion, Comment reason)
        {
            var dbMotion = FindInternal(motion.Id);

            motion.Comments.Add(reason);
            Mapper.Map(motion, dbMotion);
            _repo.SaveChanges();
            return Mapper.Map<MotionDTO>(dbMotion);
        }

        
        
    }
}