using AutoMapper;
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
    public class CommentsController : ApiController {
        private CommentService _service;

        public CommentsController(CommentService service) {
            _service = service;
        }

        public IEnumerable<CommentDTO> Get() {
            return _service.ListComment();
        }

        // GET api/<controller>/5
        public CommentDTO Get(int id) {
            return _service.Find(id);
        }

        // POST api/<controller>
        public HttpResponseMessage Post(CommentDTO comment) {
            if (ModelState.IsValid) {
                _service.AddComment(comment);
                return Request.CreateResponse(HttpStatusCode.Created, comment);
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);

        }

    }
}