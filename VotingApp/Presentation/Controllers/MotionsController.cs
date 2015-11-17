using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VotingApp.Domain.Models;
using VotingApp.Services;
using VotingApp.Services.Models;

namespace VotingApp.Presentation.Controllers
{
    [RoutePrefix("api/Motions")]
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
            if (ModelState.IsValid) {
                var currentId = _service.FindCurrentUser(User.Identity.Name);
                _service.AddOrUpdate(motion, currentId);
                return Request.CreateResponse((motion.Id == 0 ? HttpStatusCode.Created : HttpStatusCode.Accepted), motion);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }

        [Route("AllowSecond")]
        public HttpResponseMessage AllowSecond(MotionDTO motion)
        {
            if (ModelState.IsValid)
            {
                _service.AllowSecond(motion);
                return Request.CreateResponse(HttpStatusCode.Accepted, motion);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }

        [Route("PostSecond")]
        public HttpResponseMessage PostSecond(MotionDTO motion)
        {
            if (ModelState.IsValid)
            {
                var currentId = _service.FindCurrentUser(User.Identity.Name);
                _service.SecondMotion(motion, currentId);
                return Request.CreateResponse(HttpStatusCode.Accepted, motion);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }

        [Route("KillMotion")]
        public HttpResponseMessage KillMotion(MotionDTO motion, CommentDTO reason)
        {
            if (ModelState.IsValid)
            {
                _service.KillMotion(motion, reason);
                return Request.CreateResponse(HttpStatusCode.Accepted, motion);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }
    }
}