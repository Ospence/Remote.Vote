using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VotingApp.Domain.Models;
using VotingApp.Services.Models;

namespace VotingApp.App_Start
{
    public class AutoMapperConfig
    {
        public static void RegisterMaps()
        {
            Mapper.CreateMap<Admin, AdminDTO>();
            Mapper.CreateMap<AdminDTO, Admin>();

            Mapper.CreateMap<Chairmen, ChairmenDTO>();
            Mapper.CreateMap<ChairmenDTO, Chairmen>();

            Mapper.CreateMap<Director, DirectorDTO>();
            Mapper.CreateMap<DirectorDTO, Director>();

            Mapper.CreateMap<Staff, StaffDTO>();
            Mapper.CreateMap<StaffDTO, Staff>();

            Mapper.CreateMap<Comment, CommentDTO>();
            Mapper.CreateMap<CommentDTO, Comment>();

            Mapper.CreateMap<Motion, MotionDTO>();
            Mapper.CreateMap<MotionDTO, Motion>();

            Mapper.CreateMap<Vote, VoteDTO>();
            Mapper.CreateMap<VoteDTO, Vote>();

        }
    }
}