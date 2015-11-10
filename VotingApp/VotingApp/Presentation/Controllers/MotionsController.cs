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
            return _service.ListMotion();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}