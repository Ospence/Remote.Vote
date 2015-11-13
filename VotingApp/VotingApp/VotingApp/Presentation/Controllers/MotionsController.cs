using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VotingApp.Domain.Models;
using VotingApp.Services;

namespace VotingApp.Presentation.Controllers
{
    public class MotionsController : ApiController
    {
        private MotionService _service;

        public MotionsController(MotionService service)
        {
            _service = service;
        }

        // GET api/<controller>
        public IEnumerable<MotionDTO> Get() {
            return _service.List();
        }

        // GET api/<controller>/5
        public MotionDTO Get(int id)
        {
            return _service.Find(id);
        }

        // POST api/<controller>
        public HttpResponseMessage Post(MotionDTO motion)
        {
            var currentId = _service.FindCurrentUser(User.Identity.Name);
            if (ModelState.IsValid) {
                _service.AddOrUpdate(motion, currentId);
                return Request.CreateResponse((motion.Id == 0 ? HttpStatusCode.Created : HttpStatusCode.Accepted), motion);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }

        //public HttpResponseMessage AllowSecond(MotionDTO motion)
        //{
        //    return Post(_service.AllowSecond(motion));
        //}
    }
}