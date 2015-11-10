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
    public class ChairmenController : ApiController
    {
        private UserService _service;

        public ChairmenController(UserService service)
        {
            _service = service;
        }

        // GET: api/Global
        public IEnumerable<ChairmenDTO> Get()
        {
            return (_service.ListChairmen());
        }

        // POST: api/Global
        public HttpResponseMessage Post(ChairmenDTO chairmen)
        {
            if (ModelState.IsValid)
            {
                _service.AddOrUpdateChairmen(chairmen);

                return Request.CreateResponse(HttpStatusCode.Created, chairmen);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }
    }
}
