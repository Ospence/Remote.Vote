using AutoMapper;
using CoderCamps.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VotingApp.Domain.Models;
using VotingApp.Services.Models;

namespace VotingApp.Services {
    public class UserService {

        private IRepository _repo;

        public UserService(IRepository repo) {
            _repo = repo;
        }

        public IList<ApplicationUserDTO> List() {
            var dbUser = (from a in _repo.Query<ApplicationUser>()
                          select a).ToList();
            return Mapper.Map<List<ApplicationUserDTO>>(dbUser);
        }

        //will not be necessary if identity works
        public void AddOrUpdate(ApplicationUserDTO user) {
            if (user.Id == null) {
                _repo.Add(Mapper.Map<ApplicationUser>(user));
            }
            else {
                var dbUser = Mapper.Map<List<ApplicationUserDTO>>(from u in _repo.Query<ApplicationUser>() where u.Id == user.Id select u).FirstOrDefault();
                Mapper.Map(dbUser, user);
            }
            _repo.SaveChanges();
        }

        public ApplicationUserDTO Find(string id) {
            return Mapper.Map<ApplicationUserDTO>(FindInternal(id));
        }

        private ApplicationUser FindInternal(string id) {
            return (from u in _repo.Query<ApplicationUser>()
                    where u.Id == id
                    select u).FirstOrDefault();
        }

        public void Add(ApplicationUserDTO user) {
            _repo.Add(Mapper.Map<ApplicationUser>(user));
            _repo.SaveChanges();
        }

        public void Update(ApplicationUser user) {

            var dbAdmin = FindInternal(user.Id);

            Mapper.Map(user, dbAdmin);
            _repo.SaveChanges();
        }

    }
}