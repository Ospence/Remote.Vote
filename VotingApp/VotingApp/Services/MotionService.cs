using AutoMapper;
using CoderCamps.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VotingApp.Domain.Models;

namespace VotingApp.Services
{
    public class MotionService
    {
        private IRepository _repo;

        public MotionService(IRepository repo)
        {
            _repo = repo;
        }
        public IList<MotionDTO> ListMotion() {
            var dbMotions = (from a in _repo.Query<Motion>()
                           select a).ToList();
            return Mapper.Map<List<MotionDTO>>(dbMotions);
        }

        public MotionDTO Find(int id) {
            return Mapper.Map<MotionDTO>(_repo.Find<Motion>(id));
        }

        public void AddMotion(MotionDTO motion) {
            _repo.Add(Mapper.Map<Motion>(motion));
            _repo.SaveChanges();
        }


        private Motion FindInternalMotion(int id) {
            return (from m in _repo.Query<Motion>()
                    where m.Id == id
                    select m).FirstOrDefault();
        }

        public MotionDTO UpdateMotion(MotionDTO motion) {

            var dbMotion = FindInternalMotion(motion.Id);

            Mapper.Map(motion, dbMotion);
            _repo.SaveChanges();
            return Mapper.Map<MotionDTO>(dbMotion);
        }
        

        
    }
}