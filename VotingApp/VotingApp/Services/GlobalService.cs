using AutoMapper;
using CoderCamps.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VotingApp.Domain.Models;
using VotingApp.Services.Models;

namespace VotingApp.Services {
    public class GlobalService {

        private IRepository _repo;

        public GlobalService(IRepository repo) {
            _repo = repo;
        }

        public IList<GlobalAdminDTO> ListAdmin()
        {
            var dbGlobal = (from ga in _repo.Query<GlobalAdmin>()
                            select ga).ToList();
            return Mapper.Map<List<GlobalAdminDTO>>(dbGlobal);
        }

        public IList<DirectorDTO> ListDirector()
        {

        }

        public IList<StaffDTO> ListStaff()
        {

        }

        public IList<ChairmanDTO> ListChairman()
        {

        }


        public void AddOrUpdate(GlobalAdminDTO global)
        {
            if (global.Id == null)
            {
                _repo.Add(Mapper.Map<GlobalAdmin>(global));
            }
            else
            {
                var dbGlobal = Mapper.Map<List<GlobalAdminDTO>>(from ga in _repo.Query<GlobalAdmin>() where ga.Id == global.Id select ga).FirstOrDefault();
                Mapper.Map(dbGlobal, global);
            }
            _repo.SaveChanges();
        }



        public GlobalAdminDTO Find(string id)
        {
            return Mapper.Map<GlobalAdminDTO>(FindInternal(id));
        }

        private GlobalAdmin FindInternal(string id)
        {
            return (from ga in _repo.Query<GlobalAdmin>()
                    where ga.Id == id
                    select ga).FirstOrDefault();
        }

        public void Add(GlobalAdmin global)
        {
            _repo.Add(Mapper.Map<GlobalAdmin>(global));
            _repo.SaveChanges();
        }

        public void Update(GlobalAdmin global)
        {

            var dbGlobal = FindInternal(global.Id);

            Mapper.Map(global, dbGlobal);
            _repo.SaveChanges();
        }
    }
}