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

        public AddOrUpdate(GlobalAdminDTO global) {
            if (global.Id == null) {
                _repo.Add<GlobalAdmin>(Mapper.Map<GlobalAdmin>(global));
            }
            else {
                
                var dbGlobalAdmin = Mapper.Map<List<GlobalAdminDTO>>(from ga in _repo.Query<GlobalAdmin>() where ga.Id == global.Id select ga).FirstOrDefault();
                return Mapper.Map<GlobalAdminDTO>(dbGlobalAdmin);
            }
            _repo.SaveChanges();
            return Mapper.Map<GlobalAdminDTO>(dbGlobalAdmin);
        }
    }
}