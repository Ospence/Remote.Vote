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
    // add a controller of each user type
    public class DirectorsController : ApiController
    {
        private UserService _service;

        public DirectorsController(UserService service)
        {
            _service = service;
        }

        // GET: api/Global
        public IEnumerable<DirectorsDTO> Get()
        {
            return (_service.ListDirectors());
        }

        // POST: api/Global
        public HttpResponseMessage Post(DirectorsDTO director)
        {
            if (ModelState.IsValid)
            {
                _service.AddOrUpdateDirectors(director);

                return Request.CreateResponse(HttpStatusCode.Created, director);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }
    }
}
