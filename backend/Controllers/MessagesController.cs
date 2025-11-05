using Microsoft.AspNetCore.Mvc;
using ChatBackend.Data;
using ChatBackend.Models;

namespace ChatBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessagesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MessagesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostMessage([FromBody] Message message)
        {
            _context.Messages.Add(message);
            await _context.SaveChangesAsync();
            return Ok(message);
        }

        [HttpGet]
        public IActionResult GetMessages()
        {
            return Ok(_context.Messages.ToList());
        }
    }
}
