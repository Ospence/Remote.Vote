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

        public IList<AdminDTO> ListAdmin()
        {
            var dbAdmin = (from a in _repo.Query<Admin>()
                            select a).ToList();
            return Mapper.Map<List<AdminDTO>>(dbAdmin);
        }

        //will not be necessary if identity works
        public void AddOrUpdateAdmin(AdminDTO admin)
        {
            if (admin.Id == null)
            {
                _repo.Add(Mapper.Map<Admin>(admin));
            }
            else
            {
                var dbAdmin = Mapper.Map<List<AdminDTO>>(from a in _repo.Query<Admin>() where a.Id == admin.Id select a).FirstOrDefault();
                Mapper.Map(dbAdmin, admin);
            }
            _repo.SaveChanges();
        }

        public AdminDTO FindAdmin(string id)
        {
            return Mapper.Map<AdminDTO>(FindInternalAdmin(id));
        }

        private Admin FindInternalAdmin(string id)
        {
            return (from a in _repo.Query<Admin>()
                    where a.Id == id
                    select a).FirstOrDefault();
        }

        public void AddAdmin(Admin admin)
        {
            _repo.Add(Mapper.Map<Admin>(admin));
            _repo.SaveChanges();
        }

        public void UpdateAdmin(Admin admin)
        {

            var dbAdmin = FindInternalAdmin(admin.Id);

            Mapper.Map(admin, dbAdmin);
            _repo.SaveChanges();
        }

        public IList<StaffDTO> ListStaff()
        {
            var dbStaff = (from s in _repo.Query<Staff>()
                           select s).ToList();
            return Mapper.Map<List<StaffDTO>>(dbStaff);
        }

        public void AddOrUpdateStaff(StaffDTO staff)
        {
            if (staff.Id == null)
            {
                _repo.Add(Mapper.Map<Staff>(staff));
            }
            else
            {
                var dbStaff = Mapper.Map<List<StaffDTO>>(from s in _repo.Query<Staff>() where s.Id == staff.Id select s).FirstOrDefault();
                Mapper.Map(dbStaff, staff);
            }
            _repo.SaveChanges();
        }

        public StaffDTO FindStaff(string id)
        {
            return Mapper.Map<StaffDTO>(FindInternalStaff(id));
        }

        private Staff FindInternalStaff(string id)
        {
            return (from s in _repo.Query<Staff>()
                    where s.Id == id
                    select s).FirstOrDefault();
        }

        public void AddStaff(Admin admin)
        {
            _repo.Add(Mapper.Map<Admin>(admin));
            _repo.SaveChanges();
        }

        public void UpdateStaff(Admin admin)
        {

            var dbAdmin = FindInternalStaff(admin.Id);

            Mapper.Map(admin, dbAdmin);
            _repo.SaveChanges();
        }

        public IList<ChairmenDTO> ListChairmen()
        {
            var dbChairmen = (from c in _repo.Query<Chairmen>()
                           select c).ToList();
            return Mapper.Map<List<ChairmenDTO>>(dbChairmen);
        }

        public void AddOrUpdateChairmen(ChairmenDTO chairmen)
        {
            if (chairmen.Id == null)
            {
                _repo.Add(Mapper.Map<Chairmen>(chairmen));
            }
            else
            {
                var dbChairmen = Mapper.Map<List<ChairmenDTO>>(from c in _repo.Query<Chairmen>() where c.Id == chairmen.Id select c).FirstOrDefault();
                Mapper.Map(dbChairmen, chairmen);
            }
            _repo.SaveChanges();
        }

        public ChairmenDTO FindChairmen(string id)
        {
            return Mapper.Map<ChairmenDTO>(FindInternalChairmen(id));
        }

        private Chairmen FindInternalChairmen(string id)
        {
            return (from c in _repo.Query<Chairmen>()
                    where c.Id == id
                    select c).FirstOrDefault();
        }

        public void AddChairmen(Chairmen chairmen)
        {
            _repo.Add(Mapper.Map<Chairmen>(chairmen));
            _repo.SaveChanges();
        }

        public void UpdateChairmen(Chairmen chairmen)
        {

            var dbChairmen = FindInternalChairmen(chairmen.Id);

            Mapper.Map(chairmen, dbChairmen);
            _repo.SaveChanges();
        }

        public IList<DirectorDTO> ListDirectors()
        {
            var dbDirector = (from d in _repo.Query<Director>()
                              select d).ToList();
            return Mapper.Map<List<DirectorDTO>>(dbDirector);
        }

        public void AddOrUpdateDirectors(DirectorDTO director)
        {
            if (director.Id == null)
            {
                _repo.Add(Mapper.Map<Director>(director));
            }
            else
            {
                var dbDirector = Mapper.Map<List<DirectorDTO>>(from d in _repo.Query<Director>() where d.Id == director.Id select d).FirstOrDefault();
                Mapper.Map(dbDirector, director);
            }
            _repo.SaveChanges();
        }

        public DirectorDTO FindDirectors(string id)
        {
            return Mapper.Map<DirectorDTO>(FindInternalDirectors(id));
        }

        private Director FindInternalDirectors(string id)
        {
            return (from d in _repo.Query<Director>()
                    where d.Id == id
                    select d).FirstOrDefault();
        }

        public void AddDirectors(Director director)
        {
            _repo.Add(Mapper.Map<Director>(director));
            _repo.SaveChanges();
        }

        public void UpdateDirectors(Director director)
        {

            var dbDirector = FindInternalDirectors(director.Id);

            Mapper.Map(director, dbDirector);
            _repo.SaveChanges();
        }
    }
}