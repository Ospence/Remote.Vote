using CoderCamps.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VotingApp.Services;
using VotingApp.Services.Models;

namespace VotingApp.Presentation.Controllers
{
    
    public class VotesController : ApiController
    {
        private VoteService _service;

        public VotesController(VoteService service)
        {
            _service = service;
        }

        // GET api/<controller>
        public IEnumerable<VoteDTO> Get()
        {
            return _service.List();
        }

        // GET api/<controller>/5
        public VoteDTO Get(int id) {
            return _service.Find(id);
        }

        // POST api/<controller>

        public HttpResponseMessage Post(VoteDTO vote)
        {
            var currentUserId = _service.FindCurrentUser(User.Identity.Name);
            if (ModelState.IsValid) {
                _service.Add(vote, currentUserId);
                return Request.CreateResponse(HttpStatusCode.Created, vote);
            }
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);   
        }
    }
}