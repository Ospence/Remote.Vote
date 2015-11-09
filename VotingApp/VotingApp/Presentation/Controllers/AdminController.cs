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
    public class AdminController : ApiController
    {

        private AdminService _service;

        public AdminController(AdminService service)
        {
            _service = service;
        }

        // GET: api/Global
        public IEnumerable<AdminDTO> Get()
        {
            return (_service.List());
        }

        // POST: api/Global
        public HttpResponseMessage Post(AdminDTO global)
        {
            if (ModelState.IsValid)
            {
                _service.AddOrUpdate(global);

                return Request.CreateResponse(HttpStatusCode.Created, global);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
        }
    }
}
